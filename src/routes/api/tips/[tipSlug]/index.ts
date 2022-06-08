import { graphQlRequest } from '@/lib/graphql';
import type { Tip, TipResponse } from '@/models/tip';
import { getFingerprint } from '@/utils/request.util';
import type { RequestHandler } from '@sveltejs/kit';
import { TIP_QUERY, type Params } from './_common';

export const get: RequestHandler<Params, Tip> = async ({ params, request }) => {
	const { tipSlug: slug } = params;

	const tip = await graphQlRequest<TipResponse, { slug: string }>(TIP_QUERY, { slug });
	const fingerprint = getFingerprint(request);

	return {
		body: {
			...tip,
			likes: tip.likes?.length ?? 0,
			isLiked: tip.likes?.includes(fingerprint) ?? false
		}
	};
};
