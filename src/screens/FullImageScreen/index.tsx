import React, { useEffect, useCallback } from 'react';
import { Text, View, Image, Dimensions, StyleSheet, BackHandler, Pressable, Alert } from 'react-native';
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window')
const FullImageScreen: React.FC = ({ route, navigation }) => {


    const { image, imageSpecs } = route.params;

    const onPressClose = () => {
        const callBack = () => navigation.goBack();
        anim.value = withTiming(0, {}, isFinished => isFinished && runOnJS(callBack)())
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', onPressClose)
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onPressClose)
        }
    }, [])


    const anim = useSharedValue(0);

    useEffect(() => {

        anim.value = 0;

        anim.value = withTiming(1)
    }, [])

    const imgContainerStyle = useAnimatedStyle(() => ({
        position: 'absolute',
        top: interpolate(anim.value, [0, 1], [imageSpecs.y, 0]),
        left: interpolate(anim.value, [0, 1], [imageSpecs.x, 0]),
        width: interpolate(anim.value, [0, 1], [imageSpecs.width, width]),
        height: interpolate(anim.value, [0, 1], [imageSpecs.height, height]),
        borderRadius: interpolate(anim.value, [0, 1], [10, 0]),
        backgroundColor: interpolate(anim.value, [0, 1], ['white', 'black']),
        overflow: 'hidden'
    }), [])


    return (
        <Animated.View style={[{ flex: 1, backgroundColor: "rgba(0,0,0,0.7)" }]}>
            <Pressable style={{ position: 'absolute', zIndex: 1, top: 0, right: 0, left: 0, bottom: 0, backgroundColor: 'transparent' }} onPress={onPressClose} />
            <Text onPress={onPressClose} style={{ position: 'absolute', right: 20, top: 40, backgroundColor: 'white', color: 'black', borderRadius: 10, padding: 5, zIndex: 5 }}>Close X</Text>
            <View style={{ flex: 1 }}>
                <Animated.View style={[styles.ImageContainer, imgContainerStyle]}>
                    <Image source={{ uri: image }} style={{ height: '100%', width: '100%', resizeMode: 'contain' }} />
                </Animated.View>

            </View>
        </Animated.View>
    )
}

export default FullImageScreen;

const styles = StyleSheet.create({
    ImageContainer: {
        zIndex:0
    }
})