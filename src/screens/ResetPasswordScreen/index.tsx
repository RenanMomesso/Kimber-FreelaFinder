import { useNavigation, useRoute, StackActions, CommonActions } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import CustomButtom from '../../components/CustomButtom';
import CustomInputLabel from '../../components/CustomInputLabel';
import { colors } from '../../constants/colors';
import Layout from "../../Layout";
import { LoginScreenNavigationProps } from '../../navigations/types';

const ResetPasswordScreen = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const passwordRef = useRef<TextInputProps | any>(null);
    const confirmPasswordRef = useRef<TextInputProps | any>(null);

    const navigation = useNavigation<LoginScreenNavigationProps>();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleNewPassword = () => {
        if (loading) return;
        setLoading(true)
        setTimeout(() => {
            navigation.dispatch(
                CommonActions.reset({routes: [{name: 'LoginEmail'}]})
            )
            setLoading(false)
        }, 3000)
    }

    return (
        <Layout style={{ paddingHorizontal: 20 }}>
            <Icon name="chevron-left" size={30} style={styles.icon} onPress={handleGoBack} />
            <Text style={styles.pageTitle}>Reset Password</Text>
            <Text style={styles.subTitlePage}>
                Set up the new password bellow.
            </Text>


            <CustomInputLabel
                style={{ marginTop: 40 }}
                title='New Password'
                value={password}
                onChangeText={setPassword}
                ref={passwordRef}
                onPress={() => passwordRef.current?.focus()}
                onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                secureTextEntry
            />
            <CustomInputLabel
                style={{ marginTop: 12 }}
                title='Confirm password'
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                ref={confirmPasswordRef}
                onPress={() => confirmPasswordRef.current?.focus()}
                onSubmitEditing={handleNewPassword}
                secureTextEntry
            />

            <CustomButtom
                title={loading ? <ActivityIndicator size={30} color="white" /> : 'Finish'}
                onPress={handleNewPassword}
                style={{ marginTop: 100 }}
                textColor="#fff"
            />

        </Layout>
    )
};

export default ResetPasswordScreen;

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