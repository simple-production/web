import { parse } from 'cookie';

export const getFingerprint = (request: Request) => {
	const cookies = parse(request.headers.get('cookie') || '');
	return cookies.sp_fp;
};
