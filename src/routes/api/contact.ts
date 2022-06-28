import { cmsGraphQLRequest } from '@/lib/graphql';
import type { ContactResponse } from '@/models/api/contact-response';
import type { RequestHandler } from '@sveltejs/kit';

const QUERY = `
	query Query {
		contact {
			email
			address
			phone
		}
	}
`;

export const get: RequestHandler<{}, ContactResponse> = async () => {
	const response = await cmsGraphQLRequest<ContactResponse>(QUERY);

	return {
		body: response
	};
};
