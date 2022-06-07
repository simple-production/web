/**
 * Converts a string to a date with format YYYY-MM-DD
 * @param dateStr
 * @returns
 */
export const toDate = (dateStr: string) => {
	const d = new Date(dateStr);
	return d.toISOString().substring(0, 10);
};
