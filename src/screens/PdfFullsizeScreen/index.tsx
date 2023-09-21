import React from 'react';
import PDFReader from 'react-native-pdf'
import { View, Pressable, Text } from 'react-native'
import AntdIcon from 'react-native-vector-icons/AntDesign'
import { getPublicImg } from '../../utils/publicimages';
import dimensions from '../../utils/dimensions';
import { downloadFile } from '../../utils/downloadFile';


export interface IPdfFullsizeScreenProps {
    route: {
        params: {
            source: string,
            onCancel?: any,
            onDownload: any
        }
    }

    navigation: any
}

const PdfFullsizeScreen = ({ route, navigation }: IPdfFullsizeScreenProps) => {
    const { source, onDownload } = route.params
    const onCancel = () => navigation.goBack()
    console.log("source", source)

    const handlePressDownload = () => {
        downloadFile(source)
    };


    return (
        <View style={{ flex: 1, backgroundColor: 'white', borderWidth: 30, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ position: 'absolute', top: 10, right: 10, flexDirection: 'row' }}>
                <Pressable onPress={onCancel} style={{ justifyContent: 'center', alignItems: 'center', zIndex: 5, borderWidth: 1, marginRight: 6, borderRadius: 8, padding: 3 }}>
                    <AntdIcon name="close" />
                </Pressable>
                <Pressable onPress={handlePressDownload} style={{ justifyContent: 'center', alignItems: 'center', zIndex: 5, borderWidth: 1, borderRadius: 8, padding: 3 }}>
                    <AntdIcon name="download" />
                </Pressable>
            </View>
            <PDFReader
                trustAllCerts={false}

                horizontal
                source={{ uri: source, cache: true }}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                enablePaging
                style={{
                    width: dimensions.width,
                    height: dimensions.height,
                    backgroundColor: 'white',

                }} />
        </View>
    )
}

export default PdfFullsizeScreen;