import { serverConfig } from '@/server.config';

export const graphQlRequest = async <
	T = unknown,
	V extends Record<string, unknown> = Record<string, unknown>
>(
	query: string,
	variables: V
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
		// throw new Error(`Request failed with status ${response.status}: ${response.statusText}`);
	}

	const json = await response.json();

	return json.data[Object.keys(json.data)[0]];
};
