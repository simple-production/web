import { graphQlRequest } from '@/lib/graphql';
import type { Service } from '@/models/service';
import { tryParseInt } from '@/utils/number.util';
import type { RequestHandler } from '@sveltejs/kit';

type Variables = {
	slug: string;
	takeImages?: number;
};

const SERVICE_QUERY = `
	query getService($slug: String!, $takeImages: Int) {
		service(where:{slug: $slug}) {
			id
			name
			description
			slug
			coverImage {
			  url(transformation:{document:{output:{format:webp}}})
			  mimeType
			}
			images(first: $takeImages) {
				modifiedUrl: url(transformation:{document:{output:{format:webp}},image:{resize:{width:500}}})
				url
				mimeType
			}
			cases {
				title
				description {
					html
					text
				}
				partner {
					name
					logo {
						url
						mimeType
					}
				}

			}
		}
	}
`;

export const get: RequestHandler = async ({ params, url }) => {
	const { serviceSlug } = params;
	const imagesPage = tryParseInt(url.searchParams.get('images-page'), 0);

	const v: Variables = {
		slug: serviceSlug
	};

	if (imagesPage) {
		v.takeImages = imagesPage * 9;
	}

	const response = await graphQlRequest<Service, Variables>(SERVICE_QUERY, v);

	return {
		body: response
	};
};
