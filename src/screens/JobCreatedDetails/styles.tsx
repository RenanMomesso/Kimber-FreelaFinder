import { StyleSheet, StatusBar } from 'react-native'
import { colors } from '../../constants/colors'

export default StyleSheet.create({
    container: { flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: "white" },
    headerButtons: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20, padding: 20 },
    headerTitle: { fontSize: 18, textTransform: 'capitalize', fontWeight: 'bold', color: "#202020" },
    jobTitle: { fontWeight: 'bold', color: "#202020" },
    itemContainer: { paddingHorizontal: 20 },
    bolderTexxt: { fontWeight: 'bold', color: "#202020" },
    fixedButton: {
        alignSelf: 'center',
        backgroundColor: colors.main.primary,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width:'90%',
        marginHorizontal:20,
        borderRadius:8


    },
    containerFixedButtons: {
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        width: '100%',
        alignItems: 'center',
        backgroundColor:'white',
        paddingVertical:10,
        borderTopRightRadius:8
    }



})