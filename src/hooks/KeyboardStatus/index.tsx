import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard, LayoutAnimation, UIManager } from 'react-native';

const KeyboardStatus = () => {
	const [keyboardHeight, setKeyboardHeight] = useState(0);
	const [keyboardVisible, setKeyboardVisible] = useState(false);

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			(event) => {
				LayoutAnimation.easeInEaseOut();
				setKeyboardVisible(true);
				setKeyboardHeight(event.endCoordinates.height);
			}
		);
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			() => {
				setKeyboardVisible(false);
			}
		);

		return () => {

			keyboardDidShowListener.remove();
			keyboardDidHideListener.remove();
		};
	}, []);

	return { keyboardHeight, keyboardVisible }
};

export default KeyboardStatus;