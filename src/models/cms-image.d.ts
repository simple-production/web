export type CMSImage = {
	url: string;
	mimeType: string;
};

export type ModifiedCMSImage = CMSImage & {
	modifiedUrl: string;
};
