import { Storage } from 'aws-amplify';
import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Image, Modal, Text, Alert, Pressable, useWindowDimensions } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import FileViewer from 'react-native-file-viewer'
import PDFReader from 'react-native-pdf';
import { navigationRef } from '../../navigations/NavigationRef';

export interface IAlbumImagesProps {
    images: [{
        key: string
    }];
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlbumImages = ({ images, visible, setVisible }: IAlbumImagesProps) => {
    const { height, width } = useWindowDimensions()
    const refItem = React.useRef([]);


    const [imagesAlbum, setImagesAlbum] = useState<[] | null>(null);
    const [imageSelected, setImageSelected] = useState<string | null>(null);
    const [visibleOptions, setVisibleOptions] = useState<boolean>(false);
    const [openPDF, setOpenPDF] = useState<boolean>(false);


    useEffect(() => {
        const fetchImages = async () => {
            const urls: any = await Promise.all(images.map(async (image) => {
                const url = await Storage.get(image.key)
                return {
                    url,
                    type: image.key.includes("pdf") ? "pdf" : "image"
                }
            }))
            setImagesAlbum(urls)
        }
        fetchImages()
    }, [images])

    const PDFIMAGE = "https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g"

    const getFileExtention = (fileUrl: string) => {
        // To get the file extension
        return /[.]/.exec(fileUrl) ?
            /[^.]+$/.exec(fileUrl) : undefined;
    };

    const downloadFile = (fileUri: string) => {
        let file_ext = getFileExtention(fileUri);
        const android = RNFetchBlob.android;
        const { fs, config } = RNFetchBlob
        let rootDir = fs.dirs.DownloadDir
        const path = rootDir + `/${fileUri.substring(10, 20)}.` + 'pdf'
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                path,
                description: 'downloadfile',
                notification: true,
                useDownloadManager: true,
                mime: 'application/pdf',

            }
        }
        config(options)
            .fetch('GET', fileUri)
            .then(res => {
                // Alert after successful downloading
                Alert.alert('File Downloaded Successfully.');
                FileViewer.open(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    const handleOpenOptions = (image: string) => {
        setImageSelected(image)
        setVisibleOptions(true)
    }

    const rgbaDark = "rgba(0,0,0,0.5)"

    const onPressImage = (image: string, imageSpecs: any) => {
        // setVisible(false)
        setTimeout(() => {
            navigationRef.navigate('FullImageScreen', {
                image,
                imageSpecs
            })
        }, 100);

    }

    return (
        <Modal onDismiss={() => setVisible(false)} transparent visible={visible} onRequestClose={() => setVisible(false)} >
            {imageSelected && openPDF && imageSelected && <View>
                <Text style={{ position: 'absolute', right: 20, fontSize: 30, color: 'black', zIndex: 100 }} onPress={() => {
                    setVisibleOptions(false)
                    setImageSelected(null)
                    setOpenPDF(false)
                }}>CLOSE X</Text>
                <PDFReader

                    trustAllCerts={false}
                    horizontal
                    source={{ uri: imageSelected, cache: true }}
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

                    style={{
                        width: 400,
                        height: 800,
                        flex: 1,
                        position: 'absolute',
                        backgroundColor: 'white',
                        zIndex: 10
                    }} />
            </View>}
            {visibleOptions && (
                <>
                    <Pressable style={{ flex: 1, height: '100%', position: 'absolute', width: 400, zIndex: 10, backgroundColor: 'transparent' }} onPress={() => {
                        setVisibleOptions(false)
                        setImageSelected(null)
                    }} />

                    <View style={{ position: 'absolute', width: 200, backgroundColor: 'red', zIndex: 20, top: 150, left: 144, height: 200 }}>
                        <Text onPress={() => setVisibleOptions(false)}>Close X</Text>
                        <Text onPress={() => downloadFile(imageSelected)} >Download File</Text>
                        <Text onPress={() => {
                            setOpenPDF(true)
                            setVisibleOptions(false)
                        }} >Open File</Text>
                    </View>
                </>
            )}
            {imageSelected && (
                <View style={{ backgroundColor: rgbaDark }}>
                    <Text onPress={() => setImageSelected(null)} style={{ fontSize: 25, position: 'absolute', right: 20, top: 20, color: 'white', zIndex: 9, padding: 8, backgroundColor: 'red', borderRadius: 8 }}>X</Text>
                    <Image source={{ uri: imageSelected }} style={{ height: '100%', width: '100%', resizeMode: "contain" }} />
                </View>)}
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#20202034' }} >
                <View style={{ backgroundColor: 'white', marginTop: 100, width: "90%", marginHorizontal: 20, padding: 20, borderRadius: 20 }}>
                    <Text onPress={() => setVisible(false)} style={{ fontSize: 25, position: 'absolute', right: 20, top: 20, }}>X</Text>
                    <View style={{ marginTop: 30, flexDirection: 'row', flexWrap: 'wrap' }}>

                        {imagesAlbum?.map((image: any, index: number) => {
                            if (image.type === "pdf") {
                                return <TouchableOpacity ref={item => refItem.current[index] = item} onLongPress={() => handleOpenOptions(image.url)} style={{ marginRight: 5, marginBottom: 5 }} key={index} >
                                    <Image source={{ uri: PDFIMAGE }} style={{ height: 100, width: 100 }} />
                                </TouchableOpacity>
                            }
                            return <CustomImage key={index} source={image.url} onPress={onPressImage} />

                        })}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AlbumImages;

const CustomImage = ({ source, onPress }: { source: string, onPress: any }) => {
    const imgRef = useRef<Image>(null)

    const onImagePress = () => {
        imgRef.current?.measure?.((fx, fy, width, height, px, py) => {
            onPress && onPress(source, { x: px, y: py, width, height })
        })
    };
    return (
        <TouchableOpacity style={{ marginRight: 5, marginBottom: 5, borderWidth: 1 }} onPress={onImagePress}>
            <Image ref={imgRef} source={{ uri: source }} style={{ height: 120, width: 120, borderWidth: 2, resizeMode: 'contain' }} />
        </TouchableOpacity>
    )
};