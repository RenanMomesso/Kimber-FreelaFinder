import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { NavigationProp } from '@react-navigation/native';
import { Storage } from 'aws-amplify';
import React, { useEffect } from 'react';
import { BackHandler, Image, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import DocukmentPicker from 'react-native-document-picker';
import {
    CreateChatRoomMutation, CreateChatRoomMutationVariables,
    CreateMessageMutation,
    CreateMessageMutationVariables,
    CreateNotificationMutation,
    CreateNotificationMutationVariables,
    CreateUserApplyInput,
    CreateUserApplyMutation,
    CreateUserApplyMutationVariables,
    CreateUserChatRoomMutation,
    CreateUserChatRoomMutationVariables,
    GetChatRoomQuery,
    GetChatRoomQueryVariables,
    GetPortifolioQuery,
    GetPortifolioQueryVariables,
    NotificationType,
    UpdateChatRoomMutation,
    UpdateChatRoomMutationVariables,
    UpdateUserInput,
    UpdateUserMutation,
    UpdateUserMutationVariables,
    UserStatus
} from '../../API';
import CustomImage from '../../components/ClickableImage';
import { JobDetail } from '../../components/JobCard';
import Loading from '../../components/Loading';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';
import { useAuthContext } from '../../context/useContext';
import { createChatRoom, createMessage, createNotification, createUserApply, createUserChatRoom, updateChatRoom, updateUser } from '../../graphql/mutations';
import { getChatRoom, getPortifolio } from '../../graphql/queries';
import KeyboardStatus from '../../hooks/KeyboardStatus';
import { JobCardNavigationProps } from '../../navigations/types';
import dimensions from '../../utils/dimensions';
import { imagesMock } from '../../utils/imagesMock';
import { getPublicImg } from '../../utils/publicimages';

export interface JobApplicationProps {
    navigation: NavigationProp<JobCardNavigationProps>
    route: {
        params: {
            item: JobDetail
        }
    }

}

const JobApplication: React.FC<JobApplicationProps> = ({ navigation, route }) => {
    const [files, setFiles] = React.useState<any[]>([])
    const [loadingApply, setLoadingApply] = React.useState(false)
    const [selectedPortifolio, setSelectedPortifolio] = React.useState<any>(null)
    const [priceText, setPriceText] = React.useState("")
    const [textApply, setTextApply] = React.useState("")
    const { item: {
        title, author, canBeDoneRemotely, location, id, minimumPrice
    } } = route.params
    const { user, setUser } = useAuthContext()



    const [doMutationCreateChatRoom] = useMutation<CreateChatRoomMutation, CreateChatRoomMutationVariables>(gql(createChatRoom), {
        refetchQueries: ['GetChatRoom']
    })
    const [doMutationCreateUserChatRoom] = useMutation<CreateUserChatRoomMutation, CreateUserChatRoomMutationVariables>(gql(createUserChatRoom))
    const [doCreateNotification] = useMutation<CreateNotificationMutation, CreateNotificationMutationVariables>(gql(createNotification), {
        refetchQueries: ['ListNotifications']
    })
    const [chatRoomLazyQuery] = useLazyQuery<GetChatRoomQuery, GetChatRoomQueryVariables>(gql(getChatRoom))
    const [updateUserPoints] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(gql(updateUser))
    const [doCreateUserApply] = useMutation<CreateUserApplyMutation, CreateUserApplyMutationVariables>(gql(createUserApply))
    const [doCreateMessage] = useMutation<CreateMessageMutation, CreateMessageMutationVariables>(gql(createMessage))
    const [doUpdateChatRoom] = useMutation<UpdateChatRoomMutation, UpdateChatRoomMutationVariables>(gql(updateChatRoom))

    const { data: portifolioData } = useQuery<GetPortifolioQuery, GetPortifolioQueryVariables>(gql(getPortifolio), {
        variables: {
            id: user?.selectedPortifolio?.id
        }
    })




    useEffect(() => {
        navigation!.getParent()!.setOptions({
            tabBarStyle: {
                display: 'none',
            },
        })
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
        navigation.goBack()
    }

    const inputUpdateUser: UpdateUserInput = {
        id: user?.id!,
        points: user?.points - 1
    }

    console.log("priceText ? priceText : minimumPrice", priceText ? priceText : minimumPrice)

    const handleApply = async () => {
        if (loadingApply) return
        setLoadingApply(true)
        try {
            let filesApply = []
            if (files?.length > 0) {
                for (let i = 0; i < files?.length; i++) {
                    const asset = files[i]
                    const { uri } = asset
                    const response = await fetch(uri)
                    const blob = await response.blob()
                    const key = `applyjob/${user?.fullname}/${user?.id}${Date.now()}.${asset.type.split('/')[1]}`
                    filesApply.push(key)
                    await Storage.put(key, blob, {
                        contentType: asset.type.split('/')[1]
                    })
                }
            }



            let input: CreateUserApplyInput = {
                jobID: id,
                userID: user?.attributes.sub,
                userAvatar: user?.avatar,
                userName: user?.fullname,
                userStatus: UserStatus.NORMAL,
                price: priceText ? priceText : minimumPrice?.toString(),


            }
            console.log("INPUT: ", input)
            if (filesApply?.length > 0) {
                input = {
                    ...input,
                    files: filesApply
                }
            }

            if (selectedPortifolio || user?.selectedPortifolio) {
                input = {
                    ...input,
                    userApplySelectedPortifolioId: selectedPortifolio?.id || user?.selectedPortifolio?.id
                }
            }
            if (textApply) {
                input = {
                    ...input,
                    text: textApply
                }
            }


            await doCreateUserApply({
                variables: {
                    input
                }
            })



            const chatroomID = user!.id + author!.id
            const response = await chatRoomLazyQuery({
                variables: { id: chatroomID }
            })

            const { data: messageData } = await doCreateMessage({
                variables: {
                    input: {
                        chatroomID,
                        text: `Hello, I'm applying for the job ${title}, and I would like to know more about this service.`,
                        userID: user?.attributes.sub,
                    }
                }
            })

            if (!!!response.data?.getChatRoom?.id) {
                const { data } = await doMutationCreateChatRoom({
                    variables: {
                        input: {
                            id: chatroomID,
                            chatRoomLastMessageId: messageData?.createMessage?.id
                        }
                    }
                })
                if (data?.createChatRoom) {
                    await doMutationCreateUserChatRoom({
                        variables: {
                            input: {
                                chatRoomID: data.createChatRoom?.id,
                                userID: author!.id!,
                            }
                        }
                    })

                    await doMutationCreateUserChatRoom({
                        variables: {
                            input: {
                                chatRoomID: data.createChatRoom?.id,
                                userID: user?.attributes.sub
                            }
                        }
                    })



                }
            } else {

                await doUpdateChatRoom({
                    variables: {
                        input: {
                            id: chatroomID,
                            chatRoomLastMessageId: messageData?.createMessage?.id
                        }
                    }
                })
            }

            await doCreateNotification({
                variables: {
                    input: {
                        jobID: id,
                        text: `${user?.fullname} applied to ${title}`,
                        userID: author!.id!,
                        read: true,
                        senderID: user?.attributes.sub,
                        notificationType: NotificationType.APPLIED
                    }
                },

            })

            await updateUserPoints({
                variables: {
                    input: {
                        id: user?.id!,
                        points: user?.points! - 1
                    }
                }
            })

            navigation.reset({
                index: 0,
                routes: [{
                    name: 'ChatNavigation',

                }],

            })




        } catch (error) {
            console.log(error)
            return null
        } finally {
            navigation!.getParent()!.setOptions({
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    height: 70,
                    borderTopWidth: 1,
                },
            })
            setLoadingApply(false)
        }

    }

    const handleUploadFiles = async () => {
        try {
            const res = await DocukmentPicker.pickMultiple({
                type: [DocukmentPicker.types.images, DocukmentPicker.types.pdf],
            })
            setFiles([...files, ...res])
            return;
        } catch (error) {
            if (DocukmentPicker.isCancel(error)) {
                console.log("CANCEL")
                return null

            } else {
                console.log("ERROR", error)
                return null
            }
        }
    };


    const handleRemoveImage = (image: string) => {
        const imagesFiles = [...files]
        const findImage = imagesFiles.findIndex(img => img.uri === image)
        imagesFiles.splice(findImage, 1)
        setFiles(imagesFiles)
    }

    const redirectToPdfScreen = (pdf: string) => {
        navigation.navigate('PdfFullsizeScreen', {
            source: pdf,
            onCancel: () => navigation.goBack(),
            onDownload: () => { }
        })
    }

    const onPressImage = (image: string, imageSpecs: any) => {
        navigation.navigate('FullImageScreen', {
            image,
            imageSpecs
        })
    }

    const keyBoardStatus = KeyboardStatus()

    useEffect(() => {
        return () => {
            setFiles([])
            setSelectedPortifolio(null)
        }
    }, [])



    const buttonDisabled = textApply.length <= 50


    return (
        <ScrollView keyboardShouldPersistTaps={"handled"} contentContainerStyle={[styles.container, { marginTop: keyBoardStatus.keyboardVisible ? -dimensions.height * 0.15 : 0 }]}>
            {loadingApply && <Loading />}

            <View style={styles.topLineCard} />

            <View style={styles.titleAndBackButton}>
                <Text style={styles.title}>Job Application</Text>
                <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
                    <Text category='h5' style={{ color: colors.meaning.info }}>Cancel</Text>
                </TouchableOpacity>
            </View>

            {!files.length &&
                <>
                    <Text style={{ marginTop: 30, marginBottom: 10, color: "#202020" }}>Resume</Text>
                    <Text style={{ marginBottom: 10 }}>Choose your files to upload</Text>
                    <TouchableOpacity onPress={handleUploadFiles} style={{ width: '100%', height: '12%', borderWidth: 1, borderColor: 'gray', borderRadius: 4, borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: colors.meaning.info }}>Upload Files</Text>
                        <Text style={{ color: colors.meaning.info }}>PDF, PNG, JPEG, WEBP</Text>
                    </TouchableOpacity>
                </>
            }

            {!!files.length && <Text>Your files:</Text>}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>

                {!!files.length && files.map((file, index) => {
                    const isPDF = file.type === 'application/pdf'
                    return (
                        <CustomImage
                            index={index}
                            handleRemoveImage={() => handleRemoveImage(file.uri)}
                            editImage={true}
                            source={isPDF ? imagesMock.pdfLogo : file.uri}
                            onPress={isPDF ? () => redirectToPdfScreen(file?.uri) : onPressImage}
                        />)
                })}
                {!!files.length && files.length < 7 && <TouchableOpacity onPress={handleUploadFiles} style={{ width: 100, height: 100, borderWidth: 0.7, borderColor: 'gray', borderRadius: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>+</Text>
                </TouchableOpacity>}
            </View>

            <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <Text style={{ color: "#202020", fontWeight: 'bold' }}>Portifolio</Text>
                <Text onPress={() => navigation.navigate('PortifoliosScreen', {
                    id: user!.attributes.sub,
                })} style={{ color: 'blue', textDecorationLine: 'underline' }}>{!user?.selectedPortifolio ? "Choose one portifolio" : "Choose other"}</Text>
            </View>

            {!!user?.selectedPortifolio && <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={() => navigation.navigate('PortifolioScreen', { id: portifolioData?.getPortifolio?.id })}>
                    <Text>{portifolioData?.getPortifolio?.title || ""}</Text>
                    {!!portifolioData?.getPortifolio?.backgroundImageKey && <Image source={{ uri: getPublicImg(portifolioData?.getPortifolio?.backgroundImageKey) }} style={{ width: 120, height: 120 }} />}
                </TouchableOpacity>

            </View>}

            <Text style={{ marginVertical: 6, fontWeight: 'bold', color: "#202020" }}>Message for recruiter:</Text>
            <TextInput value={textApply} onChangeText={setTextApply} multiline style={{ borderWidth: 1, borderColor: "lightgray", borderRadius: 4 }} />
            <Text color={buttonDisabled ? colors.meaning.error : 'black'} category='h6'>Minimum characteres: {50 - textApply.length >= 0 ? 50 - textApply.length : 0}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, }}>
                <Text style={{ marginVertical: 6, fontWeight: 'bold', color: "#202020" }}>Your price for this service: $</Text>
                <TextInput
                    maxLength={4}
                    onChangeText={(text) => {
                        // divide by 100 to convert to dollars
                        setPriceText(Number(text)?.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'))// f
                    }}
                    style={{ borderBottomWidth: 1, borderRadius: 4, flex: 1, padding: 0, marginLeft: 4, }}
                    defaultValue={minimumPrice?.toString()}
                />

            </View>



            <TouchableOpacity onPress={handleApply}
                disabled={buttonDisabled}
                style={{
                    backgroundColor: buttonDisabled ? colors.gray.gray60 : colors.meaning.info,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 12,
                    height: 40,
                    marginTop: 10
                }}>
                <Text style={{ color: 'white' }}>Send Application</Text>
            </TouchableOpacity>
            <View style={{ marginVertical: 30, height: 100 }} />
        </ScrollView>
    )
}

export default JobApplication;

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginTop: StatusBar.currentHeight,
        backgroundColor: colors.main.white,
        flex: 1
    },
    topLineCard: {
        width: '100%',
        backgroundColor: colors.gray.gray,
        height: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    backButton: {
        alignSelf: 'flex-end',
        marginLeft: 'auto'

    },
    imageContainer: {
        alignSelf: 'center',
        width: 70,
        height: 70,
        borderRadius: 60,
        overflow: 'hidden',
        marginTop: 8,
        marginRight: 8,
        borderWidth: 1
    },
    mainImage: {
        width: '100%',
        height: '100%',
    },
    title: {
        color: '#202020',
        alignSelf: 'center',
        width: '100%',
        textAlign: 'center'
    },

    titleAndBackButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25
    },

})