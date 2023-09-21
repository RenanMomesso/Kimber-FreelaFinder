import React from 'react'
import { TextInput } from 'react-native'
import Text from '../../components/Text';
import styles from './styles';
import { colors } from '../../constants/colors';


export interface InputComponentProps {
    title: string,
    inputValue: string,
    inputChange: (value: any) => void,
    placeholder: string
    multiline?: boolean
    maxLength?: number
    numberOfLines?: number
    textAlignVertical?: 'center' | 'top' | 'bottom'
    minLength?: number
}

const InputComponent = ({
    numberOfLines = 1,
    title,
    inputValue,
    inputChange,
    placeholder,
    multiline = false,
    maxLength = 30,
    textAlignVertical = 'center',
    minLength = 30
}: InputComponentProps) => {

    return (
        <>
            <Text style={styles.inputTextTitle} category="h5">{title}</Text>
            <TextInput
                maxLength={maxLength}
                placeholder={placeholder}
                value={inputValue}
                multiline={multiline}
                numberOfLines={numberOfLines}
                onChangeText={e => inputChange(e)}
                style={[styles.inputText, { textAlignVertical }]} />
            <Text style={{ alignSelf: 'flex-end', color:minLength - inputValue.length <= 0 ? '#000' : colors.meaning.error }}>Minimum characterers: {minLength.toString()}</Text>
        </>
    )
};

export default InputComponent