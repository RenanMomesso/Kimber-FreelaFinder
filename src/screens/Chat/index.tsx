import { gql, useQuery, useSubscription } from '@apollo/client';
import { NavigationProp } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { SectionList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GetChatRoomQuery, GetChatRoomQueryVariables, GetUserChatRoomQueryVariables, GetUserQuery, Message, NotificationType, OnUpdateChatRoomSubscription } from '../../API';
import BackIcon from '../../components/BackIcon';
import ClickAvatar from '../../components/ClickAvatar';
import CustomImage from '../../components/ClickableImage';
import ImageSelect from '../../components/ImageSelect';
import MessageInputBox from '../../components/MessageInputBox';
import Text from '../../components/Text';
import { useAuthContext } from '../../context/useContext';
import { getChatRoom, getUser } from '../../graphql/queries';
import { onUpdateChatRoom } from '../../graphql/subscriptions';
import { navigationRef } from '../../navigations/NavigationRef';
import { PDFIMAGE } from '../../utils/pdfImage';
import { getPublicImg } from '../../utils/publicimages';
import { redirectToPdfScreen } from '../../utils/redirectToPdfScreen';


export interface IChatProps {

    navigation: NavigationProp<any>
    route: {
        params: {
            id: string
            name: string;
            from: string | null
        }
    }

}


const ChatMessage = ({ item }: { item: Message }) => {

    const { data: userData } = useQuery<GetUserQuery, GetUserChatRoomQueryVariables>(gql(getUser), {
        variables: {
            id: item?.userID
        }
    })

    const { user } = useAuthContext()
    const file: string[] | null = item.images
    const isMe = item?.userID === user?.id

    const onPressImage = (image: string, imageSpecs: any) => {
        // setVisible(false)
        setTimeout(() => {
            navigationRef.navigate('FullImageScreen', {
                image,
                imageSpecs
            })
        }, 100);

    }




    if (!!file?.length) {
        return (
            <View style={[
                styles.container,
                {
                    backgroundColor: isMe ? "#DCF8C5" : "white",
                    alignSelf: isMe ? "flex-end" : "flex-start",
                },
            ]}>

                {file.map((item, index) => {
                    const isPDFFILE = item.includes('pdf')
                    return (
                        <>
                            <CustomImage
                                index={index}
                                source={isPDFFILE ? PDFIMAGE : getPublicImg(item)}
                                onPress={isPDFFILE ? () => redirectToPdfScreen(getPublicImg(item)) : onPressImage}
                            />
                        </>
                    )
                })}
            </View>
        )
    } else if (!item?.text) return null



    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: isMe ? "#DCF8C5" : "white",
                    alignSelf: isMe ? "flex-end" : "flex-start",
                    flexDirection: 'row',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    maxWidth: '65%'
                },
            ]}
        >

            <Text category='h5m' style={{ marginRight: 6, fontSize: 13 }}>{item?.text}</Text>
            <Text category='h6' style={styles.time}>{moment(item?.createdAt).format("LT")}</Text>
        </View>)
}


