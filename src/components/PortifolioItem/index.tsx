import React from 'react';
import { Pressable, Image } from 'react-native';
import { getPublicImg } from '../../utils/publicimages';
import Text from '../Text';


export interface IPortifolioItemProps {
    title?: string;
    backgroundImage: string;
    onPress?: () => void;
}

const PortifolioItem = ({ backgroundImage, title, onPress }: IPortifolioItemProps) => {
    if(!backgroundImage) return null;
    return (
        <Pressable onPress={onPress}
            style={{
                width:'50%',
                alignSelf:'center'
            }}
        >
            {!!title && <Text style={{alignSelf:'center',textAlign:'center'}}>{title.toUpperCase()}</Text>}
            <Image
                source={{ uri: getPublicImg(backgroundImage!) }}
                style={{
                    width: '100%',
                    height: 120,
                    borderRadius: 6,
                    borderWidth: 1,
                }} />
        </Pressable>
    )
}

export default PortifolioItem;