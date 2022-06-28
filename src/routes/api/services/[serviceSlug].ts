import { cmsGraphQLRequest } from '@/lib/graphql';
import type { ServiceGraphQLResponse, ServiceResponse } from '@/models/api/services-response';
import { tryParseInt } from '@/utils/number.util';
import type { RequestHandler } from '@sveltejs/kit';

type Params = {
	serviceSlug: string;
};

type Variables = {
	slug: string;
	takeImages?: number;
};

const SERVICE_QUERY = `
query Query($slug: String!) {
	services(filter: {slug:{_eq: $slug}}) {
	  id
	  name
	  description
	  slug
	  coverImage {
		 id
		 type
	  }
	  images {
		directus_files_id {
			id
			type
		  }
		}
	}
  }
`;

const mapImages = (service: ServiceGraphQLResponse): ServiceResponse => {
	const { images } = service;

	return {
		...service,
		images: images.map((i) => i.directus_files_id)
	};
};

export const get: RequestHandler<Params, ServiceResponse | string> = async ({ params, url }) => {
	const { serviceSlug } = params;

	const imagesPage = tryParseInt(url.searchParams.get('images-page'), 0);

	const v: Variables = {
		slug: serviceSlug
	};

	const response = await cmsGraphQLRequest<ServiceGraphQLResponse[], Variables>(SERVICE_QUERY, v);
	const service = response.at(0);

	if (!service) {
		return {
			status: 404,
			body: 'Service not found'
		};
	}

	return {
		body: mapImages(service)
	};
};
