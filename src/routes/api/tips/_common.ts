export type Params = {
	tipSlug: string;
};

export const TIP_QUERY = `
	query Query($slug:String!) {
		tips(filter: {slug: {_eq: $slug}}) {
			id
			title
			body
			coverImage {
				id
				type
			}
			user_created {
				first_name
				last_name
				avatar {
					id
					type
				}
			}
			date_created
			likes
		}
	}
`;

export const TIP_LIKES_QUERY = `
	query Query($id: ID!) {
		tips_by_id(id: $id) {
			likes
		}
	}
`;

export const SET_LIKES_MUTATION = `
mutation($id: ID!, $likes: JSON!) {
	update_tips_item(id: $id, data: {likes: $likes}) {
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
