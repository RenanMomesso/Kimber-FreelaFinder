import { Formik, FormikProps } from 'formik';
import React, { useRef, useState } from 'react';
import { ActivityIndicator, Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import { profileImg } from '../../constants/images/png';

import { gql, useLazyQuery, useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { Storage } from 'aws-amplify';
import DocumentPicker, {
    DirectoryPickerResponse,
    DocumentPickerResponse
} from 'react-native-document-picker';
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import * as Yup from 'yup';
import { UpdateUserInput, UpdateUserMutation, UpdateUserMutationVariables, UsersByFullnameQuery, UsersByFullnameQueryVariables } from '../../API';
import Loading from '../../components/Loading';
import { colors } from '../../constants/colors';
import { useAuthContext } from '../../context/useContext';
import { updateUser } from '../../graphql/mutations';
import { usersByFullname } from '../../graphql/queries';
import { getPublicImg } from '../../utils/publicimages';
import { redirectToPdfScreen } from '../../utils/redirectToPdfScreen';


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Min password required').required('Password is required'),
});

const EditProfile: React.FC = () => {
    const { user, setUser } = useAuthContext()
    const navigation = useNavigation();
    const formikRef = useRef<FormikProps<any>>(null)

    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [avatarImage, setAvatarImage] = useState<Asset | undefined | null>(null)
    const [website, setWebsite] = useState<string>("")
    const [profission, setProfission] = useState<string>("")
    const [notification, setNotification] = useState<boolean>(false)
    const [loadingImage, setLoadingImage] = useState(false)
    const [aboutYourself, setAboutYourself] = useState("")
    const [documentResult, setDocumentResult] = React.useState<
        Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
    >()
    const [cvLoading, setCvLoading] = useState(false)
    const [loadingAvatar, setLoadingAvatar] = useState(false)


    const handleGoBack = () => {
        navigation.goBack();
    };



    const data = {
        email: email || user?.email,
        fullName: fullName ? fullName : user?.fullname,
        phoneNumber: phoneNumber || user?.phoneNumber,
        website: user?.website || website,
        notification: notification || user?.notificationsActived,
        profission: profission || user?.profission,
        avatar: avatarImage || user?.avatar
    }


    const [doUpdateUser, { loading: loadingUpdateUser, error: errorUpdatingUser }] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(gql(updateUser), {
        refetchQueries: ['GetUser'],
    })


    const [checkUsernameExist] = useLazyQuery<UsersByFullnameQuery, UsersByFullnameQueryVariables>(gql(usersByFullname))




    const handleUpdateProfile = async () => {
        if (loadingUpdateUser) return;

        const input: UpdateUserInput = {
            id: user!.id,
        }
        if (email) input.email = email;
        if (fullName) input.fullname = fullName;
        if (phoneNumber) input.phoneNumber = phoneNumber;
        if (website) input.website = website;
        if (profission) input.profission = profission;
        if (notification) input.notificationsActived = notification
        if (aboutYourself) input.about = aboutYourself



        try {
            const { data: fullnameData } = await checkUsernameExist({
                variables: {
                    fullname: fullName
                }
            })

            if (fullnameData?.usersByFullname?.items?.length) {
                Alert.alert("Username already exist")
                return
            }
            console.log("Input update user", input)
            const { data: result } = await doUpdateUser({
                variables: {
                    input
                }
            })
            if (result?.updateUser) {
                Alert.alert("Success", "Profile updated successfully")
            }
        } catch (error) {
            console.log('error', error)
            return Alert.alert('Error', 'Error updating user')
        }
    };


    console.log("LOADING IMAGE", loadingImage)
    const handleUpdateProfilePhoto = async () => {
        if (loadingImage) return;
        setLoadingImage(true)
        try {
            await launchImageLibrary({
                mediaType: "mixed",
                selectionLimit: 4,
            }, async ({ didCancel, errorCode, errorMessage, assets }) => {
                if (!didCancel && !errorCode && assets && assets.length > 0) {
                    const { uri } = assets[0]
                    const response = await fetch(uri!)
                    const blob = await response.blob()
                    const key = `avatar/${user?.id}${Date.now()}`
                    console.log("key", key)
                    await doUpdateUser({
                        variables: {
                            input: {
                                id: user?.attributes.sub,
                                avatar: key
                            }
                        }
                    })
                    await Storage.put(key, blob, {
                        contentType: 'image/png',
                        level: 'public',

                    }).then(res => console.log("RES: ", res)).catch(err => console.log("ERR: ", err))
                    setUser({
                        ...user,
                        avatar: key
                    })
                }

            }
            )
        } catch (error) {
            console.log("ERROR", error)
            return null
        } finally {
            setLoadingImage(false)

        }

    }




    const handleAddCV = async () => {
        if (cvLoading) return;

        try {
            const res = await DocumentPicker.pickSingle()
            setCvLoading(true)
            const fetchImage = await fetch(res.uri);
            const blob = await fetchImage.blob();
            const key = `${user?.id}/cvpdf`
            await Storage.put(key, blob, {
                contentType: res.type!,
                level: "public",
            }).then(res => console.log("RES: ", res)).catch(err => console.log("ERR: ", err))
            await doUpdateUser({
                variables: {
                    input: {
                        id: user!.id,
                        cv: key
                    }
                }
            })
        } catch (error) {
            throw error
        } finally {
            setCvLoading(false)
        }
    };


    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            {loadingImage && <Loading />}
            <View style={{ flexDirection: 'row', marginTop: 40 }}><Icon name="chevron-left" size={30} style={{ color: '#333', marginLeft: 20 }} onPress={handleGoBack} />
                <Text style={{ fontSize: 20, color: '#333', fontFamily: 'Poppins-Medium', marginLeft: 20, }}>Account Information</Text></View>
            <Formik
                innerRef={formikRef}

                initialValues={{ firstName: '', email: '', password: '', lastName: '' }}
                onSubmit={handleUpdateProfile}
                validationSchema={validationSchema}
                validateOnBlur={true}>
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        showsVerticalScrollIndicator={false}

                        style={{
                            marginHorizontal: 20,

                        }}>
                        <Pressable>
                            <Image source={profileImg} style={{ backgroundColor: 'red', height: 140, width: '100%' }} />
                        </Pressable>
                        <Pressable
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                alignSelf: 'flex-end'
                            }}
                        >
                            <Text style={{ textAlign: 'right' }} onPress={handleAddCV}>{cvLoading ? 'Loading CV' : user?.cv ? 'Edit CV' : 'Upload CV'} </Text>
                            {user?.cv && <IconMaterial onPress={() => redirectToPdfScreen(getPublicImg(user.cv))} name='picture-as-pdf' size={20} />}
                        </Pressable>
                        {loadingImage ? <ActivityIndicator color={"red"} /> : <Pressable style={{
                            width: 80, marginTop: -80, zIndex: 10,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} onPress={handleUpdateProfilePhoto}>
                            <Image source={{
                                uri:
                                    user?.avatar ? getPublicImg(user.avatar) :
                                        "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
                            }}
                                style={{ height: 80, width: 80, borderRadius: 40 }} />
                            {!user?.avatar && <Text>Update img</Text>}
                        </Pressable>}
                        <Pressable style={{ marginTop: 16 }}>
                            <Text style={styles.label}>
                                Username
                            </Text>
                            <TextInput
                                style={{
                                    backgroundColor: colors.gray.gray10,
                                    borderRadius: 6,
                                    marginTop: 4,
                                    color: '#202020',
                                    paddingLeft: 12,
                                }}
                                defaultValue={user?.fullname}
                                onChangeText={setFullName}
                                placeholder="Name"
                                placeholderTextColor={'gray'}
                                maxLength={35}
                            />
                        </Pressable>

                        <Pressable style={{ marginTop: 16 }}>
                            <Text
                                style={styles.label}>
                                Email address
                            </Text>
                            <TextInput
                                style={{
                                    backgroundColor: colors.gray.gray10,
                                    borderRadius: 6,
                                    marginTop: 4,
                                    color: '#202020',
                                    paddingLeft: 12,
                                }}
                                editable={false}
                                defaultValue={user?.email!}
                                onChangeText={setEmail}
                                placeholder="Name"
                                placeholderTextColor={'gray'}
                            />
                        </Pressable>

                        <Pressable style={{ marginTop: 16 }}>
                            <Text
                                style={styles.label}>
                                Mobile number
                            </Text>
                            <View style={{ flexDirection: 'row' }}>

                                <TextInput
                                    style={{
                                        backgroundColor: colors.gray.gray10,
                                        borderRadius: 6,
                                        marginTop: 4,
                                        color: 'black',
                                        paddingLeft: 12,
                                        flex: 0.2
                                    }}
                                    maxLength={2}
                                    keyboardType='numeric'
                                    placeholder="DD"
                                    placeholderTextColor={'gray'}
                                />
                                <TextInput
                                    style={{
                                        backgroundColor: colors.gray.gray10,
                                        borderRadius: 6,
                                        marginTop: 4,
                                        color: 'black',
                                        paddingLeft: 12,
                                        flex: 1,
                                        marginLeft: 8
                                    }}
                                    defaultValue={user?.phoneNumber}
                                    onChangeText={setPhoneNumber}
                                    placeholder="Phone number"
                                    placeholderTextColor={'gray'}
                                    maxLength={10}
                                />
                            </View>
                        </Pressable>

                        {/* <Pressable style={{ marginTop: 16 }}>
                            <Text
                                style={styles.label}>
                                City
                            </Text>
                            <TextInput
                                style={{
                                    backgroundColor: colors.gray.gray10,
                                    borderRadius: 6,
                                    marginTop: 4,
                                    color: 'white',
                                    paddingLeft: 12,
                                }}
                                placeholder="Name"
                                placeholderTextColor={'gray'}
                            />
                        </Pressable> */}
                        <Pressable style={{ marginTop: 16 }}>
                            <Text
                                style={styles.label}>
                                Website
                            </Text>
                            <TextInput
                                defaultValue={user?.website}
                                onChangeText={setWebsite}
                                style={{
                                    backgroundColor: colors.gray.gray10,
                                    borderRadius: 6,
                                    marginTop: 4,
                                    color: '#202020',
                                    paddingLeft: 12,
                                }}
                                placeholder="Webiste"
                                placeholderTextColor={'gray'}
                            />
                        </Pressable>
                        <Pressable style={{ marginTop: 18, backgroundColor: '#f3ecec', paddingVertical: 10, borderRadius: 8, paddingHorizontal: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text
                                style={{
                                    fontFamily: 'Poppins-Regular',
                                    fontSize: 14
                                }}>
                                Notifications {user?.notificationsActived ? 'On' : 'Off'}
                            </Text>
                            <View style={{ width: 60, height: 20, borderRadius: 8, backgroundColor: 'red' }} />
                        </Pressable>



                        <Pressable style={{ marginTop: 16 }}>
                            <Text
                                style={{
                                    fontFamily: 'Poppins-Regular',
                                    fontSize: 14
                                }}>
                                Profission
                            </Text>
                            <TextInput
                                defaultValue={data.profission || ''}
                                onChangeText={setProfission}
                                style={styles.textInput}
                                placeholderTextColor={'gray'}
                            />
                        </Pressable>
                        <Pressable style={{ marginTop: 16 }}>
                            <Text style={styles.label}>About yourself</Text>
                            <TextInput
                                placeholder='Breve resume about yourself'

                                defaultValue={user?.about || ''}
                                style={[styles.textInput, { textAlignVertical: 'top' }]}
                                placeholderTextColor={'gray'}
                                multiline
                                numberOfLines={4}
                                onChangeText={setAboutYourself}
                                maxLength={450}
                            />
                        </Pressable>

                        <Pressable disabled={loadingUpdateUser} onPress={handleUpdateProfile}
                            style={[styles.saveButton, {
                                backgroundColor: loadingUpdateUser ? 'gray' : colors.meaning.info,
                            }]}>
                            <Text style={styles.saveButtonText}>{loadingUpdateUser ? 'Updating profile' : 'Save'}</Text>
                        </Pressable>



                        <View style={{ height: 40, width: '100%' }} />
                    </ScrollView>
                )}
            </Formik>
        </View >
    );
};

export default EditProfile;

export const styles = StyleSheet.create({
    saveButton: {
        marginTop: 16,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12
    },
    saveButtonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: 'white',
    },
    textInput: {
        backgroundColor: colors.gray.gray10,
        borderRadius: 6,
        marginTop: 4,
        color: 'black',
        paddingLeft: 12,
    },
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14
    }
})
