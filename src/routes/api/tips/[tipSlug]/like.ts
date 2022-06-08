import { graphQlRequest } from '@/lib/graphql';
import type { Tip, TipResponse } from '@/models/tip';
import { getFingerprint } from '@/utils/request.util';
import type { RequestHandler } from '@sveltejs/kit';
import {
	PUBLISH_TIP,
	SET_LIKES_MUTATION,
	TIP_LIKES_QUERY,
	TIP_QUERY,
	type Params
} from './_common';

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
	const { tipSlug: slug } = params;
	const fingerprint = getFingerprint(request);

	if (!fingerprint) {
		return {
			status: 400,
			body: 'Missing fingerprint'
		};
	}

	// get the current likes
	const tip = await graphQlRequest<Pick<TipResponse, 'likes'>, { slug: string }>(TIP_LIKES_QUERY, {
		slug
	});

	// filter out or set the new like
	const likes = setLikes(tip.likes, fingerprint);

	// update the tip
	await graphQlRequest<Pick<TipResponse, 'likes'>, { likes: string[]; slug: string }>(
		SET_LIKES_MUTATION,
		{ likes, slug }
	);

	// publish the tip
	await graphQlRequest<TipResponse, { slug: string }>(PUBLISH_TIP, {
		slug
	});

	return {
		body: true
	};
};
