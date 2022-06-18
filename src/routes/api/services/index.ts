import { graphQlRequest } from '@/lib/graphql';
import type { Service } from '@/models/service';
import type { RequestHandler } from '@sveltejs/kit';

const SERVICES_QUERY = `
	query getServices {
		services {
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

export const get: RequestHandler = async () => {
	const response = await graphQlRequest<Service[]>(SERVICES_QUERY);

	return {
		body: response
	};
};
