import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import ArrowRight from '../../constants/icons/ArrowRight.svg';


export interface INextProps {
    percentage: number
    scrollTo: () => void
}
const NextButton = ({ percentage, scrollTo }: INextProps) => {
    const navigation = useNavigation()
    const { width } = useWindowDimensions();
    const buttonAnimation = useRef(new Animated.Value(0)).current
    const opacityAnimation = buttonAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    })

    useEffect(() => {
        if (percentage === 100) {
            Animated.timing(buttonAnimation, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(buttonAnimation, {
                toValue: 0,
                duration: 1200,
                useNativeDriver: true
            }).start()
        }
    }, [percentage])

    const size = 65;
    const strokeWidth = 4;
    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const progressAnimation = useRef(new Animated.Value(0)).current;
    const progressRef = useRef<null | any>(null)

    const animation = (toValue: number) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: false
        }).start()
    }

    useEffect(() => {
        animation(percentage)
    }, [percentage])

    useEffect(() => {
        progressAnimation.addListener(
            (value) => {
                const strokeDashoffset = circumference - (circumference * value.value) / 100;

                if (progressRef?.current) {
                    progressRef?.current.setNativeProps({
                        strokeDashoffset,
                    });
                }
            },
            // [percentage] removed and keep working, is it necessary?
        );

        return () => {
            progressAnimation.removeAllListeners();
        };
    }, []);


    const finishingOnboarding = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
        })
        //gravar no async storage q onboarding terminou
    }

    if (percentage === 100) return <Animated.View style={{
        backgroundColor: "#016DF7",
        marginBottom: 45,
        height: size / 1.5,
        borderRadius: 20,
        width: width - 32,
        alignSelf: 'center',
        opacity: opacityAnimation

    }}>
        <TouchableOpacity
            onPress={finishingOnboarding}
            style={{
                width: '100%', height: '100%', justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontFamily: 'Poppins-Medium', fontSize: 14 }}>Get Started</Text>
        </TouchableOpacity>
    </Animated.View>





    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={center}>
                    <Circle

                        stroke="#FFF"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                    />
                    <Circle
                        ref={progressRef}
                        stroke="#348AF9"
                        cx={center}
                        cy={center}
                        r={radius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                    />
                </G>
            </Svg>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={scrollTo}>
                <ArrowRight />
            </TouchableOpacity>
        </View>
    )
};

export default NextButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 60,
        padding: 7
    }
})