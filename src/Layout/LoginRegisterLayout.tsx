import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButtom from '../components/CustomButtom';
import { default as CustomText, default as TextCustom } from '../components/Text';
import { colors } from '../constants/colors';
import { LoginScreenNavigationProps, RootNavigationProps, } from '../navigations/types';
import Layout, { ILayoutProps } from './index';

export interface ILoginRegisterLayoutProps extends ILayoutProps {
    children: React.ReactNode
    loggin?: boolean
    signup?: boolean
    disabledButton?: boolean
}

type ILoginRegisterProps = RouteProp<RootNavigationProps>;
const LoginRegisterScreen = ({ children, signup }: ILoginRegisterLayoutProps) => {
    const { width, height } = useWindowDimensions()
    const navigation = useNavigation<LoginScreenNavigationProps>();
    const titleLogin = !signup ? 'Hello, you’ve been missed here' : 'Join our community today'
    const subTitleLogin = !signup ? 'Welcome back! Sign in to continue.' : 'Create an account to continue'

    const { name } = useRoute<ILoginRegisterProps>();


    const handleGoBack = () => {
        if (name !== 'LoginEmail') navigation.goBack();
        else navigation.navigate('Login')
    };



    const handleLoginEmail = () => {
        navigation.navigate('LoginEmail');
    };

    const handleSignupEmail = () => {
        navigation.navigate('SignupEmail');
    }

    const navigateToLoginScreen = () => {
        navigation.navigate('LoginEmail');
    }

    const marginTop = width * 0.1
    const bigScreen = height > 700

    return <Layout style={{ flex: 1, paddingHorizontal: 20 }}>
        <Icon name="chevron-left" size={30} style={{ marginTop }} onPress={handleGoBack} />
        <CustomText category='h3semibold' theme='dark' style={{ marginTop: bigScreen ? marginTop : -10, alignSelf: 'center', color: colors.main.secondary }}>
            {titleLogin}
        </CustomText>
        <CustomText category='h6' theme='dark' style={{ marginTop: 10, alignSelf: 'center', color: colors.gray.gray60 }}>
            {subTitleLogin}
        </CustomText>
        {children}

        {signup && <TextCustom
            onPress={handleSignupEmail}
            category='h6'
            theme='dark'
            style={{ marginTop: 18, alignSelf: 'center', textAlign: 'center' }}>
            By Creating Account, you agree to our
            <Text style={{ color: colors.main.primary }}>
                {" "}Terms of
                Service and Privacy Policy.
            </Text>
        </TextCustom>
        }

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: signup ? bigScreen ? 10 : 5 : bigScreen ? 60 : 30 }}>
            <View style={{ borderBottomWidth: 0.5, height: 0.5, marginTop: 1, flex: 1, backgroundColor: colors.gray.gray10 }} />
            <Text style={{ marginHorizontal: 8, fontSize: 14, color: colors.gray.gray60 }}>or</Text>
            <View style={{ borderBottomWidth: 0.5, height: 0.5, marginTop: 1, flex: 1, backgroundColor: colors.gray.gray10 }} />
        </View>


        <CustomButtom
            icon={<MaterialCommunityIcons name="google" color={'black'} size={16} style={{ marginRight: 9, marginBottom: 2, marginLeft: 0, paddingLeft: 0 }} />}
            type='light'
            style={{ marginTop: signup ? bigScreen ? 25 : 10 : bigScreen ? 60 : 20, borderWidth: 1, borderColor: '#DDD' }}
            title='Continue with Google'
            onPress={handleLoginEmail}
        />
        <CustomButtom
            textColor='white'
            icon={<MaterialCommunityIcons name="apple" color={'white'} size={16} style={{ marginRight: 8, marginBottom: 2, marginLeft: -10 }} />}
            type="dark"
            style={{ marginTop: 10 }}
            title='Continue with Facebook'
            onPress={handleLoginEmail}
        />
        {signup ? <TextCustom
            onPress={navigateToLoginScreen}
            category='h6'
            theme='dark'
            style={{ marginTop: 18, alignSelf: 'center' }}
        >Already have an account?
            <Text
                style={{ color: colors.main.primary }}>{" "}Sign in</Text>
        </TextCustom>
            :
            <TextCustom
                onPress={handleSignupEmail}
                category='h6'
                theme='dark'
                style={{ marginTop: 18, alignSelf: 'center' }} >
                Don’t have an account? <Text
                    style={{ color: colors.main.primary }}>Create Account</Text>
            </TextCustom>
        }


    </Layout>
}

export default LoginRegisterScreen;