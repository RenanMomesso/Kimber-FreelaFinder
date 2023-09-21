import { gql, useQuery } from '@apollo/client';
import React, { createContext, useContext } from 'react';
import { ListCategoriesQuery, ListCategoriesQueryVariables, ListJobsQuery, ListJobsQueryVariables, ListNotificationsQuery, ListNotificationsQueryVariables, ListPortifoliosQuery, ListPortifoliosQueryVariables, ListUsersQuery, ListUsersQueryVariables, User } from '../API';
import { listCategories, listJobs, listNotifications, listPortifolios, listUsers } from '../graphql/queries';
import { useAuthContext } from './useContext';


export type GlobalQueriesContextType = {
    portifolios?: ListPortifoliosQuery['listPortifolios']['items'],
    refetchPortifolios?: any,
    loadingPortifolio?: boolean

    notifications?: ListNotificationsQuery['listNotifications']['items'],

    listJobsQuery: ListJobsQuery,
    refetchJobs: any,
    loadingJobs: boolean
    categories?: ListCategoriesQuery['listCategories']['items']
    refetchNotifications: any,
    stopPollingJobs: any
    startPollingJobs: any
    users?: User[]

}

const GlobalQueriesContext = createContext<GlobalQueriesContextType>({
    portifolios: [],
    refetchPortifolios: () => { },
    loadingPortifolio: false,
    notifications: [],
    listJobsQuery: {},
    refetchJobs: () => { },
    loadingJobs: false,
    categories: [],
    refetchNotifications: () => { },
    startPollingJobs: () => { },
    stopPollingJobs: () => { },
    users: []
})

const GlobalQueriesProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuthContext()
    const { data: portifolioData,
        refetch: refetchPortifolios,
        loading: loadingPortifolio
    } = useQuery<ListPortifoliosQuery, ListPortifoliosQueryVariables>(gql(listPortifolios), {
        variables: {
            filter: {
                userID: {
                    eq: user?.id,
                }
            }
        }
    })

    const {
        data: notificationsData,
        loading: loadingNotifications,
        refetch: refetchNotifications
    } = useQuery<ListNotificationsQuery, ListNotificationsQueryVariables>(gql(listNotifications), {
        variables: {
            filter: {
                userID: {
                    eq: user?.id
                },
                and: [{
                    read: {
                        eq: true
                    }
                }]
            }
        }
    })

    const { data: listUsersQuery } = useQuery<ListUsersQuery, ListUsersQueryVariables>(gql(listUsers))



    const { data: listCategoriesQuery } = useQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(gql(listCategories))

    const { data: listJobsQuery, loading: loadingJobs, refetch: refetchJobs, startPolling: startPollingJobs, stopPolling: stopPollingJobs } = useQuery<ListJobsQuery, ListJobsQueryVariables>(gql(listJobs), {
        pollInterval: 500,
       


        onCompleted: () => console.log('If this worked no useEffect needed. 😕'),
    })

    
    const categories = listCategoriesQuery?.listCategories?.items || []
    const portifolios = portifolioData?.listPortifolios?.items || []
    const notifications = notificationsData?.listNotifications?.items.filter(item => item?.read === true) || []
    const users = listUsersQuery?.listUsers?.items.filter(otherUser => otherUser?.id !== user?.id) || []


    const values = { portifolios, refetchPortifolios, loadingPortifolio, notifications, refetchJobs, listJobsQuery, loadingJobs, categories, refetchNotifications, startPollingJobs, stopPollingJobs, users }
    return (
        <GlobalQueriesContext.Provider value={values}>
            {children}
        </GlobalQueriesContext.Provider>
    )
};
export default GlobalQueriesProvider;

export const useGlobalQueries = () => useContext(GlobalQueriesContext)