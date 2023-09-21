import React from 'react';
import { Pressable } from 'react-native';
import { colors } from '../../constants/colors';
import Text from '../Text';


interface CategoriesProps {
    item: string;
    handlePressedCategory: (item: string) => void
    selectedItem: string | null
}

const Categories = ({ item, handlePressedCategory, selectedItem }: CategoriesProps) => {


    return (
        <Pressable
            onPress={() => handlePressedCategory(item)}
            style={{
                backgroundColor: selectedItem?.includes(item) ? colors.meaning.info : 'white',
                borderWidth: 1,
                borderRadius: 16,
                borderColor: '#E6E6E6',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text category='h6' style={{
                color: selectedItem?.includes(item) ? 'white' : colors.gray.gray40,
                paddingVertical: 5,
                paddingHorizontal: 16,
                fontSize: 10
            }}>{item}</Text>
        </Pressable>
    )
}


export default Categories;