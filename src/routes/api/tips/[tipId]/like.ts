import { cmsGraphQLRequest } from '@/lib/graphql';
import type { TipGraphQLResponse } from '@/models/api/tips-response';
import { getFingerprint } from '@/utils/request.util';
import type { RequestHandler } from '@sveltejs/kit';
import { SET_LIKES_MUTATION, TIP_LIKES_QUERY } from '../_common';

type Params = {
	tipId: string;
};

const setLikes = (likes: string[] | null, fingerprint: string) => {
	if (!likes) {
		return [fingerprint];
	}

	if (likes.includes(fingerprint)) {
		return likes.filter((l) => l !== fingerprint);
	}

	return [...likes, fingerprint];
};

export const put: RequestHandler<Params> = async ({ request, params }) => {
	const { tipId } = params;
	const fingerprint = getFingerprint(request);

	if (!fingerprint) {
		return {
			status: 400,
			body: 'Missing fingerprint'
		};
	}

	// get the current likes
	const tip = await cmsGraphQLRequest<Pick<TipGraphQLResponse, 'likes'>, { id: string }>(
		TIP_LIKES_QUERY,
		{
			id: tipId
		}
	);

	// filter out or set the new like
	const likes = setLikes(tip.likes, fingerprint);

	// update the tip
	await cmsGraphQLRequest<{}, { likes: string[]; id: string }>(SET_LIKES_MUTATION, {
		likes,
		id: tipId
	});

	return {
		body: true
	};
};
