import { NavigationProp } from '@react-navigation/native';
import React, { forwardRef, useCallback, useImperativeHandle } from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Entypo';
import { API_AUTH } from '../../Api/auth';
import Analytics from '../../constants/icons/Analytics.svg';
import ChatIcon from '../../constants/icons/ChatIcon.svg';
import OrdersIcon from '../../constants/icons/Orders.svg';
import SettingsIcon from '../../constants/icons/SettingsIcon.svg';
import SignOutIcon from '../../constants/icons/SignOutIcon.svg';
import { navigationRef } from '../../navigations/NavigationRef';
import Text from '../Text';

const { height: SCREEN_HEIGHT } = Dimensions.get('window')

export type BottomSheetRefProps = {
    scrollTo?: (destination: number) => void;
    isActive?: () => boolean;
    navigation?: NavigationProp<any>;
}

export type PressableBottomItem = { onPress: () => void; icon: React.ReactElement; title: string }



const PressableBottomItem = ({ onPress, icon, title }: PressableBottomItem) => {
    return (
        <Pressable onPress={onPress} style={{
            width: '100%',
            height: 50,
            alignItems: 'center',
            flexDirection: 'row',
        }}>
            {icon}
            <Text style={{ marginLeft: 10, color: "#202020" }}>{title}</Text>
            <Icon name='chevron-right' size={20} style={{ marginLeft: "auto" }} />
        </Pressable>
    )
}

const BottomSheet = forwardRef<{}, BottomSheetRefProps>(({ navigation }, ref) => {

    const translationY = useSharedValue(0)
    const context = useSharedValue({ y: 0 })
    const active = useSharedValue(false)
    const translationBackDrop = useSharedValue(0)


    const gesture = Gesture.Pan()
        .onStart((_,) => {
            context.value = { y: translationY.value }
        })
        .onUpdate(event => {
            translationY.value = event.translationY + context.value.y
            translationY.value = Math.max(translationY.value, -SCREEN_HEIGHT + 400)
        })
        .onEnd(event => {
            if ((translationY.value > -SCREEN_HEIGHT / 3) || (event.velocityY > 500)) {
                active.value = false
                translationY.value = withSpring(0, { damping: 50 })
                translationBackDrop.value = withSpring(0, { damping: 50 })
            }
        })

    const bottomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translationY.value }]
        }
    })

    const backdropStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translationBackDrop.value }],
            opacity: withTiming(active.value ? 1 : 0, { duration: 400 }),
            backgroundColor: "rgba(0,0,0,0.5)"
        }
    })

    const scrollTo = useCallback((destination: number) => {
        active.value = destination !== 0
        translationY.value = withSpring(destination, { damping: 50 })
        translationBackDrop.value = withSpring(-SCREEN_HEIGHT, { damping: 60 })
    }, [])

    const isActive = useCallback(() => {
        return active.value
    }, [])


    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive])

    const close = () => {
        active.value = false
        translationY.value = withSpring(0, { damping: 50 })
        translationBackDrop.value = withSpring(0, { damping: 50 })

    }

    return (
        <Animated.View style={[
            styles.containerBottomSheet,
            backdropStyle
        ]}>

            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.containerBottomSheet, bottomSheetStyle]}>
                    <View style={{
                        width: '100%',
                        alignSelf: 'center',

                        height: 10,
                        backgroundColor: "lightgray",
                        position: 'absolute',
                        top: 0
                    }} />
                    <View style={styles.line} />
                    <View style={{ padding: 10, flex: 1 }}>
                        <Pressable style={{ position: 'absolute', right: 20 }} onPress={close} ><Text style={{ fontSize: 20 }}>X</Text></Pressable>
                        <PressableBottomItem onPress={() => {
                            navigationRef.current?.navigate("ChatNavigation")
                        }} icon={<ChatIcon />} title="Messages" />
                        <PressableBottomItem onPress={() => {
                            navigationRef.current?.navigate("JobsCreatedNavigation")
                        }} icon={<OrdersIcon />} title="Services created" />
                        <PressableBottomItem onPress={() => {
                            navigation?.navigate("JobsHistoricNavigation")
                        }} icon={<OrdersIcon />} title="Services applied" />
                        <PressableBottomItem
                            onPress={() => navigationRef.navigate("AnalyticsScreen")}
                            icon={<Analytics />}
                            title="Analytics" />
                        <PressableBottomItem onPress={() => navigationRef.navigate("EditProfileScreen")} icon={<SettingsIcon />} title="Account Settings" />
                        <PressableBottomItem onPress={() => API_AUTH.signOut()} icon={<SignOutIcon />} title="Sign Out" />
                    </View>

                </Animated.View>
            </GestureDetector >
        </Animated.View >
    )
})

export default BottomSheet;

const styles = StyleSheet.create({
    containerBottomSheet: {
        zIndex: 99,
        height: SCREEN_HEIGHT,
        width: "100%",
        position: 'absolute',
        top: SCREEN_HEIGHT - 15,
        backgroundColor: '#FFF',
        borderRadius: 20,
        overflow: 'hidden'
    },
    line: {
        height: 4,
        width: 70,
        backgroundColor: 'darkgray',
        marginVertical: 25,
        alignSelf: 'center',
        borderRadius: 10
    }
})