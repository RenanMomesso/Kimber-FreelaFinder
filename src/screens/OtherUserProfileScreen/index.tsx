import { gql, useQuery } from '@apollo/client';
import React, { useRef } from 'react';
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { GetUserQuery, GetUserQueryVariables, ListCategoriesQuery, ListCategoriesQueryVariables, ListJobDoneBiesQuery, ListJobDoneBiesQueryVariables } from '../../API';
import BackIcon from '../../components/BackIcon';
import BottomSheet, { BottomSheetRefProps } from '../../components/BottomSheet';
import { colors } from "../../constants/colors";
import { skills } from '../../constants/enums/skills';
import { profileImg } from '../../constants/images/png';
import { useGlobalQueries } from '../../context/useQueries';
import { getUser, listCategories, listJobDoneBies } from '../../graphql/queries';
import dimensions from '../../utils/dimensions';
import { imagesMock } from '../../utils/imagesMock';
import { getPublicImg } from '../../utils/publicimages';
import { redirectToPdfScreen } from '../../utils/redirectToPdfScreen';




export interface IOtherUserProfileScreenProps {
    navigation: any;
    route: {
        params: {
            id: string
        }
    }
}

const OtherUserProfileScreen = ({ route, navigation }: IOtherUserProfileScreenProps) => {
    const refBottomSheet = useRef<BottomSheetRefProps>(null);
    const { listJobsQuery } = useGlobalQueries()
    const { id } = route.params

    const { data, error, loading } = useQuery<GetUserQuery, GetUserQueryVariables>(gql(getUser), {
        variables: {
            id
        }
    })

    const totalJobsCreated = listJobsQuery.listJobs?.items?.filter(item => item?.author?.id === id)?.length
    const { data: totalJobsDoneBy } = useQuery<ListJobDoneBiesQuery, ListJobDoneBiesQueryVariables>(gql(listJobDoneBies), {
        variables: {
            filter: {
                userID: {
                    eq: id
                }
            }
        }
    })




    const user = data?.getUser

    const getUserCategoriesIds = user?.categories?.map((item, key) => ({
        id: {
            eq: item
        }
    }))

    const { data: categoriesData, loading: loadingCategories } = useQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(gql(listCategories), {
        variables: {
            filter: {
                or: getUserCategoriesIds
            }
        }
    })

    const userSkills = skills.filter(skill => user?.categories?.includes(skill))
    const userAvatar = user?.avatar ? getPublicImg(user?.avatar) : imagesMock.profileUser

    return <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <BottomSheet ref={refBottomSheet} navigation={navigation} />
        <Image source={profileImg} style={styles.backgroundProfileImg} />
        <View style={styles.profileHeader}>
            <BackIcon />
        </View>
        <Pressable style={styles.pressableUser}>
            <Image source={{ uri: userAvatar }} style={{ height: '100%', width: '100%', borderRadius: 100 }} />
        </Pressable>
        <Text style={styles.profileName}>{user?.fullname}</Text>
        <Text style={styles.profileJobAndType}>
            {user?.profission || 'Not described'} •  No location
        </Text>
        {!!user?.about && <Text style={{ width: '90%', textAlign: 'justify', alignSelf: 'center', backgroundColor: 'white', elevation: 4, padding: 8, marginTop: 4, borderRadius: 5 }}>{user?.about}</Text>}
        {user?.cv && <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
            <IconMaterial onPress={() => redirectToPdfScreen(getPublicImg(user.cv))} name='picture-as-pdf' size={35} style={{ marginHorizontal: 10 }} />
            <Text>Resume PDF</Text>
        </View>}
        <View style={styles.profileMainInfo}>
            <View style={styles.infoUnique}>
                <Text style={styles.infoTitle}>Jobs done</Text>
                <Text style={styles.infoDesc}>{totalJobsDoneBy?.listJobDoneBies?.items.length}</Text>
            </View>
            <View style={styles.infoUnique}>
                <Text style={styles.infoTitle}>Reviews</Text>
                <Text style={styles.infoDesc}>
                    <AntDesignIcon name="star" color={'orange'} /> 4.5 ({user?.reviewsLength})
                </Text>
            </View>
            <View style={styles.infoUnique}>
                <Text style={styles.infoTitle}>Jobs created</Text>
                <Text style={styles.infoDesc}>{totalJobsCreated}</Text>
            </View>
        </View>

        <View style={styles.buttonsWrapper}>
            <TouchableOpacity
                // onPress={handleNavigationEditProfile}
                style={{
                    height: 40,
                    width: 100,
                    borderRadius: 6,
                    backgroundColor: '#fff',
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>User Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    height: 40,
                    width: 100,
                    borderRadius: 6,
                    backgroundColor: colors.main.primary,
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text style={{ color: 'white' }}> Message</Text>
            </TouchableOpacity>
        </View>

        <View
            style={{ width: '100%', borderBottomWidth: 1, borderColor: 'lightgray', marginTop: 28 }}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 28, }}>

            <Text style={{ marginBottom: 20, fontWeight: 'bold', color: 'black' }}>Skills</Text>
            {/* <Text style={{ marginBottom: 20, color: colors.main.primary10 }} onPress={() => setUpdateCategoryModal(true)} >Update skills</Text> */}
        </View>



        <View style={styles.otherUserSkillsContainer}>
            {!userSkills?.length && <Text style={{ color: 'gray' }}>No skills added</Text>}
            {userSkills?.map(item => <Text style={styles.textItem}>{item}</Text>)}
        </View>

        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: 20,
                marginRight: 30,
            }}>
            <Text
                style={{
                    marginLeft: 0,
                    marginTop: 28,
                    marginBottom: 20,
                    fontWeight: 'bold',
                    color: '#292929',
                }}>
                Services
            </Text>
            <Text onPress={() => navigation.navigate("PortifoliosScreen", {
                id: user?.id
            })} style={{ color: colors.main.primary }}>See all({user?.Portifolios?.items?.length}) </Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 20, alignItems: 'center' }}>
            {!!loading && <ActivityIndicator size="large" color={colors.main.primary} />}
            {!loading && !!user?.Portifolios?.items?.length && user?.Portifolios?.items?.slice(0, 2)?.map(item => {
                return (
                    <Pressable onPress={() => navigation.navigate('PortifolioScreen', { id: item.id })}
                        style={{ height: 120, width: dimensions.width * .42, marginTop: 5, marginRight: 5, backgroundColor: 'white' }}>

                        <Image source={{ uri: getPublicImg(item.backgroundImageKey) }} style={{ width: '100%', height: 120, borderRadius: 6, borderWidth: 1, resizeMode: 'center' }} />
                    </Pressable>
                )
            })}
        </View>
        <View style={{ height: 40 }} />
    </ScrollView >
}

export default OtherUserProfileScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundProfileImg: {
        position: 'absolute',
        top: 0,
        width: 500,
        right: 0,
        left: 0,
        height: 140,
    },
    profileHeader: {
        marginTop: 50,
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileHeaderText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#202020',
    },
    pressableUser: {
        alignSelf: 'center',
        borderRadius: 100,
        width: 92,
        height: 92,
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileName: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
        color: "#000",
        marginTop: 12,
    },
    profileJobAndType: {
        marginTop: 6,
        color: '#6B6B6B',
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        textAlign: 'center',
        alignSelf: 'center',
    },
    profileMainInfo: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    infoUnique: {
        alignItems: 'center',
    },
    infoTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: '#292929',
    },
    infoDesc: {
        alignItems: 'center',
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 32,
    },
    otherUserSkillsContainer:{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 20 },
    textItem: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderWidth: 1,
        marginRight: 8,
        borderRadius: 16,
        marginTop: 8,
        borderColor: 'lightgray',
        color: "black"
    }
})
