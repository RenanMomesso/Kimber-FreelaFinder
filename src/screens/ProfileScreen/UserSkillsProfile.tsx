import React from 'react';
import { StyleSheet, View } from 'react-native';
import { skills } from '../../constants/enums/skills';
import Text from '../../components/Text';
import { useAuthContext } from '../../context/useContext';

const UserSkillsProfile = () => {
    const { user } = useAuthContext();

    const userSkills = skills.filter(skill => user?.categories?.includes(skill))

    return (
        <View style={styles.container}>
            {!userSkills?.length && <Text style={{ color: 'gray' }}>No skills added</Text>}
            {userSkills?.map(item => <Text style={styles.textItem}>{item}</Text>)}
        </View>
    )

}

export default UserSkillsProfile;

const styles = StyleSheet.create({
    container: { flexDirection: 'row', flexWrap: 'wrap', marginLeft: 20 },
    textItem: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderWidth: 1,
        marginRight: 8,
        borderRadius: 16,
        marginTop: 8,
        borderColor: 'lightgray',
        color: "black"
    }
})