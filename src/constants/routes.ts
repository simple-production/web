export default class Routes {
	public static readonly home = '/';
	public static readonly services = '/services';
	public static readonly about = '/about';
	public static readonly contact = '/contact';
	public static readonly tips = '/tips';

	public static readonly tip = (slug: string) => `${this.tips}/${slug}`;
	public static readonly service = (slug: string) => `${this.services}/${slug}`;
}
