import React from 'react';
import { Pressable, View } from 'react-native';
import { Job } from '../../API';
import CustomImage from '../../components/ClickableImage';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';
import { navigationRef } from '../../navigations/NavigationRef';

export interface IJobCardSearchHeaderProps {
    title: string;
    image: string | any;
    author: Job['author']
    onPressApply: () => void;
}

const JobCardSearchHeader = ({ title, image, author, onPressApply }: IJobCardSearchHeaderProps) => {

    const onPressImage = (image: string, imageSpecs: any) => {
        navigationRef.navigate('FullImageScreen', {
            image,
            imageSpecs
        })
    }
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <CustomImage
                    index={0}
                    height={60}
                    width={60}
                    source={image}
                    onPress={onPressImage}
                />
            <View style={{ marginLeft: 6, width:'60%' }}>
                <Text numberOfLines={1}>{title}</Text>
                <Text numberOfLines={1} category='h6'>{author?.fullname!} & {author?.profission!}</Text>
            </View>
            <Pressable onPress={onPressApply} style={{ backgroundColor: colors.main.primary, justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', paddingHorizontal: 12, borderRadius: 6, paddingVertical: 4 }} >
                <Text color='white'>Apply</Text>
            </Pressable>
        </View>
    )
}

export default JobCardSearchHeader;