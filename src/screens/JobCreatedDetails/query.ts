export const getCreatedJobDetails = /* GraphQL */ `
	query GetJob($id: ID!) {
		getJob(id: $id) {
			id
			title
			description
			dateTimestamp
			dateDate
			location
			canBeDoneRemotely
			minimumPrice
			qualifications
			difficulty
			status
			urgent

			
			author {
				id
				fullname
				email
				avatar
			}
			Images {
				items {
					id
					key
					url
					jobID
				}
				nextToken
			}
			needPreviousExperience
			acceptedBy {
				id
				fullname
				totalJobsDone
				email
				phoneNumber
				avatar
				firstTimeLoggin
			}
			categoryID
			categories
			createdAt
			updatedAt
			jobAuthorId
			jobAcceptedById
			userApply {
				items {
					id
					userID
					jobID
					selectedPortifolio {
						id
						title
						filesKey
						backgroundImageKey
						content
						userID
						startedDate
						endDate
						techologiesUsed
						createdAt
						updatedAt
					}
					files
					text
					price
					createdAt
					updatedAt
					userApplySelectedPortifolioId
				}
				nextToken
			}
		}
	}
`;

export const GET_USER_APPLIER = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      fullname
      subcategories
      reviewsLength
      totalJobsDone
      email
      phoneNumber
      avatar
      notificationsActived
      website
      firstTimeLoggin
      categories
      hasDeficiency
      points
      profission
      gender
      selectedPortifolio {
        id
        title
        filesKey
        backgroundImageKey
        content
        userID
        startedDate
        endDate
        techologiesUsed
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
      userSelectedPortifolioId
    }
  }
`;
