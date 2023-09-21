import { gql } from '@apollo/client';

export const CREATE_POST_JOB = /* GraphQL */ `
	mutation CreateJob($input: CreateJobInput!, $condition: ModelJobConditionInput) {
		createJob(input: $input, condition: $condition) {
			id
			title
		}
	}
`;

export const createJob = /* GraphQL */ `
	mutation CreateJob($input: CreateJobInput!, $condition: ModelJobConditionInput) {
		createJob(input: $input, condition: $condition) {
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
			commentedBy {
				items {
					id
					text
					jobID
					createdAt
					updatedAt
				}
				nextToken
			}
			users {
				items {
					id
					jobID
					userID
					job {
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
						commentedBy {
							nextToken
						}
						users {
							nextToken
						}
						author {
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
							gender
							hasDeficiency
							points
							profission
							backgroundImage
							createdAt
							updatedAt
						}
						Images {
							nextToken
						}
						needPreviousExperience
						acceptedBy {
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
							gender
							hasDeficiency
							points
							profission
							backgroundImage
							createdAt
							updatedAt
						}
						categoryID
						categories
						points
						jobDoneBy {
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
							gender
							hasDeficiency
							points
							profission
							backgroundImage
							createdAt
							updatedAt
						}
						createdAt
						updatedAt
						jobAuthorId
						jobAcceptedById
						jobJobDoneById
					}
					user {
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
						jobs {
							nextToken
						}
						Categories {
							nextToken
						}
						categories
						Locations {
							nextToken
						}
						Portifolios {
							nextToken
						}
						gender
						hasDeficiency
						Favorites {
							nextToken
						}
						ChatRooms {
							nextToken
						}
						Messages {
							nextToken
						}
						points
						profission
						backgroundImage
						Notifications {
							nextToken
						}
						createdAt
						updatedAt
					}
					createdAt
					updatedAt
				}
				nextToken
			}
			author {
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
				jobs {
					items {
						id
						jobID
						userID
						job {
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
							needPreviousExperience
							categoryID
							categories
							points
							createdAt
							updatedAt
							jobAuthorId
							jobAcceptedById
							jobJobDoneById
						}
						user {
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
							gender
							hasDeficiency
							points
							profission
							backgroundImage
							createdAt
							updatedAt
						}
						createdAt
						updatedAt
					}
					nextToken
				}
				Categories {
					items {
						id
						name
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				categories
				Locations {
					items {
						id
						city
						state
						lat
						long
						country
						street
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				Portifolios {
					items {
						id
						title
						filesKey
						backgroundImageKey
						content
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				gender
				hasDeficiency
				Favorites {
					items {
						id
						user
						jobID {
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
							needPreviousExperience
							categoryID
							categories
							points
							createdAt
							updatedAt
							jobAuthorId
							jobAcceptedById
							jobJobDoneById
						}
						createdAt
						updatedAt
					}
					nextToken
				}
				ChatRooms {
					items {
						id
						userID
						chatRoomID
						user {
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
							gender
							hasDeficiency
							points
							profission
							backgroundImage
							createdAt
							updatedAt
						}
						chatRoom {
							id
							createdAt
							updatedAt
							chatRoomLastMessageId
						}
						createdAt
						updatedAt
					}
					nextToken
				}
				Messages {
					items {
						id
						text
						chatroomID
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				points
				profission
				backgroundImage
				Notifications {
					items {
						id
						text
						userID
						jobID
						read
						senderID
						createdAt
						updatedAt
					}
					nextToken
				}
				createdAt
				updatedAt
			}
			Images {
				items {
					id
					key
					url
					jobID
					createdAt
					updatedAt
				}
				nextToken
			}
			needPreviousExperience
			acceptedBy {
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
				jobs {
					items {
						id
						jobID
						userID
						job {
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
							needPreviousExperience
							categoryID
							categories
							points
							createdAt
							updatedAt
							jobAuthorId
							jobAcceptedById
							jobJobDoneById
						}
						user {
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
							gender
							hasDeficiency
							points
							profission
							backgroundImage
							createdAt
							updatedAt
						}
						createdAt
						updatedAt
					}
					nextToken
				}
				Categories {
					items {
						id
						name
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				categories
				Locations {
					items {
						id
						city
						state
						lat
						long
						country
						street
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				Portifolios {
					items {
						id
						title
						filesKey
						backgroundImageKey
						content
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				gender
				hasDeficiency
				Favorites {
					items {
						id
						user
						jobID {
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
							needPreviousExperience
							categoryID
							categories
							points
							createdAt
							updatedAt
							jobAuthorId
							jobAcceptedById
							jobJobDoneById
						}
						createdAt
						updatedAt
					}
					nextToken
				}
				ChatRooms {
					items {
						id
						userID
						chatRoomID
						user {
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
							gender
							hasDeficiency
							points
							profission
							backgroundImage
							createdAt
							updatedAt
						}
						chatRoom {
							id
							createdAt
							updatedAt
							chatRoomLastMessageId
						}
						createdAt
						updatedAt
					}
					nextToken
				}
				Messages {
					items {
						id
						text
						chatroomID
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				points
				profission
				backgroundImage
				Notifications {
					items {
						id
						text
						userID
						jobID
						read
						senderID
						createdAt
						updatedAt
					}
					nextToken
				}
				createdAt
				updatedAt
			}
			categoryID
			categories
			points
			jobDoneBy {
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
				jobs {
					items {
						id
						jobID
						userID
						job {
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
							needPreviousExperience
							categoryID
							categories
							points
							createdAt
							updatedAt
							jobAuthorId
							jobAcceptedById
							jobJobDoneById
						}
						user {
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
							gender
							hasDeficiency
							points
							profission
							backgroundImage
							createdAt
							updatedAt
						}
						createdAt
						updatedAt
					}
					nextToken
				}
				Categories {
					items {
						id
						name
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				categories
				Locations {
					items {
						id
						city
						state
						lat
						long
						country
						street
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				Portifolios {
					items {
						id
						title
						filesKey
						backgroundImageKey
						content
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				gender
				hasDeficiency
				Favorites {
					items {
						id
						user
						jobID {
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
							needPreviousExperience
							categoryID
							categories
							points
							createdAt
							updatedAt
							jobAuthorId
							jobAcceptedById
							jobJobDoneById
						}
						createdAt
						updatedAt
					}
					nextToken
				}
				ChatRooms {
					items {
						id
						userID
						chatRoomID
						user {
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
							gender
							hasDeficiency
							points
							profission
							backgroundImage
							createdAt
							updatedAt
						}
						chatRoom {
							id
							createdAt
							updatedAt
							chatRoomLastMessageId
						}
						createdAt
						updatedAt
					}
					nextToken
				}
				Messages {
					items {
						id
						text
						chatroomID
						userID
						createdAt
						updatedAt
					}
					nextToken
				}
				points
				profission
				backgroundImage
				Notifications {
					items {
						id
						text
						userID
						jobID
						read
						senderID
						createdAt
						updatedAt
					}
					nextToken
				}
				createdAt
				updatedAt
			}
			createdAt
			updatedAt
			jobAuthorId
			jobAcceptedById
			jobJobDoneById
		}
	}
`;