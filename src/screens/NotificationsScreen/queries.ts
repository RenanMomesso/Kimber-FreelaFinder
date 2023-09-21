import { gql } from '@apollo/client';

export const getUserAvatarAndName = gql`
	query GetUserAvatarAndName($id: ID!) {
		getUser(id: $id) {
			id
			avatar
			fullname
		}
	}
`;
