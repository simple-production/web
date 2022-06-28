import type { DirectusCollection } from './collection';
import type { DirectusFile } from './file';

export type DirectusPartner = DirectusCollection<{
	name: string;
	url: string;
	logo: DirectusFile;
}>;
