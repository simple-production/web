import type { DirectusFile } from '../cms/file';
import type { DirectusService } from '../cms/service';

export type ServicesResponse = Pick<
	DirectusService,
	'id' | 'name' | 'description' | 'slug' | 'coverImage'
>[];

export type ServiceResponse = Pick<
	DirectusService,
	'id' | 'name' | 'description' | 'slug' | 'coverImage' | 'images'
>;

export type ServiceGraphQLResponse = Omit<ServiceResponse, 'images'> & {
	images: {
		directus_files_id: DirectusFile;
	}[];
};
