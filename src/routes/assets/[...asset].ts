import { serverConfig } from '@/server.config';
import type { RequestHandler } from '@sveltejs/kit';

const { CMS } = serverConfig;

type Params = {
	asset: string;
};

export const get: RequestHandler<Params> = async ({ params, url }) => {
	const { asset } = params;

	const assetPath = `/assets/${asset}`;

	const response = await fetch(`${CMS.URL}${assetPath}${url.search}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${CMS.ACCESS_TOKEN}`
		}
	});

	const contentType = response.headers.get('content-type') ?? '';

	const body = await response.arrayBuffer();

	return {
		body: Buffer.from(body),
		headers: {
			'content-type': contentType
		}
	};
};
