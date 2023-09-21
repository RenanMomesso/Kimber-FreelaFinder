import { gql } from '@apollo/client';

export const getUserJobs = /* GraphQL */ gql`
	query GetUser($id: ID!) {
		getUser(id: $id) {
			jobs {
				items {
					id
					job {
						id
						title
						description
					}
					createdAt
					updatedAt
				}
				nextToken
			}
		}
	}
`;

export const getJobDetail = gql`
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
			categories
			imageUrl
			fileKey
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
			createdAt
			updatedAt
			jobAuthorId
		}
	}
`;

export const getJobHistoricDetail = /* GraphQL */ `
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
              hasDeficiency
              points
              profission
              backgroundImage
              gender
              status
              createdAt
              updatedAt
              userSelectedPortifolioId
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
              hasDeficiency
              points
              profission
              backgroundImage
              gender
              status
              createdAt
              updatedAt
              userSelectedPortifolioId
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
              hasDeficiency
              points
              profission
              backgroundImage
              gender
              status
              createdAt
              updatedAt
              userSelectedPortifolioId
            }
            userApply {
              nextToken
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
              hasDeficiency
              points
              profission
              backgroundImage
              gender
              status
              createdAt
              updatedAt
              userSelectedPortifolioId
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
            startedDate
            endDate
            techologiesUsed
            createdAt
            updatedAt
          }
          nextToken
        }
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
              hasDeficiency
              points
              profission
              backgroundImage
              gender
              status
              createdAt
              updatedAt
              userSelectedPortifolioId
            }
            chatRoom {
              id
              name
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
            images
            Attachments {
              nextToken
            }
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
              hasDeficiency
              points
              profission
              backgroundImage
              gender
              status
              createdAt
              updatedAt
              userSelectedPortifolioId
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
            startedDate
            endDate
            techologiesUsed
            createdAt
            updatedAt
          }
          nextToken
        }
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
              hasDeficiency
              points
              profission
              backgroundImage
              gender
              status
              createdAt
              updatedAt
              userSelectedPortifolioId
            }
            chatRoom {
              id
              name
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
            images
            Attachments {
              nextToken
            }
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
              hasDeficiency
              points
              profission
              backgroundImage
              gender
              status
              createdAt
              updatedAt
              userSelectedPortifolioId
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
            startedDate
            endDate
            techologiesUsed
            createdAt
            updatedAt
          }
          nextToken
        }
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
              hasDeficiency
              points
              profission
              backgroundImage
              gender
              status
              createdAt
              updatedAt
              userSelectedPortifolioId
            }
            chatRoom {
              id
              name
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
            images
            Attachments {
              nextToken
            }
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
          userName
          userAvatar
          userStatus
          createdAt
          updatedAt
          userApplySelectedPortifolioId
        }
        nextToken
      }
      createdAt
      updatedAt
      jobAuthorId
      jobAcceptedById
      jobJobDoneById
    }
  }
`;