const ChatScreen = ({ ...props }: IChatProps) => {
    const chatRef = useRef<SectionList>(null)
    const [newMessages, setNewMessages] = useState<Message[]>([])
    const [images, setImages] = React.useState([]);
    const [closeImages, setCloseImages] = React.useState(false);
    const [messagesList, setMessagesList] = useState([])

    const { user } = useAuthContext()
    const { navigation, route } = props

    const { data, loading } = useQuery<GetChatRoomQuery, GetChatRoomQueryVariables>(gql(getChatRoom), {
        variables: {
            id: route.params.id,

        }
    })

    const { data: onUpdateChatROom } = useSubscription<OnUpdateChatRoomSubscription>(gql(onUpdateChatRoom), {
        variables: {
            id: route.params.id
        }
    })




    const messages = data?.getChatRoom?.Messages?.items
    // const sortByCreatedTime = [...messages]?.sort((a, b) => {
    //     return a?.createdAt > b?.createdAt ? -1 : 1
    // })

    const sortMessages = messages?.length && [...messages, ...newMessages]?.sort((a, b) => {
        return a?.createdAt > b?.createdAt ? -1 : 1

    })

    const groupBy = (array, callback) => {
        const groups = {};
        array?.forEach((item) => {
            const key = callback(item);
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(item);
        });
        return groups
    }



    const groupedList = Object.values(
        groupBy(sortMessages, function (n) {
            return moment(n?.createdAt).format('DD-MM-YYYY');
        })
    )

    var dataMessages: any = []
    groupedList?.map((message) => {

        let section = {
            title: message?.[0]?.createdAt,
            data: [...message].sort((a, b) => {
                return a?.createdAt > b?.createdAt ? 1 : -1
            })
        }
        dataMessages.push(section)
    })

    const sortDataMessages = !!dataMessages?.length && dataMessages?.sort((a, b) => {
        return a?.title > b?.title ? 1 : -1
    }) || []
    useEffect(() => {

        if (onUpdateChatROom?.onUpdateChatRoom) {
            setNewMessages(exisitingNewMessage => [
                onUpdateChatROom?.onUpdateChatRoom?.Messages?.items as Message[] || [],
                ...exisitingNewMessage
            ])
        }
        chatRef.current?.scrollToLocation({
            animated: true,
            sectionIndex: dataMessages?.length - 1,
            itemIndex: dataMessages?.map((item) => item.data.length)[dataMessages.length - 1],

        })
    }, [onUpdateChatROom])

    useEffect(() => {
        if (dataMessages?.length) {
            chatRef.current?.scrollToLocation({
                animated: true,
                sectionIndex: dataMessages?.length - 1,
                itemIndex: dataMessages?.map((item) => item.data.length)[dataMessages.length - 1],

            })
        }
    }, [dataMessages])

    useEffect(() => {
        navigation.setOptions({
            title: route.params.name
        })
    }, [])

    const otherUser = data?.getChatRoom?.users?.items.filter(chatUser => chatUser?.userID !== user?.id)[0]

    if (loading) return <View><Text>Loading...</Text></View>
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                height: 70,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: 20,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                borderRadius: 8
            }}>
                <BackIcon onPress={route.params?.from === NotificationType.APPLIED ? () => navigation.navigate("ChatNavigation") : () => navigation.goBack()} />
                <View style={{ marginHorizontal: 6, }}>

                    <ClickAvatar dimension={true} imageKey={otherUser?.user.avatar} onPress={() => navigation.navigate("OtherUserProfileScreen", {
                        id: otherUser?.user?.id
                    })} />
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{route.params.name}</Text>
            </View>
            {!!images.length && !closeImages && <ImageSelect chatRoom={data?.getChatRoom} images={images} setImages={setImages} setCloseImages={setCloseImages} />}
            <SectionList
                onScrollToIndexFailed={info => {
                    const wait = new Promise(resolve => setTimeout(resolve, 500))
                    wait.then(() => {
                        chatRef.current?.scrollToLocation({
                            animated: true,
                            sectionIndex: dataMessages?.length - 1,
                            itemIndex: dataMessages?.map((item) => item.data.length)[dataMessages.length - 1],

                        })
                    })
                }}
                ref={chatRef}
                sections={sortDataMessages}
                renderItem={({ item }) => <ChatMessage item={item} />}
                renderSectionHeader={({ section: { title } }) => (<Text style={{
                    backgroundColor: "#FFF",
                    color: "#202020",
                    textAlign: 'center',
                    alignSelf: 'center',
                    paddingHorizontal: 6,
                    paddingVertical: 2,
                    borderRadius: 8,
                    marginVertical: 20,
                }}>{moment(title).format('LL')}</Text>)}
            />

            <MessageInputBox setCloseImages={setCloseImages} images={images} setImages={setImages} chatRoom={data?.getChatRoom} />

        </SafeAreaView>
    )
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: "80%",

        // Shadows
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
    },
    time: {
        color: "gray",
        alignSelf: "flex-end",
    },
});