import type { DirectusCollection } from './collection';
import type { DirectusFile } from './file';

export type DirectusService = DirectusCollection<{
	name: string;
	slug: string;
	description: string;
	coverImage: DirectusFile;
	images: DirectusFile[];
}>;
