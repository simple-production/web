import type { DirectusCollections } from '@/models/cms/collections';
import { serverConfig } from '@/server.config';
import { Directus } from '@directus/sdk';

const { CMS } = serverConfig;

const directus = new Directus<DirectusCollections>(CMS.URL, {
	auth: {
		staticToken: CMS.ACCESS_TOKEN
	}
});

export default directus;
