import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuthContext } from '../context/useContext';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import FullImageScreen from '../screens/FullImageScreen';
import JobsHistoricDetails from '../screens/JobsHistoricDetails';
import LoginScreen from '../screens/LoginScreen';
import LoginWithEmail from '../screens/LoginWithEmail';
import Onboarding from '../screens/Onboarding';
import OtherUserProfileScreen from '../screens/OtherUserProfileScreen';
import PdfFullsizeScreen from '../screens/PdfFullsizeScreen';
import PortifolioScreen from '../screens/PortifolioScreen';
import PortifoliosScreen from '../screens/PortifoliosScreen';
import NewPortifolioScreen from '../screens/PortifoliosScreen/NewPortifolioScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SignupScreen from '../screens/SignupScreen';
import SignupWithEmail from '../screens/SignupWithEmail';
import Skills from '../screens/Skills';
import VerifyCodeScreen from '../screens/VerifyCodeScreen';
import BottomNavigation from './BottomNavigation';
import ChatNavigation from './ChatNavigation';
import JobsCreatedNavigation from './JobsCreatedNavigation';
import JobsHistoricNavigation from './JobsHistoric';
import { navigationRef } from './NavigationRef';
import { RootNavigationProps } from './types';

const MainStackNavigation = () => {
    const { user } = useAuthContext()
    const Stack = createStackNavigator<RootNavigationProps>();



    if (user === undefined) {
        return <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={"black"} />
        </View>
    }

    let stackScreen = null;
    if (!user) {
        stackScreen = (
            <>
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="LoginEmail" component={LoginWithEmail} />
                <Stack.Screen name="SignupEmail" component={SignupWithEmail} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="VerifyCodeScreen" component={VerifyCodeScreen} />
                <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
            </>
        )
    } else if (user.firstTimeLoggin) {
        stackScreen = (
            <>
                <Stack.Screen name="SkillsScreen" component={Skills} />
            </>
        )
    } else {
        stackScreen = (
            <>  

                <Stack.Screen name="ProfileScreen" component={BottomNavigation} />
                <Stack.Screen name="ChatNavigation" component={ChatNavigation} />
                <Stack.Screen name="JobsHistoricNavigation" component={JobsHistoricNavigation} />
                <Stack.Screen name="JobsHistoricDetails" component={JobsHistoricDetails} />
                <Stack.Screen name="JobsCreatedNavigation" component={JobsCreatedNavigation} />
                <Stack.Screen name="NewPortifolioScreen" component={NewPortifolioScreen} />
                <Stack.Screen name="PortifolioScreen" component={PortifolioScreen} />
                <Stack.Screen name="PdfFullsizeScreen" component={PdfFullsizeScreen} />
                <Stack.Screen name="OtherUserProfileScreen" component={OtherUserProfileScreen} />
                <Stack.Screen name="AnalyticsScreen" component={AnalyticsScreen} />

                <Stack.Screen name="FullImageScreen" component={FullImageScreen} options={{
                    animationEnabled: false,
                    presentation: 'transparentModal',

                }} />
                <Stack.Screen name="PortifoliosScreen" component={PortifoliosScreen} />
                <Stack.Screen name="EditProfileScreen"
                    options={{
                        ...TransitionPresets.FadeFromBottomAndroid
                    }}
                    component={EditProfileScreen} />
            </>
        )
    }


    const Linking: LinkingOptions<RootNavigationProps> = {
        prefixes: ['freelafinder://', 'https://freelafinder.com'],
        config: {
            initialRouteName: !user?.fullname ? 'Onboarding' : 'ProfileScreen',
            screens: {
                ProfileScreen: 'profile',
                ChatNavigation: {
                    screens: {
                        Chats: 'chats',
                    }
                }
            }
        }
    }

    return (
        <NavigationContainer ref={navigationRef} linking={Linking}>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalFadeTransition,
            }}
            >
                {stackScreen}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigation