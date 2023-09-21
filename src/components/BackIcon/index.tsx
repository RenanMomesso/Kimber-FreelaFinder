import React from 'react';
import { navigationRef } from '../../navigations/NavigationRef';
import Icon from 'react-native-vector-icons/Entypo';

interface BackIconProps {
    style?: any;
    marginTop?: number
    onPress?: () => void;
}

const BackIcon = ({ style, marginTop = 0, onPress = () => { } }: BackIconProps) => {
    const handleGoBack = () => {
        onPress && onPress();
        navigationRef.current?.goBack() || navigationRef.navigate("ProfileScreen")
    }
    return <Icon name="chevron-left" size={25} style={{ marginTop, color: '#333', ...style }} onPress={handleGoBack} />
}

export default BackIcon;