import { cmsGraphQLRequest } from '@/lib/graphql';
import type { TipsGraphQLResponse, TipsResponse } from '@/models/api/tips-response';
import type { Tip } from '@/models/tip';
import { getFingerprint } from '@/utils/request.util';
import type { RequestHandler } from '@sveltejs/kit';

type TipForList = Omit<Tip, 'content'> & {
	isLiked: boolean;
};

const TIP_QUERY = `
	query Query {
		tips {
			title
			body
			slug
			coverImage {
				id
				type
			}
			likes
		}
	}
`;

export const get: RequestHandler<{}, TipsResponse> = async ({ request }) => {
	const fingerprint = getFingerprint(request);

	const response = await cmsGraphQLRequest<TipsGraphQLResponse>(TIP_QUERY);

	return {
		body: response.map((tip) => ({
			...tip,
			isLiked: tip.likes.includes(fingerprint),
			likes: tip.likes.length
		}))
	};
};
