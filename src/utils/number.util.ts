export const tryParseInt = (str: string | null, fallback: number) => {
	if (!str) {
		return fallback;
	}
	const result = parseInt(str, 10);
	return isNaN(result) ? fallback : result;
};
