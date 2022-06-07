export type Pagination = {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	total: number;
};

export type PaginatedResponse<T> = {
	data: T[];
	pagination: Pagination;
};

export type GraphCMSConnection<T> = {
	edges: {
		node: T;
	}[];
	pageInfo: {
		hasNextPage: boolean;
		hasPreviousPage: boolean;
		startCursor: string;
		endCursor: string;
	};
	aggregate: {
		count: number;
	};
};
