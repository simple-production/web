import type { Partner } from './partner';

export type Case = {
	title: string;
	slug: string;
	description: {
		html: string;
		text: string;
	};
	partner: Partner;
};
