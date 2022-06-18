import type { RequestHandler } from '@sveltejs/kit';

const userAgents = {
	'*': {
		allow: ['/'],
		disallow: ['/api']
	}
};

// Allow all robots to index this site
export const get: RequestHandler = ({ url }) => {
	const { origin } = url;
	const uas = Object.entries(userAgents)
		.map(([userAgent, { allow, disallow }]) => {
			const allows = allow.map((path) => `Allow: ${path}`).join('\n');
			const disallows = disallow.map((path) => `Disallow: ${path}`).join('\n');

			return `User-agent: ${userAgent}\n${allows}\n${disallows}`;
		})
		.join('\n');

	return {
		body: `${uas}\n\nSitemap: ${origin}/sitemap.xml`
	};
};
