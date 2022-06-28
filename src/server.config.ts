import { config } from 'dotenv';
import { tryParseInt } from './utils/number.util';

config();

export const serverConfig = {
	GRAPH_CMS_API_TOKEN: (process.env.GRAPHCMS_API_TOKEN as string) ?? '',
	GRAPH_CMS_CONTENT_URL: (process.env.GRAPHCMS_CONTENT_URL as string) ?? '',
	SMTP: {
		USERNAME: (process.env.SMTP_USERNAME as string) ?? '',
		PASSWORD: (process.env.SMTP_PASSWORD as string) ?? '',
		HOST: (process.env.SMTP_HOST as string) ?? '',
		PORT: tryParseInt(process.env.SMTP_PORT as string, 465),
		TO: (process.env.SMTP_TO as string) ?? ''
	}
};
