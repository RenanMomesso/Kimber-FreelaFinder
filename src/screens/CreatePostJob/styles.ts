import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default StyleSheet.create({
	container: {},
	buttonAddImages: {
		borderWidth: 1,
		borderColor: colors.meaning.info,
		borderRadius: 4,
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 40,
		borderStyle: 'dashed',
		backgroundColor: 'white',
	},
	createPostButton: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.meaning.info,
		paddingVertical: 14,
		borderRadius: 6,
		marginTop: 20,
	},
	priceInputStyle: {
		borderRadius: 12,
	},
	column: {
		flexDirection: 'column',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
	},
	checkBox: {
		borderWidth: 1,
		height: 15,
		width: 15,
		marginLeft: 10,
	},
	inputText: {
		width: '100%',
		minHeight: 1,
		borderRadius: 4,
		paddingLeft: 6,
		fontSize: 13,
		textAlignVertical: 'top',
		backgroundColor: '#FFF',
		marginBottom: 5,
		borderWidth: 1,
        borderColor: colors.gray.gray10
	},
	inputTextTitle: { color: '#202020', marginBottom: 10, marginTop: 5 },
});
