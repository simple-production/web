import Routes from '@/constants/routes';
import { graphQlRequest } from '@/lib/graphql';
import type { Service } from '@/models/service';
import type { Tip } from '@/models/tip';
import type { RequestHandler } from '@sveltejs/kit';

type GqlResponse = {
	tips: Pick<Tip, 'slug'>[];
	services: Pick<Service, 'slug'>[];
};

const QUERY = `
	query sitemap {
		tips {
			slug
		}
		services {
			slug
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

const buildXml = (url: string, sites: string[]) => {
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${sites.map((site) => `<url><loc>${url}${site}</loc></url>`).join('\n')}
</urlset>`;
};

export const get: RequestHandler = async ({ params, url }) => {
	const { origin } = url;
	const { services, tips } = await graphQlRequest<GqlResponse>(QUERY, {}, false);

	const baseUrls = ['/', '/about', '/contact', '/services', '/tips'];

	return {
		body: buildXml(origin, [
			...baseUrls,
			...tips.map((t) => Routes.tip(t.slug)),
			...services.map((s) => Routes.service(s.slug))
		]),
		headers: {
			'Content-Type': 'text/xml'
		}
	};
};
