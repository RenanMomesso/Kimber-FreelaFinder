import React from 'react';
import { View, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../constants/colors';
import { styles } from './NotificationStyles'

export interface INotificationsScreenButtonsProps {
    onPressCheck: () => void;
    onPressDelete: () => void;
}

const NotificationsScreenButtons = ({ onPressCheck, onPressDelete }: INotificationsScreenButtonsProps) => {
    return (
        <View style={styles.notificationOptions}>
            <Pressable onPress={onPressCheck} style={styles.notificationButton(colors.gray.gray60)}>
                <AntDesign name="checkcircle" color={colors.meaning.success} size={20} />
            </Pressable>
            <Pressable onPress={onPressDelete} style={styles.notificationButton(colors.meaning.error)}>
                <AntDesign name="delete" color={"white"} size={20} />
            </Pressable>
        </View>
    )
}

export default NotificationsScreenButtons;
