/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFavorites = /* GraphQL */ `
  query GetFavorites($id: ID!) {
    getFavorites(id: $id) {
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
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoritesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getUserPayment = /* GraphQL */ `
  query GetUserPayment($id: ID!) {
    getUserPayment(id: $id) {
      id
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listUserPayments = /* GraphQL */ `
  query ListUserPayments(
    $filter: ModelUserPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPortifolio = /* GraphQL */ `
  query GetPortifolio($id: ID!) {
    getPortifolio(id: $id) {
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
export const listPortifolios = /* GraphQL */ `
  query ListPortifolios(
    $filter: ModelPortifolioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortifolios(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getImages = /* GraphQL */ `
  query GetImages($id: ID!) {
    getImages(id: $id) {
      id
      key
      url
      jobID
      createdAt
      updatedAt
    }
  }
`;
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getActivityHistoric = /* GraphQL */ `
  query GetActivityHistoric($id: ID!) {
    getActivityHistoric(id: $id) {
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
export const listActivityHistorics = /* GraphQL */ `
  query ListActivityHistorics(
    $filter: ModelActivityHistoricFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivityHistorics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getJobHistoricModel = /* GraphQL */ `
  query GetJobHistoricModel($id: ID!) {
    getJobHistoricModel(id: $id) {
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
export const listJobHistoricModels = /* GraphQL */ `
  query ListJobHistoricModels(
    $filter: ModelJobHistoricModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobHistoricModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      userID
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserApply = /* GraphQL */ `
  query GetUserApply($id: ID!) {
    getUserApply(id: $id) {
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
export const listUserApplies = /* GraphQL */ `
  query ListUserApplies(
    $filter: ModelUserApplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserApplies(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getJobDoneBy = /* GraphQL */ `
  query GetJobDoneBy($id: ID!) {
    getJobDoneBy(id: $id) {
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
export const listJobDoneBies = /* GraphQL */ `
  query ListJobDoneBies(
    $filter: ModelJobDoneByFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobDoneBies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const usersByFullname = /* GraphQL */ `
  query UsersByFullname(
    $fullname: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByFullname(
      fullname: $fullname
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const usersByEmail = /* GraphQL */ `
  query UsersByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
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
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getJob = /* GraphQL */ `
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
      nextToken
    }
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
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
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
