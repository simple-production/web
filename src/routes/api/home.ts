import { graphQlRequest } from '@/lib/graphql';
import type { Partner } from '@/models/partner';
import type { Tip } from '@/models/tip';
import type { RequestHandler } from '@sveltejs/kit';

type Response = {
	partners: Partner[];
	tips: Tip[];
};

const QUERY = `
query homeQuery {
	partners(first: 3) {
	  name
	  logo {
		url
		mimeType
	  }
	  slug
	}
	tips(first:2) {
	  title
	  slug
	  coverImage{
		mimeType
		url
	  }
	}
}
`;

export const get: RequestHandler = async () => {
	const response = await graphQlRequest<Response>(QUERY, {}, false);

	return {
		body: response,
		headers: {
			'Cache-Control': 'public, max-age=600' // cache 10 minutes
		}
	};
};
