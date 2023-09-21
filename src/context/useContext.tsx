import React, { createContext, Dispatch, SetStateAction, useState, useContext, useEffect } from 'react'
import { CognitoUser } from 'amazon-cognito-identity-js'
import { API, Auth, graphqlOperation, Hub, Storage, } from 'aws-amplify'
import { HubCallback } from '@aws-amplify/core'
import { GetUserQuery, ListPortifoliosQuery, ListPortifoliosQueryVariables } from '../API'
import { gql, useQuery } from '@apollo/client'
import { getUser, listJobs, listPortifolios } from '../graphql/queries'
import Loading from '../components/Loading'


export type userType = CognitoUser & GetUserQuery['getUser'] & { attributes: any } | undefined | null

export type AuthContextType = {
    user: userType
    setUser: Dispatch<SetStateAction<userType>>;
    setRefreshList: Dispatch<SetStateAction<boolean>>;
    refreshList?: boolean;
    refreshAvatar?: boolean;
    setRefreshAvatar?: Dispatch<SetStateAction<boolean>>;
    refetchPortifolios?: boolean;
    setRefetchPortifolios?: Dispatch<SetStateAction<boolean>>;
    portifoliosData?: ListPortifoliosQuery;
}
export const AuthContext = createContext<AuthContextType>({
    user: undefined,
    setUser: () => { },
    setRefreshList: () => { },
    refreshList: false,
    refreshAvatar: false,
    refetchPortifolios: false,
    setRefreshAvatar: () => { },
    portifoliosData: undefined,
})

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<userType>(undefined)
    const [refreshList, setRefreshList] = useState<boolean>(false)
    const [refreshAvatar, setRefreshAvatar] = useState<boolean>(false)
    const [refetchPortifolios, setRefetchPortifolios] = useState<boolean>(false)
    const { data, error } = useQuery<GetUserQuery & { photo: string }>(gql(getUser), { variables: { id: user?.attributes?.sub } })

    const { data: portifoliosData, refetch, loading, } = useQuery<ListPortifoliosQuery, ListPortifoliosQueryVariables>(gql(listPortifolios), {
        variables: {
            filter: {
                userID: {
                    eq: user?.id,
                }
            }
        }
    })

    





    const checkUser = async () => {
        try {
            const cognitoUser = await Auth.currentAuthenticatedUser({
                bypassCache: true
            })
            setUser({ ...cognitoUser, ...data?.getUser })
        } catch (error) {
            console.log("ERROR CHECKING USER", error)
            setUser(null)
        }
    }

    useEffect(() => {
        checkUser()
    }, [data])

    useEffect(() => {
        const listener: HubCallback = (data) => {
            const { event } = data.payload

            if (event === 'signOut') {
                setUser(null)
            }
            if (event === 'signIn') {
                checkUser();
            }

        };
        Hub.listen('auth', listener)
        return () => Hub.remove('auth', listener)
    }, [])




    const values = { portifoliosData, refetch, setUser, user, setRefreshList, refreshList, setRefreshAvatar, refetchPortifolios, setRefetchPortifolios }


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);



