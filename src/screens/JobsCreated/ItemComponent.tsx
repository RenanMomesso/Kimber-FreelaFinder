import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { ListRenderItem, Pressable, Text, View } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { cancelAnimation, runOnJS, useAnimatedGestureHandler, useAnimatedReaction, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Job } from "../../API"
import { colors } from '../../constants/colors'
import { navigationRef } from '../../navigations/NavigationRef'
import dimensions from '../../utils/dimensions'



const JOBHEIGHT = 120;
const SCROLL_HEIGHT_THRESHOLD = JOBHEIGHT

function clamp(value: number, lowerBound: number, upperBound: number) {
    'worklet';
    return Math.max(lowerBound, Math.min(value, upperBound));
}

function objectMove(object: Record<any, any>, from: number, to: number) {
    'worklet';
    const newObject = Object.assign({}, object);

    for (const id in object) {
        if (object[id] === from) {
            newObject[id] = to;
        }

        if (object[id] === to) {
            newObject[id] = from;
        }
    }

    return newObject;
}

export interface ItemComponentProps extends Job  {
    positions: any;
    scrollY: Animated.SharedValue<number>;
    jobsLength: number;
    item: Job;

}
const ItemComponent: ListRenderItem<ItemComponentProps> = ({ item, positions, index, scrollY, jobsLength }) => {

    const insets = useSafeAreaInsets()
    const [moving, setMoving] = useState(false)
    const [animationEnabled, setAnimationEnabled] = useState(false)
    const top = useSharedValue(positions.value[item.id] * JOBHEIGHT)

    useAnimatedReaction(
        () => positions.value[item.id],
        (currentPosition, previousPosition) => {
            if (currentPosition !== previousPosition) {
                if (!moving) {
                    top.value = withSpring(currentPosition * JOBHEIGHT);
                }
            }
        },
        [moving]
    );

    useEffect(() => {

    }, [])

    const gestureHandler = useAnimatedGestureHandler({
        onStart() {
            runOnJS(setMoving)(true)

        },
        onActive(event) {
            const positionY = event.absoluteY + scrollY.value

            if (positionY <= scrollY.value + SCROLL_HEIGHT_THRESHOLD) {
                scrollY.value = withTiming(0, { duration: 1500 })
                // scroll up
            } else if (
                positionY >= scrollY.value + dimensions.height - SCROLL_HEIGHT_THRESHOLD
            ) {
                // scroll down
                const contentHeight = jobsLength + JOBHEIGHT
                const containerHeight = dimensions.height - insets.top - insets.bottom
                const maxScroll = contentHeight - containerHeight
                scrollY.value = withTiming(maxScroll, { duration: 1500 })
            } else {
                cancelAnimation(scrollY)
            }

            top.value = withTiming(positionY - JOBHEIGHT, {
                duration: 0
            })

            const newPosition = clamp(Math.floor(positionY / JOBHEIGHT), 0, jobsLength - 1)
            if (newPosition !== positions.value[item.id]) {
                positions.value = objectMove(
                    positions.value,
                    positions.value[item.id],
                    newPosition
                )
            }
        },
        onFinish() {
            top.value = positions.value[item.id] * JOBHEIGHT
            runOnJS(setMoving)(false)
        }
    })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            position: 'absolute',
            left: 0,
            right: 0,
            top: top.value,
            backgroundColor: 'white',
            zIndex: moving ? 1 : 0,
            elevation: moving ? 6 : 0,

        }
    }, [moving])


    const colorStatus = {
        "OPEN": "white",
        "CLOSED": colors.meaning.warning,
        "FINISHED": colors.meaning.warning,
        "IN_PROGRESS": "orange",
        "COMPLETED": colors.meaning.success


    }

    const textShadowStyle = {
        textShadowColor: 'rgba(0, 0, 0, 0.30)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 2
    }

    console.log("animationEnabled", animationEnabled)


    return (
        <Animated.View style={animatedStyle}>
            <PanGestureHandler enabled={animationEnabled} onGestureEvent={gestureHandler}>

                <Animated.View style={{ padding: 10, zIndex: 2, backgroundColor: colorStatus[item.status] }} >
                    <Pressable onPress={() => navigationRef.navigate("JobCreatedDetails", {
                        id: item?.id
                    })} onLongPress={() => setAnimationEnabled(true)}>

                        <Text style={{ color: 'black', fontWeight: 'bold', ...textShadowStyle, letterSpacing: 0.1 }} >Title: {item.title}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Images Quantity: {item.Images?.items.length}</Text>
                        </View>
                        <Text>Created job at: {moment(item.createdAt).fromNow()}</Text>
                        <Text>Number of appliers: {item.userApply?.items.length}</Text>
                        {item.status === "COMPLETED" && <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, textDecorationLine: 'underline' }}>Completed by: {item.jobDoneBy?.user?.fullname} on {moment(item.jobDoneBy?.createdAt).format('MM/DD/yyyy')}</Text>
                        </View>}
                        {item.status === "FINISHED" && <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, textDecorationLine: 'underline' }}>Finished automatically on {moment(item.jobDoneBy?.createdAt).format('MM/DD/yyyy')}</Text>
                        </View>}
                    </Pressable>
                </Animated.View>
            </PanGestureHandler>
        </Animated.View >
    )
}

export default ItemComponent;