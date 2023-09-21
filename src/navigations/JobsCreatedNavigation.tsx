import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import JobsCreated from '../screens/JobsCreated';
import JobCreatedDetails from '../screens/JobCreatedDetails';

const JobsCreatedNavigation: React.FC = () => {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="JobsCreated"
                options={{
                    title: "Jobs created by me"
                }}
                component={JobsCreated}
            />
            <Stack.Screen
                name="JobCreatedDetails"
                options={{
                    headerShown: false
                }}
                component={JobCreatedDetails}
            />
        </Stack.Navigator>
    )
}

export default JobsCreatedNavigation;