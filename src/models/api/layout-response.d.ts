import type { DirectusService } from '../cms/service';
import type { DirectusTip } from '../cms/tip';

export type LayoutResponseService = Pick<DirectusService, 'name' | 'slug'>;
export type LayoutResponseTip = Pick<DirectusTip, 'title', 'slug'>;

export type LayoutResponse = {
	services: LayoutResponseService[];
	tips: LayoutResponseTip[];
};
