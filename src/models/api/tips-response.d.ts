import type { DirectusTip } from '../cms/tip';

type PickedTip = Pick<
	DirectusTip,
	'id' | 'slug' | 'title' | 'body' | 'coverImage' | 'likes' | 'user_created' | 'date_created'
>;

export type TipGraphQLResponse = PickedTip;

export type TipResponse = Omit<PickedTip, 'likes'> & {
	isLiked: boolean;
	likes: number;
};

export type TipsGraphQLResponse = PickedTip[];

export type TipsResponse = TipResponse[];
