import React from 'react';
import { View } from 'react-native';
import { colors } from '../../constants/colors';

const HorizontalLine: React.FC<{ distance?: number }> = ({ distance = 6 }) => {
    return <View style={{ width: '100%', marginVertical: distance, height: 1.5, backgroundColor: colors.gray.gray10 }} />;
}

export default HorizontalLine;