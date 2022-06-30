import type { Object } from '@/models/utils';
import { serverConfig } from '@/server.config';

const { CMS } = serverConfig;

export const cmsGraphQLRequest = async <T = unknown, V extends Object<unknown> = Object>(
	query: string,
	variables: V = {} as V,
	takeAll: boolean = true
): Promise<T> => {
	const response = await fetch(`${CMS.URL}/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${CMS.ACCESS_TOKEN}`
		},
		body: JSON.stringify({
			query,
			variables
		})
	});

	if (!response.ok) {
		throw response;
	}

	const json = await response.json();

	if (!takeAll) {
		return json.data;
	}

	return json.data[Object.keys(json.data)[0]];
};

export const graphQlRequest = async <
	T = unknown,
	V extends Record<string, unknown> = Record<string, unknown>
>(
	query: string,
	variables: V = {} as V,
	takeAll: boolean = true
): Promise<T> => {
	const response = await fetch(`${serverConfig.GRAPH_CMS_CONTENT_URL}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${serverConfig.GRAPH_CMS_API_TOKEN}`
		},
		body: JSON.stringify({
			query,
			variables
		})
	});

	if (!response.ok) {
		throw response;
	}

	const json = await response.json();

	if (!takeAll) {
		return json.data;
	}

	return json.data[Object.keys(json.data)[0]];
};
