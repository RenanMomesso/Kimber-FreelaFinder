
export const get_user_query = /* GraphQL */ `
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
      Categories {
        items {
          id
          name
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
      
      
      points
      profission
      backgroundImage
      
      createdAt
      updatedAt
    }
  }
`;