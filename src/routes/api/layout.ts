import { cmsGraphQLRequest } from '@/lib/graphql';
import type { LayoutResponse } from '@/models/api/layout-response';
import type { RequestHandler } from '@sveltejs/kit';

const QUERY = `
	query Query {
		services(limit: 3) {
		name
		slug
		}
		tips(limit: 3) {
		title
		slug
		}
	}
`;

export const get: RequestHandler<{}, LayoutResponse> = async () => {
	const response = await cmsGraphQLRequest<LayoutResponse>(QUERY, {}, false);

	return {
		body: response,
		headers: {
			'Cache-Control': 'public, max-age=600' // cache 10 minutes
		}
	};
};
