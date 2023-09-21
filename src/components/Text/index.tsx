import React, { ReactElement } from 'react';
import { Text, TextProps } from 'react-native';
import { font } from '../../constants/topography';

export interface ITextProps extends TextProps {
    children: ReactElement | string | ReactElement[] | string[] | number | null;
    theme?: 'dark' | 'light';
    category?: 'h1' | 'h2' | 'h3semibold' | 'h3medium' | 'h3regular' | 'h4' | 'h5' | 'h5m' | 'h6' | 'p' | 'span';
    style?: TextProps['style'];
    color?: string
}

export interface TextSizeFamily {
    fontWeight: string;
    fontSize: number;
}

const TextCustom: React.FC<ITextProps> = ({ children, theme = 'light', category = 'h5m', style, color = null, ...props }): ReactElement  => {

    const switchColor = (category: Pick<ITextProps, 'category'> | string): TextSizeFamily => {
        switch (category) {
            case 'h1':
                return font.heading.h1
            case 'h2':
                return font.heading.h2
            case 'h3semibold':
                return font.heading.h3semibold
            case 'h3medium':
                return font.heading.h3medium
            case 'h3regular':
                return font.heading.h3regular
            case 'h4':
                return font.heading.h4
            case 'h5s':
                return font.heading.h5semibold
            case 'h5m':
                return font.heading.h5medium
            case 'h6':
                return font.heading.h6
            default:
                return font.heading.h4
        }
    }

    return <Text
        {...props}
        style={[
            {
                ...style,
                color: color ? color : style?.color ? style.color : '#000',
                ...switchColor(category),

            }]}
    >{children}</Text>;
};

export default TextCustom;
