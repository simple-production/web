import { cmsGraphQLRequest } from '@/lib/graphql';
import type { ServicesResponse } from '@/models/api/services-response';
import type { RequestHandler } from '@sveltejs/kit';

const SERVICES_QUERY = `
	query getServices {
		services {
			id
			name
			description
			slug
			coverImage {
			  id
			  type
			}
		  }
	}
`;

export const get: RequestHandler<{}, ServicesResponse> = async () => {
	const response = await cmsGraphQLRequest<ServicesResponse>(SERVICES_QUERY);

	return {
		body: response
	};
};
