import { gql } from '@apollo/client';

export const GET_PORTIFOLIO = gql`
	query GetPortifolio($id: ID!) {
		getPortifolio(id: $id) {
			id
			title
			filesKey
			backgroundImageKey
			content
			userID
			createdAt
			updatedAt
		}
	}
`;
