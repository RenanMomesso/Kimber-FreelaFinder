import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { ActivityIndicator, Animated, Alert, Text } from 'react-native';
import CustomInputLabel from '../../components/CustomInputLabel';
import CustomButtom from '../../components/CustomButtom';
import { colors } from '../../constants/colors';
import LoginRegisterScreen from '../../Layout/LoginRegisterLayout';
import { LoginScreenNavigationProps } from '../../navigations/types';
import { Formik, FormikProps } from 'formik'
import Antd from 'react-native-vector-icons/AntDesign';
import * as Yup from 'yup';
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { CognitoUser } from 'amazon-cognito-identity-js';
import { useAuthContext, userApiQuery } from '../../context/useContext';
import { useQuery } from '@apollo/client/react';
import { getUser } from '../../graphql/queries';
import { GetUserQuery } from '../../API';


export type SignInDataProps = {
    email: string;
    password: string;
}
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Min password required').required('Password is required'),
})

const LoginWithEmail = () => {
    const { setUser } = useAuthContext()
    const navigation = useNavigation<LoginScreenNavigationProps>();
    const formikRef = useRef<FormikProps<any>>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const buttonAnimation = useRef(new Animated.Value(0)).current;
    const textAnimation = useRef(new Animated.Value(0)).current;
    const AnimatedIcon = Animated.createAnimatedComponent(Antd);
    const animatedIcon = useRef(new Animated.Value(0)).current;

    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);

    // const AnimatedButton = Animated.createAnimatedComponent(Pressable);

    const handleNavigateToForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    }


    // const buttonWidth = buttonAnimation.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [350, 40],
    // })

    // const buttonRadius = buttonAnimation.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [20, 100],
    // })

    // const desapearText = textAnimation.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [1, 0],
    // })

    // const iconAppear = animatedIcon.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0, 1],
    // })



    const buttonDisabled = formikRef.current?.isSubmitting;
    const handleLoginWithEmail = async () => {
        if (isLoading) return;


        setIsLoading(true);
        try {
            const { email, password }: SignInDataProps = formikRef.current?.values;
            const cognitoUser = await Auth.signIn(email, password);
            console.log("cognitoUser",cognitoUser)
            const { data } = await API.graphql(graphqlOperation(getUser, { id: cognitoUser.attributes.sub }))
            console.log("data", data)
            if (data) {
                setUser({ ...cognitoUser, ...data?.getUser });
            } else {
                setUser(cognitoUser);
            }
        } catch (error) {
            console.log("ERROR: ", error)
            Alert.alert("Error accessing", (error as Error).message)
        } finally {
            setIsLoading(false);
        }
    }


    const animatedValue = () => {
        Animated.timing(buttonAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start()
        Animated.timing(textAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start()
        Animated.timing(animatedIcon, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start()
    }

    const animatedValueBack = () => {
        Animated.timing(buttonAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start()
        Animated.timing(textAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start()
        Animated.timing(animatedIcon, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start()
    }





    return (
        <LoginRegisterScreen >
            <Formik
                innerRef={formikRef}
                initialValues={{ email: '', password: '' }}
                onSubmit={handleLoginWithEmail}
                validationSchema={validationSchema}
                validateOnBlur={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        <CustomInputLabel
                            onBlur={handleBlur('email')}
                            style={{ marginTop: 40 }}
                            title='Email address'
                            onChangeText={handleChange('email')}
                            value={values.email}
                            ref={emailRef}
                            onPress={() => emailRef.current.focus()}
                            returnKeyType='next'
                            onSubmitEditing={() => passwordRef.current?.focus()}
                            errorMsg={errors.email}
                            clearIcon={() => handleChange('email')('')}
                        />
                        <CustomInputLabel
                            title='Password'
                            onChangeText={handleChange('password')}
                            value={values.password}
                            ref={passwordRef}
                            onPress={() => passwordRef.current.focus()}
                            secureTextEntry={true}
                            returnKeyType='done'
                            onSubmitEditing={handleSubmit}
                            errorMsg={errors.password}
                        />
                        <Text

                            onPress={handleNavigateToForgotPassword}
                            style={{
                                alignSelf: 'flex-end',
                                color: colors.main.primary,
                                marginTop: 16,
                                fontFamily: 'Roboto-Regular',
                            }}
                        >Forgot Password?</Text>
                        {/* <AnimatedButton onLongPress={animatedValueBack} onPress={animatedValue} style={{ height: 40, borderRadius: buttonRadius, width: buttonWidth, alignSelf: 'center', backgroundColor: colors.main.primary, justifyContent: 'center', alignItems: 'center' }}>
                            <Animated.Text style={{ color: 'white', opacity: desapearText }}>Testing button</Animated.Text>
                            <AnimatedIcon name="check" style={{ position: 'absolute', color:'white', height:30, width:30,fontSize:20, opacity:iconAppear, alignSelf:'center', left:10,top:10 }} />
                        </AnimatedButton> */}

                        <CustomButtom
                            disabled={isLoading}
                            title={isLoading ? <ActivityIndicator size={25} color={colors.main.white} /> : 'Sign In'}
                            textColor={colors.main.white}
                            style={{ marginTop: 36 }}
                            onPress={handleSubmit}
                        />
                    </>
                )
                }
            </Formik>



        </LoginRegisterScreen>
    )
}

export default LoginWithEmail;