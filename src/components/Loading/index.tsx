import React from 'react';
import { ActivityIndicator, View, useWindowDimensions } from 'react-native';

const Loading: React.FC = () => {
    const { height, width } = useWindowDimensions();

    const rgbaBlack = `rgba(0,0,0,0.5)`;
    return (
        <View style={{ height, width, backgroundColor: rgbaBlack, justifyContent: 'center', position: 'absolute', zIndex: 9000 }}>

            <ActivityIndicator size={"large"} color={"white"} style={{ zIndex: 1000 }} />

        </View>
    )
}

export default Loading;