import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CustomButtom from '../../components/CustomButtom';
import CustomInputLabel from '../../components/CustomInputLabel';
import { colors } from '../../constants/colors';
import Layout from "../../Layout";
import { LoginScreenNavigationProps } from '../../navigations/types';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)
    const emailRef = useRef<TextInputProps | any>(null);
    const navigation = useNavigation<LoginScreenNavigationProps>();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleForgotPassword = async () => {
        console.log("clickou")
        if (!email) {
            Alert.alert('Email is required');
            return;
        }

        try {
            const response = await Auth.forgotPassword(email)
            console.log(response)
            if(response) navigation.navigate('VerifyCodeScreen')
        } catch (error) {
            console.log(error) 
        } 
        
    }

    console.log("EMAIL",email)

    return (
        <Layout style={{ paddingHorizontal: 20 }}>
            <Icon name="chevron-left" size={30} style={styles.icon} onPress={handleGoBack} />
            <Text style={styles.pageTitle}>Forgot Password</Text>
            <Text style={styles.subTitlePage}>
                Enter your e-mail address bellow to receive the code for setting up a new password.
            </Text>
            <CustomInputLabel
                style={{ marginTop: 40 }}
                title='Email Address'
                value={email}
                onChangeText={setEmail}
                ref={emailRef}
                onPress={() => emailRef.current?.focus()}
                onSubmitEditing={handleForgotPassword}
            />

            <CustomButtom
                title={'Send Code'}
                onPress={handleForgotPassword}
                style={{ marginTop: 100 }}
                textColor="#fff"
            />
        </Layout>
    )
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    icon: {
        marginTop: 30, alignSelf: 'flex-start'
    },
    pageTitle: {
        marginTop: 65,
        color: colors.main.secondary,
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
    },
    subTitlePage: {
        marginTop: 44,
        textAlign: 'center',
        color: colors.gray.gray60,
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    }
})