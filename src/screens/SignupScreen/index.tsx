import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Layout from '../../Layout';
import CustomButtom from '../../components/CustomButtom';
import TextCustom from '../../components/Text';
import { colors } from '../../constants/colors';
import { Logo } from '../../constants/images/svg';
import styles from './SignupScreen.styled';

const SignupScreen = () => {
    const navigation = useNavigation()

    const handleRegisterWiithEmail = () => {
        navigation.navigate('SignupEmail');
    };



    const handleNavigateLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <Layout style={{ alignItems: 'center' }}>
            <Logo style={{ marginTop: 99 }} />
            <TextCustom category='h3semibold' theme='dark' style={{ marginTop: 150 }}>Join to Kimber</TextCustom>
            <CustomButtom
                textColor='white'
                icon={<MaterialCommunityIcons name="email" color={'white'} size={16} style={styles.icon} />}
                style={{ marginTop: 28 }}
                title='Register with E-mail'
                onPress={handleRegisterWiithEmail}
            />
            <CustomButtom
                icon={<MaterialCommunityIcons name="google" color={'black'} size={16} style={styles.icon} />}
                type='light'
                style={{ marginTop: 10, borderWidth: 1, borderColor: colors.gray.gray10 }}
                title='Register with Google'
                onPress={handleRegisterWiithEmail}
            />
            <CustomButtom
                textColor='white'
                icon={<MaterialCommunityIcons name="apple" color={'white'} size={16} style={{ marginRight: 8, marginBottom: 2, marginLeft: -10 }} />}
                type="dark"
                style={{ marginTop: 10 }}
                title='Register with Apple'
                onPress={handleRegisterWiithEmail}
            />

            <TextCustom category='h6' theme='dark' style={{ marginTop: 24 }} onPress={handleNavigateLogin} >Already have an account? <Text style={{ color: colors.main.primary }}>Sign in</Text></TextCustom>
            <TextCustom category='h6' theme='dark' style={styles.policyAndTerms}>By Signing up, you agree to our Terms of Service
                and Privacy Policy.</TextCustom>
        </Layout>
    )
}



export default SignupScreen;
