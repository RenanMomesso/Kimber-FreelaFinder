import React, { forwardRef, ReactElement } from 'react';
import { TextInput, TextInputProps as NativeTextInputProps } from 'react-native';
import textInputStyles from './CustomTextInput.styled';


interface IButtonInputTextProps extends NativeTextInputProps {
    placeholderText?: string;

}

const CustomTextInput = forwardRef<NativeTextInputProps, IButtonInputTextProps>(({ placeholderText, ...props }, ref: any): ReactElement => {
    return (
        <TextInput
            ref={ref}
            placeholderTextColor={"lightgray"}
            style={textInputStyles.input}
            {...props}
        />
    )
})

CustomTextInput.displayName = 'CustomTextInput';


export default CustomTextInput;