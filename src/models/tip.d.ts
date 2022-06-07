import type { User } from './user';

export type Tip = {
	id: string;
	title: string;
	slug: string;
	content: string;
	coverImage: string;
	likes: number | null;
	publishedBy: User;
	publishedAt: string;
	updatedBy: User;
	updatedAt: string;
};

export type TipResponse = Omit<Tip, 'coverImage' | 'content'> & {
	coverImage: {
		url: string;
	};
	content: {
		html: string;
	};
};
