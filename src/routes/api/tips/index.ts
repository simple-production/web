import { graphQlRequest } from '@/lib/graphql';
import type { GraphCMSConnection, PaginatedResponse } from '@/models/paginated-response';
import type { Tip, TipResponse } from '@/models/tip';
import { tryParseInt } from '@/utils/number.util';
import { getFingerprint } from '@/utils/request.util';
import type { RequestHandler } from '@sveltejs/kit';
import { parse } from 'cookie';

type TipForList = Omit<Tip, 'content'> & {
	isLiked: boolean;
};

const TIP_QUERY = `
	query getTips($skip: Int, $take: Int) {
		tipsConnection(skip: $skip, first: $take) {
			pageInfo {
			  hasNextPage
			  hasPreviousPage
			  pageSize
			}
			edges {
			  node {
				id
				title
				slug
				coverImage {
					url
					mimeType
				}
				likes
			  }
			}
			aggregate {
			  count
			}
		  }
	}
`;

export const get: RequestHandler<{}, PaginatedResponse<TipForList>> = async ({ url, request }) => {
	const page = tryParseInt(url.searchParams.get('page'), 1);
	const take = tryParseInt(url.searchParams.get('take'), 10);

	const fingerprint = getFingerprint(request);

	const response = await graphQlRequest<GraphCMSConnection<TipResponse>>(TIP_QUERY, {
		skip: (page - 1) * 10,
		take
	});

	return {
		body: {
			data: response.edges.map(({ node }) => ({
				...node,
				likes: node.likes?.length ?? 0,
				isLiked: node.likes?.includes(fingerprint) ?? false
			})),
			pagination: {
				hasNextPage: response.pageInfo.hasNextPage,
				hasPreviousPage: response.pageInfo.hasPreviousPage,
				total: response.aggregate.count
			}
		}
	};
};
