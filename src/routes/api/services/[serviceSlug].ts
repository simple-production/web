import { graphQlRequest } from '@/lib/graphql';
import type { Service } from '@/models/service';
import type { RequestHandler } from '@sveltejs/kit';

const SERVICE_QUERY = `
	query getService($slug: String!) {
		service(where:{slug: $slug}) {
			id
			name
			description
			slug
			coverImage {
			  url
			  mimeType
			}
		  }
	}
`;

export const get: RequestHandler = async ({ params }) => {
	const { serviceSlug } = params;

	const response = await graphQlRequest<Service, { slug: string }>(SERVICE_QUERY, {
		slug: serviceSlug
	});

	return {
		body: response
	};
};
