import { serverConfig } from '@/server.config';
import { createTransport, type Transporter } from 'nodemailer';

const { SMTP } = serverConfig;

export default class Mailer {
	private transport: Transporter;

	constructor() {
		this.transport = createTransport({
			port: SMTP.PORT,
			host: SMTP.HOST,
			auth: {
				user: SMTP.USERNAME,
				pass: SMTP.PASSWORD
			}
		});
	}

	send = async (replyTo: string, body: string) => {
		const sent = await this.transport.sendMail({
			replyTo,
			to: SMTP.TO,
			from: `<Simple Production email form> ${SMTP.USERNAME}`,
			html: body,
			text: body,
			subject: 'New email from website!'
		});

		return sent;
	};
}
