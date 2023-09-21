import { gql } from "@apollo/client";

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      fullname
      categories
      subcategories
      location
      reviewsLength
      totalJobsDone
      skills
      email
      phoneNumber
      avatar
      notificationsActived
      website
      portifolio
      reviews
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
            acceptedBy
            categories
            imageUrl
            fileKey
            createdAt
            updatedAt
            jobAuthorId
          }
          user {
            id
            fullname
            categories
            subcategories
            location
            reviewsLength
            totalJobsDone
            skills
            email
            phoneNumber
            avatar
            notificationsActived
            website
            portifolio
            reviews
            firstTimeLoggin
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;


export const listAllJobs = /* GraphQL */ `
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
              email
              avatar
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
          categories
          points
          profission
          backgroundImage
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
              createdAt
              updatedAt
            }
            nextToken
          }
          categories
         
          points
          profission
          backgroundImage
          
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
              createdAt
              updatedAt
            }
            nextToken
          }
          
          categories
          
          
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
          
          
          points
          profission
          backgroundImage
          
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
      nextToken
    }
  }
`;