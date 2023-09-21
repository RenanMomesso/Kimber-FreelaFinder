import { useNavigation, useRoute, RouteProp, useFocusEffect } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CustomButtom from '../../components/CustomButtom';
import OTPInput from '../../components/OTPInput';
import { colors } from '../../constants/colors';
import Layout from "../../Layout";
import { LoginScreenNavigationProps, RootNavigationProps } from '../../navigations/types';
import { Auth } from 'aws-amplify';

type ProfileScreenRouteProp = RouteProp<RootNavigationProps, 'VerifyCodeScreen'>;

const VerifyCodeScreen = () => {

    const [code, setCode] = useState("")
    const [pinReady, setPinReady] = useState(false)
    const MAX_LENGTH = 6
    const { params } = useRoute<ProfileScreenRouteProp>();

    useFocusEffect(
        React.useCallback(() => {
            if (!params?.email) navigation.goBack();
        }, [params?.email])
    );

    const navigation = useNavigation<LoginScreenNavigationProps>();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleVerifyCode = async () => {
        
        try {
            const confirmAccount = await Auth.confirmSignUp(params?.email, code)
            if(confirmAccount) navigation.navigate("LoginEmail")
        } catch (error) {
            console.log("error", error)
        } finally {
            
            setCode("")
        }
        // navigation.navigate('ResetPasswordScreen')
    }

    return (
        <Layout style={{ paddingHorizontal: 20 }}>
            <Icon name="chevron-left" size={30} style={styles.icon} onPress={handleGoBack} />
            <Text style={styles.pageTitle}>Verify Account</Text>
            <Text style={styles.subTitlePage}>
                Enter the code or click on the link received via e-mail, to confirm your account.
            </Text>

            <OTPInput
                setPinReady={setPinReady}
                code={code}
                setCode={setCode}
                maxLength={MAX_LENGTH}
            />
            <Text onPress={handleGoBack} style={{ marginTop: 30 }}>Didn’t receive? <Text style={{ color: colors.main.primary }}>Resend code</Text></Text>

            <CustomButtom
                title={'Verify Code'}
                onPress={handleVerifyCode}
                style={{ marginTop: 100 }}
                textColor="#fff"
            />
        </Layout>
    )
};

export default VerifyCodeScreen;

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