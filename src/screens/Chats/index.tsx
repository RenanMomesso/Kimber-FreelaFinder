import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import React from 'react';
import { ActivityIndicator, FlatList, Image, ListRenderItem, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChatRoom, ListChatRoomsQuery, ListChatRoomsQueryVariables } from '../../API';
import BackIcon from '../../components/BackIcon';
import Text from '../../components/Text';
import { useAuthContext } from '../../context/useContext';
import { listChatRooms } from '../../graphql/queries';
import { navigationRef } from '../../navigations/NavigationRef';
import { getPublicImg } from '../../utils/publicimages';





const ChatRoomUser: ListRenderItem<ChatRoom> = ({ item }) => {

    const { user } = useAuthContext()

    const userData = item?.users?.items.find((userFound) => userFound?.user?.id !== user?.id)
    
    const avatar = !userData?.user?.avatar ? getPublicImg(userData?.user.avatar) : 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'

    const navigateToChatRoom = () => {
        navigationRef.navigate("Chat", {
            id: item.id,
            name: userData?.user.fullname
        })
    };
    return (
        <Pressable onPress={navigateToChatRoom} style={{
            borderRadius: 4,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            marginHorizontal: 8,
            marginTop: 4,
            marginBottom: 4
        }}>
            <View style={{ height: 60, width: 60, marginHorizontal: 8, borderRadius: 100,justifyContent:'center',alignItems:'center' }}>
                <Image source={{ uri: avatar }} style={{ height: 60, width: 60, borderRadius: 100}} />
            </View>
            <Text category='h6' style={{ position: 'absolute', top: 10, right: 0 }}>{moment(item.LastMessage?.updatedAt).fromNow()}</Text>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 60 }}>
                <Text category='h5m'>{userData?.user.fullname}</Text>
                <Text category='h6' numberOfLines={2} lineBreakMode='tail'>{item?.LastMessage?.text?.includes("png") ? 'Image' : item?.LastMessage?.text}</Text>
            </View>
        </Pressable>
    )
}

const Chats = () => {
    const { user } = useAuthContext()
    const { data, loading } = useQuery<ListChatRoomsQuery, ListChatRoomsQueryVariables>(gql(listChatRooms))

    const removeDuplicateds = [...new Map(data?.listChatRooms?.items.map(item => [item.id, item])).values()]
    const chatRooms = removeDuplicateds?.filter(item => item?.users?.items.find(userFound => userFound?.user?.id === user?.id))
    const sortChatRooms = !!chatRooms?.length && chatRooms.sort((a, b) => {
        if (a?.LastMessage?.updatedAt < b?.LastMessage?.updatedAt) {
            return 1;
        }
        if (a?.LastMessage?.updatedAt > b?.LastMessage?.updatedAt) {
            return -1;
        }
        return 0;
    })


    if (loading) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color="red" /></View>
    )
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 20
            }}>
                <BackIcon  />
                <Text style={{ color: "#202020" }} category='h3medium'>Conversations</Text>
                <View style={{width:30}} />
            </View>
            <FlatList
                ListEmptyComponent={<Text category='h5m' style={{alignSelf:'center'}}>No Conversations</Text>}
                data={sortChatRooms}
                renderItem={({ item }) => <ChatRoomUser item={item} />}
            />
        </SafeAreaView>
    )
}

export default Chats;