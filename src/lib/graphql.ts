import { serverConfig } from '@/server.config';

export const graphQlRequest = async <
	T = unknown,
	V extends Record<string, unknown> = Record<string, unknown>
>(
	query: string,
	variables: V = {} as V
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

	return json.data[Object.keys(json.data)[0]];
};
