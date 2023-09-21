import React from 'react';
import JobsHistoric from '../screens/JobsHistoric'
import CompletedJobs from '../screens/JobsHistoric/CompletedJobs'
import FinishedJobs from '../screens/JobsHistoric/FinishedJobs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native'
import BackIcon from '../components/BackIcon';
import Text from '../components/Text';



const TopTabNavigator = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF", }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
                <BackIcon />
                <Text category='h3semibold' style={{ textAlign:'center', flex:1, color:"#202020"}}>Jobs Historic</Text>
            </View>
            <Tab.Navigator screenOptions={{

            }}>
                <Tab.Screen name="AppliedsJobs" options={{
                    title: "APPLIEDS"
                }} component={JobsHistoric} />
                <Tab.Screen name="CompletedJobs" options={{
                    title: "COMPLETED"
                }} component={CompletedJobs} />
                <Tab.Screen name="FinishedJobs" options={{
                    title: "FINISHED"
                }} component={FinishedJobs} />

            </Tab.Navigator>
        </SafeAreaView>
    )
};



export default TopTabNavigator;