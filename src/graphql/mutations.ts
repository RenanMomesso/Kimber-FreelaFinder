/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
    }
  }
`;
export const createFavorites = /* GraphQL */ `
  mutation CreateFavorites(
    $input: CreateFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    createFavorites(input: $input, condition: $condition) {
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
export const updateFavorites = /* GraphQL */ `
  mutation UpdateFavorites(
    $input: UpdateFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    updateFavorites(input: $input, condition: $condition) {
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
export const deleteFavorites = /* GraphQL */ `
  mutation DeleteFavorites(
    $input: DeleteFavoritesInput!
    $condition: ModelFavoritesConditionInput
  ) {
    deleteFavorites(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createUserPayment = /* GraphQL */ `
  mutation CreateUserPayment(
    $input: CreateUserPaymentInput!
    $condition: ModelUserPaymentConditionInput
  ) {
    createUserPayment(input: $input, condition: $condition) {
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
export const updateUserPayment = /* GraphQL */ `
  mutation UpdateUserPayment(
    $input: UpdateUserPaymentInput!
    $condition: ModelUserPaymentConditionInput
  ) {
    updateUserPayment(input: $input, condition: $condition) {
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserPayment = /* GraphQL */ `
  mutation DeleteUserPayment(
    $input: DeleteUserPaymentInput!
    $condition: ModelUserPaymentConditionInput
  ) {
    deleteUserPayment(input: $input, condition: $condition) {
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
export const createPortifolio = /* GraphQL */ `
  mutation CreatePortifolio(
    $input: CreatePortifolioInput!
    $condition: ModelPortifolioConditionInput
  ) {
    createPortifolio(input: $input, condition: $condition) {
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
export const updatePortifolio = /* GraphQL */ `
  mutation UpdatePortifolio(
    $input: UpdatePortifolioInput!
    $condition: ModelPortifolioConditionInput
  ) {
    updatePortifolio(input: $input, condition: $condition) {
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
export const deletePortifolio = /* GraphQL */ `
  mutation DeletePortifolio(
    $input: DeletePortifolioInput!
    $condition: ModelPortifolioConditionInput
  ) {
    deletePortifolio(input: $input, condition: $condition) {
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
export const createImages = /* GraphQL */ `
  mutation CreateImages(
    $input: CreateImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    createImages(input: $input, condition: $condition) {
      id
      key
      url
      jobID
      createdAt
      updatedAt
    }
  }
`;
export const updateImages = /* GraphQL */ `
  mutation UpdateImages(
    $input: UpdateImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    updateImages(input: $input, condition: $condition) {
      id
      key
      url
      jobID
      createdAt
      updatedAt
    }
  }
`;
export const deleteImages = /* GraphQL */ `
  mutation DeleteImages(
    $input: DeleteImagesInput!
    $condition: ModelImagesConditionInput
  ) {
    deleteImages(input: $input, condition: $condition) {
      id
      key
      url
      jobID
      createdAt
      updatedAt
    }
  }
`;
export const createActivityHistoric = /* GraphQL */ `
  mutation CreateActivityHistoric(
    $input: CreateActivityHistoricInput!
    $condition: ModelActivityHistoricConditionInput
  ) {
    createActivityHistoric(input: $input, condition: $condition) {
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
export const updateActivityHistoric = /* GraphQL */ `
  mutation UpdateActivityHistoric(
    $input: UpdateActivityHistoricInput!
    $condition: ModelActivityHistoricConditionInput
  ) {
    updateActivityHistoric(input: $input, condition: $condition) {
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
export const deleteActivityHistoric = /* GraphQL */ `
  mutation DeleteActivityHistoric(
    $input: DeleteActivityHistoricInput!
    $condition: ModelActivityHistoricConditionInput
  ) {
    deleteActivityHistoric(input: $input, condition: $condition) {
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
export const createJobHistoricModel = /* GraphQL */ `
  mutation CreateJobHistoricModel(
    $input: CreateJobHistoricModelInput!
    $condition: ModelJobHistoricModelConditionInput
  ) {
    createJobHistoricModel(input: $input, condition: $condition) {
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
export const updateJobHistoricModel = /* GraphQL */ `
  mutation UpdateJobHistoricModel(
    $input: UpdateJobHistoricModelInput!
    $condition: ModelJobHistoricModelConditionInput
  ) {
    updateJobHistoricModel(input: $input, condition: $condition) {
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
export const deleteJobHistoricModel = /* GraphQL */ `
  mutation DeleteJobHistoricModel(
    $input: DeleteJobHistoricModelInput!
    $condition: ModelJobHistoricModelConditionInput
  ) {
    deleteJobHistoricModel(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      userID
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      userID
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      userID
      createdAt
      updatedAt
    }
  }
`;
export const createUserApply = /* GraphQL */ `
  mutation CreateUserApply(
    $input: CreateUserApplyInput!
    $condition: ModelUserApplyConditionInput
  ) {
    createUserApply(input: $input, condition: $condition) {
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
export const updateUserApply = /* GraphQL */ `
  mutation UpdateUserApply(
    $input: UpdateUserApplyInput!
    $condition: ModelUserApplyConditionInput
  ) {
    updateUserApply(input: $input, condition: $condition) {
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
export const deleteUserApply = /* GraphQL */ `
  mutation DeleteUserApply(
    $input: DeleteUserApplyInput!
    $condition: ModelUserApplyConditionInput
  ) {
    deleteUserApply(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createJobDoneBy = /* GraphQL */ `
  mutation CreateJobDoneBy(
    $input: CreateJobDoneByInput!
    $condition: ModelJobDoneByConditionInput
  ) {
    createJobDoneBy(input: $input, condition: $condition) {
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
export const updateJobDoneBy = /* GraphQL */ `
  mutation UpdateJobDoneBy(
    $input: UpdateJobDoneByInput!
    $condition: ModelJobDoneByConditionInput
  ) {
    updateJobDoneBy(input: $input, condition: $condition) {
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
export const deleteJobDoneBy = /* GraphQL */ `
  mutation DeleteJobDoneBy(
    $input: DeleteJobDoneByInput!
    $condition: ModelJobDoneByConditionInput
  ) {
    deleteJobDoneBy(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
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
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
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
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
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
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
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
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
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
export const createUserChatRoom = /* GraphQL */ `
  mutation CreateUserChatRoom(
    $input: CreateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    createUserChatRoom(input: $input, condition: $condition) {
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
export const updateUserChatRoom = /* GraphQL */ `
  mutation UpdateUserChatRoom(
    $input: UpdateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    updateUserChatRoom(input: $input, condition: $condition) {
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
export const deleteUserChatRoom = /* GraphQL */ `
  mutation DeleteUserChatRoom(
    $input: DeleteUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    deleteUserChatRoom(input: $input, condition: $condition) {
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
