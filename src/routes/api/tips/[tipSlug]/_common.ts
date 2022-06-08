export type Params = {
	tipSlug: string;
};

export const TIP_QUERY = `
	query getTip($slug:String!) {
		tip(where:{slug:$slug}) {
		title
		content {
			html
			text
		}
		createdBy {
			name
			picture
		}
		updatedAt
		coverImage {
			url
			mimeType
		}
		likes
	}
	}

`;

export const TIP_LIKES_QUERY = `
	query getTipLikes($slug:String!) {
		tip(where:{slug:$slug}) {
			likes
		}
	}
`;

export const SET_LIKES_MUTATION = `
	mutation setTipLikes($slug:String!, $likes: Json!) {
		updateTip(where:{slug:$slug}, data:{likes:$likes}) {
			likes
		}
	}
`;

export const PUBLISH_TIP = `
	mutation publishTip($slug: String!) {
		publishTip(where:{slug:$slug}) {
			likes
		}
	}
`;
