import type { DirectusPartner } from '../cms/partner';
import type { DirectusTip } from '../cms/tip';

export type HomeResponsePartner = Pick<DirectusPartner, 'name' | 'url' | 'logo'>;
export type HomeResponseTip = Pick<DirectusTip, 'title' | 'slug' | 'coverImage'>;

export type HomeResponse = {
	partners: HomeResponsePartner[];
	tips: HomeResponseTip[];
};
