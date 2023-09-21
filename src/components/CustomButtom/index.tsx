import React, { ReactElement } from 'react';
import { Pressable, PressableProps, useWindowDimensions } from 'react-native';
import { colors } from '../../constants/colors';
import TextCustom from '../Text';


export interface ICustomButtomProps extends PressableProps {
    onPress: () => void
    title: string | ReactElement
    type?: 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark'
    icon?: React.ReactElement
    style?: PressableProps['style'] | any
    textColor?: string
}

const CustomButtom = ({ onPress, title, type = 'info', icon, style, textColor, ...props }: ICustomButtomProps) => {

    const { width } = useWindowDimensions()

    let bgColor: string;
    if (type === 'info') bgColor = colors.meaning.info
    else if (type === 'success') bgColor = colors.meaning.success
    else if (type === 'danger') bgColor = colors.meaning.error
    else if (type === 'warning') bgColor = colors.meaning.warning
    else if (type === 'light') bgColor = colors.main.white
    else if (type === 'dark') bgColor = colors.main.secondary
    else bgColor = colors.meaning.info



    return (
        <Pressable onPress={onPress} {...props} style={{
            backgroundColor: bgColor,
            width: !!icon ? width * .85 : '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            height: !!icon ? width * .12 : width * .12,
            flexDirection: 'row',
            ...style
        }}>
            {icon && <>{icon}</>}
            <TextCustom category='h5' style={{ color: textColor, paddingLeft: 5 }} theme={type === 'light' ? 'dark' : 'light'}>{title}</TextCustom>
        </Pressable>
    )
}

export default CustomButtom;