import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: 'white',
	},
	inputHeader: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	searchLabel: {
		backgroundColor: colors.gray.gray10,
		paddingHorizontal: 12,
		flex: 1,
		borderRadius: 8,
		flexDirection: 'row',
		alignItems: 'center',
	},
	textinput: { flex: 1, height: 35, padding: 0, marginLeft: 6, fontWeight: 'bold' },
});
