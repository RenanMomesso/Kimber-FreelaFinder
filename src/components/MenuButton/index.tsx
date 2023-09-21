import React, { useState, useRef, forwardRef } from 'react';
import { Pressable } from 'react-native';
import Lottie from 'lottie-react-native'
import { BottomSheetRefProps } from '../BottomSheet';
import { navigationRef } from '../../navigations/NavigationRef';

const MenuButton = forwardRef<BottomSheetRefProps, {}>((props, refBottomSheet) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const animation = useRef(null)

    const onClickMenu = () => {
        setMenuIsOpen(!menuIsOpen)
        animation.current?.play()
        refBottomSheet?.current?.scrollTo?.(-400)
        navigationRef?.getParent()?.setOptions({
            tabBarStyle: {
                display: 'none',
            },
        })

    }
    return <Pressable onPress={onClickMenu}>
        <Lottie
            ref={animation}
            source={require('../../constants/images/lottie/menu.json')}
            autoPlay={false}
            loop={false}
            style={{
                height: 25,
                width: 25,
                resizeMode: 'cover',
            }}
        />

    </Pressable>
})

export default MenuButton;