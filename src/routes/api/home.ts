import { cmsGraphQLRequest } from '@/lib/graphql';
import type { HomeResponse } from '@/models/api/home-response';
import type { RequestHandler } from '@sveltejs/kit';

const QUERY = `
query Query {
	partners(limit: 3) {
	  name
	  url
	  logo {
		id
		type
	  }
	}
	tips(limit: 2) {
	  title
	  slug
	  coverImage {
		id
		type
	  }
	}
  }
`;

export const get: RequestHandler<{}, HomeResponse> = async () => {
	const response = await cmsGraphQLRequest<HomeResponse>(QUERY, {}, false);

	return {
		body: response,
		headers: {
			'Cache-Control': 'public, max-age=600' // cache 10 minutes
		}
	};
};
