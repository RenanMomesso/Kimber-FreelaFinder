import React from 'react';
import { Pressable } from 'react-native';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';

export interface CategoriesButtonProps {
    name: string;
    onPress: () => void;
    remove?: boolean;
    isSelected?: boolean;
}

const CategoriesButton = ({ name, onPress, remove, isSelected }: CategoriesButtonProps) => {
    return (
        <Pressable onPress={onPress} style={{
            marginRight: 6,
            backgroundColor: isSelected ? colors.gray.gray10 : 'white',
            paddingHorizontal: 8,
            paddingVertical: 2,
            borderRadius: 6,
            marginTop: 6,
            borderWidth: 1,
            borderColor: 'lightgray',
            marginBottom: 6,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',



        }}>
            <Text category='h6' style={{ color: "#202020", marginRight: 6 }}>{name}</Text>
            {remove ? <Text category='h6' >X</Text> : <Text category='h6'>+</Text>}
        </Pressable>
    )
}

export default CategoriesButton;