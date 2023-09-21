import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Animated, Pressable, PressableProps, StyleSheet, TextInputProps, TextProps } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../constants/colors';
import CustomTextInput from '../CustomTextInput';


interface IPressableWithInputProps extends PressableProps {
    value: string | number | any;
    onChangeText: (text: string) => void;
    onPress?: () => void;
    title: string;
    returnKeyType?: TextInputProps['returnKeyType']
    onSubmitEditing?: TextInputProps['onSubmitEditing']
    buttonProps?: PressableProps;
    textProps?: TextProps;
    inputTextProps?: TextInputProps;
    style?: PressableProps['style'] | any
    secureTextEntry?: boolean;
    clearIcon?: () => void;
    errorMsg?: string | null | any
}

const PressableInput = forwardRef<any, IPressableWithInputProps>(({
    value,
    onChangeText,
    title = 'Title',
    onPress,
    returnKeyType,
    onSubmitEditing,
    style,
    secureTextEntry,
    clearIcon,
    errorMsg
}, ref) => {
    const [inputHeight, setInputHeight] = useState<null | number>(null)
    const [passwordVisible, setPasswordVisible] = useState(false)

    const animationText = useRef(new Animated.Value(0)).current;
    const animationIcon = useRef(new Animated.Value(0)).current;
    const errorAnimation = useRef(new Animated.Value(0)).current;

    const scaleY = animationText.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0],
    })

    const scale = animationText.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 11],
    })

    const opacity = animationIcon.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    })
    const opacityText = errorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    })

    const handleAnimation = (val: number) => {
        Animated.timing(animationText, {
            toValue: val,
            duration: 300,
            useNativeDriver: false,
        }).start()
    }

    const onBlur = () => !value && handleAnimation(0)
    const onFocus = () => handleAnimation(1)

    useEffect(() => {
        if (value.length > 0 && !!clearIcon) {
            Animated.timing(animationIcon, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start()
        } else {
            Animated.timing(animationIcon, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start()
        }
    }, [value, !!clearIcon])

    useEffect(() => {
        if (!!errorMsg) {
            Animated.timing(errorAnimation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
            }).start()
        } else {
            Animated.timing(errorAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start()
        }
    }, [value, !!clearIcon])

    //
    return (
        <Pressable
            style={[styles.inputContainer, style, { borderColor: errorMsg ? colors.meaning.error : colors.gray.gray40 }]}
            onPress={onPress}
            onLayout={(e) => !inputHeight && setInputHeight(e.nativeEvent.layout.height)}
        >
            <Animated.Text style={{ fontFamily: 'Poppins-Regular', fontSize: scale, color: colors.gray.gray40, left: 20, position: 'absolute', transform: [{ translateY: scaleY }] }}>
                {title}
            </Animated.Text>
            {!!clearIcon && <Animated.Text onPress={clearIcon} style={[{ position: 'absolute', right: 30, top: '35%', fontSize: 15, zIndex: 3, opacity }]}>X</Animated.Text>}

            {secureTextEntry ? (passwordVisible ?
                <Icons name='ios-eye-off-outline' style={styles.eyeIcon} onPress={() => setPasswordVisible(c => !c)} />
                : (
                    <Icons name='ios-eye-outline' style={styles.eyeIcon} onPress={() => setPasswordVisible(c => !c)} />)) : null}
            <CustomTextInput
                onFocus={onFocus}
                onBlur={onBlur}
                returnKeyType={returnKeyType}
                ref={ref}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                secureTextEntry={passwordVisible ? false : secureTextEntry}
                textAlignVertical='top'
                
            />
            <Animated.Text style={[styles.errorMsg, { opacity:opacityText }]} >
                {errorMsg}
            </Animated.Text>
        </Pressable>
    )
})



export default PressableInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        borderColor: colors.gray.gray
    },
    eyeIcon: {
        position: 'absolute',
        right: 20,
        top: '35%',
        fontSize: 20,
        zIndex: 2
    },
    errorMsg: {
        fontSize: 11,
        color: colors.meaning.error,
        marginTop:2
    }
})
