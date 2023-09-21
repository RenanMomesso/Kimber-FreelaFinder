import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Chats from '../screens/Chats';
import Chat from '../screens/Chat';

export type ChatNavigations  = {
    Chats: undefined;
    Chat: {
        id: string;
    }
}

const ChatNavigation = () => {
    const Stack = createStackNavigator<ChatNavigations>();
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Chats" component={Chats} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    )
}

export default ChatNavigation;