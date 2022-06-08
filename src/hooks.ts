import type { Handle } from '@sveltejs/kit';
import { parse } from 'cookie';
import { nanoid } from 'nanoid';
import { getFingerprint } from './utils/request.util';

export const handle: Handle = async ({ event, resolve }) => {
	const fingerprint = getFingerprint(event.request);
	const response = await resolve(event);

	if (!fingerprint) {
		response.headers.set('set-cookie', `sp_fp=${nanoid()}; path=/`);
	}

	return response;
};
