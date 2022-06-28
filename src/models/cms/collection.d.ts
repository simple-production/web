import type { DirectusFile } from './file';

export type DirectusUser = {
	first_name: string;
	last_name: string;
	avatar: DirectusFile;
};

export type DirectusCollection<T extends Record<string, unknown>> = T & {
	id: string;
	user_created: DirectusUser;
	date_created: string;
	user_updated: DirectusUser;
	date_updated: string;
};
