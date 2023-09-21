import { gql, useMutation } from '@apollo/client';
import { Storage } from 'aws-amplify';
import React from 'react';
import { Alert, FlatList, Image, Pressable, Text, View } from 'react-native';
import { CreateMessageInput, CreateMessageMutation, CreateMessageMutationVariables, UpdateChatRoomMutation, UpdateChatRoomMutationVariables } from '../../API';
import { useAuthContext } from '../../context/useContext';
import { createMessage, updateChatRoom } from '../../graphql/mutations';
import { PDFIMAGE } from '../../utils/pdfImage';

// import { Container } from './styles';

const ImageSelect: React.FC<{ images: any, setImages: any, setCloseImages: any }> = ({ images, setImages, setCloseImages, chatRoom }) => {
    const { user } = useAuthContext()

    const [doCreateMessage, { loading, error }] = useMutation<CreateMessageMutation, CreateMessageMutationVariables>(gql(createMessage))
    const [doUpdateChatRoom, { loading: loadingUpdateChatingRoom }] = useMutation<UpdateChatRoomMutation, UpdateChatRoomMutationVariables>(gql(updateChatRoom))
    const uploadFile = async (uri: string) => {
        const response = await fetch(uri)
        const blob = await response.blob()
        const key = `message/${user?.fullname}/${user?.id}${Date.now()}-${blob.type}`
        const result = await Storage.put(key, blob)
        return result
    };
    const sendMessage = async () => {
        let inputMessage: CreateMessageInput = {
            chatroomID: chatRoom.id,
            userID: user?.id || user?.attributes.sub,

        }


        try {
            if (images.length) {
                const uploadFiles = await Promise.all(images.map((image: any) => uploadFile(image.uri)))

                inputMessage = {
                    ...inputMessage,
                    text: "File",
                    images: uploadFiles.map(item => item.key)
                }
            }
            const { data } = await doCreateMessage({ variables: { input: inputMessage } })
            await doUpdateChatRoom({ variables: { input: { id: chatRoom.id, chatRoomLastMessageId: data?.createMessage?.id } } })

        } catch (error) {
            Alert.alert("Error creating message", (error as Error).message)
        } finally {
            setImages([])
            setCloseImages(true)
        }
    };
    return (
        <View style={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0, backgroundColor: '#202020', zIndex: 10 }}>
            <Pressable>
                <Text style={{ fontSize: 22, color: 'white', alignSelf: 'flex-end', paddingRight: 30 }} onPress={() => setImages([])}>X</Text>
            </Pressable>
            <FlatList horizontal data={images} renderItem={({ item }) => {
                const containPDF = item.type.includes('pdf')
                return (
                    <View>
                        <Image source={{ uri: containPDF ? PDFIMAGE : item.uri }} style={{ height: 500, width: 400 }} />
                    </View>)
            }} />
            <FlatList style={{ marginLeft: 5 }} horizontal data={images} renderItem={({ item }) => {
                const isPDF = item.type.includes('pdf')
                return <Image source={{ uri: isPDF ? PDFIMAGE : item.uri }} style={{ height: 90, width: 90, marginRight: 5 }} />
            }} />
            <Pressable disabled={loadingUpdateChatingRoom || loading} style={{ position: 'absolute', right: 10, bottom: 30, backgroundColor: loadingUpdateChatingRoom || loading ? 'gray' : 'green', padding: 8, borderRadius: 7 }} onPress={sendMessage}>
                <Text style={{ fontSize: 20, color: 'white' }}>{loadingUpdateChatingRoom || loading ? 'loading' : 'Send'}</Text>
            </Pressable>
        </View>
    )
}

export default ImageSelect;