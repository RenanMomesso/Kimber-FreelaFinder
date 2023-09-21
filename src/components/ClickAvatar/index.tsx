import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { navigationRef } from '../../navigations/NavigationRef';
import { getPublicImg } from '../../utils/publicimages';
import CustomImage from '../ClickableImage';

export interface ClickAvatarProps {
  imageKey: string;
  onPress?: () => void;
  redirect?: string;
  dimension?: boolean;
}

const ClickAvatar = ({ imageKey, onPress, redirect = "", dimension = false }: ClickAvatarProps) => {

  const navigateToProfile = () => navigationRef.navigate("OtherUserProfileScreen", {
    id: redirect
  })
  const onPressImage = (image: string, imageSpecs: any) => {
    // setVisible(false)
    setTimeout(() => {
      navigationRef.navigate('FullImageScreen', {
        image,
        imageSpecs
      })
    }, 100);
  }
  if (!redirect) return (
    <View style={{ borderRadius: 50, overflow: 'hidden', width: dimension ? 60 : "100%", height: dimension ? 60 : 90, justifyContent: 'center', alignItems: 'center' }}>

      <CustomImage
        imageKey={imageKey}
        source={imageKey ? getPublicImg(imageKey) : "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"}

        onPress={onPressImage}
      />
    </View>
  )

  if (redirect) return (
    <Pressable onPress={navigateToProfile} style={{ borderRadius: 20, width: 40, overflow: 'hidden', borderWidth: 1 }}>
      <Image source={{ uri: imageKey ? getPublicImg(imageKey) : "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg" }} style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 1 }} />
    </Pressable>
  )
}

export default ClickAvatar;