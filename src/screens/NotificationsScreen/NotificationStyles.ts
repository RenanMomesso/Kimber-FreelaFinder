import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import dimensions from '../../utils/dimensions';

type Style = {
    container: ViewStyle;
	notificationDot: ViewStyle;
    notificationText: TextStyle;
    userAvatar: ImageStyle;
    notificationOptions: ViewStyle;
    notificationButton: any;

};

export const styles = StyleSheet.create<Style>({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 5,
		marginTop: 10,
		paddingVertical: 8,
		paddingHorizontal: 4,
		borderRadius: 8,
	},
	notificationDot: {
		width: 6,
		height: 6,
		borderRadius: 5,
		marginRight: 10,
	},
	userAvatar: {
		width: 45,
		height: 45,
		borderRadius: 20,
		marginRight: 10,
	},
	notificationText: {
		color: '#202020',
		textAlign: 'justify',
		width:dimensions.width * 0.65,
		lineHeight: 14,
	},
	notificationOptions: {
		height: '100%',
		marginTop: 10,
		borderRadius: 8,
		paddingVertical: 8,
		paddingLeft: 40,
		width: 200,
		flexDirection: 'row',
		alignItems: 'center',
	},
	notificationButton: (color: string) => ({
		backgroundColor: color,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		flex: 1,
	}),
});
