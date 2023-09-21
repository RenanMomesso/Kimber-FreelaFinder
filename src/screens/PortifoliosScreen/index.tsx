import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Alert, Image, Pressable, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import { DeletePortifolioMutation, DeletePortifolioMutationVariables, ListPortifoliosQuery, ListPortifoliosQueryVariables, Portifolio, UpdateUserMutation, UpdateUserMutationVariables } from '../../API';
import BackIcon from '../../components/BackIcon';
import Loading from '../../components/Loading';
import Text from '../../components/Text';
import { useAuthContext } from '../../context/useContext';
import { deletePortifolio, updateUser } from '../../graphql/mutations';
import { listPortifolios } from '../../graphql/queries';
import { getPublicImg } from '../../utils/publicimages';
import { styles } from './styles';


export interface PortifolioScreenProps {
    navigation: any;
    route: any;
}

const PortifolioScreen: React.FC<PortifolioScreenProps> = ({ navigation, route }) => {

    const { user, setUser } = useAuthContext()
    const [loading, setLoading] = useState(false)


    const userID = route.params.id
    const { data, loading: loadingPortifolios, refetch: refetechPortifolios } = useQuery<ListPortifoliosQuery, ListPortifoliosQueryVariables>(gql(listPortifolios), {
        variables: {
            filter: {
                userID: {
                    eq: userID,
                },

            }
        }
    })

    const [deletePortifolioMutation] = useMutation<DeletePortifolioMutation, DeletePortifolioMutationVariables>(gql(deletePortifolio), {
        refetchQueries: ['listPortifolios']
    })

    const [doUpdateUser] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(gql(updateUser))

    const portifolios = data?.listPortifolios?.items
    const sameUser = user?.id === userID

    const handlePressPortifolio = (portifolioID: string) => {
        navigation.navigate('PortifolioScreen', { id: portifolioID })
    };


    const handleDeletePortifolio = async (portifolioID: string) => {
        try {
            Alert.alert('Delete portifolio', 'Are you sure you want to delete this portifolio?', [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: async () => {
                        await deletePortifolioMutation({
                            variables: {
                                input: {
                                    id: portifolioID
                                }
                            }
                        })
                        await refetechPortifolios()
                    }
                }
            ])
        } catch (error) {
            Alert.alert('Error', 'Error deleting portifolio')
        }
    };
    const userDefaultPortifolioForLinks = user?.userSelectedPortifolioId

    const updatePortifolioAsDefault = async (portifolioID: string) => {
        if (loading) return;
        if (!user) return
        if (userDefaultPortifolioForLinks === portifolioID) {
            Alert.alert("Error", "This portifolio is already your default portifolio")
            return;
        }
        try {
            setLoading(true)
            const { data } = await doUpdateUser({
                variables: {
                    input: {
                        id: userID,
                        userSelectedPortifolioId: portifolioID
                    }
                }
            })

            setUser({ ...user, userSelectedPortifolioId: data?.updateUser?.id })
        } catch (error) {
            Alert.alert('Error', 'Error updating portifolio')
        } finally {
            setLoading(false)
        }
    };


    if (loadingPortifolios) return <Loading />
    return (
        <>
            {loading && <Loading />}
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <BackIcon />
                    <Text category='h3semibold' style={{ color: 'black', paddingLeft: 20 }}>Portifolios</Text>
                    {sameUser ? <Text style={{ color: "blue" }} onPress={() => navigation.navigate("NewPortifolioScreen")}>New Portifolio</Text> : <View />}
                </View>
                <ScrollView style={{ backgroundColor: "white" }}>
                    <View style={styles.portifolioContainer}>

                        {!portifolios?.length ? <Text style={{ width: '100%', height: 20, marginVertical: 10 }}>You don't have any portifolios created yet</Text> : portifolios.map((item: Portifolio, key) => {
                            if (!item) return null

                            return (
                                <Pressable key={key} style={[styles.portifolioItemContainer, {
                                    borderWidth: userDefaultPortifolioForLinks === item.id ? 2 : 0,
                                    borderColor: 'tomato',
                                    zIndex: 10
                                }]} onPress={() => handlePressPortifolio(item.id)}>
                                    {sameUser && <FeatherIcon name="delete" onPress={() => handleDeletePortifolio(item.id)} size={16} style={styles.editableIcon} />}
                                    {sameUser && <FeatherIcon name="file" color={userDefaultPortifolioForLinks === item.id ? 'white' : 'black'} onPress={() => updatePortifolioAsDefault(item.id)} size={16} style={{
                                        position: 'absolute',
                                        right: 20,
                                        top: 0,
                                        zIndex: 1,
                                        padding: 4,
                                        backgroundColor: userDefaultPortifolioForLinks === item.id ? 'tomato' : 'white',
                                        borderRadius: 4,
                                        opacity: 0.8,
                                        marginRight: 8
                                    }} />}
                                    <Image source={{ uri: getPublicImg(item?.backgroundImageKey!) }} style={styles.image} />
                                    <Text category='h6' style={{ marginTop: 6, color: "#202020", }}>{item?.title?.charAt(0).toUpperCase() + item?.title?.slice(1).toLowerCase()}</Text>
                                </Pressable>
                            )
                        })}
                        {sameUser && <Pressable onPress={() => navigation.navigate("NewPortifolioScreen")} style={styles.addPortifolioContainer}>
                            <Icon
                                name="add-circle"
                                color={'white'}
                                size={40}
                                style={{ height: 40, width: 40 }}
                            />
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 12 }}>Create {'\n'} New Portifolio</Text>
                        </Pressable>}
                    </View>
                    <View style={{
                        height: 40
                    }} />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default PortifolioScreen;

