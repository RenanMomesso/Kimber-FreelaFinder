import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useCallback, useMemo, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { ListCategoriesQuery, ListCategoriesQueryVariables, UpdateUserMutation, UpdateUserMutationVariables } from '../../API';
import BackIcon from '../../components/BackIcon';
import Text from '../../components/Text';
import { useAuthContext } from '../../context/useContext';
import { updateUser } from '../../graphql/mutations';
import { skills } from '../../constants/enums/skills';



const Skills: React.FC = () => {

    const { user } = useAuthContext()
    const [selected, setSelected] = useState<string[]>([])
    console.log("selected", selected)

    const [doUpdateUser, { loading: loadingUpdateMutation, error: errorUpdatingUser }] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(gql(updateUser), {
        updateQueries: ['GetUser', 'ListJobs']
    })




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
        let input: UpdateUserMutationVariables['input'] = {
            id: user?.attributes.sub
        };

        if (selected.length > 0) {
            input = {
                ...input,
                categories: selected,
                firstTimeLoggin: false
            }
        }

        if (skip) input = {
            ...input,
            firstTimeLoggin: false,
            categories: []
        }

        try {
            await doUpdateUser({
                variables: {
                    input
                }
            })
        } catch (error) {
            console.log("ERROR -> ", error)
            return null;
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <BackIcon />
            <Text category='h2' style={styles.text}>Choose your interests</Text>
            <Text category='h4' style={styles.text}>Get better jobs recommendations</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 8, alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                {skills?.map((name, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <TouchableOpacity key={index} onPress={() => handleSelect(name)} style={[{
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
                style={styles.updateUserButton}>
                <Text style={{ color: 'white' }}>{loadingUpdateMutation ? "Loading..." : "Finish"}</Text>
            </Pressable>
            <Pressable
                onPress={() => handleUpdateUser(true)}
                style={styles.skipButton}>
                <Text style={{ color: "#016DF7" }}>{loadingUpdateMutation ? "Loading..." : "Skip this step"}</Text>
            </Pressable>
        </View>
    )
}


export default Skills;


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
    skipButton: {
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
    updateUserButton: {
        backgroundColor: "#016DF7",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 80,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 12,
        paddingVertical: 12

    }
})