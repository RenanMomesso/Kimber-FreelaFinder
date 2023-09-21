import React from 'react';
import { View, FlatList } from 'react-native';
import JobComponent from '../../components/JobComponent';
import TextCustom from '../../components/Text';

export interface ListProps {
    list: any;
}

const ListComponent = ({ list }: ListProps) => {
    return (
        <FlatList
            ListEmptyComponent={() => <View style={{ alignItems: 'center', marginTop: 40 }}>
                <TextCustom category='h3semibold' style={{ color: "#202020" }}>This list is empty</TextCustom>
            </View>
            }
            data={list}
            renderItem={({ item }) => <JobComponent item={item} />}
        />
    )
};

export default ListComponent;
