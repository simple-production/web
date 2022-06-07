import { graphQlRequest } from '@/lib/graphql';
import type { Tip, TipResponse } from '@/models/tip';
import type { RequestHandler } from '@sveltejs/kit';

type Params = {
	tipSlug: string;
};

const TIP_QUERY = `
	query getTip($slug:String!) {
		tip(where:{slug:$slug}) {
		title
		content {
			html
		}
		updatedBy {
			name
			picture
		}
		updatedAt
		coverImage {
			url
		}
		likes
	}
	}

`;

export const get: RequestHandler<Params, Tip> = async ({ params }) => {
	const { tipSlug: slug } = params;

	const tip = await graphQlRequest<TipResponse, { slug: string }>(TIP_QUERY, { slug });

	return {
		body: {
			...tip,
			coverImage: tip.coverImage.url,
			content: tip.content.html,
			likes: tip.likes ?? 0
		}
	};
};
