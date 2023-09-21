import dimensions from '../../utils/dimensions';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    portifolioItemContainer: {
        marginVertical: 10,
        backgroundColor: 'white',
        marginRight: 5,
        marginTop: 18,
        marginBottom: 40,
        height: dimensions.height * 0.2,
        width: dimensions.width * 0.40
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderRadius: 8,
        resizeMode: 'cover'
    },
    portifolioContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        backgroundColor: 'white',
    },
    addPortifolioContainer: {
        width: dimensions.width * 0.46,
        marginRight: 10,
        height: dimensions.height * 0.2,
        backgroundColor: '#202020',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    editableIcon: {
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
        backgroundColor: 'white',
        padding: 4,
        opacity: 0.8,
        borderRadius: 4,
    }
})