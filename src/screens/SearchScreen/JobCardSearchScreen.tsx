import React from 'react';
import { ScrollView, View } from 'react-native';
import { Job } from '../../API';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';
import { navigationRef } from '../../navigations/NavigationRef';
import { getPublicImg } from '../../utils/publicimages';
import JobCardSearchHeader from './JobCardSearchHeader';

export interface IJobCardSearchProps {
    item: Job;

}

const JobCardSearchScreen = ({ item }: IJobCardSearchProps) => {

    const navigateToJobDetails = () => {
        navigationRef.navigate('jobDetail', {
            item
        })
    }


    const firstImageOfJob = item.Images?.items[0]?.key
    const authorAvatar = item.author?.avatar
    return (
        <View style={{ flex: 1, borderBottomWidth: 1, borderColor: colors.gray.gray10, marginBottom: 20, paddingBottom: 10 }}>
            <JobCardSearchHeader
                author={item.author}
                title={item?.title!}
                image={getPublicImg(firstImageOfJob || authorAvatar)}
                onPressApply={navigateToJobDetails}
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8 }}>
                <Text style={{ paddingHorizontal: 8, borderWidth: 1, borderRadius: 12, borderColor: 'lightgray', marginRight: 4, }} category='h6'>${item?.minimumPrice}</Text>
                {item.categories?.map(item => <Text  style={{ paddingHorizontal: 8, borderWidth: 1,  borderRadius: 12, borderColor: 'lightgray', marginRight: 4 }} category='h6'>{item}</Text>)}
            </ScrollView>

            <Text style={{ marginVertical: 8 }}>Requirements</Text>

            <View style={{ borderWidth: 1, padding: 12, borderRadius: 20, borderColor: colors.gray.gray10, marginBottom: 20 }}>
                {!!item.qualifications?.length ? item.qualifications?.map((item, index) => {
                    if (index + 1 > 2) return;
                    return (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 6 }}>
                            <Text category='h6' color={colors.gray.gray40} lineBreakMode='tail'>- {item}</Text>
                        </View>
                    )
                }) : <Text color={colors.gray.gray40}>{item?.description}</Text>}
            </View>

            {/* requirements */}

        </View>
    )
}

export default JobCardSearchScreen;