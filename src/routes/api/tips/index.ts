import { graphQlRequest } from '@/lib/graphql';
import type { GraphCMSConnection, PaginatedResponse } from '@/models/paginated-response';
import type { Tip } from '@/models/tip';
import { tryParseInt } from '@/utils/number.util';
import type { RequestHandler } from '@sveltejs/kit';

type TipForList = Omit<Tip, 'content'>;

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

export const get: RequestHandler<{}, PaginatedResponse<TipForList>> = async ({ url }) => {
	const page = tryParseInt(url.searchParams.get('page'), 1);
	const take = tryParseInt(url.searchParams.get('take'), 10);

	const response = await graphQlRequest<GraphCMSConnection<Tip>>(TIP_QUERY, {
		skip: (page - 1) * 10,
		take
	});

	return {
		body: {
			data: response.edges.map(({ node }) => ({
				...node
			})),
			pagination: {
				hasNextPage: response.pageInfo.hasNextPage,
				hasPreviousPage: response.pageInfo.hasPreviousPage,
				total: response.aggregate.count
			}
		}
	};
};
