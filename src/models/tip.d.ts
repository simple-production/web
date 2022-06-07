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
	};
	likes: number;
	publishedBy: User;
	publishedAt: string;
	updatedBy: User;
	updatedAt: string;
};
