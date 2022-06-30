import { config } from 'dotenv';
import { tryParseInt } from './utils/number.util';

config();

export const serverConfig = {
	CMS: {
		URL: (process.env.CMS_URL as string) ?? '',
		ACCESS_TOKEN: (process.env.CMS_ACCESS_TOKEN as string) ?? ''
	},
	SMTP: {
		USERNAME: (process.env.SMTP_USERNAME as string) ?? '',
		PASSWORD: (process.env.SMTP_PASSWORD as string) ?? '',
		HOST: (process.env.SMTP_HOST as string) ?? '',
		PORT: tryParseInt(process.env.SMTP_PORT as string, 465),
		TO: (process.env.SMTP_TO as string) ?? ''
	}
};
