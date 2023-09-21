/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFavorites = /* GraphQL */ `
  subscription OnCreateFavorites {
    onCreateFavorites {
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
        author {
          id
          fullname
          reviewsLength
          totalJobsDone
          email
          phoneNumber
          avatar
          notificationsActived
          website
          firstTimeLoggin
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
          Messages {
            items {
              id
              text
              chatroomID
              userID
              images
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
              notificationType
              createdAt
              updatedAt
            }
            nextToken
          }
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
          jobsHistoric {
            items {
              id
              userID
              startDate
              endDate
              company
              jobTitle
              jobDescription
              createdAt
              updatedAt
            }
            nextToken
          }
          ActivityHistoric {
            items {
              id
              userID
              type
              typeID
              typeText
              createdAt
              updatedAt
            }
            nextToken
          }
          about
          cv
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
        categories
        points
        jobDoneBy {
          id
          jobID
          userID
          user {
            id
            fullname
            reviewsLength
            totalJobsDone
            email
            phoneNumber
            avatar
            notificationsActived
            website
            firstTimeLoggin
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
            jobsHistoric {
              nextToken
            }
            ActivityHistoric {
              nextToken
            }
            about
            cv
            createdAt
            updatedAt
            userSelectedPortifolioId
          }
          status
          paid
          jobPaidValue
          jobPaidDate
          createdAt
          updatedAt
          jobDoneByUserId
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
        completedAt
        createdAt
        updatedAt
        jobAuthorId
        jobJobDoneById
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFavorites = /* GraphQL */ `
  subscription OnUpdateFavorites {
    onUpdateFavorites {
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
        author {
          id
          fullname
          reviewsLength
          totalJobsDone
          email
          phoneNumber
          avatar
          notificationsActived
          website
          firstTimeLoggin
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
          Messages {
            items {
              id
              text
              chatroomID
              userID
              images
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
              notificationType
              createdAt
              updatedAt
            }
            nextToken
          }
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
          jobsHistoric {
            items {
              id
              userID
              startDate
              endDate
              company
              jobTitle
              jobDescription
              createdAt
              updatedAt
            }
            nextToken
          }
          ActivityHistoric {
            items {
              id
              userID
              type
              typeID
              typeText
              createdAt
              updatedAt
            }
            nextToken
          }
          about
          cv
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
        categories
        points
        jobDoneBy {
          id
          jobID
          userID
          user {
            id
            fullname
            reviewsLength
            totalJobsDone
            email
            phoneNumber
            avatar
            notificationsActived
            website
            firstTimeLoggin
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
            jobsHistoric {
              nextToken
            }
            ActivityHistoric {
              nextToken
            }
            about
            cv
            createdAt
            updatedAt
            userSelectedPortifolioId
          }
          status
          paid
          jobPaidValue
          jobPaidDate
          createdAt
          updatedAt
          jobDoneByUserId
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
        completedAt
        createdAt
        updatedAt
        jobAuthorId
        jobJobDoneById
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFavorites = /* GraphQL */ `
  subscription OnDeleteFavorites {
    onDeleteFavorites {
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
        author {
          id
          fullname
          reviewsLength
          totalJobsDone
          email
          phoneNumber
          avatar
          notificationsActived
          website
          firstTimeLoggin
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
          Messages {
            items {
              id
              text
              chatroomID
              userID
              images
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
              notificationType
              createdAt
              updatedAt
            }
            nextToken
          }
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
          jobsHistoric {
            items {
              id
              userID
              startDate
              endDate
              company
              jobTitle
              jobDescription
              createdAt
              updatedAt
            }
            nextToken
          }
          ActivityHistoric {
            items {
              id
              userID
              type
              typeID
              typeText
              createdAt
              updatedAt
            }
            nextToken
          }
          about
          cv
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
        categories
        points
        jobDoneBy {
          id
          jobID
          userID
          user {
            id
            fullname
            reviewsLength
            totalJobsDone
            email
            phoneNumber
            avatar
            notificationsActived
            website
            firstTimeLoggin
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
            jobsHistoric {
              nextToken
            }
            ActivityHistoric {
              nextToken
            }
            about
            cv
            createdAt
            updatedAt
            userSelectedPortifolioId
          }
          status
          paid
          jobPaidValue
          jobPaidDate
          createdAt
          updatedAt
          jobDoneByUserId
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
        completedAt
        createdAt
        updatedAt
        jobAuthorId
        jobJobDoneById
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
  }
`;
export const onCreateUserPayment = /* GraphQL */ `
  subscription OnCreateUserPayment {
    onCreateUserPayment {
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserPayment = /* GraphQL */ `
  subscription OnUpdateUserPayment {
    onUpdateUserPayment {
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserPayment = /* GraphQL */ `
  subscription OnDeleteUserPayment {
    onDeleteUserPayment {
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePortifolio = /* GraphQL */ `
  subscription OnCreatePortifolio {
    onCreatePortifolio {
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
  }
`;
export const onUpdatePortifolio = /* GraphQL */ `
  subscription OnUpdatePortifolio {
    onUpdatePortifolio {
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
  }
`;
export const onDeletePortifolio = /* GraphQL */ `
  subscription OnDeletePortifolio {
    onDeletePortifolio {
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
  }
`;
export const onCreateImages = /* GraphQL */ `
  subscription OnCreateImages {
    onCreateImages {
      id
      key
      url
      jobID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImages = /* GraphQL */ `
  subscription OnUpdateImages {
    onUpdateImages {
      id
      key
      url
      jobID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImages = /* GraphQL */ `
  subscription OnDeleteImages {
    onDeleteImages {
      id
      key
      url
      jobID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateActivityHistoric = /* GraphQL */ `
  subscription OnCreateActivityHistoric {
    onCreateActivityHistoric {
      id
      userID
      type
      typeID
      typeText
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateActivityHistoric = /* GraphQL */ `
  subscription OnUpdateActivityHistoric {
    onUpdateActivityHistoric {
      id
      userID
      type
      typeID
      typeText
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteActivityHistoric = /* GraphQL */ `
  subscription OnDeleteActivityHistoric {
    onDeleteActivityHistoric {
      id
      userID
      type
      typeID
      typeText
      createdAt
      updatedAt
    }
  }
`;
export const onCreateJobHistoricModel = /* GraphQL */ `
  subscription OnCreateJobHistoricModel {
    onCreateJobHistoricModel {
      id
      userID
      startDate
      endDate
      company
      jobTitle
      jobDescription
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateJobHistoricModel = /* GraphQL */ `
  subscription OnUpdateJobHistoricModel {
    onUpdateJobHistoricModel {
      id
      userID
      startDate
      endDate
      company
      jobTitle
      jobDescription
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteJobHistoricModel = /* GraphQL */ `
  subscription OnDeleteJobHistoricModel {
    onDeleteJobHistoricModel {
      id
      userID
      startDate
      endDate
      company
      jobTitle
      jobDescription
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      userID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserApply = /* GraphQL */ `
  subscription OnCreateUserApply {
    onCreateUserApply {
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
  }
`;
export const onUpdateUserApply = /* GraphQL */ `
  subscription OnUpdateUserApply {
    onUpdateUserApply {
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
  }
`;
export const onDeleteUserApply = /* GraphQL */ `
  subscription OnDeleteUserApply {
    onDeleteUserApply {
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
  }
`;
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
      id
      text
      userID
      jobID
      read
      senderID
      notificationType
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
      id
      text
      userID
      jobID
      read
      senderID
      notificationType
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
      id
      text
      userID
      jobID
      read
      senderID
      notificationType
      createdAt
      updatedAt
    }
  }
`;
export const onCreateJobDoneBy = /* GraphQL */ `
  subscription OnCreateJobDoneBy {
    onCreateJobDoneBy {
      id
      jobID
      userID
      user {
        id
        fullname
        reviewsLength
        totalJobsDone
        email
        phoneNumber
        avatar
        notificationsActived
        website
        firstTimeLoggin
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
              categories
              points
              completedAt
              createdAt
              updatedAt
              jobAuthorId
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
              status
              about
              cv
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
            notificationType
            createdAt
            updatedAt
          }
          nextToken
        }
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
        jobsHistoric {
          items {
            id
            userID
            startDate
            endDate
            company
            jobTitle
            jobDescription
            createdAt
            updatedAt
          }
          nextToken
        }
        ActivityHistoric {
          items {
            id
            userID
            type
            typeID
            typeText
            createdAt
            updatedAt
          }
          nextToken
        }
        about
        cv
        createdAt
        updatedAt
        userSelectedPortifolioId
      }
      status
      paid
      jobPaidValue
      jobPaidDate
      createdAt
      updatedAt
      jobDoneByUserId
    }
  }
`;
export const onUpdateJobDoneBy = /* GraphQL */ `
  subscription OnUpdateJobDoneBy {
    onUpdateJobDoneBy {
      id
      jobID
      userID
      user {
        id
        fullname
        reviewsLength
        totalJobsDone
        email
        phoneNumber
        avatar
        notificationsActived
        website
        firstTimeLoggin
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
              categories
              points
              completedAt
              createdAt
              updatedAt
              jobAuthorId
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
              status
              about
              cv
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
            notificationType
            createdAt
            updatedAt
          }
          nextToken
        }
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
        jobsHistoric {
          items {
            id
            userID
            startDate
            endDate
            company
            jobTitle
            jobDescription
            createdAt
            updatedAt
          }
          nextToken
        }
        ActivityHistoric {
          items {
            id
            userID
            type
            typeID
            typeText
            createdAt
            updatedAt
          }
          nextToken
        }
        about
        cv
        createdAt
        updatedAt
        userSelectedPortifolioId
      }
      status
      paid
      jobPaidValue
      jobPaidDate
      createdAt
      updatedAt
      jobDoneByUserId
    }
  }
`;
export const onDeleteJobDoneBy = /* GraphQL */ `
  subscription OnDeleteJobDoneBy {
    onDeleteJobDoneBy {
      id
      jobID
      userID
      user {
        id
        fullname
        reviewsLength
        totalJobsDone
        email
        phoneNumber
        avatar
        notificationsActived
        website
        firstTimeLoggin
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
              categories
              points
              completedAt
              createdAt
              updatedAt
              jobAuthorId
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
              status
              about
              cv
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
            notificationType
            createdAt
            updatedAt
          }
          nextToken
        }
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
        jobsHistoric {
          items {
            id
            userID
            startDate
            endDate
            company
            jobTitle
            jobDescription
            createdAt
            updatedAt
          }
          nextToken
        }
        ActivityHistoric {
          items {
            id
            userID
            type
            typeID
            typeText
            createdAt
            updatedAt
          }
          nextToken
        }
        about
        cv
        createdAt
        updatedAt
        userSelectedPortifolioId
      }
      status
      paid
      jobPaidValue
      jobPaidDate
      createdAt
      updatedAt
      jobDoneByUserId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      fullname
      reviewsLength
      totalJobsDone
      email
      phoneNumber
      avatar
      notificationsActived
      website
      firstTimeLoggin
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
            author {
              id
              fullname
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
              status
              about
              cv
              createdAt
              updatedAt
              userSelectedPortifolioId
            }
            Images {
              nextToken
            }
            needPreviousExperience
            categories
            points
            jobDoneBy {
              id
              jobID
              userID
              status
              paid
              jobPaidValue
              jobPaidDate
              createdAt
              updatedAt
              jobDoneByUserId
            }
            userApply {
              nextToken
            }
            completedAt
            createdAt
            updatedAt
            jobAuthorId
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
            reviewsLength
            totalJobsDone
            email
            phoneNumber
            avatar
            notificationsActived
            website
            firstTimeLoggin
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
            jobsHistoric {
              nextToken
            }
            ActivityHistoric {
              nextToken
            }
            about
            cv
            createdAt
            updatedAt
            userSelectedPortifolioId
          }
          chatRoom {
            id
            name
            Messages {
              nextToken
            }
            users {
              nextToken
            }
            LastMessage {
              id
              text
              chatroomID
              userID
              images
              createdAt
              updatedAt
            }
            Attachments {
              nextToken
            }
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
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
            }
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
          notificationType
          createdAt
          updatedAt
        }
        nextToken
      }
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
      jobsHistoric {
        items {
          id
          userID
          startDate
          endDate
          company
          jobTitle
          jobDescription
          createdAt
          updatedAt
        }
        nextToken
      }
      ActivityHistoric {
        items {
          id
          userID
          type
          typeID
          typeText
          createdAt
          updatedAt
        }
        nextToken
      }
      about
      cv
      createdAt
      updatedAt
      userSelectedPortifolioId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      fullname
      reviewsLength
      totalJobsDone
      email
      phoneNumber
      avatar
      notificationsActived
      website
      firstTimeLoggin
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
            author {
              id
              fullname
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
              status
              about
              cv
              createdAt
              updatedAt
              userSelectedPortifolioId
            }
            Images {
              nextToken
            }
            needPreviousExperience
            categories
            points
            jobDoneBy {
              id
              jobID
              userID
              status
              paid
              jobPaidValue
              jobPaidDate
              createdAt
              updatedAt
              jobDoneByUserId
            }
            userApply {
              nextToken
            }
            completedAt
            createdAt
            updatedAt
            jobAuthorId
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
            reviewsLength
            totalJobsDone
            email
            phoneNumber
            avatar
            notificationsActived
            website
            firstTimeLoggin
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
            jobsHistoric {
              nextToken
            }
            ActivityHistoric {
              nextToken
            }
            about
            cv
            createdAt
            updatedAt
            userSelectedPortifolioId
          }
          chatRoom {
            id
            name
            Messages {
              nextToken
            }
            users {
              nextToken
            }
            LastMessage {
              id
              text
              chatroomID
              userID
              images
              createdAt
              updatedAt
            }
            Attachments {
              nextToken
            }
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
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
            }
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
          notificationType
          createdAt
          updatedAt
        }
        nextToken
      }
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
      jobsHistoric {
        items {
          id
          userID
          startDate
          endDate
          company
          jobTitle
          jobDescription
          createdAt
          updatedAt
        }
        nextToken
      }
      ActivityHistoric {
        items {
          id
          userID
          type
          typeID
          typeText
          createdAt
          updatedAt
        }
        nextToken
      }
      about
      cv
      createdAt
      updatedAt
      userSelectedPortifolioId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      fullname
      reviewsLength
      totalJobsDone
      email
      phoneNumber
      avatar
      notificationsActived
      website
      firstTimeLoggin
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
            author {
              id
              fullname
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
              status
              about
              cv
              createdAt
              updatedAt
              userSelectedPortifolioId
            }
            Images {
              nextToken
            }
            needPreviousExperience
            categories
            points
            jobDoneBy {
              id
              jobID
              userID
              status
              paid
              jobPaidValue
              jobPaidDate
              createdAt
              updatedAt
              jobDoneByUserId
            }
            userApply {
              nextToken
            }
            completedAt
            createdAt
            updatedAt
            jobAuthorId
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
            reviewsLength
            totalJobsDone
            email
            phoneNumber
            avatar
            notificationsActived
            website
            firstTimeLoggin
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
            jobsHistoric {
              nextToken
            }
            ActivityHistoric {
              nextToken
            }
            about
            cv
            createdAt
            updatedAt
            userSelectedPortifolioId
          }
          chatRoom {
            id
            name
            Messages {
              nextToken
            }
            users {
              nextToken
            }
            LastMessage {
              id
              text
              chatroomID
              userID
              images
              createdAt
              updatedAt
            }
            Attachments {
              nextToken
            }
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
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
            }
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
          notificationType
          createdAt
          updatedAt
        }
        nextToken
      }
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
      jobsHistoric {
        items {
          id
          userID
          startDate
          endDate
          company
          jobTitle
          jobDescription
          createdAt
          updatedAt
        }
        nextToken
      }
      ActivityHistoric {
        items {
          id
          userID
          type
          typeID
          typeText
          createdAt
          updatedAt
        }
        nextToken
      }
      about
      cv
      createdAt
      updatedAt
      userSelectedPortifolioId
    }
  }
`;
export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment {
    onCreateAttachment {
      id
      storageKey
      type
      width
      height
      duration
      messageID
      chatroomID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment {
    onUpdateAttachment {
      id
      storageKey
      type
      width
      height
      duration
      messageID
      chatroomID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment {
    onDeleteAttachment {
      id
      storageKey
      type
      width
      height
      duration
      messageID
      chatroomID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
      id
      name
      Messages {
        items {
          id
          text
          chatroomID
          userID
          images
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          userID
          chatRoomID
          user {
            id
            fullname
            reviewsLength
            totalJobsDone
            email
            phoneNumber
            avatar
            notificationsActived
            website
            firstTimeLoggin
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
            jobsHistoric {
              nextToken
            }
            ActivityHistoric {
              nextToken
            }
            about
            cv
            createdAt
            updatedAt
            userSelectedPortifolioId
          }
          chatRoom {
            id
            name
            Messages {
              nextToken
            }
            users {
              nextToken
            }
            LastMessage {
              id
              text
              chatroomID
              userID
              images
              createdAt
              updatedAt
            }
            Attachments {
              nextToken
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        text
        chatroomID
        userID
        images
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      name
      Messages {
        items {
          id
          text
          chatroomID
          userID
          images
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          userID
          chatRoomID
          user {
            id
            fullname
            reviewsLength
            totalJobsDone
            email
            phoneNumber
            avatar
            notificationsActived
            website
            firstTimeLoggin
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
            jobsHistoric {
              nextToken
            }
            ActivityHistoric {
              nextToken
            }
            about
            cv
            createdAt
            updatedAt
            userSelectedPortifolioId
          }
          chatRoom {
            id
            name
            Messages {
              nextToken
            }
            users {
              nextToken
            }
            LastMessage {
              id
              text
              chatroomID
              userID
              images
              createdAt
              updatedAt
            }
            Attachments {
              nextToken
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        text
        chatroomID
        userID
        images
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
      id
      name
      Messages {
        items {
          id
          text
          chatroomID
          userID
          images
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          userID
          chatRoomID
          user {
            id
            fullname
            reviewsLength
            totalJobsDone
            email
            phoneNumber
            avatar
            notificationsActived
            website
            firstTimeLoggin
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
            jobsHistoric {
              nextToken
            }
            ActivityHistoric {
              nextToken
            }
            about
            cv
            createdAt
            updatedAt
            userSelectedPortifolioId
          }
          chatRoom {
            id
            name
            Messages {
              nextToken
            }
            users {
              nextToken
            }
            LastMessage {
              id
              text
              chatroomID
              userID
              images
              createdAt
              updatedAt
            }
            Attachments {
              nextToken
            }
            createdAt
            updatedAt
            chatRoomLastMessageId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        text
        chatroomID
        userID
        images
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      text
      chatroomID
      userID
      images
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      text
      chatroomID
      userID
      images
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      text
      chatroomID
      userID
      images
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
        reviewsLength
        totalJobsDone
        email
        phoneNumber
        avatar
        notificationsActived
        website
        firstTimeLoggin
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
              categories
              points
              completedAt
              createdAt
              updatedAt
              jobAuthorId
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
              status
              about
              cv
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
            notificationType
            createdAt
            updatedAt
          }
          nextToken
        }
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
        jobsHistoric {
          items {
            id
            userID
            startDate
            endDate
            company
            jobTitle
            jobDescription
            createdAt
            updatedAt
          }
          nextToken
        }
        ActivityHistoric {
          items {
            id
            userID
            type
            typeID
            typeText
            createdAt
            updatedAt
          }
          nextToken
        }
        about
        cv
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
      categories
      points
      jobDoneBy {
        id
        jobID
        userID
        user {
          id
          fullname
          reviewsLength
          totalJobsDone
          email
          phoneNumber
          avatar
          notificationsActived
          website
          firstTimeLoggin
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
          Messages {
            items {
              id
              text
              chatroomID
              userID
              images
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
              notificationType
              createdAt
              updatedAt
            }
            nextToken
          }
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
          jobsHistoric {
            items {
              id
              userID
              startDate
              endDate
              company
              jobTitle
              jobDescription
              createdAt
              updatedAt
            }
            nextToken
          }
          ActivityHistoric {
            items {
              id
              userID
              type
              typeID
              typeText
              createdAt
              updatedAt
            }
            nextToken
          }
          about
          cv
          createdAt
          updatedAt
          userSelectedPortifolioId
        }
        status
        paid
        jobPaidValue
        jobPaidDate
        createdAt
        updatedAt
        jobDoneByUserId
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
      completedAt
      createdAt
      updatedAt
      jobAuthorId
      jobJobDoneById
    }
  }
`;
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
        reviewsLength
        totalJobsDone
        email
        phoneNumber
        avatar
        notificationsActived
        website
        firstTimeLoggin
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
              categories
              points
              completedAt
              createdAt
              updatedAt
              jobAuthorId
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
              status
              about
              cv
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
            notificationType
            createdAt
            updatedAt
          }
          nextToken
        }
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
        jobsHistoric {
          items {
            id
            userID
            startDate
            endDate
            company
            jobTitle
            jobDescription
            createdAt
            updatedAt
          }
          nextToken
        }
        ActivityHistoric {
          items {
            id
            userID
            type
            typeID
            typeText
            createdAt
            updatedAt
          }
          nextToken
        }
        about
        cv
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
      categories
      points
      jobDoneBy {
        id
        jobID
        userID
        user {
          id
          fullname
          reviewsLength
          totalJobsDone
          email
          phoneNumber
          avatar
          notificationsActived
          website
          firstTimeLoggin
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
          Messages {
            items {
              id
              text
              chatroomID
              userID
              images
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
              notificationType
              createdAt
              updatedAt
            }
            nextToken
          }
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
          jobsHistoric {
            items {
              id
              userID
              startDate
              endDate
              company
              jobTitle
              jobDescription
              createdAt
              updatedAt
            }
            nextToken
          }
          ActivityHistoric {
            items {
              id
              userID
              type
              typeID
              typeText
              createdAt
              updatedAt
            }
            nextToken
          }
          about
          cv
          createdAt
          updatedAt
          userSelectedPortifolioId
        }
        status
        paid
        jobPaidValue
        jobPaidDate
        createdAt
        updatedAt
        jobDoneByUserId
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
      completedAt
      createdAt
      updatedAt
      jobAuthorId
      jobJobDoneById
    }
  }
`;
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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
        reviewsLength
        totalJobsDone
        email
        phoneNumber
        avatar
        notificationsActived
        website
        firstTimeLoggin
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
              categories
              points
              completedAt
              createdAt
              updatedAt
              jobAuthorId
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
              status
              about
              cv
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
            notificationType
            createdAt
            updatedAt
          }
          nextToken
        }
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
        jobsHistoric {
          items {
            id
            userID
            startDate
            endDate
            company
            jobTitle
            jobDescription
            createdAt
            updatedAt
          }
          nextToken
        }
        ActivityHistoric {
          items {
            id
            userID
            type
            typeID
            typeText
            createdAt
            updatedAt
          }
          nextToken
        }
        about
        cv
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
      categories
      points
      jobDoneBy {
        id
        jobID
        userID
        user {
          id
          fullname
          reviewsLength
          totalJobsDone
          email
          phoneNumber
          avatar
          notificationsActived
          website
          firstTimeLoggin
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
          Messages {
            items {
              id
              text
              chatroomID
              userID
              images
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
              notificationType
              createdAt
              updatedAt
            }
            nextToken
          }
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
          jobsHistoric {
            items {
              id
              userID
              startDate
              endDate
              company
              jobTitle
              jobDescription
              createdAt
              updatedAt
            }
            nextToken
          }
          ActivityHistoric {
            items {
              id
              userID
              type
              typeID
              typeText
              createdAt
              updatedAt
            }
            nextToken
          }
          about
          cv
          createdAt
          updatedAt
          userSelectedPortifolioId
        }
        status
        paid
        jobPaidValue
        jobPaidDate
        createdAt
        updatedAt
        jobDoneByUserId
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
      completedAt
      createdAt
      updatedAt
      jobAuthorId
      jobJobDoneById
    }
  }
`;
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom {
    onCreateUserChatRoom {
      id
      userID
      chatRoomID
      user {
        id
        fullname
        reviewsLength
        totalJobsDone
        email
        phoneNumber
        avatar
        notificationsActived
        website
        firstTimeLoggin
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
              categories
              points
              completedAt
              createdAt
              updatedAt
              jobAuthorId
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
              status
              about
              cv
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
            notificationType
            createdAt
            updatedAt
          }
          nextToken
        }
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
        jobsHistoric {
          items {
            id
            userID
            startDate
            endDate
            company
            jobTitle
            jobDescription
            createdAt
            updatedAt
          }
          nextToken
        }
        ActivityHistoric {
          items {
            id
            userID
            type
            typeID
            typeText
            createdAt
            updatedAt
          }
          nextToken
        }
        about
        cv
        createdAt
        updatedAt
        userSelectedPortifolioId
      }
      chatRoom {
        id
        name
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
        users {
          items {
            id
            userID
            chatRoomID
            user {
              id
              fullname
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
              status
              about
              cv
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
        LastMessage {
          id
          text
          chatroomID
          userID
          images
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom {
    onUpdateUserChatRoom {
      id
      userID
      chatRoomID
      user {
        id
        fullname
        reviewsLength
        totalJobsDone
        email
        phoneNumber
        avatar
        notificationsActived
        website
        firstTimeLoggin
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
              categories
              points
              completedAt
              createdAt
              updatedAt
              jobAuthorId
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
              status
              about
              cv
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
            notificationType
            createdAt
            updatedAt
          }
          nextToken
        }
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
        jobsHistoric {
          items {
            id
            userID
            startDate
            endDate
            company
            jobTitle
            jobDescription
            createdAt
            updatedAt
          }
          nextToken
        }
        ActivityHistoric {
          items {
            id
            userID
            type
            typeID
            typeText
            createdAt
            updatedAt
          }
          nextToken
        }
        about
        cv
        createdAt
        updatedAt
        userSelectedPortifolioId
      }
      chatRoom {
        id
        name
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
        users {
          items {
            id
            userID
            chatRoomID
            user {
              id
              fullname
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
              status
              about
              cv
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
        LastMessage {
          id
          text
          chatroomID
          userID
          images
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom {
    onDeleteUserChatRoom {
      id
      userID
      chatRoomID
      user {
        id
        fullname
        reviewsLength
        totalJobsDone
        email
        phoneNumber
        avatar
        notificationsActived
        website
        firstTimeLoggin
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
              categories
              points
              completedAt
              createdAt
              updatedAt
              jobAuthorId
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
              status
              about
              cv
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
            notificationType
            createdAt
            updatedAt
          }
          nextToken
        }
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
        jobsHistoric {
          items {
            id
            userID
            startDate
            endDate
            company
            jobTitle
            jobDescription
            createdAt
            updatedAt
          }
          nextToken
        }
        ActivityHistoric {
          items {
            id
            userID
            type
            typeID
            typeText
            createdAt
            updatedAt
          }
          nextToken
        }
        about
        cv
        createdAt
        updatedAt
        userSelectedPortifolioId
      }
      chatRoom {
        id
        name
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
        users {
          items {
            id
            userID
            chatRoomID
            user {
              id
              fullname
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
              status
              about
              cv
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
        LastMessage {
          id
          text
          chatroomID
          userID
          images
          Attachments {
            items {
              id
              storageKey
              type
              width
              height
              duration
              messageID
              chatroomID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        Attachments {
          items {
            id
            storageKey
            type
            width
            height
            duration
            messageID
            chatroomID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
