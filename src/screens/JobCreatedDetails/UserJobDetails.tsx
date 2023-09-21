import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import React, { useState } from 'react';
import { Image, LayoutAnimation, Platform, Pressable, ScrollView, UIManager, View } from 'react-native';
import { GetUserApplyQuery, GetUserApplyQueryVariables } from '../../API';
import CustomImage from '../../components/ClickableImage';
import Loading from '../../components/Loading';
import PortifolioItem from '../../components/PortifolioItem';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';
import { getUserApply } from '../../graphql/queries';
import { navigationRef } from '../../navigations/NavigationRef';
import { getPublicImg } from '../../utils/publicimages';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
export interface UserJobDetailsProps {
    applierID: string;
    handleAddAcceptedBy: ({ userId, name, price }: { userId: string, name: string, price: string | number }) => void;
    alreadySelectedUser?: boolean;
}

const UserJobDetails = ({ applierID, handleAddAcceptedBy, alreadySelectedUser }: UserJobDetailsProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const openCloseDropdown = () => {
        LayoutAnimation.easeInEaseOut()
        setDropdownOpen(!dropdownOpen);
    }

    const { data, loading } = useQuery<GetUserApplyQuery, GetUserApplyQueryVariables>(gql(getUserApply), {
        variables: {
            id: applierID
        }
    })

    const handlePressAvatar = (userId: string) => {
        if (!userId) return;
        navigationRef.navigate("OtherUserProfileScreen", {
            id: userId
        })
    };

    const redirectToPdfScreen = (pdf: string) => {
        navigationRef.navigate('PdfFullsizeScreen', {
            source: pdf,
            onCancel: () => navigationRef.goBack(),
            onDownload: () => { }
        })
    }

    const onPressImage = (image: string, imageSpecs: any) => {
        navigationRef.navigate('FullImageScreen', {
            image,
            imageSpecs
        })
    }

    const appliedUserData = data?.getUserApply;

    const PDFIMAGE = "https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g"

    if (loading) return <Loading />


    return (
        <Pressable
            onPress={openCloseDropdown}
            style={{
                backgroundColor: alreadySelectedUser ? colors.meaning.success : colors.main.primary,
                padding: 10,
                borderRadius: 10,
                marginVertical: 10,
                marginRight: 6,
                marginTop: 6,
                marginHorizontal: 20,
                borderWidth: 1,
                borderColor: colors.gray.gray40

            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                <Pressable onPress={() => handlePressAvatar(appliedUserData?.userID)}>
                    <Image source={{ uri: getPublicImg(appliedUserData?.userAvatar) }} style={{ height: 40, width: 40, borderRadius: 20 }} />
                </Pressable>
                <Text category='h4' style={{ color: "white", marginLeft: 10, textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold', fontSize: 13 }}>{appliedUserData?.userName}</Text>
                <Text style={{ fontWeight: 'bold', color: dropdownOpen ? 'transparent' : 'lightgray', textDecorationLine: 'underline' }}>See details</Text>
            </View>
            {dropdownOpen && (
                <View style={{ marginTop: 20 }}>
                    <PortifolioItem
                        backgroundImage={appliedUserData?.selectedPortifolio?.backgroundImageKey}
                        title={appliedUserData?.selectedPortifolio?.title!}
                        onPress={() => navigationRef.navigate('PortifolioScreen', { id: appliedUserData?.selectedPortifolio.id })}
                    />


                    {!!appliedUserData?.files?.length &&
                        <>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginBottom: 6 }}>User files</Text>
                            <ScrollView horizontal>

                                {appliedUserData?.files?.map((item, index) => {
                                    if (!item) return;
                                    const itemIncludesPDF = item.includes('.pdf')
                                    return (
                                        <CustomImage
                                            index={index}
                                            source={itemIncludesPDF ? PDFIMAGE : getPublicImg(item)}
                                            onPress={itemIncludesPDF ? () => redirectToPdfScreen(getPublicImg(item)) : onPressImage}
                                        />
                                    )
                                })}
                            </ScrollView>
                        </>
                    }
                    <Text style={{ color: "white" }}>Applied on: {moment(appliedUserData?.createdAt).format("ll")}</Text>
                    {!!appliedUserData?.text && (
                        <>
                            <Text color={"white"} style={{ fontWeight: 'bold', marginTop: 4 }}>Candidate reply:</Text>
                            <Text color={"white"} style={{ marginTop: 4, }}>{appliedUserData.text}</Text>
                        </>
                    )}

                    {!!appliedUserData?.price && <>
                        <Text color={"white"} style={{ fontWeight: 'bold', marginTop: 4, }}>Price requested from applier</Text>
                        <Text color={"white"} style={{ fontWeight: 'bold', marginTop: 4, }}>${appliedUserData.price}</Text>
                    </>}
                    <Pressable onPress={() => handlePressAvatar(appliedUserData?.userID!)} style={{ marginTop: 6, backgroundColor: colors.meaning.warning, justifyContent: 'center', alignItems: 'center', paddingVertical: 6, borderRadius: 8 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>View profile</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => handleAddAcceptedBy({ name: appliedUserData?.userName, userId: appliedUserData?.userID!, price: appliedUserData?.price })}
                        style={{
                            marginBottom: 6,
                            backgroundColor: colors.meaning.error,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 6,
                            borderRadius: 8,
                            marginVertical: 6
                        }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>{alreadySelectedUser ? 'Choosed' : 'Choose this user'} </Text>
                    </Pressable>
                </View>
            )}
        </Pressable>
    )
}

export default UserJobDetails;