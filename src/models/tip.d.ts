import type { User } from './user';

export type Tip = {
	id: string;
	title: string;
	slug: string;
	content: {
		html: string;
		text: string;
	};
	coverImage: {
		url: string;
		mimeType: string;
	};
	likes: number;
	isLiked: boolean;
	publishedBy: User;
	publishedAt: string;
	createdBy: User;
	updatedAt: string;
};

export type TipResponse = Omit<Tip, 'likes'> & {
	likes: string[] | null;
};
