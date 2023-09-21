import React from 'react';
import { Pressable, View } from 'react-native';
import Text from '../../components/Text';



const CategorieComponent = ({ title, subCategories }): React.ReactElement => {
    return <Pressable style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }}>
        <Text>
            {title}
        </Text>
        <Text>
            Sub-Categories
        </Text>
    </Pressable>
}
const ChooseJobCategory: React.FC = () => {
    return <View>

        <View>
            <Text>Icone</Text>
            <Text>All Categories</Text>
        </View>

        <CategorieComponent title={'test'} subCategories={[]} />

    </View>
}

export default ChooseJobCategory;