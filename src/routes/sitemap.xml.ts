import Routes from '@/constants/routes';
import { graphQlRequest } from '@/lib/graphql';
import type { Service } from '@/models/service';
import type { Tip } from '@/models/tip';
import { toDate } from '@/utils/date.util';
import type { RequestHandler } from '@sveltejs/kit';

type GqlResponse = {
	tips: Pick<Tip, 'slug' | 'updatedAt'>[];
	services: Pick<Service, 'slug' | 'updatedAt'>[];
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
			updatedAt
		}
		services {
			slug
			updatedAt
		}
	}

`;

const fallbackEmptyArray = async <R>(p: Promise<Response>): Promise<R[]> => {
	return p
		.then((res) => {
			console.log(res);
			return res.json();
		})
		.catch((err) => {
			console.log(err);
			return [];
		});
};

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
	const { services, tips } = await graphQlRequest<GqlResponse>(QUERY, {}, false);

	const baseUrls = ['/', '/about', '/contact', '/services', '/tips'];

	return {
		body: buildXml(origin, [
			...baseUrls.map<SitemapPage>((b) => ({ path: b, changeFreq: 'montly' })),
			...services.map<SitemapPage>((s) => ({
				path: Routes.service(s.slug),
				changeFreq: 'weekly',
				lastModified: toDate(s.updatedAt)
			})),
			...tips.map<SitemapPage>((t) => ({
				path: Routes.tip(t.slug),
				changeFreq: 'weekly',
				lastModified: toDate(t.updatedAt)
			}))
		]),
		headers: {
			'Content-Type': 'text/xml'
		}
	};
};
