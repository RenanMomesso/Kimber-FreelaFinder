import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../constants/colors';



// REFAZER SCREEN
const OTPInput = ({ setPinReady, code, setCode, maxLength = 6 }) => {

    const codeDigitsArray = new Array(maxLength).fill(0);
    const textInputRef = useRef(null);
    const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

    const handlePressInput = () => {
        setInputContainerIsFocused(true);
        textInputRef.current?.focus();
    }



    const handleBlur = () => {
        setInputContainerIsFocused(false);
    }

    const codeInputDigit = (_value, index) => {
        const emptyInputChar = "";
        const digit = code[index] || emptyInputChar;

        const isCurrentDigit = index === code.length;
        const isLastDigit = index === maxLength - 1;
        const isCodeFull = code.length === maxLength;

        const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull)
        const styledOtpInput = inputContainerIsFocused && isDigitFocused
        // ? styles.otpInputFocused : styles.otpInput;

        return (
            <View style={[styles.otpInput, styledOtpInput && {
                backgroundColor: colors.main.primary,

            }, { paddingHorizontal: 15 }]} key={index}>
                <Text style={[styles.otpInputText, { color: styledOtpInput ? 'white' : colors.main.primary }]}>{digit}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.otpInputContainer} onPress={handlePressInput}>
                {codeDigitsArray.map(codeInputDigit)}
            </Pressable>
            <TextInput
                autoFocus
                style={styles.hiddenInput}
                maxLength={maxLength}
                keyboardType="number-pad"
                returnKeyType='done'
                textContentType='oneTimeCode'
                onChangeText={setCode} value={code}
                ref={textInputRef}
                onBlur={handleBlur}
            />
        </View>
    )
}

export default OTPInput

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    hiddenInput: {
        width: 1,
        height: 1,
        opacity: 0,
        position: 'absolute',
    },
    otpInputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    otpInput: {
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 16,
        paddingVertical: 13,
        justifyContent: 'center',
        alignItems: 'center',
        width:50

    },
    otpInputText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.main.primary
    },


})