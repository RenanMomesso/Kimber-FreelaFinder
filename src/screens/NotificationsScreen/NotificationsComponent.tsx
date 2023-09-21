import { gql, useMutation, useQuery } from '@apollo/client';
import moment from 'moment';
import React, { useRef } from 'react';
import { Alert, Image, Pressable, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { DeleteNotificationMutation, GetUserQuery, GetUserQueryVariables, Notification, NotificationType, UpdateNotificationMutation, UpdateNotificationMutationVariables } from '../../API';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';
import { useGlobalQueries } from '../../context/useQueries';
import { deleteNotification, updateNotification } from '../../graphql/mutations';
import { navigationRef } from '../../navigations/NavigationRef';
import { getPublicImg } from '../../utils/publicimages';
import { styles } from './NotificationStyles';
import NotificationsScreenButtons from './NotificationsButton';
import { getUserAvatarAndName } from './queries';


const NotificationsItem = ({ item }: { item: Notification }) => {
    const swipableRef = useRef<Swipeable>(null)
    const { refetchNotifications } = useGlobalQueries()
    const { data: senderData } = useQuery<GetUserQuery, GetUserQueryVariables>(getUserAvatarAndName, {
        variables: {
            id: item?.senderID
        }
    })


    const [doMutationUpdate] = useMutation<UpdateNotificationMutation, UpdateNotificationMutationVariables>(gql(updateNotification),
    {
        refetchQueries: ['ListNotifications']
    })
    const [doDeleteNotification] = useMutation<DeleteNotificationMutation, UpdateNotificationMutationVariables>(gql(deleteNotification), {
        refetchQueries: ['ListNotifications']
    })


    const handlePressNotification = async () => {
        try {
            if (item.notificationType === NotificationType.APPLIED) {

                navigationRef.current?.navigate("JobsCreatedNavigation", {
                    screen: "JobCreatedDetails", params: {
                        id: item.jobID
                    }
                })
            } else if (item.notificationType === NotificationType.COMPLETED) {
                navigationRef.current?.navigate("JobsHistoricDetails", {
                    id: item.jobID

                })
            }
            if (item?.read) {
                await doMutationUpdate({
                    variables: {
                        input: {
                            id: item.id,
                            read: false
                        },

                    }
                })
            }

        } catch (error) {
            console.log("Error: ", (error as Error).message)
        } finally {
            await refetchNotifications()
        }
    }


    const handlePressCheckNotification = async () => {
        try {
            await doMutationUpdate({
                variables: {
                    input: {
                        id: item.id,
                        read: false
                    },

                }
            })
        } catch (error) {
            Alert.alert('Error: ', (error as Error).message)
        }
    };

    const handlePressDeleteNotification = async () => {
        try {
            await doDeleteNotification({
                variables: {
                    input: {
                        id: item.id
                    },

                }
            })
        } catch (error) {
            Alert.alert('Error: ', (error as Error).message)
        }
    }

    const senderDataAvatar = senderData?.getUser?.avatar
    const profilePicture = senderDataAvatar ? 
    { uri: getPublicImg(senderDataAvatar!) } : 
    { uri: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" }
    return (
        <Swipeable
            ref={swipableRef}
            rightThreshold={42}
            overshootRight={false}
            shouldCancelWhenOutside={true}
            renderRightActions={() => <NotificationsScreenButtons
                onPressCheck={handlePressCheckNotification}
                onPressDelete={handlePressDeleteNotification}
            />}
        >

            <Pressable style={[styles.container, { backgroundColor: item.read ? 'lightblue' : 'white' }]} onPress={handlePressNotification}>
                <View style={[styles.notificationDot, { backgroundColor: item.read ? colors.meaning.info : 'transparent' }]} />
                <Image source={profilePicture} style={styles.userAvatar} />
                <View style={{ flexDirection: 'column', }}>
                <Text category='h5m' style={styles.notificationText}>
                        {item?.text}.
                    </Text>
                    <Text category='h6'>{moment(item?.createdAt).fromNow()}</Text>
                </View>
            </Pressable>
        </Swipeable>

    )
}

export default NotificationsItem;

