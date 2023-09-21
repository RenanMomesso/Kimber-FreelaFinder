import {Auth} from 'aws-amplify'
import { Alert } from 'react-native'
import { navigationRef } from '../navigations/NavigationRef'

export const API_AUTH = {
    signOut: async () => {
        try {
            await Auth.signOut()
            navigationRef.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })
        } catch (error) {
            Alert.alert("Error signing out!", (error as Error).message)
        }
    }
}