import React from 'react';
import { View } from 'react-native';
import TextCustom from '../Text';
import TagStyles from './TagText.styles'

export interface ITagTextProps extends React.ComponentProps<typeof View> {
    text: string;
    color?: string;
    textColor?: string;
}

const TagText: React.FC<ITagTextProps> = ({ color, text, textColor }): React.ReactElement | null => {
    if (!text) return null;
    return <View testID='tag-text' style={TagStyles(color).container}>
        <TextCustom category='h6' style={{ color: textColor,fontWeight:'bold' }}>{text}</TextCustom>
    </View>
}

export default TagText;