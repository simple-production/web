import Mailer from '@/lib/mailer';
import type { RequestHandler } from '@sveltejs/kit';

type Body = {
	name: string;
	company: string;
	email: string;
	message: string;
};

const emailTemplate = (body: Body) => `
<p><b>New email from website!</b></p>

<p>Name: ${body.name}</p>
<p>Company: ${body.company}</p>
<p>Email: ${body.email}</p>
<p>Message: ${body.message}</p>
`;

export const post: RequestHandler = async ({ request }) => {
	const body: Body = await request.json();

	const mailer = new Mailer();

	try {
		const response = await mailer.send(body.email, emailTemplate(body));

		return {
			status: 201,
			body: 'Message was sent'
		};
	} catch {
		return {
			body: 'Message could not be sent',
			status: 500
		};
	}
};
