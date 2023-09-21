import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { View, ScrollView, StyleSheet, StatusBar, TextInput, Image, Pressable, Keyboard, Alert } from 'react-native';
import { GetPortifolioQuery, GetPortifolioQueryVariables, Portifolio, UpdatePortifolioInput, UpdatePortifolioMutation, UpdatePortifolioMutationVariables } from '../../API';
import BackIcon from '../../components/BackIcon';
import CustomImage from '../../components/ClickableImage';
import Loading from '../../components/Loading';
import PopupMenu from '../../components/PopupMenu';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';
import dimensions from '../../utils/dimensions';
import { getPublicImg } from '../../utils/publicimages';
import { GET_PORTIFOLIO } from './query';
import DocumentPicker from 'react-native-document-picker'
import { updatePortifolio } from '../../graphql/mutations';
import { useAuthContext } from '../../context/useContext';
import { Storage } from 'aws-amplify';
import { imagesMock } from '../../utils/imagesMock';

export interface PortifolioScreenProps {
    route: {
        params: {
            id: string
        }
    }
    navigation: any
}



const PortifolioScreen = ({ route, navigation }: PortifolioScreenProps) => {

    const { user } = useAuthContext()
    const portifolioID = route.params.id

    const [loadingChanges, setLoadingChanges] = useState(false)
    const [keyboardStatus, setKeyboardStatus] = useState(false)
    const [editPortifolio, setEditPortifolio] = useState(false)
    const [portifolioDataChanged, setPortifolioDataChanged] = useState(false)
    const [portifolioState, setPortifolioState] = useState<Portifolio>({
        id: "",
        title: "",
        content: "",
        backgroundImageKey: "",
        userID: "",
        createdAt: "",
        updatedAt: "",
        __typename: "Portifolio",
        filesKey: [],
    })

    const {
        data: portifolioData,
        loading: loadingPortifolio,
        error: errorPortifolio,
        refetch: refetchPortifolio
    } = useQuery<GetPortifolioQuery, GetPortifolioQueryVariables>(GET_PORTIFOLIO, {
        variables: {
            id: portifolioID
        }
    })

    const [doUpdatePortifolio] = useMutation<UpdatePortifolioMutation, UpdatePortifolioMutationVariables>(gql(updatePortifolio))


    const handleEditPortifolio = () => {
        setEditPortifolio(true)
    };

    const cancelEditingPortifolio = () => {
        setEditPortifolio(false)
        setPortifolioState(portifolioData?.getPortifolio as Portifolio)
    }

    const options = [
        {
            label: 'Delete this portifolio',
            Icon: 'delete',
            onPress: () => console.log('delete')
        },
        editPortifolio ? {
            label: 'Cancel editing',
            Icon: 'close',
            onPress: cancelEditingPortifolio
        } : {
            label: 'Edit this portifolio',
            Icon: 'edit',
            onPress: handleEditPortifolio
        },

    ]


    useEffect(() => {
        if (portifolioData) {
            setPortifolioState(portifolioData.getPortifolio as Portifolio)
        }

        return () => {
            setPortifolioState({
                id: "",
                title: "",
                content: "",
                backgroundImageKey: "",
                userID: "",
                createdAt: "",
                updatedAt: "",
                __typename: "Portifolio",
                filesKey: [],
            })
        }
    }, [portifolioID, loadingChanges, portifolioData?.getPortifolio])

    useEffect(() => {

        const showKeyboardSubscription = Keyboard.addListener('keyboardDidShow', () => setKeyboardStatus(true));
        const hideKeyboardSubscription = Keyboard.addListener('keyboardDidHide', () => setKeyboardStatus(false));

        return () => {
            showKeyboardSubscription.remove();
            hideKeyboardSubscription.remove();
        }
    }, [])


    const hasDifferentValues = (portifolioState: any, oldPortifolioState: any) => {
        let hasDifferentValues = false;
        if (!oldPortifolioState) return false;
        if (!portifolioState) return false;
        /**delete the unUpdated keys*/
        for (let key in portifolioState) {
            if (portifolioState[key] !== oldPortifolioState[key]) {
                hasDifferentValues = true
                break;
            }
        }

        return hasDifferentValues
    }

    useEffect(() => {
        const hasDifferentValuesResult = hasDifferentValues(portifolioState, portifolioData?.getPortifolio)
        setPortifolioDataChanged(hasDifferentValuesResult)
    }, [portifolioState])


    const onPressImage = (image: string, imageSpecs: any) => {
        console.log("imageSpecs", imageSpecs)
        navigation.navigate('FullImageScreen', {
            image,
            imageSpecs
        })
    }

    const handleRemoveImage = (image: string, tempFile?: boolean = false) => {
        const images = [...portifolioState.filesKey]
        if (!images) Alert.alert('Error', 'No images to remove')
        const indexObject = images.findIndex(object => object?.uri ? object.uri === image : object === image)
        images.splice(indexObject, 1)
        setPortifolioState({ ...portifolioState, filesKey: images })
    }

    const handleAddNewImage = async () => {

        try {
            const documentRes = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.allFiles]
            });

            setPortifolioState(previousState => !!previousState?.filesKey?.length ? ({
                ...previousState,
                filesKey: [...previousState?.filesKey!, ...documentRes]
            }) : ({
                ...previousState,
                filesKey: documentRes
            })
            )

        } catch (error) {
            console.log("error", error)
        } finally {

        }
    }


    const handleSaveImages = async () => {
        try {
            let newImages = [...portifolioState.filesKey!];
            const newImagesWithUri = newImages.filter((image) => image.uri)
            for (let item of newImagesWithUri) {
                const key = await saveImageToS3(item)
                newImages.push(key!)
            }
            return newImages.filter((image) => !image.uri)


        } catch (error) {
            console.log("Error: ", error)
        }
    }

    const saveImageToS3 = async (item: any) => {
        const itemType = item.type.split('/')[1]
        try {
            const fetchImage = await fetch(item.uri)
            const blob = await fetchImage.blob();
            const key = `${user?.id}/${portifolioData?.getPortifolio?.id}/extraImages-${new Date().getTime()}-${itemType}`;
            const { key: keyId } = await Storage.put(key, blob, {
                contentType: itemType,
                progressCallback(progress) {
                    console.log('progress', progress)
                },
                level: 'public'
            })
            console.log("keyId", keyId)
            return key;
        } catch (error) {
            return error;
        }
    }


    const handleSaveChanges = async () => {
        if (!portifolioDataChanged) return;
        setLoadingChanges(true)

        const input: UpdatePortifolioInput = {
            id: portifolioID as string,
        }

        if (portifolioState.title !== portifolioData?.getPortifolio?.title) {
            input.title = portifolioState.title
        }

        if (portifolioState.content !== portifolioData?.getPortifolio?.content) {
            input.content = portifolioState.content
        }

        if (portifolioState.filesKey !== portifolioData?.getPortifolio?.filesKey) {
            const newImages = await handleSaveImages()
            input.filesKey = newImages
        }


        try {
            console.log("INPUT: ", JSON.stringify(input, undefined, 3))
            await doUpdatePortifolio({
                variables: {
                    input
                }
            })
            await refetchPortifolio()
        } catch (error) {
            console.log("error", error)

        } finally {
            setEditPortifolio(false)
            setLoadingChanges(false)
        }
    }


    const redirectToPdfScreen = (pdf: string) => {
        navigation.navigate('PdfFullsizeScreen', {
            source: pdf,
            onCancel: () => navigation.goBack(),
            onDownload: () => { }
        })
    }



    if (loadingPortifolio) return <Loading />
    if (errorPortifolio) return <Text>error</Text>

    return (
        <View style={styles.container}>
            {loadingChanges && <Loading />}
           
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                <BackIcon />
                <Text style={{ color: '#202020' }} category='h3semibold'>Portifolio</Text>
                {portifolioData?.getPortifolio?.userID === user?.id && <PopupMenu options={options} />}
            </View>
            <ScrollView style={styles.scrollViewContainer} keyboardDismissMode='interactive' keyboardShouldPersistTaps="handled">

                {/* portifolio title; */}
                {editPortifolio ?
                    <TextInput
                        style={[styles.title, { fontSize: 19 }]}
                        value={portifolioState.title!}
                        onChangeText={(txt) => setPortifolioState({ ...portifolioState, title: txt })}
                        multiline
                        maxLength={50}
                        onBlur={() => console.log('blur')}
                    />
                    : <Text category='h3regular' style={styles.title}>{portifolioState.title!}</Text>}

                {/* main image */}
                <Image style={styles.backgroundImage} source={{ uri: getPublicImg(portifolioState.backgroundImageKey!) }} />
                {/* description  */}
                <View>
                    <TextInput
                        editable={editPortifolio}
                        style={styles.descriptionContent}
                        value={portifolioState.content}
                        onChangeText={(txt) => setPortifolioState({ ...portifolioState, content: txt })}
                        multiline
                    />
                </View>

                {/* extra files like img video or pdfs */}

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {!!portifolioState?.filesKey?.length && portifolioState.filesKey?.map((fileKey, index) => {
                        console.log("filkey",getPublicImg(fileKey))
                        const tempFile = !!fileKey?.uri
                        // se for pdf, video ou imagem
                        // se pdf, botão com opções de abrir ou baixar
                        const isPDF = tempFile ? fileKey.type === 'application/pdf' : fileKey?.includes('pdf')
                        return (
                            <>
                                <CustomImage
                                    index={index}
                                    handleRemoveImage={!tempFile ? () => handleRemoveImage(fileKey) : () => handleRemoveImage(fileKey.uri)}
                                    editImage={editPortifolio}
                                    source={!tempFile ? isPDF ? imagesMock.pdfLogo : getPublicImg(fileKey!) : isPDF ? imagesMock.pdfLogo : fileKey?.uri}
                                    onPress={isPDF ? () => redirectToPdfScreen(fileKey?.uri ? fileKey?.uri : getPublicImg(fileKey)) : onPressImage}
                                />
                            </>
                        )
                    })}
                    {editPortifolio && <Pressable
                        onPress={handleAddNewImage}
                        style={{
                            borderWidth: 1
                            , borderStyle: 'dashed',
                            borderColor: colors.main.primary,
                            borderRadius: 4,
                            width: 90,
                            height: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text>+</Text>
                    </Pressable>}
                </View>


                {/* padding bottom */}
                <View style={{ height: 100 }} />
                {/* padding bottom */}
            </ScrollView>
            {editPortifolio && portifolioDataChanged && !keyboardStatus && <View style={styles.saveOrCancelEdit}>
                <Pressable onPress={handleSaveChanges} style={[styles.saveOrCancelEditButton, { backgroundColor: colors.meaning.info }]}>
                    <Text style={{ color: "white", fontWeight: 'bold' }}>Save changes</Text>
                </Pressable>
                <Pressable onPress={cancelEditingPortifolio} style={[styles.saveOrCancelEditButton, { backgroundColor: colors.meaning.warning, marginTop: 6 }]}>
                    <Text style={{ fontWeight: 'bold', color: "#202020" }}>Cancel editing</Text>
                </Pressable>
            </View>
            }
        </View>
    )
}

export default PortifolioScreen;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: "white",
    },
    scrollViewContainer: {
        padding: 20
    },
    title: {
        alignSelf: 'center',
        color: "#202020",
        paddingHorizontal: 10,
        borderRadius: 4,
        paddingVertical: 2,
        marginBottom: 20
    },
    backgroundImage: {
        height: dimensions.height * 0.4,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 8,
    },
    saveOrCancelEdit: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        elevation: 7
    },
    saveOrCancelEditButton: {
        width: '95%',
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionContent: {
        color: "#202020",
        marginVertical: 20,
    }
})