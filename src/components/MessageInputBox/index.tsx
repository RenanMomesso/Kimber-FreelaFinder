import { gql, useMutation } from '@apollo/client';
import { Storage } from 'aws-amplify';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, TextInput } from 'react-native';
import DocukmentPicker from 'react-native-document-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ChatRoom, CreateAttachmentMutation, CreateAttachmentMutationVariables, CreateMessageInput, CreateMessageMutation, CreateMessageMutationVariables, UpdateChatRoomMutation, UpdateChatRoomMutationVariables } from '../../API';
import { useAuthContext } from '../../context/useContext';
import { createAttachment, createMessage, updateChatRoom } from '../../graphql/mutations';

export interface IMessageInputProps {
    chatRoom: ChatRoom;
    setImages: React.Dispatch<React.SetStateAction<string[] | any>>;
    images: any
    setCloseImages: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageInputBox: React.FC<IMessageInputProps> = ({ chatRoom, setImages, images, setCloseImages }) => {
    const { user } = useAuthContext();
    const [messageText, setMessageText] = useState('')
    const [doCreateMessage, { loading, error }] = useMutation<CreateMessageMutation, CreateMessageMutationVariables>(gql(createMessage))
    const [doUpdateChatRoom] = useMutation<UpdateChatRoomMutation, UpdateChatRoomMutationVariables>(gql(updateChatRoom))
    const [doCreateAttachment] = useMutation<CreateAttachmentMutation, CreateAttachmentMutationVariables>(gql(createAttachment))

    const handleUploadFiles = async () => {

        setCloseImages(false)
        try {

            const res = await DocukmentPicker.pickMultiple({
                type: [DocukmentPicker.types.allFiles],
            })
            setImages(res)
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

    const uploadFile = async (uri: string) => {
        const response = await fetch(uri)
        const blob = await response.blob()
        const key = `message/${user?.fullname}/${user?.id}${Date.now()}pngjpgpdf`
        const result = await Storage.put(key, blob, {
            contentType: 'image/png'
        })
        return result
    };
    const sendMessage = async () => {
        if (!messageText && !images.length) return;
        let inputMessage: CreateMessageInput = {
            chatroomID: chatRoom.id,
            text: messageText,
            userID: user?.attributes.sub,

        }


        try {
            if (images.length) {
                const uploadFiles = await Promise.all(images.map((image: any) => uploadFile(image.uri)))

                inputMessage = {
                    ...inputMessage,
                    text: null,
                    images: uploadFiles.map(item => item.key)
                }
            }
            const { data } = await doCreateMessage({ variables: { input: inputMessage } })
            if (data || !error) {
                setMessageText('')
                inputMessage.text = ''
                setImages([])
                await doUpdateChatRoom({ variables: { input: { id: chatRoom.id, chatRoomLastMessageId: data?.createMessage?.id } } })
            }
        } catch (error) {
            Alert.alert("Error creating message", (error as Error).message)
        }
    };

    return (
        <SafeAreaView edges={['bottom']} style={styles.container}>

            <Foundation onPress={handleUploadFiles} name="paperclip" size={24} color="grey" />
            <TextInput
                returnKeyType='done'
                onSubmitEditing={sendMessage}
                multiline
                value={messageText}
                onChangeText={setMessageText}
                placeholder="type something..."
                style={styles.input}
            />
            {loading ? <ActivityIndicator color="green" /> : <MaterialIcons name="send" size={24} color="black" onPress={sendMessage} />}
        </SafeAreaView>
    )
}

export default MessageInputBox;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "whitesmoke",
        padding: 5,
        paddingHorizontal: 16,
        paddingBottom: 10,
        alignItems: "center",
    },
    input: {
        flex: 1,
        backgroundColor: "white",
        padding: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginHorizontal: 10,

        borderRadius: 30,
        borderColor: "lightgray",
        borderWidth: StyleSheet.hairlineWidth,
    },
    send: {
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 15,
        overflow: "hidden",
    },
});