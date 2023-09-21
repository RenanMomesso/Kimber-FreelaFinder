import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import React from 'react';
import { Alert, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButtom from '../../components/CustomButtom';
import TextCustom from '../../components/Text';
import { colors } from '../../constants/colors';
import { Apple, GoogleIcon, Logo } from '../../constants/images/svg';
import Layout from '../../Layout';
import { LoginScreenNavigationProps } from '../../navigations/types';
import dimensions from '../../utils/dimensions';


const HEIGHT_SCREEN = dimensions.height
const LoginScreen = () => {
    const navigation = useNavigation<LoginScreenNavigationProps>();

    const handleLoginEmail = () => {
        navigation.navigate('LoginEmail');
    };

    const handlePressSignUp = () => {
        navigation.navigate('Signup')
    }

    const handleLoginFacebook = async () => {
        try {
            const res = await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook });
            console.log(res);
        } catch (error) {
            console.log("Error: ", error)
            Alert.alert('Error', (error as Error).message)
            return;
        }
    }

    const handleLoginGoogle = async () => {
        try {
            const res = await Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google });
            console.log(res);
        } catch (error) {
            console.log("Error: ", error)
            Alert.alert('Error', (error as Error).message)
            return;
        }
    }

    console.log("HEIGHT_SCREEN",HEIGHT_SCREEN)
    return (
        <Layout style={{ alignItems: 'center' }}>
            <Logo style={{ marginTop: HEIGHT_SCREEN * 0.15 }} />
            <TextCustom category='h3semibold' style={{ marginTop: HEIGHT_SCREEN < 700 ?  HEIGHT_SCREEN * 0.12 : HEIGHT_SCREEN * 0.2, color: colors.main.secondary }}>Welcome to Kimber</TextCustom>
            <CustomButtom
                textColor='white'
                icon={<MaterialCommunityIcons name="email" color={'white'} size={16} style={{ marginRight: 5, marginBottom: 2, marginLeft: 0, paddingLeft: 0 }} />}
                style={{ marginTop: 150 }}
                title='Continue with E-mail'
                onPress={handleLoginEmail}
            />
            <CustomButtom
                icon={<GoogleIcon style={{ marginRight: 1, marginBottom: 2, marginLeft: 0, paddingLeft: 0 }} />}
                type='light'
                style={{ marginTop: 10 }}
                title='Continue with Google'
                onPress={handleLoginGoogle}
            />
            <CustomButtom
                textColor='white'
                icon={<Apple name="apple" color={'white'} size={16} style={{ marginRight: 5, marginBottom: 2, marginLeft: -10 }} />}
                type="dark"
                style={{ marginTop: 10 }}
                title='Continue with Facebook'
                onPress={handleLoginFacebook}
            />

            <TextCustom onPress={handlePressSignUp} category='h6' theme='dark' style={{ marginTop: 32, }} >Don’t have an account? <Text style={{ color: colors.main.primary }}>Create Account</Text></TextCustom>
        </Layout>
    )
}

export default LoginScreen;
