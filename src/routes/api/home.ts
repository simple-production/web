import { graphQlRequest } from '@/lib/graphql';
import type { RequestHandler } from '@sveltejs/kit';

const QUERY = `
	query homeQuery {
		services(first: 3) {
			slug
			name
		}
		tips(first: 3) {
			slug
			title
		}
	}

`;

type Response = {
	services: {
		slug: string;
		name: string;
	}[];
	tips: {
		slug: string;
		title: string;
	}[];
};

export const get: RequestHandler = async () => {
	const response = await graphQlRequest<Response>(QUERY, {}, false);

	return {
		body: response,
		headers: {
			'Cache-Control': 'public, max-age=600' // cache 10 minutes
		}
	};
};
