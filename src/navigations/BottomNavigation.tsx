import { gql, useSubscription } from '@apollo/client';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransitionPresets } from '@react-navigation/stack';
import Lottie from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Notification, OnCreateNotificationSubscription } from '../API';
import { HomeFocused, HomeIcon, NotificationsFocused, NotificationsIcon, ProfileIcon, SearchFocused, SearchIcon } from '../constants/icons';
import { useAuthContext } from '../context/useContext';
import { useGlobalQueries } from '../context/useQueries';
import { onCreateNotification } from '../graphql/subscriptions';
import { useNotification } from '../hooks/Notification';
import CreatePostJobScreen from '../screens/CreatePostJob';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import JobNavigation from './JobNavigation';
import { navigationRef } from './NavigationRef';
import { BottomNavigationProps } from './types';


const BottomNavigation = () => {
    const { displayNotification } = useNotification()
    const { user } = useAuthContext()
    const [newNotifications, setNewN] = useState([])
    const { notifications } = useGlobalQueries()
    console.log("🚀 ~ file: BottomNavigation.tsx:25 ~ BottomNavigation ~ notifications", notifications)
    const createPostRef = useRef(null)

    console.log("newNotifications", newNotifications.map((item: Notification) => item.read))

    const handlePressCreatePostIcon = () => {
        createPostRef.current?.play(50, 80)
        navigationRef.navigate("createPost")
    };

    const { data: useNotSub } = useSubscription<OnCreateNotificationSubscription>(gql(onCreateNotification))


    useEffect(() => {
        if (useNotSub?.onCreateNotification) {
            setNewN(previous => [useNotSub.onCreateNotification as Notification[] || [], ...previous])

        }
    }, [useNotSub])

    const allNotifications = [...newNotifications, ...notifications].filter((item: Notification) => item.read && item.senderID !== user?.attributes?.sub && item.userID === user?.id) || []
    const uniques = [] as Notification[]
    const removeDuplicateds = allNotifications.filter(notification => {
        const isDuplicated = uniques.includes(notification?.jobID)
        
        if (!isDuplicated) {
            uniques.push(notification?.jobID)
            return true
        }
        return false
        
    })

    const handleTriggerNotification = () => {
        if (useNotSub?.onCreateNotification?.read && useNotSub?.onCreateNotification?.senderID !== user?.attributes?.sub) {
            displayNotification("Important Notification", "You have new notifications")
        }
    }
    useEffect(() => {
        handleTriggerNotification()
    }, [useNotSub?.onCreateNotification?.id])



    const Tab = createBottomTabNavigator<BottomNavigationProps>();
    return <Tab.Navigator
        screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#FFF',
                height: 70,
                borderTopWidth: 1,
            },
            ...TransitionPresets.ModalFadeTransition,

            tabBarShowLabel: false,
        }}
    >
        <Tab.Screen name='home' component={JobNavigation} options={{

            tabBarIcon: ({ color, size, focused }) => (<>
                {focused ? <HomeFocused width={size * 1.3} height={size * 1.3} color={color} /> : <HomeIcon width={size} height={size} color={color} />}
            </>
            )
        }} />
        <Tab.Screen
            name='search'
            component={SearchScreen}
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <>
                        {focused ? <SearchFocused width={size * 1.3} height={size * 1.3} color={color} /> : <SearchIcon width={size} height={size} color={color} />}
                    </>
                )
            }} />
        <Tab.Screen
            name='createPost'
            component={CreatePostJobScreen}

            options={{
                tabBarButton: ({ route, navigation, ...props }) => {
                    // how to get navigation here and click on button
                    return <Pressable onPress={handlePressCreatePostIcon} >
                        <Lottie
                            ref={createPostRef}
                            source={require('../constants/images/lottie/mainButton.json')}
                            autoPlay={true}
                            loop={false}
                            style={{
                                height: 65,
                                width: 65,
                                resizeMode: 'cover',
                                marginBottom: 5
                            }}
                        /></Pressable>
                },

            }} />
        <Tab.Screen
            name='notifications'
            component={NotificationsScreen}
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <>
                        {removeDuplicateds.length > 0 && <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', height: 18, right: 20, top: 4, paddingHorizontal: 6, backgroundColor: 'red', borderRadius: 60 }}>
                            <Text style={{
                                fontSize: 12, fontWeight: 'bold', color: 'white',
                                textShadowColor: 'white',
                                textShadowOffset: { width: 0, height: 0 },
                                textShadowRadius: 5,
                            }}>{removeDuplicateds.length}</Text>
                        </View>}
                        {focused ? <NotificationsFocused width={size * 2} height={size * 1.2} color={color} /> : <NotificationsIcon width={size} height={size} color={color} />}
                    </>
                )
            }} />
        <Tab.Screen
            name='profile'
            component={ProfileScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <ProfileIcon width={size} height={size} color={color} />
                )
                ,
                ...TransitionPresets.ModalFadeTransition,
            }} />

    </Tab.Navigator>
}

export default BottomNavigation;