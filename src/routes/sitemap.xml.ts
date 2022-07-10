import Routes from '@/constants/routes';
import { cmsGraphQLRequest } from '@/lib/graphql';
import type { DirectusService } from '@/models/cms/service';
import type { DirectusTip } from '@/models/cms/tip';
import { toDate } from '@/utils/date.util';
import type { RequestHandler } from '@sveltejs/kit';

type GqlResponse = {
	tips: Pick<DirectusTip, 'slug' | 'date_updated'>[];
	services: Pick<DirectusService, 'slug' | 'date_updated'>[];
};

type SitemapPage = {
	path: string;
	lastModified?: string;
	changeFreq: string;
};

const QUERY = `
	query sitemap {
		tips {
			slug
			date_updated
		}
		services {
			slug
			date_updated
		}
	}

`;

const buildXml = (url: string, sites: SitemapPage[]) => {
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${sites
		.map((site) => {
			const loc = `<loc>${url}${site.path}</loc>`;
			const lastMod = site.lastModified ? `<lastmod>${site.lastModified}</lastmod>` : '';
			const changeFreq = `<changefreq>${site.changeFreq}</changefreq>`;
			return `<url>${loc}${lastMod}${changeFreq}</url>`;
		})
		.join('\n')}
</urlset>`;
};

export const get: RequestHandler = async ({ params, url }) => {
	const { origin } = url;
	const { services, tips } = await cmsGraphQLRequest<GqlResponse>(QUERY, {}, false);

	const baseUrls = ['/', '/about', '/contact', '/services', '/tips'];

	return {
		body: buildXml(origin, [
			...baseUrls.map<SitemapPage>((b) => ({ path: b, changeFreq: 'montly' })),
			...services.map<SitemapPage>((s) => ({
				path: Routes.service(s.slug),
				changeFreq: 'weekly',
				lastModified: toDate(s.date_updated)
			})),
			...tips.map<SitemapPage>((t) => ({
				path: Routes.tip(t.slug),
				changeFreq: 'weekly',
				lastModified: toDate(t.date_updated)
			}))
		]),
		headers: {
			'Content-Type': 'text/xml'
		}
	};
};
