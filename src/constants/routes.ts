import type { ImageTransformations } from '@/models/image-transformations';

export default class Routes {
	public static readonly home = '/';
	public static readonly services = '/services';
	public static readonly about = '/about';
	public static readonly contact = '/contact';
	public static readonly tips = '/tips';

	public static readonly tip = (slug: string) => `${this.tips}/${slug}`;
	public static readonly service = (slug: string) => `${this.services}/${slug}`;

	public static readonly asset = (id: string, transformations: ImageTransformations = {}) => {
		const search = new URLSearchParams();

		Object.entries(transformations).forEach(([key, value]) => {
			search.set(key, value.toString());
		});

		if (!search.get('format')) {
			search.set('format', 'webp');
		}

		return `/assets/${id}?${search.toString()}`;
	};
}
