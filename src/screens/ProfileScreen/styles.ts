import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    backgroundProfileImg: {
        position: 'absolute',
        top: 0,
        width: 500,
        right: 0,
        left: 0,
        height: 140,
    },
    profileHeader: {
        marginTop: 50,
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileHeaderText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#202020',
    },
    pressableUser: {
        alignSelf: 'center',
        borderRadius: 100,
        width: 92,
        height: 92,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        overflow:'hidden',
        
    },
    profileName: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        alignSelf: 'center',
        textAlign: 'center',
        color: "#000",
        marginTop: 12,
    },
    profileJobAndType: {
        marginTop: 6,
        color: '#6B6B6B',
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        textAlign: 'center',
        alignSelf: 'center',
    },
    profileMainInfo: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    infoUnique: {
        alignItems: 'center',
    },
    infoTitle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: '#292929',
    },
    infoDesc: {
        alignItems: 'center',
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 32,
    },
})

export default styles