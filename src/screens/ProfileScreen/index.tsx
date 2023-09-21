import React, { ReactElement, useRef, useState } from 'react'
import {
    ActivityIndicator,
    Alert,
    Image,
    Linking,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { profileImg } from '../../constants/images/png'

import { gql, useMutation, useQuery } from '@apollo/client'
import { useNavigation } from '@react-navigation/native'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import { DeletePortifolioMutation, DeletePortifolioMutationVariables, ListJobsQuery, ListJobsQueryVariables } from '../../API'
import BottomSheet, { BottomSheetRefProps } from '../../components/BottomSheet'
import ClickAvatar from '../../components/ClickAvatar'
import ExportPdf from '../../components/CreateAndOpenPDF'
import MenuButton from '../../components/MenuButton'
import { colors } from '../../constants/colors'
import { useAuthContext } from '../../context/useContext'
import { useGlobalQueries } from '../../context/useQueries'
import { deletePortifolio } from '../../graphql/mutations'
import { listJobs } from '../../graphql/queries'
import { LoginScreenNavigationProps } from '../../navigations/types'
import dimensions from '../../utils/dimensions'
import { imagesMock } from '../../utils/imagesMock'
import { getPublicImg } from '../../utils/publicimages'
import { redirectToPdfScreen } from '../../utils/redirectToPdfScreen'
import { IProfileUserProps } from '../../utils/types'
import UpdateSkillComponent from './ModalUpdateCategories'
import UserSkillsProfile from './UserSkillsProfile'
import styles from './styles'

const ProfileScreen = ({
}: IProfileUserProps): ReactElement => {
    const { width } = dimensions
    const navigation = useNavigation<LoginScreenNavigationProps>()
    const refBottomSheet = useRef<BottomSheetRefProps>(null);
    const { user } = useAuthContext()
    const { portifolios, refetchPortifolios, loadingPortifolio, listJobsQuery } = useGlobalQueries()
    const [updateCategoryModal, setUpdateCategoryModal] = useState(false)
    const [loadingDeletePortifolio, setLoadingDeletePortifolio] = useState(false)



    const { data } = useQuery<ListJobsQuery, ListJobsQueryVariables>(gql(listJobs), {
        variables: {
            filter: {
                jobAuthorId: {
                    eq: user?.attributes.sub
                }
            }
        }
    })


    const [deletePortifolioMutation] = useMutation<DeletePortifolioMutation, DeletePortifolioMutationVariables>(gql(deletePortifolio), {
        refetchQueries: ["ListPortifolios", "GetUser"],
    })


    const handleNavigationEditProfile = () => {
        navigation.navigate('EditProfileScreen')
    }

    const handleDeletePortifolio = async (id: string) => {
        if (loadingDeletePortifolio) return;
        setLoadingDeletePortifolio(true)
        try {
            Alert.alert('Delete Portifolio', 'Are you sure you want to delete this portifolio?', [
                {
                    text: 'Cancel',
                    onPress: () => setLoadingDeletePortifolio(false),
                },
                {
                    text: 'Delete',
                    onPress: async () => {
                        const { data } = await deletePortifolioMutation({
                            variables: {
                                input: {
                                    id
                                }
                            }
                        },)
                        if (data?.deletePortifolio?.id) {
                            Alert.alert("Portifolio deleted successfully")
                            refetchPortifolios()

                        }
                    },
                }
            ])

        } catch (error) {
            return;
        } finally {
            setLoadingDeletePortifolio(false)
        }
    }

    const jobsDone = listJobsQuery.listJobs?.items.filter(job => job?.jobDoneBy?.userID === user?.attributes.sub).length


    const isBottomSheetOpen = refBottomSheet?.current?.isActive()
    const openWebsite = async () => {
        try {
            Linking.openURL(user?.website).catch(e => Alert.alert("E", e?.message))
        } catch (error) {
            Alert.alert('Error: ', (error as Error).message)
        }
    };

    if (!user?.fullname) return <View></View>
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {updateCategoryModal && <UpdateSkillComponent close={() => setUpdateCategoryModal(false)} />}
            <BottomSheet ref={refBottomSheet} navigation={navigation} />
            <Image source={profileImg} style={styles.backgroundProfileImg} />
            <View style={styles.profileHeader}>
                <Text style={styles.profileHeaderText}>Profile</Text>
                <MenuButton ref={refBottomSheet} />
            </View>
            <ExportPdf user={user} portifolios={user.Portifolios?.items} />
            <Pressable style={styles.pressableUser}>
                {user.avatar ? <ClickAvatar imageKey={user.avatar!} /> : <Image source={{ uri: imagesMock.profileUser }} 
                style={{width:'100%', height:'100%'}} />}


            </Pressable>
            <Text style={styles.profileName}>{user?.fullname}</Text>
            <Text style={styles.profileJobAndType}>
                {user?.profission || 'Not described'} •
            </Text>
            {!!user.about && <Text style={{ width: '90%', textAlign: 'justify', alignSelf: 'center', backgroundColor: 'white', elevation: 4, padding: 8, marginTop: 4, borderRadius: 5 }}>{user?.about}</Text>}
            {user?.cv && <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                <IconMaterial onPress={() => redirectToPdfScreen(getPublicImg(user.cv))} name='picture-as-pdf' size={35} style={{ marginHorizontal: 10 }} />
                <Text>Resume PDF</Text>
            </View>}
            <Text onPress={openWebsite} style={[styles.profileJobAndType, { color: "blue", textDecorationLine: 'underline' }]}>{user?.website}</Text>
            <View style={styles.profileMainInfo}>
                <View style={styles.infoUnique}>
                    <Text style={styles.infoTitle}>Jobs done</Text>
                    <Text style={styles.infoDesc}>{jobsDone}</Text>
                </View>
                <View style={styles.infoUnique}>
                    <Text style={styles.infoTitle}>Reviews</Text>
                    <Text style={styles.infoDesc}>
                        <AntDesignIcon name="star" color={'orange'} /> 4.5 ({user?.reviewsLength})
                    </Text>
                </View>
                <View style={styles.infoUnique}>
                    <Text style={styles.infoTitle}>Jobs created</Text>
                    <Text style={styles.infoDesc}>{data?.listJobs?.items.length}</Text>
                </View>
            </View>

            <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                    onPress={handleNavigationEditProfile}
                    style={{
                        height: 40,
                        width: 100,
                        borderRadius: 6,
                        backgroundColor: '#fff',
                        elevation: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text>Edit Profile</Text>
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
                    <Text style={{ color: 'white' }}> Dashboard</Text>
                </TouchableOpacity>
            </View>

            <View
                style={{ width: '100%', borderBottomWidth: 1, borderColor: 'lightgray', marginTop: 28 }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 28, }}>

                <Text style={{ marginBottom: 20, fontWeight: 'bold', color: 'black' }}>Skills</Text>
                <Text style={{ marginBottom: 20, color: colors.main.primary10 }} onPress={() => setUpdateCategoryModal(true)} >Update skills</Text>
            </View>
            <UserSkillsProfile />


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
                <Text onPress={() => navigation.navigate("NewPortifolioScreen")} style={{ color: colors.main.primary }}>New portifolio</Text>
                {!!portifolios?.length && <Text onPress={() => navigation.navigate("PortifoliosScreen", {
                    id: user?.id
                })} style={{ color: colors.main.primary }}>See all({portifolios?.length}) </Text>}
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 20, alignItems: 'center' }}>
                {!!loadingPortifolio && <ActivityIndicator size="large" color={colors.main.primary} />}
                {!loadingPortifolio && !!portifolios?.length && portifolios?.slice(0, 2)?.map(item => {
                    return (
                        <Pressable onPress={() => navigation.navigate('PortifolioScreen', { id: item.id })}
                            style={{ height: 120, width: width * .42, marginTop: 5, marginRight: 5, backgroundColor: 'white', zIndex: isBottomSheetOpen ? 0 : 1000 }}>
                            <Pressable
                                onPress={() => handleDeletePortifolio(item?.id)}
                                style={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    zIndex: 4
                                }}>
                                <AntDesignIcon name="closecircle" color="tomato" size={15} />
                            </Pressable>
                            <Image source={{ uri: getPublicImg(item.backgroundImageKey) }} style={{ width: '100%', height: 120, borderRadius: 6, borderWidth: 1, resizeMode: 'center' }} />
                        </Pressable>
                    )
                })}
            </View>
            <View style={{ height: 40 }} />
        </ScrollView >
    )
}

export default ProfileScreen


