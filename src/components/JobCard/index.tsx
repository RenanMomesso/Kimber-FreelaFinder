import moment from 'moment';
import React from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import { UserApply } from '../../API';
import { colors } from '../../constants/colors';
import { useAuthContext } from '../../context/useContext';
import { Job } from '../../models';
import { navigationRef } from '../../navigations/NavigationRef';
import TextCustom from '../Text';


const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = Dimensions.get('screen')

export interface JobDetail extends Job {
    title: string | null;
    description: string | null;
    image: string;
    date: string;
    location: string;
    canBeDoneRemotely: boolean;
    price: number | string;
    urgent: boolean;
    tags?: string[];
    needPreviousExperience?: string;
    qualifications?: string[];
    requirements: any
    createdAt: string;
    userApply: {
        items: UserApply[]
    }
}

export type JobcardProps = {
    horizontal?: boolean,
    item: JobDetail
    index?: number;
}

const JobCard = ({ item, horizontal }: JobcardProps) => {

    const { user } = useAuthContext();

    if (!item.title) return null

    const navigateToJobDetails = () => {
        navigationRef.navigate('jobDetail', {
            item
        })
    }

    const imAuthor = item?.author?.id === user?.attributes?.sub

    const alreadyApplied = item?.userApply.items.some(item => item.userID === user?.attributes?.sub)
    const appliersNumber = item?.userApply.items.length


    if (!item?.author?.fullname) return null;

    const timesAgo = new Date(item.createdAt).getTime()
    const now = moment(timesAgo).fromNow()

    const cardBackgroundColor = imAuthor ? '#d89269' : !!alreadyApplied ? "#b7ddbd" : 'white'
    const cardWidth = horizontal ? '100%' : WINDOW_WIDTH * 0.65

    const imagesQuantity = item.Images?.items?.filter(item => item.key.includes('job')).length

    const handleAddToFavorite = () => {

    }

    const buttonTextAndOnpress = (switchType: any) => {
        switch (switchType) {
            case 'author':
                return {
                    text: 'Edit Job',
                    onPress: () => {
                        navigationRef.navigate('JobsCreatedNavigation', {
                            screen: "JobCreatedDetails", params: {
                                id: item?.id
                            }
                        })
                    }
                }
            case 'applied':
                return {
                    text: 'Applied',
                    onPress: navigateToJobDetails
                }
            default:
                return {
                    text: 'Apply',
                    onPress: navigateToJobDetails
                }
        }
    }


    return <View testID='job-card-wrapper' style={[styles.cardWrapper,
    { backgroundColor: cardBackgroundColor, width: cardWidth, marginTop: horizontal ? 10 : 0 }]}>
        <View style={styles.cardHeader} testID="card-header">
            {/* <Image source={{ uri: item.author.avatar, }} style={{ width: 40, height: 40, borderRadius: 100, marginRight: 8 }} /> */}
            <View style={styles.cardHeaderInfo}>
                <TextCustom category='h4' style={{ color: 'black' }}>{item.title}</TextCustom>
                <TextCustom category='h6'>{item?.author?.fullname} • {item.canBeDoneRemotely ? 'remote' : 'onsite'} </TextCustom>
            </View>
            <TextCustom category='h6' style={{ color: "#202020", marginLeft: 'auto', textAlign: 'right' }}>
                {now}
            </TextCustom>
            {/* {!imAuthor && <Icon name='md-bookmarks-outline' size={20} style={{ marginLeft: 'auto' }} onPress={handleAddToFavorite} />} */}
        </View>
        {!!imagesQuantity && <TextCustom category='h3'>📷
            <TextCustom category='h6'> {imagesQuantity}</TextCustom>
        </TextCustom>}
        <View>
            <TextCustom category='h6' lineBreakMode='tail' numberOfLines={2} style={{ color: 'black', marginVertical: 18 }}>{item?.description}</TextCustom>
        </View>

        <View style={{ flexDirection: horizontal ? 'row' : 'column', justifyContent: 'space-between' }}>

            <TextCustom category='h6' style={{
                color: 'black',
                textDecorationLine: !!item.needPreviousExperience ? 'line-through' : 'none',
            }}>Experienced ✔</TextCustom>

            <TextCustom category='h6' style={{ color: "#202020" }}>
                Appliers: {!appliersNumber ? 'Be the first' : appliersNumber}
            </TextCustom>

        </View>

        <View style={styles.cardFooter}>
            {horizontal &&
                item?.categories?.map((category, index) => {
                    return (index < 1 && <View key={index}
                        style={{
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 8,
                            borderRadius: 12,
                            borderColor: colors.gray.gray40,
                            marginRight: 6
                        }}
                    >

                        <TextCustom category='h6'>{category}</TextCustom>
                    </View>)
                })

            }
            <View
                style={{
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 8,
                    borderRadius: 12,
                    borderColor: colors.gray.gray40,
                    marginRight: 6
                }}
            >

                <TextCustom category='h6' style={{

                }}>$ {item?.minimumPrice}</TextCustom>
            </View>

            <Pressable
                onPress={buttonTextAndOnpress(imAuthor ? 'author' : !!alreadyApplied ? 'applied' : 'default').onPress}
                style={{ marginLeft: 'auto', borderRadius: 12, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 4, backgroundColor: colors.main.primary }}>
                <TextCustom category='h4' style={{ color: 'white' }}>
                    {buttonTextAndOnpress(imAuthor ? 'author' : alreadyApplied ? 'applied' : 'apply').text}
                </TextCustom>
            </Pressable>
        </View>
        {item.urgent &&
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 12,
                    borderColor: colors.gray.gray40,
                    marginRight: 6,
                    backgroundColor: colors.meaning.error,
                }}
            >

                <TextCustom category='h6' color='white' style={{ fontWeight: 'bold' }}>Urgent</TextCustom>
            </View>
        }

    </View>
}

export default JobCard;

export const styles = StyleSheet.create({
    cardWrapper: {
        padding: 18,
        borderWidth: 1,
        minHeight: WINDOW_HEIGHT * 0.16,
        borderColor: "#E5E5E5",
        borderRadius: 8,
    },
    cardHeader: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cardFooter: {
        flexDirection: 'row',
        marginTop: 16,
        flexWrap: 'wrap',
        marginBottom: 8


    },
    descriptionCard: {},
    cardHeaderInfo: {
        flexDirection: 'column',
        width: '62%',
    }
})