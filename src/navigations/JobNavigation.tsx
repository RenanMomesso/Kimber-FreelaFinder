import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import JobDetails from '../screens/JobDetails'
import JobApplication from '../screens/JobApplication'
import { JobCardNavigationProps } from './types'

const JobStack = createStackNavigator<JobCardNavigationProps>()

const JobNavigation = () => {
    return (
        <JobStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <JobStack.Screen name="Job" component={Home}/>
            <JobStack.Screen name="jobDetail" component={JobDetails} />
            <JobStack.Screen name="JobApplication" component={JobApplication} />
            
        </JobStack.Navigator>
    )
}

export default JobNavigation

