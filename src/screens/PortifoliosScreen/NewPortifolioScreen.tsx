import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Text from '../../components/Text';

import { gql, useMutation } from '@apollo/client';
import { NavigationProp } from '@react-navigation/native';
import { Storage } from 'aws-amplify';
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { PESDK } from 'react-native-photoeditorsdk';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { CreatePortifolioInput, CreatePortifolioMutation, CreatePortifolioMutationVariables, UpdateUserMutation, UpdateUserMutationVariables } from '../../API';
import Loading from '../../components/Loading';
import { colors } from '../../constants/colors';
import { useAuthContext } from '../../context/useContext';
import { createPortifolio, updateUser } from '../../graphql/mutations';

export interface PortifoliosScreenProps {
    navigation: NavigationProp<any, any>
}

const PortifoliosScreen = ({ navigation }: PortifoliosScreenProps) => {

    const { user, setUser } = useAuthContext()
    const [selectedPhotos, setSelectedPhotos] = useState<any>([])
    const [images, setImages] = useState<Asset[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loadingComplete, setLoadingComplete] = useState(false)

    const [doCreatePortifolio, { loading }] = useMutation<CreatePortifolioMutation, CreatePortifolioMutationVariables>(gql(createPortifolio), {
        refetchQueries: ['ListPortifolios']
    })

    const [doUpdateUser] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(gql(updateUser))

    const handleOpenImagePicker = async (multiple = false) => {
        try {
            await launchImageLibrary({
                mediaType: 'photo',
                selectionLimit: multiple ? 5 : 1,

            }, async ({ didCancel, errorCode, assets }) => {
                if (!didCancel && !errorCode && assets && assets.length > 0) {
                    if (selectedPhotos?.length && selectedPhotos?.length > 4) {
                        Alert.alert("You can't select more than 4 photos")
                        return
                    }
                    if (multiple) {
                        setImages([...images, ...assets])

                    } else {
                        PESDK.openEditor({ uri: assets[0].uri! }).then(image => {
                            const newImage = {
                                ...image,
                                uri: image?.image
                            }
                            setSelectedPhotos([newImage])
                        }).catch(error => {
                            setSelectedPhotos([])
                        })
                    }

                }
            })
        } catch (error) {
            console.log("ERROR", error)
            return null
        }
    }

    const handleUpdateImage = async (index: number) => {
        try {
            await launchImageLibrary({
                mediaType: "photo",
                selectionLimit: 1,

            }, async ({ didCancel, errorCode, errorMessage, assets }) => {
                if (!didCancel && !errorCode && assets && assets.length > 0) {
                    const newImages = [...images]
                    newImages[index] = assets[0]
                    setImages(newImages)
                }
            })
        } catch (error) {
            console.log("ERROR", error)
            return null
        }


    }


    const handleOpenImageFullscreen = (img: string) => {
        setSelectedImage(img)
    }


    const handleCreateNewPortifolio = async () => {
        if (loadingComplete) return;
        setLoadingComplete(true)
        try {
            const input: CreatePortifolioInput = {
                userID: user?.id!,
                title,
                content: description,

            }

            if (images.length > 0) {
                let imagesURLs = []
                for (let i = 0; i < images.length; i++) {

                    const imagesPortifolio = await fetch(images[i].uri!)
                    const mainImageBlob = await imagesPortifolio.blob()
                    const key = `${user!.id}/portifolio/main-${new Date().getTime()}`
                    imagesURLs.push(key)
                    await Storage.put(key, mainImageBlob, {
                        contentType: mainImageBlob.type,
                        level: 'public'
                    })
                }
                input.filesKey = imagesURLs
            }

            if (selectedPhotos.length > 0) {
                const fetchImage = await fetch(selectedPhotos[0].uri)
                const blobImage = await fetchImage.blob()
                const key = `${user?.id}/portifolio/main-${new Date().getTime()}`
                input.backgroundImageKey = key
                await Storage.put(key, blobImage, {
                    contentType: blobImage.type
                })
            }


            const { data } = await doCreatePortifolio({
                variables: {
                    input
                }
            })

            if (user?.Portifolios?.items?.length <= 1) {
                const { data: userUpdatedData } = await doUpdateUser({
                    variables: {
                        input: {
                            id: user?.id!,
                            userSelectedPortifolioId: data?.createPortifolio?.id
                        }
                    }
                })

                setUser({ ...user, userSelectedPortifolioId: userUpdatedData?.updateUser?.id, Portifolios: { items: [data?.createPortifolio, ...user?.Portifolios?.items!] } })
            }


            if (!data?.createPortifolio) {
                throw new Error("Error creating portifolio")
            }



            setTitle('')
            setDescription('')
            setImages([])
            setSelectedPhotos([])
            navigation.goBack()


        } catch (error) {
            console.log("Error: ", error)
            return;
        } finally {
            setLoadingComplete(false)
        }
    }

    const disabledButton = title.length <= 0 || description.length <= 0 || selectedPhotos.length <= 0 || loadingComplete

    return (
        <SafeAreaView style={{ flex: 1, padding: 20 }}>
            {loading && <Loading />}
            {selectedImage && (
                <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 2, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" }}>
                    <Pressable
                        onPress={() => setSelectedImage(null)}
                        style={{
                            position: 'absolute',
                            top: 30,
                            right: 20,
                            zIndex: 3
                        }}>
                        <AntDesignIcon name="closecircle" color="tomato" size={30} />
                    </Pressable>
                    <Image source={{ uri: selectedImage }} style={{ width: "100%", height: "100%" }} />
                </View>
            )}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center', justifyContent: 'space-between', marginTop: 10, flexDirection: 'row' }}>
                    <Text onPress={() => navigation.goBack()}>Back</Text>
                    <Text category='h3medium'>Create new Portifolio</Text>
                    <View />
                </View>

                <Pressable style={{ marginVertical: 15, backgroundColor: 'white', borderRadius: 12, width: '100%', }}>
                    <TextInput value={title} onChangeText={setTitle} placeholder='Portifolio title' style={{ paddingHorizontal: 8 }} />
                </Pressable>

                {selectedPhotos.length <= 0 ? <TouchableOpacity style={styles.imagePicker} onPress={() => handleOpenImagePicker(false)}>
                    <Text>Main image of your portifolio</Text>
                </TouchableOpacity> : (
                    <Pressable onPress={() => setSelectedImage(selectedPhotos[0]?.uri)}>
                        <View style={{ flexDirection: 'row', position: 'absolute', top: 6, right: 6, zIndex: 2 }}>
                            <Pressable style={styles.imageButtons} onPress={() => handleOpenImagePicker(false)}>
                                <FeatherIcon name='edit' />
                            </Pressable>
                            <Pressable style={styles.imageButtons} onPress={() => setSelectedPhotos([])}>
                                <AntDesignIcon name="closecircle" color="tomato" />
                            </Pressable>
                        </View>
                        <Image source={{ uri: selectedPhotos[0]?.uri }} style={{ height: 200, width: '100%', borderRadius: 12, borderWidth: 1 }} />
                    </Pressable>
                )}


                <Pressable style={{ height: 150, backgroundColor: 'white', borderRadius: 12, width: '100%', alignSelf: 'center', marginVertical: 10 }}>
                    <TextInput value={description} onChangeText={setDescription} placeholder='Description' style={{ padding: 12 }} multiline />
                </Pressable>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }}>

                    {!!images.length && images.map((image, index) => {
                        return (
                            <Pressable onPress={() => handleOpenImageFullscreen(image.uri!)} key={index} style={{ flexDirection: 'row', height: 120, width: 120, marginRight: 18 }}>
                                <View style={{ flexDirection: 'row', position: 'absolute', top: 6, right: 6, zIndex: 2 }}>

                                    <Pressable style={styles.imageButtons} onPress={() => handleUpdateImage(index)}>
                                        <FeatherIcon name='edit' />
                                    </Pressable>
                                    <Pressable style={styles.imageButtons} onPress={() => {
                                        const newImages = images.filter((_, i) => i !== index)
                                        setImages(newImages)
                                    }}>
                                        <AntDesignIcon name="closecircle" color="tomato" />
                                    </Pressable>
                                </View>
                                <Image source={{ uri: image.uri }} style={{ height: '100%', width: '100%', borderRadius: 12, borderWidth: 1 }} />
                            </Pressable>
                        )
                    })}
                    <TouchableOpacity style={styles.optionPhotosButton} onPress={() => handleOpenImagePicker(true)}>
                        <Text>Optional photos</Text>
                    </TouchableOpacity>
                </View>

                <Pressable
                    disabled={disabledButton}
                    onPress={handleCreateNewPortifolio}
                    style={[styles.createPortifolioButton, {
                        backgroundColor: disabledButton ? colors.gray.gray10 : colors.meaning.info
                    }]}>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>Create Portifolio</Text>
                </Pressable>
            </ScrollView >
        </SafeAreaView>
    )
}

export default PortifoliosScreen;

const styles = StyleSheet.create({
    imagePicker: {
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'dashed',
        borderRadius: 12,
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 20
    },
    createPortifolioButton: {
        marginVertical: 10,
        width: '100%',
        height: 50,
        backgroundColor: colors.meaning.info,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionPhotosButton: {
        height: 120, width: 120, backgroundColor: 'white', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginVertical: 10,
        borderStyle: 'dashed', borderWidth: 1, borderColor: 'tomato'
    },
    imageButtons: { marginRight: 6, justifyContent: 'center', backgroundColor: 'white', padding: 4, borderRadius: 8 }
})