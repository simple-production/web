import type { CMSImage, ModifiedCMSImage } from './cms-image';
import type { Case } from './case';

export type Service = {
	id: string;
	name: string;
	description: string;
	slug: string;
	coverImage: CMSImage;
	updatedAt: string;
	images: ModifiedCMSImage[];
	cases: Case[];
};
