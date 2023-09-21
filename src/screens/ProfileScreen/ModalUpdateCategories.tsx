import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable, Modal, Alert } from 'react-native';
import { ListCategoriesQuery, ListCategoriesQueryVariables, UpdateUserMutation, UpdateUserMutationVariables } from '../../API';
import BackIcon from '../../components/BackIcon';
import Text from '../../components/Text';
import { useAuthContext } from '../../context/useContext';
import { updateUser } from '../../graphql/mutations';
import { skills } from '../../constants/enums/skills';


const UpdateSkillComponent = ({ close }) => {

    const { user } = useAuthContext()
    console.log("USER AVATAR",user?.avatar)
    const [selected, setSelected] = useState<string[]>([])
    const [doUpdateUser, {
        loading: loadingUpdateMutation,
    }] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(gql(updateUser))


    useEffect(() => {
        if (user?.categories) {
            setSelected(user?.categories)
        }
    }, [])

    const handleSelect = (skill: string) => {
        if (selected.includes(skill)) {
            setSelected(selected.filter(item => item !== skill))
        } else {
            setSelected([...selected, skill])
        }
    }

    const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const ifColorLight = useCallback((hexcolor) => {
        const r = parseInt(hexcolor.substr(1, 2), 16);
        const g = parseInt(hexcolor.substr(3, 2), 16);
        const b = parseInt(hexcolor.substr(5, 2), 16);
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? 'black' : 'white';
    }, [])

    const colorList = useMemo(() => { ifColorLight(backgroundColor) }, [backgroundColor, ifColorLight])

    const selectedSkill = (skill: string) => {
        return selected.includes(skill)
    }

    const handleUpdateUser = async (skip: boolean = false) => {
        try {

            await doUpdateUser({
                variables: {
                    input: {
                        id: user?.id,
                        categories: selected
                    }
                }
            })
            close()
        } catch (error) {
            console.log("Error: ", error)
        }
        close()
    }


    return (
        <Modal visible onRequestClose={close} style={styles.modal}>
            <View style={styles.modalContainer}>
                <BackIcon />
                <Text category='h2' style={styles.text}>Update categories</Text>

                <View style={styles.categoriesContainer}>
                    {skills?.map((name, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <TouchableOpacity 
                            key={index} 
                            onPress={() => handleSelect(name)} 
                            style={[{
                                backgroundColor: selectedSkill(name) ? "blue" : 'white', borderWidth: 1, borderColor: isEven ? 'lightgray' : colorList,
                            },
                            styles.buttonSkills]}>
                                <Text category='h5m' style={{ color: selectedSkill(name) ? 'white' : 'black' }} >{name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>


                <Pressable
                    onPress={() => handleUpdateUser(false)}
                    style={styles.updateButtonSkills}>
                    <Text style={{ color: 'white' }}>{loadingUpdateMutation ? "Loading..." : "Update"}</Text>
                </Pressable>
                <Pressable
                    onPress={close}
                    style={styles.closeButtonModal}>
                    <Text style={{ color: "#016DF7" }}>Close</Text>
                </Pressable>
            </View>
        </Modal>
    )
}


export default UpdateSkillComponent;


const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        marginTop: 20,
        color: 'black'
    },
    buttonSkills: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 20,
    },
    closeButtonModal: {
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 12,
        paddingVertical: 12
    },
    updateButtonSkills: {
        backgroundColor: "#016DF7",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 80,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 12,
        paddingVertical: 12
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    modal: { backgroundColor: 'red', flex: 1 },
    modalContainer: { flex: 1, backgroundColor: 'white' }
})