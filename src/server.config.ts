import { config } from 'dotenv';

config();

export const serverConfig = {
	GRAPH_CMS_API_TOKEN: (process.env.GRAPHCMS_API_TOKEN as string) ?? '',
	GRAPH_CMS_CONTENT_URL: (process.env.GRAPHCMS_CONTENT_URL as string) ?? ''
};
