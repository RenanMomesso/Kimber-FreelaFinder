import React, { useEffect, useState } from 'react';
import { View, BackHandler, StyleSheet, StatusBar, TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';
import Text from '../../components/Text';
import { navigationRef } from '../../navigations/NavigationRef';
import { NavigationProp } from '@react-navigation/native'
import { JobCardNavigationProps } from '../../navigations/types';
import { colors } from '../../constants/colors';
import { JobDetail } from '../../components/JobCard';
import TagText from '../../components/TagText';
import Icon from 'react-native-vector-icons/Ionicons'
import { Storage } from 'aws-amplify';
import { gql, useMutation } from '@apollo/client';
import { updateImages } from '../../graphql/mutations';
import { UpdateImagesInput, UpdateImagesMutation, UpdateImagesMutationVariables } from '../../API';
import { listJobs } from '../../graphql/queries';
import AlbumImages from '../../components/AlbumImages';
import { useAuthContext } from '../../context/useContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Animated, { SlideInLeft, SlideOutLeft } from 'react-native-reanimated';
import { SlideFromRightIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';
import { getPublicImg } from '../../utils/publicimages';
import CustomImage from '../../components/ClickableImage';



export interface JobDetailsProps {
    navigation: NavigationProp<JobCardNavigationProps>
    route: {
        params: {
            item: JobDetail
        }
    }

}

const JobDetails: React.FC<JobDetailsProps> = ({ navigation, route }) => {
    const { user } = useAuthContext()
    const [jobDetailsImages, setJobDetailsImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [updateImageMutation] = useMutation<UpdateImagesMutation, UpdateImagesMutationVariables, UpdateImagesInput>(gql(updateImages), {
        refetchQueries: ['ListJobs']
    })
    const { item: {
        title, author, canBeDoneRemotely, date, description, image, location, minimumPrice, urgent, id, tags,
        difficulty, needPreviousExperience, qualifications, Images, categories, ...items
    } } = route.params!

    useEffect(() => {
        navigation!.getParent()!.setOptions({
            tabBarStyle: {
                display: 'none',
            },
        })
    }, [])

    const authorApp = user?.attributes.sub === author!.id
    const alreadyApplied = items.userApply.items.some(item => item.userID === user!.id)

    const cannotApply = () => {

        if (authorApp) {
            return {
                textButton: 'You cannot apply to your own job',
                disabledButton: true
            }
        }
        if (alreadyApplied) {
            return {
                textButton: 'You already applied to this job',
                disabledButton: true
            }
        }

        return {
            textButton: 'Apply to this job',
            disabledButton: false
        }
    }

    const { textButton, disabledButton } = cannotApply()





    const getUrlsImages = async () => {
        setLoading(true)
        let arrayImages: any = []
        for (let image of Images!.items) {
            if (image.url === null) {
                const res = await Storage.get(image.key)
                const { data } = await updateImageMutation({ variables: { input: { id: image.id, url: res } } })
                arrayImages.push(res)
            } else {
                arrayImages.push(image.url)
            }

        }

        setJobDetailsImages(arrayImages)
        setLoading(false)
    };



    useEffect(() => {
        getUrlsImages()
    }, [])


    useEffect(() => {
        return () => {
            setJobDetailsImages([])
        }
    }, [])



    useEffect(() => {
        const backAction = () => {
            handleGoBack()
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);



    const handleGoBack = () => {
        navigation!.getParent()!.setOptions({
            tabBarStyle: {
                backgroundColor: '#FFF',
                height: 70,
                borderTopWidth: 1,
            },
        })
        navigation.goBack()
    }

    const handleApply = () => {
        navigation.navigate('JobApplication', { item: route.params.item })
    }

    const imagesLength = Images.items?.filter(image => !image.key.includes('apply'))
    const sortImages = () => {
        let imgs = [...imagesLength]
        imgs.sort((a, b) => {
            return a.key > b.key ? -1 : 1
        })
        return imgs

    }


    const onPressImage = (image: string, imageSpecs: any) => {
        navigationRef.navigate('FullImageScreen', {
            image,
            imageSpecs
        })
    }

    const handlePressAvatar = (userId: string) => {
        navigationRef.navigate("OtherUserProfileScreen", {
            id: userId
        })
    };



    return (
        <View style={styles.container}>


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topLineCard} />
                <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                    <Text category='h5' style={{ color: colors.meaning.info }}>Back</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable onPress={() => handlePressAvatar(author.id)} style={styles.imageContainer}>
                        <Image source={{ uri: getPublicImg(author?.avatar) }} style={{ width: '100%', height: '100%' }} />
                    </Pressable>
                    <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                        <Text style={styles.authorAndLocation}>{author?.fullname} •   </Text>
                        {author?.profission && <Text style={styles.authorAndLocation}>{author?.profission}   </Text>}
                        <Text>{!!author?.jobs?.length ? author?.jobs?.length : 'First job done'}</Text>

                    </View>
                </View>
                <Text category='h3semibold' style={styles.title}>{title}</Text>

                <Animated.View entering={SlideInLeft.duration(600)} style={styles.tagsAndCategoryWrapper}>
                    <View style={styles.tagsWrapper}>
                        {categories?.map((category, index) => <TagText key={index} color="#e1f7e6" text={category!} textColor={colors.meaning.success} />)}
                        <TagText color={"#e7f2fe"} text={needPreviousExperience} textColor={colors.meaning.info} />
                        <TagText color={colors.meaning.error} text={urgent ? 'Urgent' : date} textColor={"#FFF"} />
                        <TagText color={"#fee7e7"} text={date} textColor={colors.meaning.error} />
                        <TagText color={"#fef5d9"} text={`$${minimumPrice}/h`} textColor={colors.meaning.warning} />
                        <TagText color="#e1f7e6" text={canBeDoneRemotely ? 'Remote' : 'On-site'} textColor={colors.meaning.success} />
                    </View>
                </Animated.View>

                <ScrollView horizontal style={{ marginVertical: 10 }}>

                    {sortImages().map((item, index) => {
                        return <CustomImage
                            index={index}
                            source={getPublicImg(item.key)}
                            onPress={onPressImage}
                        />
                    })}
                </ScrollView>


                <Text category='h5'>Payment: After finished</Text>
                <Animated.Text entering={SlideInLeft.duration(800)} style={{
                    marginTop: 25,
                    color: "#202020",
                    fontWeight: 'bold'
                }}>Overview</Animated.Text>
                <Animated.Text
                    entering={SlideInLeft.duration(800)}
                    ellipsizeMode='tail'
                    lineBreakMode='middle'
                    textBreakStrategy='balanced'
                    style={{ marginTop: 20, textAlign: 'justify' }}>
                    {description}
                </Animated.Text>
                {<Text category='h4' style={{
                    marginTop: 25,
                    color: "#202020",
                    fontWeight: 'bold'
                }}>Qualifications {!qualifications.length && "Not required"}</Text>}


                <View style={styles.qualificationsWrapper}>
                    {qualifications?.map((qualification, index) => <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: 15 }}>•</Text>
                        <Text style={{ textAlign: 'justify', marginBottom: 4 }} category='h5m' key={index}>{qualification}</Text>
                    </View>)}
                </View>


                <View style={{ height: 60 }} />
            </ScrollView>
            <View style={{
                width: '100%',
                alignSelf: 'center',
                height: 50,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
            }}>
                <TouchableOpacity style={{
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    borderWidth: 0.7,
                    borderColor: colors.gray.gray10,
                    borderRadius: 12,
                }}>
                    <Icon name='md-bookmarks-outline' size={20} style={{ marginLeft: 'auto' }} />
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={loading || disabledButton}
                    onPress={handleApply}
                    style={{
                        flex: 1,
                        marginLeft: 20,
                        backgroundColor: disabledButton ? colors.gray.gray10 : colors.meaning.success,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 12,
                        height: '100%'
                    }}>
                    <Text style={{ color: 'white' }}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineBottom} />

        </View>
    )
}

export default JobDetails;

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: colors.main.white,
    },
    topLineCard: {
        width: '100%',
        backgroundColor: colors.gray.gray,
        height: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    backButton: {
        marginTop: 8,

    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 60,
        overflow: 'hidden',
        marginTop: 18,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    mainImage: {
        width: 100,
        height: 100,
        borderWidth: 1,
        marginRight: 6
    },
    title: {
        color: '#202020',
        textAlign: 'center',
        marginTop: 10
    },
    authorAndLocation: {
        marginTop: 6
    },
    tagsAndCategoryWrapper: {
        flexDirection: 'column',
        marginTop: 16,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tagsWrapper: {
        flexDirection: 'row',
        marginTop: 14,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    qualificationsWrapper: {
        marginTop: 13,
    },
    lineBottom: {
        width: '60%',
        backgroundColor: colors.gray.gray40,
        height: 6,
        marginTop: 12,
        borderRadius: 8,
        alignSelf: 'center',
    }

})