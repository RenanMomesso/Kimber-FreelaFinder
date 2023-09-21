import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GetChatRoomQuery, GetChatRoomQueryVariables, GetJobQuery, Status } from '../../API';
import AlbumImages from '../../components/AlbumImages';
import BackIcon from '../../components/BackIcon';
import CustomImage from '../../components/ClickableImage';
import Loading from '../../components/Loading';
import PopupMenu from '../../components/PopupMenu';
import PortifolioItem from '../../components/PortifolioItem';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';
import { useAuthContext } from '../../context/useContext';
import { useGlobalQueries } from '../../context/useQueries';
import { getChatRoom, getJob } from '../../graphql/queries';
import { navigationRef } from '../../navigations/NavigationRef';
import { onPressImage } from '../../utils/onPressImage';
import { PDFIMAGE } from '../../utils/pdfImage';
import { getPublicImg } from '../../utils/publicimages';
import { redirectToPdfScreen } from '../../utils/redirectToPdfScreen';

export interface JobsHistoricDetailsProps {
    route: {
        params: {
            id: string
        }
    }
}

const JobsHistoricDetails: React.FC<JobsHistoricDetailsProps> = ({ route }) => {
    const { refetchJobs } = useGlobalQueries()
    const [loading, setLoading] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [selectedAlbum, setSelectedAlbum] = useState(null)
    const { user } = useAuthContext()

    const { data: jobItem, loading: loadingDetails } = useQuery<GetJobQuery, GetJobQuery>(gql(getJob), {
        variables: {
            id: route.params.id
        }
    })




    const item = jobItem?.getJob

    const { data } = useQuery<GetChatRoomQuery, GetChatRoomQueryVariables>(gql(getChatRoom), {
        variables: {
            id: user?.id + item?.author.id
        }
    })


    const navigateToChat = () => {
        navigationRef.navigate("ChatNavigation", {
            screen: "Chat", params: {
                id: user?.id + item?.author?.id,
                name: item?.user?.fullname
            }
        })
    }

    const removeMeFromTheJob = async () => {
        if (loading) return
        setLoading(true)

        try {
            Alert.alert("Remover", "Deseja remover-se do job?", [], {
                cancelable: true,
                onDismiss: () => setLoading(false)
            })

        } catch (error) {
            console.log("Error: ", Alert.alert((error as Error).message))
        } finally {
            setLoading(false)
            navigationRef.goBack()
        }
    }

    const disabledButtons = [Status.FINISHED, Status.CANCELED, Status.COMPLETED].includes(item?.status)

    const options = [
        { label: 'Go to Chat', Icon: 'wechat', onPress: navigateToChat, disabled: false },
        { label: 'Remove me from job', Icon: 'delete', onPress: removeMeFromTheJob, disabled: disabledButtons },
        { label: 'Mark as completed', Icon: 'checkcircle', onPress: () => console.log('remove me from job'), disabled: disabledButtons },
    ]


    const removeMeFromJob = async () => {
        Alert.alert("Remover", "Deseja remover-se do job?")
    }

    const userAppliedMe = item?.userApply?.items.find(item => item?.userID === user?.id && item?.jobID === route.params.id)

    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#FFF" }}>
            {loading && <Loading />}
            <ScrollView showsVerticalScrollIndicator={false}>
                {loadingDetails ? <Text>Loading...</Text> : <>
                    {selectedAlbum && <AlbumImages visible={openModal} setVisible={setOpenModal} images={selectedAlbum} />}
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, justifyContent: 'space-between' }}>
                        <BackIcon onPress={() => navigationRef.navigate("JobsHistoricNavigation")} />
                        <Text category='h3semibold' style={{ textAlign: 'center', color: "#202020", maxWidth: '65%' }}>{item?.title}</Text>
                        <PopupMenu options={options} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>Created by:</Text>
                        <Text color="gray" category='h5m'> {item?.author?.fullname}</Text>
                    </View>
                    <View>
                        
                    </View>
                    <Text>Created at: {moment(item?.createdAt).format("l")}</Text>
                    <Text>Description:</Text>
                    <Text>{item?.description}</Text>
                    {!!item?.qualifications?.length && <>
                        <Text style={{ marginTop: 20 }}>Qualifications:</Text>
                        <Text>{item?.qualifications}</Text>
                    </>}
                    <Text style={{ marginTop: 20 }}>Images of job:</Text>
                    <ScrollView>
                        {!!item?.Images?.items.length ? item?.Images?.items.map((item, index) => {

                            if (!item) return;
                            return (
                                <CustomImage
                                    index={index}
                                    source={getPublicImg(item?.key)}
                                    onPress={onPressImage}
                                />
                            )
                        }) : <Text>No images</Text>}
                    </ScrollView>

                    <View style={{ borderBottomWidth: 1, marginVertical: 15 }} />
                    <Text style={{textAlign:'center', marginBottom:10, textDecorationLine:"underline"}}>Your application</Text>
                    <Text>Applied on: {moment(userAppliedMe?.createdAt).fromNow()}</Text>

                    <PortifolioItem
                        backgroundImage={userAppliedMe?.selectedPortifolio?.backgroundImageKey}
                        title={userAppliedMe?.selectedPortifolio?.title!}
                        onPress={() => navigationRef.navigate('PortifolioScreen', { id: userAppliedMe?.selectedPortifolio.id })}
                    />
                    <Text>Your files</Text>
                    <ScrollView horizontal>
                        {userAppliedMe?.files?.map((item, index) => {
                            const itemIncludesPDF = item?.includes('.pdf')
                            return (
                                <CustomImage
                                    index={index}
                                    source={itemIncludesPDF ? PDFIMAGE : getPublicImg(item)}
                                    onPress={itemIncludesPDF ? () => redirectToPdfScreen(getPublicImg(item)) : onPressImage}
                                />
                            )
                        }) || <Text>No files</Text>}
                    </ScrollView>
                    <Text>Price you requested: ${userAppliedMe?.price || item?.minimumPrice}</Text>
                    <Text>You write to the author of job: {userAppliedMe?.text}</Text>
                    <Text>Number of applies: {item?.userApply?.items.length}</Text>



                    {jobItem?.getJob?.status !== "COMPLETED" && <Pressable style={{
                        marginVertical: 10, backgroundColor: colors.meaning.error, borderRadius: 6, justifyContent: 'center', alignItems: 'center', paddingVertical: 8
                    }} onPress={removeMeFromJob} >
                        <Text style={{ color: "#FFF" }}>Remove me from this job</Text>
                    </Pressable>}
                </>}
                <View style={{ height: 50 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default JobsHistoricDetails;