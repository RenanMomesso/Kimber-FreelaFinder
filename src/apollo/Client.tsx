import React from 'react';
import { createAuthLink, AuthOptions } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  TypePolicies,
} from "@apollo/client";

import appSyncConfig from "../aws-exports";
import { AUTH_TYPE } from 'aws-appsync-auth-link/lib/auth-link';

interface IClient {
  children: React.ReactNode;
}

const url = appSyncConfig.aws_appsync_graphqlEndpoint;

const mergeLists = (existing = { items: [] }, incoming = { items: [] }) => {
  return {
    ...existing,
    ...incoming,
    items: [...(existing.items || []), ...incoming.items],
  };
};

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      listChatRooms: {
        keyArgs: ['Attachments', 'postID', 'createdAt', 'filter'],
        merge: mergeLists
      },
      Attachments: {
        keyArgs: ['id', 'createdAt', 'filter'],
        merge: mergeLists
      },
      ModelAttachmentConnection: {
        merge: true
      },
      Message: {
        fields: {
          Attachments: { // Non-normalized Author object within Book
            merge(existing: any, incoming: any, { mergeObjects }: any) {
              return mergeObjects(existing, incoming);
            },
          },
        },
      },
    },
  },
};

const region = appSyncConfig.aws_appsync_region;

const auth: AuthOptions = {
  type: appSyncConfig.aws_appsync_authenticationType as AUTH_TYPE.API_KEY,
  apiKey: appSyncConfig.aws_appsync_apiKey,
  // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  // credentials: async () => credentials, // Required when you use IAM-based auth.
};

const httpLink = new HttpLink({ uri: url });


const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
]);



const client = new ApolloClient({
  link,
  cache: new InMemoryCache({ typePolicies }),
});


const ApolloWrapper = ({ children }: IClient) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;