import { cmsGraphQLRequest } from '@/lib/graphql';
import type { AboutResponse } from '@/models/api/about-response';
import type { RequestHandler } from '@sveltejs/kit';

const QUERY = `
	query Query {
		about {
			whoWeAre
			ourMission
		}
	}
`;

export const get: RequestHandler<{}, AboutResponse> = async () => {
	const response = await cmsGraphQLRequest<AboutResponse, {}>(QUERY);

	return {
		body: response
	};
};
