
import { gql, useQuery } from '@apollo/client';
import React, { useCallback, useState } from 'react'
import { View, TouchableOpacity, Pressable } from 'react-native'
import { ListCategoriesQuery } from '../../API';
import Text from "../../components/Text";
import { listCategories } from '../../graphql/queries';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface DropdownCategoriesProps {
    setChoosedCategories: React.SetStateAction<any>
    choosedCategories: any
}

const DropdownCategories = ({ choosedCategories, setChoosedCategories }: DropdownCategoriesProps) => {
    const { data } = useQuery<ListCategoriesQuery>(gql(listCategories))
    const [categoriesOpen, setCategoriesOpen] = useState(false)
    const compareObjects = useCallback(() => {
        const dataCategories = data?.listCategories?.items.map(item => item?.name)
        let result = [...dataCategories]
        for (let category of dataCategories) {
            if (choosedCategories.includes(category)) {
                result = result.filter(item => item !== category)
            }
        }
        return result
    }, [choosedCategories])


    const handleScroll = (index: number) => {
        setCategoriesOpen(c => !c)
    }

    const handleChooseCategory = (item: any) => {
        const index = choosedCategories.findIndex(c => c === item)
        if (index === -1) {
            setChoosedCategories(c => [...c, item])
        } else {
            setChoosedCategories(c => c.filter(c => c !== item))
        }
    }
    return (
        <View>
            <Text style={{ marginTop: 20 }}>Categories</Text>
            <View style={{
                minHeight: 40,
                width: '100%',
                borderWidth: 1,
                borderColor: '#a8a1a1',
                borderRadius: 10,
                marginTop: 10,
                paddingBottom: 10,
                paddingRight:30
            }}>

                <MaterialCommunityIcons onPress={() => setChoosedCategories([])} name="close" size={25} style={{
                    position: 'absolute',
                    right:35,
                    top: 10,
                }} />
                <TouchableOpacity style={{ position: 'absolute', right: 0, borderLeftWidth: 1, top: 5, height: '100%', zIndex: 2 }} onPress={() => handleScroll(20)}>
                    <MaterialCommunityIcons name={!categoriesOpen ? "arrow-down-thin" : "arrow-up-thin"} size={30} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: 10, minHeight: 20, flexWrap: 'wrap' }}>
                    {choosedCategories.map((item: any, index: number) => {
                        return (
                            <Pressable onPress={() => handleChooseCategory(item)} key={index} style={{
                                borderWidth: 1,
                                borderRadius: 16,
                                paddingHorizontal: 10,
                                paddingVertical: 2,
                                marginLeft: 4,
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 6,
                                borderColor: '#b8b3b3',
                                elevation: 4,
                                backgroundColor: '#FFF',
                                
                            }}>
                                <Text category='h6' style={{ marginRight: 4 }}>{item}</Text>
                                <Text category='h6'>X</Text>
                            </Pressable>
                        )
                    })}
                </View>
                {categoriesOpen && <View style={{ flexDirection: 'column', marginTop: categoriesOpen ? 10 : 0 }}>
                    {compareObjects()?.map((item, index) => {
                        return (
                            <Pressable
                                onPress={() => handleChooseCategory(item)}
                                style={{
                                    width: '100%',
                                    paddingLeft: 10,
                                    paddingBottom: 5,
                                    marginTop: 5,
                                }}>
                                <Text>{item}</Text>
                            </Pressable>
                        )

                    })}
                </View>}
            </View>
        </View>
    )
};

export default DropdownCategories