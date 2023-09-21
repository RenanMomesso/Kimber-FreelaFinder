import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
     query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`

export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          
          
          gender
          hasDeficiency
          
          
          
          points
          profission
          backgroundImage
          
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
          
          
          gender
          hasDeficiency
          Favorites {
            items {
              id
              user
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
              createdAt
              updatedAt
            }
            nextToken
          }
          
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
          jobs {
            items {
              id
              jobID
              userID
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
          
         
          
          ChatRooms {
            items {
              id
              userID
              chatRoomID
              createdAt
              updatedAt
            }
            nextToken
          }
         
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
      nextToken
    }
  }
`;