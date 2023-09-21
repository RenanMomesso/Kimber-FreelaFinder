import React, { useRef } from 'react';
import CustomInputLabel from '../../components/CustomInputLabel';
import CustomButtom from '../../components/CustomButtom';
import LoginRegisterScreen from '../../Layout/LoginRegisterLayout';
import { ActivityIndicator, Alert } from 'react-native';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProps } from '../../navigations/types'
import { Auth } from 'aws-amplify'



const SignupWithEmail = () => {
    const navigation = useNavigation<LoginScreenNavigationProps>();
    const [isLoading, setIsLoading] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');


    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const confirmPasswordRef = useRef<any>(null);

    const handleRegisterAccount = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Password and Confirm password must be the same.")
            return;
        }
        if (isLoading) return;
        if (!!!email) return;
        setIsLoading(true);
        try {
            const response = await Auth.signUp({
                password, username: email, autoSignIn: {
                    enabled: true
                }
            });
            if (response.user) {
                navigation.navigate('VerifyCodeScreen', {
                    email,
                    registerAccount: true
                })
            }
        } catch (error) {
            Alert.alert('Error', (error as Error).message)
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <LoginRegisterScreen signup>
            <CustomInputLabel
                style={{ marginTop: 40 }}
                title='Email address'
                onChangeText={setEmail}
                value={email}
                ref={emailRef}
                onPress={() => emailRef.current.focus()}
                returnKeyType='next'
                onSubmitEditing={() => passwordRef.current?.focus()}
                secureTextEntry={false}
            />
            <CustomInputLabel
                title='Password'
                onChangeText={setPassword}
                value={password}
                ref={passwordRef}
                onPress={() => passwordRef.current.focus()}
                secureTextEntry={true}
                returnKeyType='next'
                onSubmitEditing={() => confirmPasswordRef.current?.focus()}

            />
            <CustomInputLabel
                title='Confirm password'
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                ref={confirmPasswordRef}
                onPress={() => confirmPasswordRef.current.focus()}
                secureTextEntry={true}
                returnKeyType='done'
            />
            <CustomButtom
                disabled={isLoading}
                title={isLoading ? <ActivityIndicator size={25} color={colors.main.white} /> : 'Create Account'}
                textColor={colors.main.white}
                style={{ marginTop: 36 }}
                onPress={handleRegisterAccount}
            />




        </LoginRegisterScreen>
    )
}

export default SignupWithEmail;