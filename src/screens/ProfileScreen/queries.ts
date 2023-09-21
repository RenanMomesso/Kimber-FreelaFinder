export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        
        
       
        jobAuthorId
      }
      nextToken
    }
  }
`;
