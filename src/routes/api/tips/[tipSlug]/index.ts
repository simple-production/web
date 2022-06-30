import { cmsGraphQLRequest } from '@/lib/graphql';
import type { TipGraphQLResponse, TipResponse } from '@/models/api/tips-response';
import { getFingerprint } from '@/utils/request.util';
import type { RequestHandler } from '@sveltejs/kit';
import { TIP_QUERY, type Params } from '../_common';

export const get: RequestHandler<Params, TipResponse> = async ({ params, request }) => {
	const { tipSlug: slug } = params;

	const [tip] = await cmsGraphQLRequest<TipGraphQLResponse[], { slug: string }>(TIP_QUERY, {
		slug
	});

	const fingerprint = getFingerprint(request);

	return {
		body: {
			...tip,
			likes: tip.likes.length,
			isLiked: tip.likes.includes(fingerprint)
		}
	};
};
