export type ImageTransformations = {
	fit?: 'cover' | 'contain' | 'inside' | 'outside';
	width?: number;
	height?: number;
	quality?: number;
	format?: 'jpg' | 'png' | 'webp' | 'tiff';
};
