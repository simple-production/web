import type { DirectusCollection } from './collection';
import type { DirectusFile } from './file';

export type DirectusTip = DirectusCollection<{
	title: string;
	slug: string;
	body: string;
	coverImage: DirectusFile;
	likes: string[];
}>;
