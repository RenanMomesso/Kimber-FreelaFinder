import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
	width,
	height,
	isSmallDeviceWidth: width < 375,
	isSmallDeviceHeight: height < 667,
};
