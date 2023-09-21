import moment from 'moment';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Job, UserApply } from '../../API';
import { useAuthContext } from '../../context/useContext';
import { navigationRef } from '../../navigations/NavigationRef';
import { getPublicImg } from '../../utils/publicimages';
import Text from '../Text';

const JobComponent = ({ item }: { item: Job }) => {
    const { user } = useAuthContext()

    const userApplied: UserApply | any = item.userApply?.items.find(apply => apply?.userID === user!.id)
    const jobImage = !!item?.Images?.items.length ? item.Images?.items[0]?.key : item.author?.avatar || ''

    return (
        <Pressable onPress={() => navigationRef.navigate("JobsHistoricDetails", {
            id: item?.id
        })} style={styles.container}>
            <Image source={{ uri: getPublicImg(jobImage) }} style={{ height: 60, width: 60, borderWidth: 1, borderRadius: 100 }} />
            <View style={{ marginLeft: 10, height: 80, width: '75%' }}>
                <Text category='h6' style={{ position: 'absolute', right: 0 }}>Applied on {moment(userApplied?.createdAt).format('L')}</Text>
                <Text category='h6' numberOfLines={1} style={styles.title}>{item?.title || ''}</Text>
                <Text category='h6' numberOfLines={2} ellipsizeMode="tail" style={styles.description}>{item?.description || ''}</Text>
                <Text category='h6' numberOfLines={1} style={{ fontSize: 12 }}>By: {item?.author?.fullname || ''}</Text>

            </View>
        </Pressable>
    )
}

export default JobComponent;

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        minHeight: 100,
        alignItems: 'center',
        marginTop: 4,
        backgroundColor: 'white',
        borderRadius: 4,
        elevation: 4,
        paddingHorizontal: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '50%'
    },
    description: {
        marginTop: 4
    }
})