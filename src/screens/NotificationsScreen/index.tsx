import { gql, useQuery, useSubscription } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListNotificationsQuery, ListNotificationsQueryVariables, Notification, OnCreateNotificationSubscription } from '../../API';
import BottomSheet from '../../components/BottomSheet';
import Loading from '../../components/Loading';
import Text from '../../components/Text';
import { useAuthContext } from '../../context/useContext';
import { listNotifications } from '../../graphql/queries';
import { onCreateNotification } from '../../graphql/subscriptions';
import { useNotification } from '../../hooks/Notification';
import NotificationsItem from './NotificationsComponent';



const NotificationsScreen: React.FC = () => {
  const [newNotification, setNewNotification] = useState<Notification[]>([])
  const { displayNotification } = useNotification()
  const { user } = useAuthContext()

  const { data: listUserNotification, loading: loadingNotifications } = useQuery<ListNotificationsQuery, ListNotificationsQueryVariables>(gql(listNotifications), {
    variables: {
      filter: {
        userID: {
          eq: user?.id
        }
      }
    }
  })

  const notifications = listUserNotification?.listNotifications?.items

  const { data: createNotificationSub } = useSubscription<OnCreateNotificationSubscription>(gql(onCreateNotification))


  const sortNotifications = notifications?.length && [...notifications, ...newNotification].sort((n1, n2) => new Date(n2?.createdAt) - new Date(n1?.createdAt)).filter(notification => notification?.userID === user?.id) || []
  const uniques = [] as Notification[]
  useEffect(() => {
    if (createNotificationSub?.onCreateNotification) {
      setNewNotification(previous => [createNotificationSub.onCreateNotification as Notification[] || [], ...previous])

    }
}, [createNotificationSub])
  const removeDuplicateds = sortNotifications.filter(notification => {
    const isDuplicated = uniques.includes(notification?.id)

    if (!isDuplicated) {
      uniques.push(notification?.id)
      return true
    }
    return false

  })

 


  if (loadingNotifications) return <Loading />

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: "#202020" }} category='h2'>Notifications </Text>
          <BottomSheet />
        </View>
        <FlatList
          style={{
            marginTop: 20,
            height: '100%'
          }}
          keyExtractor={(item, index) => index.toString() + item?.id}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <Text style={{ color: "#202020", alignItems: 'center' }} category='h6'>No notifications yet</Text>}
          ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
          data={removeDuplicateds}
          renderItem={({ item }) => <NotificationsItem item={item} />}
        />

      </View>
    </SafeAreaView>
  )
}

export default NotificationsScreen;