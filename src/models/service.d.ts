import type { CMSImage } from './cms-image';

export type Service = {
	id: string;
	name: string;
	description: string;
	slug: string;
	coverImage: CMSImage;
	updatedAt: string;
};
