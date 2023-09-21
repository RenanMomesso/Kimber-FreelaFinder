import React, { useRef, useState } from 'react';
import { Animated, FlatList, Pressable, StyleSheet, Text, useWindowDimensions, Dimensions, View } from 'react-native';
import NextButton from '../../components/NextButton';
import { colors } from '../../constants/colors';
import { OnboardingOne, OnboardingTwo } from '../../constants/images/svg';
import { font } from '../../constants/topography';
import { navigationRef } from '../../navigations/NavigationRef';

const { width, height } = Dimensions.get('window');


const slides = [
    {
        id: 1,
        title: 'Hire the most creative employees for your next awesome project',
        description: 'We help you finding the best partners for work',
        image: (width: number) => <OnboardingOne style={{ marginTop: width * 0.1 }} width={width} height={height / 2} />

    },
    {
        id: 2,
        title: 'Find freelancers and employees to work with them anytime',
        description: 'We help you finding the best partners for work',
        image: (width: number) => <OnboardingTwo style={{ marginTop: width * 0.1 }} width={width} height={height / 2} />,
    },
    {
        id: 3,
        title: 'Your dream company or job are one click far from you',
        description: 'We help you finding the best partners for work',
        image: (width: number) => <OnboardingOne style={{ marginTop: width * 0.1 }} width={width} height={height / 2} />,
    },
    {
        id: 4,
        title: 'Your dream company or job are one click far from you',
        description: 'We help you finding the best partners for work',
        image: (width: number) => <OnboardingOne style={{ marginTop: width * 0.1 }} width={width} height={height / 2} />,
    },
]

const Onboarding: React.FC = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    const [currentIndex, setCurrentIndex] = useState(0)
    const { width, height } = useWindowDimensions();
    const slidesRef = useRef(null);

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            console.log('Last item.');
        }
    };

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    const currentPercentage = (currentIndex + 1) * (100 / slides.length)

    return (
        <View style={[styles.container, { width, backgroundColor: '#101010' }]}>
            <FlatList data={slides}
                ItemSeparatorComponent={() => <View style={{ backgroundColor: 'white' }} />}
                horizontal={true}
                pagingEnabled={true}
                bounces={false}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={32}
                ref={slidesRef}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <View style={{ backgroundColor: 'white', borderBottomRightRadius: 40, borderBottomLeftRadius: 40, paddingBottom: 40 }}>
                            {item.image(width + 0.5)}
                        </View>
                        <View style={{ width, height: height / 4 }}>
                            <View style={{ marginTop: 54, paddingHorizontal: 32, marginHorizontal: 10 }}>
                                <Text style={[font.heading.h3semibold, { color: colors.main.white, textAlign: 'center' }]}>{item.title}</Text>
                                <Text style={{ color: colors.gray.gray60, marginTop: 12, fontSize: font.paragraph.normal, textAlign: 'center' }}>{item.description}</Text>
                            </View>
                        </View>

                    </View>)}
            />
            <Pressable style={{
                position: 'absolute',
                top: height * .08,
                right: width * 0.1,
                paddingVertical: 6,
                paddingHorizontal: 12,
                backgroundColor: 'lightgray',
                borderRadius: 10,

            }}>
                <Text style={{ color: colors.meaning.info, fontWeight: 'bold' }} onPress={() => navigationRef.reset({
                    index: 0,
                    routes: [{ name: 'Login' }]
                })}>Skip</Text>
            </Pressable>
            <NextButton scrollTo={scrollTo} percentage={currentPercentage} />
        </View>
    )
}

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },


})