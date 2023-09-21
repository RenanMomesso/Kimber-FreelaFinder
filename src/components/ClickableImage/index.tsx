import React, { useRef } from 'react';
import { TouchableOpacity, Image, Pressable } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'


interface Props {
    source: string,
    onPress: any,
    editImage?: boolean
    handleRemoveImage?: any
    index: number
    height?: number;
    width?: number;
}
const CustomImage = ({ height = 100, width = 100, source, onPress, editImage = false, handleRemoveImage }: Props) => {
    const imgRef = useRef<Image>(null)
    const onImagePress = () => {
        imgRef.current?.measure?.((fx, fy, width, height, px, py) => {
            onPress && onPress(source, { fx, fy, x: px, y: py, width: width, height: height })
        })
    };


    return (
        <TouchableOpacity style={{ marginRight: 5, marginBottom: 5, width, height }} onPress={onImagePress}>
            {editImage &&
                <Pressable onPress={handleRemoveImage} style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    zIndex: 4
                }}>
                    <AntDesignIcon name="closecircle" color="tomato" size={15} />
                </Pressable>
            }
            <Image ref={imgRef} source={{ uri: source }} style={{ width, height, }} />
        </TouchableOpacity>
    )
};

export default CustomImage