import { gql, useMutation, useQuery } from '@apollo/client';
import { useStripe } from '@stripe/stripe-react-native';
import { Storage } from 'aws-amplify';
import moment from 'moment';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Keyboard, Pressable, ScrollView, Switch, Text, TextInput, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Category, CreateImagesMutation, CreateImagesMutationVariables, CreateJobDoneByMutation, CreateJobDoneByMutationVariables, CreateNotificationMutation, CreateNotificationMutationVariables, CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables, DeleteImagesMutation, DeleteImagesMutationVariables, GetJobQuery, GetJobQueryVariables, NotificationType, Status, UpdateJobInput, UpdateJobMutation, UpdateJobMutationVariables } from '../../API';
import BackIcon from '../../components/BackIcon';
import CustomImage from '../../components/ClickableImage';
import HorizontalLine from '../../components/HorizontalLine';
import Loading from '../../components/Loading';
import ModalConfirm from '../../components/ModalConfirm';
import PopupMenu from '../../components/PopupMenu';
import { colors } from '../../constants/colors';
import { skills } from '../../constants/enums/skills';
import { useAuthContext } from '../../context/useContext';
import { createImages, createJobDoneBy, createNotification, createPaymentIntent, deleteImages, updateJob } from '../../graphql/mutations';
import { getJob } from '../../graphql/queries';
import { navigationRef } from '../../navigations/NavigationRef';
import { getPublicImg } from '../../utils/publicimages';
import CategoriesButton from './Categories';
import UserJobDetails from './UserJobDetails';
import styles from './styles';

export type JobCreatedDetailsProps = {
    route: {
        params: {
            id: string
        }
    }
}



const JobCreatedDetails = ({ route }: JobCreatedDetailsProps) => {
    const { user } = useAuthContext()

    const { initPaymentSheet, presentPaymentSheet } = useStripe()

    const [openModal, setOpenModal] = useState(false)
    const [selectedUserID, setSelectedUserID] = useState<{ name: string, userId: string, price: number | string }>({ name: '', userId: '', price: 0 })
    const [loadingJob, setLoadingJob] = useState(false)
    const [editJob, setEditJob] = useState(false)
    const [jobTitle, setJobTitle] = useState<string | undefined>('')
    const [jobPrice, setJobPrice] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [jobRequirements, setJobRequirements] = useState<any>([])
    const [selectedRequirements, setSelectedRequirement] = useState([])
    const [newRequirementText, setNewRequirementText] = useState('')
    const [newRequirementsOpen, setNewRequirementsOpen] = useState(false)
    const [jobImages, setJobImages] = useState<any>([])
    const [jobUrgent, setJobUrgent] = useState(false)
    const [jobRemote, setJobRemote] = useState(false)
    const [jobCategories, setJobCategories] = useState([])
    const [jobsCategoriesEdited, setJobsCategoriesEdited] = useState(false)
    const [clientSecret, setClientSecret] = useState<string | null>(null)
    const [loadingPayment, setLoadingPayment] = useState(false)
    console.log("🚀 ~ file: index.tsx:58 ~ JobCreatedDetails ~ clientSecret", clientSecret)



    const [keyboardStatus, setKeyboardStatus] = useState<boolean | undefined>(undefined)

    const { id } = route.params;
    const { data, loading, refetch: refetchJob } = useQuery<GetJobQuery, GetJobQueryVariables>(gql(getJob), {
        variables: {
            id
        }
    })
    const jobDetail = data?.getJob


    const focusOnInput = useRef<TextInput>(null)


    const [updateJobMutation, { loading: loadingMutationUser, }] = useMutation<UpdateJobMutation, UpdateJobMutationVariables>(gql(updateJob), {
        refetchQueries: ['ListJobs', 'ListUserApplies']
    })

    const [createNotificationMutation] = useMutation<CreateNotificationMutation, CreateNotificationMutationVariables>(gql(createNotification))
    const [createPaymentIntentMutation] = useMutation<CreatePaymentIntentMutation, CreatePaymentIntentMutationVariables>(gql(createPaymentIntent))
    const [addImageJob] = useMutation<CreateImagesMutation, CreateImagesMutationVariables>(gql(createImages))
    const [removeImage] = useMutation<DeleteImagesMutation, DeleteImagesMutationVariables>(gql(deleteImages), {
        refetchQueries: ['ListJobs']
    })

    const [doneBy] = useMutation<CreateJobDoneByMutation, CreateJobDoneByMutationVariables>(gql(createJobDoneBy))

    useEffect(() => {
        if (clientSecret) {
            initializePaymentSheet()
        }
    }, [clientSecret])

    const initializePaymentSheet = async () => {
        if (!clientSecret) return;
        const { error, paymentOption } = await initPaymentSheet({
            paymentIntentClientSecret: clientSecret,
            merchantDisplayName: 'Freelafinder',

        })
        console.log("error, paymentOption ", error, paymentOption)
    }


    const openConfirmModal = ({ name, userId, price }: { name: string, userId: string, price: number | string }) => {
        setOpenModal(true)
        setSelectedUserID({ userId, name, price })
    }

    const acceptedPaymentUpdateJob = async () => {
        if (!selectedUserID.userId.length) return;
        setLoadingJob(true)
        try {
            if (!selectedUserID.userId.length) return;
            setOpenModal(false)
            const { data } = await doneBy({
                variables: {
                    input: {
                        jobID: route.params.id,
                        userID: selectedUserID.userId,
                        jobDoneByUserId: selectedUserID.userId,
                        status: Status.COMPLETED,
                        paid: true
                    }
                }
            })
            await updateJobMutation({
                variables: {
                    input: {
                        id,
                        jobJobDoneById: data?.createJobDoneBy?.id,
                        status: Status.COMPLETED,
                    }
                }
            })

            await createNotificationMutation({
                variables: {
                    input: {
                        jobID: id,
                        userID: selectedUserID.userId,
                        text: `${jobDetail?.author?.fullname} choosed you to complete the job ${jobDetail?.title}`,
                        senderID: user?.id!,
                        read: true,
                        notificationType: NotificationType.COMPLETED
                    }
                }
            })
        } catch (error) {
            Alert.alert('Error', (error as Error)?.message)
        } finally {
            setLoadingJob(false)
            refetchJob()
        }
    }

    const onCofirm = async () => {

        if (selectedUserID.userId === jobDetail?.jobDoneBy?.userID) {
            Alert.alert('User already accepted')
            return;
        }
        if (loadingPayment || loadingJob) return;
        setLoadingPayment(true)
        try {
            const { data } = await createPaymentIntentMutation({
                variables: {
                    amount: +selectedUserID?.price * 100,
                }
            })

            const clientSecret = data?.createPaymentIntent?.clientSecret || null
            setClientSecret(clientSecret)
            if (clientSecret) {
                setLoadingPayment(false)
                const { error, paymentOption } = await presentPaymentSheet()
                if (error) {
                    Alert.alert(`Error code: ${error.code}`, error.message);
                    return;
                }
                acceptedPaymentUpdateJob()

            }





        } catch (error) {
            console.log({ error })
            return;
        }

    }

    useEffect(() => {
        setJobImages(jobDetail?.Images?.items || [])
    }, [jobDetail?.id])

    const categoriesJob = skills?.filter(category => jobDetail?.categories?.some(jobcategory => jobcategory === category)) || []




    useEffect(() => {
        setJobPrice(jobDetail?.minimumPrice?.toString() || '')
        setJobTitle(jobDetail?.title || '')
        setJobDescription(jobDetail?.description || '')
        setJobRequirements(jobDetail?.qualifications || [])
        setJobUrgent(jobDetail?.urgent || false)
        setJobRemote(jobDetail?.canBeDoneRemotely || false)
        setJobCategories(categoriesJob)
    }, [jobDetail?.id, loadingJob])

    useEffect(() => {

        const showKeyboardSubscription = Keyboard.addListener('keyboardDidShow', () => setKeyboardStatus(true));
        const hideKeyboardSubscription = Keyboard.addListener('keyboardDidHide', () => setKeyboardStatus(false));

        return () => {
            showKeyboardSubscription.remove();
            hideKeyboardSubscription.remove();
        }
    }, [])

    const canceledStatus = jobDetail?.status === "CANCELED"

    const changeJobStatus = async (status: Status) => {
        if (loadingJob) return;
        setLoadingJob(true)
        try {
            await updateJobMutation({
                variables: {
                    input: {
                        id,
                        status: status
                    }
                }
            })
        } catch (error) {
            console.log("Error: ", error)
        } finally {
            setLoadingJob(false)
        }
    }


    const disableEdit = [Status.COMPLETED, Status.CANCELED, Status.FINISHED].includes(jobDetail?.status!)
    const options = [
        {
            label: jobDetail?.status === Status.COMPLETED ? "Mark as open" : "Mark as completed",
            Icon: 'check',
            onPress: jobDetail?.status === Status.COMPLETED ? () => changeJobStatus("OPEN") : () => changeJobStatus("COMPLETED"),
            disabled: false
        },
        {
            label: canceledStatus ? 'Re-open this job' : 'Delete this job',
            Icon: canceledStatus ? 'login' : 'delete',
            onPress: canceledStatus ? () => changeJobStatus(Status.OPEN) : () => changeJobStatus(Status.CANCELED),
            disabled: disableEdit
        },
        {
            label: "Edit this job",
            disabled: disableEdit,
            Icon: 'edit',
            onPress: () => {
                if (editJob === true) {
                    handleCancelEditJob()
                    return;
                } else if (jobDetail?.status === Status.OPEN && editJob === false) {
                    setEditJob(true)
                } else {
                    Alert.alert('You can only edit open jobs')
                    return;
                }
            },
        },
    ]

    const handleGoBack = () => {
        handleCancelEditJob()
    }

    const onPressImage = (image: string, imageSpecs: any) => {
        navigationRef.navigate('FullImageScreen', {
            image,
            imageSpecs
        })
    }
    const checkIfImagesChanged = () => {
        if (jobImages?.length !== jobDetail?.Images?.items?.length) return true
        const images = jobImages?.map(item => item?.id)
        const imagesChanged = jobDetail?.Images?.items?.map(item => item?.id)
        const isEqual = images?.every((item, index) => item === imagesChanged[index])
        return !isEqual
    }

    const buttonEditJobEnabled = editJob && !!jobTitle?.length && jobTitle !== jobDetail?.title ||
        jobPrice?.length > 0 && jobPrice !== jobDetail?.minimumPrice?.toString() ||
        jobDescription?.length > 0 && jobDescription !== jobDetail?.description ||
        jobRequirements?.length > 0 && jobRequirements !== jobDetail?.qualifications ||
        newRequirementText?.length > 0 || checkIfImagesChanged() || jobUrgent !== jobDetail?.urgent || jobRemote !== jobDetail?.canBeDoneRemotely
        || jobsCategoriesEdited


    const handleSaveImage = async () => {
        setLoadingJob(true)
        for (let i = 0; i < jobImages.length; i++) {
            if (jobImages[i].id === undefined) {
                const blobresponse = await fetch(jobImages[i].uri)
                const blob = await blobresponse.blob()
                const key = `job/${user?.id}${Date.now()}.png`
                await Storage.put(key, blob, {
                    contentType: 'image/jpeg',
                    level: 'public',
                })

                await addImageJob({
                    variables: {
                        input: {
                            jobID: id,
                            key
                        }
                    }
                })
                await refetchJob()
                await setLoadingJob(false)
                await setEditJob(false)
            }
        }
    }

    const handleDeleteImage = async (imageKey: string) => {

        try {
            Alert.alert('Delete image', 'Are you sure you want to delete this image?', [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: async () => {
                        const { data } = await removeImage({
                            variables: {
                                input: {
                                    id: imageKey
                                }
                            }
                        })
                        await refetchJob()
                        if (data) setJobImages(previousImages => previousImages.filter(image => image.id !== imageKey))
                        else return;
                    }
                }
            ])

        } catch (error) {
            console.log({ error })
        }
    }

    const handleEditJob = async () => {


        if (loadingJob) return;
        setLoadingJob(true)

        const input: UpdateJobInput = {

            id,
        }

        if (jobTitle !== jobDetail?.title) {
            input.title = jobTitle
        }

        if (jobPrice !== jobDetail?.minimumPrice?.toString()) {
            input.minimumPrice = parseInt(jobPrice)
        }

        if (jobDescription !== jobDetail?.description) {
            input.description = jobDescription
        }

        if (jobRequirements.reduce((acc, curr) => acc + curr.length, 0) !== jobDetail?.qualifications?.reduce((acc, curr) => acc + curr.length, 0)) {
            input.qualifications = jobRequirements
        }

        if (checkIfImagesChanged()) {
            handleSaveImage()
        }

        if (jobUrgent !== jobDetail?.urgent) {
            input.urgent = jobUrgent
        }

        if (jobRemote !== jobDetail?.canBeDoneRemotely) {
            input.canBeDoneRemotely = jobRemote
        }

        if (jobsCategoriesEdited) {
            input.categories = jobCategories.map(item => item)
            setJobsCategoriesEdited(false)
        }



        try {
            await updateJobMutation({
                variables: { input }
            })

        } catch (error) {
            console.log({ error })
        } finally {
            setEditJob(false)
            setLoadingJob(false)
            if (newRequirementText?.length > 0) {
                setNewRequirementText('')
            }
        }

    };

    const handleCancelEditJob = () => {
        setEditJob(false)
        setJobTitle(jobDetail?.title || '')
        setJobPrice(jobDetail?.minimumPrice?.toString() || '')
        setJobDescription(jobDetail?.description || '')
        setJobRequirements(jobDetail?.qualifications || [])
        setNewRequirementText('')
        setJobImages(jobDetail?.Images?.items)
        setJobUrgent(jobDetail?.urgent || false)
        setJobRemote(jobDetail?.canBeDoneRemotely || false)
        setJobCategories(categoriesJob || [])
        setSelectedRequirement([])
        setJobsCategoriesEdited(false)

    }


    const updateJobRequirements = async (index: number, text: string) => {
        const copyRequirements = [...jobRequirements]
        copyRequirements[index] = text
        setJobRequirements(copyRequirements)

    }

    const selectOrUnselectRequirement = (index: number) => {
        if (selectedRequirements.includes(index)) {
            setSelectedRequirement(selectedRequirements.filter((item) => item !== index))
        } else {
            setSelectedRequirement([...selectedRequirements, index])
        }
    }

    const onTrashPress = (index: number) => {
        const copyRequirements = [...jobRequirements]
        copyRequirements.splice(index, 1)
        setJobRequirements(copyRequirements)
    }

    const handleAddNewRequirement = () => {
        setJobRequirements([...jobRequirements, newRequirementText])
        setNewRequirementText('')
        setNewRequirementsOpen(false)
    }

    const handleCancelAddNewRequirements = () => {
        setNewRequirementsOpen(false)
        setNewRequirementText('')
    }

    const handleRemoveImage = async (index: number) => {
        console.log("INDE:", index)
        const copyImages = [...jobImages]
        copyImages.splice(index, 1)
        setJobImages(copyImages)
    }

    const handleAddNewImage = async () => {
        try {
            await launchImageLibrary({
                mediaType: "mixed",
                selectionLimit: 4,
            }, async ({ didCancel, errorCode, errorMessage, assets }) => {
                if (!didCancel && !errorCode && assets && assets.length > 0) {
                    setJobImages(previousState => {
                        if (previousState) {
                            return [...previousState, ...assets]
                        }
                        return assets
                    })

                }
            })
        } catch (error) {
            console.log("ERROR", error)
            return null
        }

    }


    const getNotSelectedCategories = useMemo(() => {
        return skills.filter(o1 => !jobCategories.some((o2: any) => o1 === o2))
    }, [jobCategories])


    const onPressHandleAddOrRemoveCategory = (category: Category) => {
        setJobsCategoriesEdited(true)
        if (jobCategories.includes(category)) {
            setJobCategories(jobCategories.filter((item) => item !== category))
        } else {
            setJobCategories([...jobCategories, category])
        }
    }

    const jobImagesNotFromAppliers = jobImages?.filter((item:any) => !item?.key?.includes("applyjob"))

    const appliers = jobDetail?.userApply?.items

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color={colors.main.primary} />
            </View>
        )
    }


    return (
        <>
            {loadingMutationUser || loadingJob && <Loading />}

            <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">

                {openModal && <ModalConfirm loading={loadingPayment} title={`${selectedUserID?.name}`} onCofirm={onCofirm} setOpenModal={setOpenModal} />}
                <View style={styles.headerButtons}>
                    <BackIcon onPress={handleGoBack} />
                    <Text style={styles.headerTitle}>Job details</Text>
                    <PopupMenu options={options} />
                </View>
                <Text style={{ marginRight: 20, alignSelf: 'flex-end' }}>Job created {moment(jobDetail?.createdAt).fromNow()}</Text>
                <Text style={{ marginRight: 20, alignSelf: 'flex-end' }}>Last updated {moment(jobDetail?.updatedAt).fromNow()}</Text>
                {!!jobDetail?.jobDoneBy && <Text style={{ marginRight: 20, alignSelf: 'flex-end' }}>Completed on {moment(jobDetail?.jobDoneBy?.createdAt).format('LL')}</Text>}
                <View style={styles.itemContainer}>
                    <Text style={styles.jobTitle}>Job title:</Text>
                    <TextInput style={{
                        padding: 0,
                        width: '90%',
                    }}
                        editable={editJob}
                        value={jobTitle}
                        onChangeText={setJobTitle}
                        maxLength={55}
                        clearButtonMode="always"
                        numberOfLines={2}
                        multiline
                        ref={focusOnInput}


                    />
                </View>
                <HorizontalLine distance={10} />
                <View style={styles.itemContainer}>
                    <Text style={styles.bolderTexxt}>Images:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                        {!!jobImagesNotFromAppliers?.length ? jobImagesNotFromAppliers?.map((item: any, index) => {
                            return (
                                <CustomImage
                                    index={index}
                                    handleRemoveImage={item?.id ? () => handleDeleteImage(item?.id) : () => handleRemoveImage(index)}
                                    editImage={editJob}
                                    source={item.id ? getPublicImg(item.key) : item.uri}
                                    onPress={onPressImage}
                                />
                            )
                        }) : <Text style={{ color: 'gray', marginRight: 10 }}>No images</Text>}
                        {jobImagesNotFromAppliers?.length <= 5 && editJob && <Pressable
                            onPress={handleAddNewImage}
                            style={{
                                borderWidth: 1
                                , borderStyle: 'dashed',
                                borderColor: colors.main.primary,
                                borderRadius: 4,
                                width: 90,
                                height: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Text>+</Text>
                        </Pressable>
                        }

                    </View>
                </View>
                <HorizontalLine distance={10} />
                <View style={styles.itemContainer}>


                    <Text style={styles.bolderTexxt} >Job Price:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>$</Text>
                        <TextInput
                            editable={editJob}
                            value={jobPrice || 0 || ''}
                            multiline
                            onChangeText={setJobPrice}

                            style={{ color: "black", padding: 0, paddingLeft: 4 }}
                        />
                    </View>

                </View>

                <HorizontalLine distance={10} />
                <View style={styles.itemContainer}>
                    <Text style={styles.bolderTexxt}>Description:</Text>
                    <TextInput style={{
                        padding: 0,
                        width: '90%',
                    }}
                        editable={editJob}
                        value={jobDescription}
                        onChangeText={setJobDescription}
                        maxLength={500}
                        clearButtonMode="while-editing"
                        multiline


                    />
                </View>

                <HorizontalLine distance={10} />
                <View style={styles.itemContainer}>
                    <Text style={styles.bolderTexxt}>Requirements:</Text>

                    <View>
                        {jobRequirements?.length ? [...jobRequirements, 1].splice(0, 5)?.map((item, index) => {
                            const isSelected = selectedRequirements?.includes(index)
                            const backgroundColor = isSelected ? 'tomato' : 'white'
                            const lastKey = index === jobRequirements.length
                            if (lastKey && editJob) {
                                return (
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                        {!newRequirementsOpen && <AntDesign name="plus" size={20} onPress={() => setNewRequirementsOpen(true)} />}
                                        {newRequirementsOpen && <Pressable style={{ flexDirection: 'row', width: '80%', alignItems: 'center', height: 25 }}>
                                            <AntDesign name="back" size={20} onPress={handleCancelAddNewRequirements} />
                                            <TextInput
                                                value={newRequirementText}
                                                onChangeText={setNewRequirementText}
                                                style={{ paddingVertical: 0, marginLeft: 6, paddingLeft: 6, borderWidth: 1, borderRadius: 6, width: '100%' }}
                                                onSubmitEditing={handleAddNewRequirement}
                                            />
                                        </Pressable>}
                                    </View>
                                )
                            }
                            return (
                                <View key={index} style={{ flexDirection: 'row', marginBottom: 5, alignItems: 'center' }}>
                                    {isSelected && editJob && <AntDesign name="delete" size={20} onPress={() => onTrashPress(index)} />}
                                    {(editJob && !lastKey) ? <Pressable
                                        onPress={() => selectOrUnselectRequirement(index)}
                                        style={{
                                            width: 12,
                                            height: 12,
                                            borderWidth: 1,
                                            borderRadius: 2,
                                            backgroundColor
                                        }}
                                    /> : lastKey ? null : <Text>{index + 1} - </Text>}
                                    <TextInput
                                        style={{ padding: 0, marginLeft: editJob ? 6 : 0, borderColor: 'gray', borderRadius: 4, width: '90%' }}
                                        editable={editJob}
                                        multiline
                                        value={jobRequirements[index] && jobRequirements[index]?.trim()}
                                        onChangeText={(txt) => updateJobRequirements(index, txt)} />
                                </View>
                            )
                        }) : editJob ? <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            {!newRequirementsOpen && <AntDesign name="plus" size={20} onPress={() => setNewRequirementsOpen(true)} />}
                            {newRequirementsOpen && <Pressable style={{ flexDirection: 'row', width: '80%', alignItems: 'center', height: 25 }}>
                                <AntDesign name="back" size={20} onPress={handleCancelAddNewRequirements} />
                                <TextInput
                                    value={newRequirementText}
                                    onChangeText={setNewRequirementText}
                                    style={{ paddingVertical: 0, marginLeft: 6, paddingLeft: 6, borderWidth: 1, borderRadius: 6, width: '100%' }}
                                    onSubmitEditing={handleAddNewRequirement}
                                />
                            </Pressable>}
                        </View> : <Text>No requirements</Text>}
                    </View>
                </View>
                <HorizontalLine distance={10} />
                <View style={[styles.itemContainer, { marginBottom: 4 }]}>
                    <Text style={styles.bolderTexxt}>Categories:</Text>
                    <ScrollView horizontal>
                        {jobCategories?.map((item, index) => {
                            return <CategoriesButton isSelected remove key={index} onPress={!editJob ? () => { } : () => onPressHandleAddOrRemoveCategory(item)} name={item} />
                        })}
                    </ScrollView>
                    {editJob && <ScrollView horizontal>
                        {getNotSelectedCategories.map((item, index) => {
                            return <CategoriesButton key={index} onPress={() => onPressHandleAddOrRemoveCategory(item)} name={item} />
                        })}
                    </ScrollView>}
                </View>

                <HorizontalLine distance={10} />

                <View style={[styles.itemContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <Text style={styles.bolderTexxt}>Can it be done remotely?:</Text>
                    <Switch trackColor={{ false: colors.gray.gray10, true: 'lightgray' }} disabled={!editJob} value={jobRemote} thumbColor={jobRemote ? colors.meaning.info : 'gray'} onChange={() => setJobRemote(previousState => !previousState)} />
                </View>

                <View style={[styles.itemContainer, { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }]}>
                    <Text style={styles.bolderTexxt}>Is it urgently?:</Text>
                    <Switch trackColor={{ false: colors.gray.gray10, true: 'lightgray' }} disabled={!editJob} thumbColor={jobUrgent ? colors.meaning.info : 'gray'} value={jobUrgent} onChange={() => setJobUrgent(previousState => !previousState)} />
                </View>

                <HorizontalLine distance={10} />
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>Applied: </Text>
                        <View style={{ height: 15, width: 15, backgroundColor: colors.meaning.info }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                        <Text>Selected: </Text>
                        <View style={{ height: 15, width: 15, backgroundColor: colors.meaning.success }} />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.bolderTexxt}>Select one of appliers and choose who made this job: </Text>
                </View>

                {
                    !!appliers?.length ? appliers?.filter(item => item?.userID).map((item, index) => {
                        if (!item?.id || !item?.userID) return null
                        const alreadySelectedUser = jobDetail?.jobDoneBy?.userID === item?.userID
                        return (
                            <UserJobDetails
                                alreadySelectedUser={alreadySelectedUser}
                                handleAddAcceptedBy={openConfirmModal}
                                key={index}
                                applierID={item?.id!}
                            />
                        )
                    }) : <Text style={{ textAlign: 'center', marginTop: 20 }}>No appliers for this job yet</Text>
                }
                <View style={{ height: 100 }} />
            </ScrollView >
            {!keyboardStatus && buttonEditJobEnabled && <View style={[styles.containerFixedButtons, { zIndex: 100000 }]}>
                <Pressable onPress={handleEditJob} style={styles.fixedButton}><Text style={{ color: "white" }}>EDIT JOB</Text></Pressable>
                <Pressable onPress={handleCancelEditJob} style={[styles.fixedButton, { marginTop: 8, backgroundColor: 'tomato' }]}><Text style={{ color: "white" }}>CANCEL EDIT</Text></Pressable>
            </View>}
            {!keyboardStatus && editJob && !buttonEditJobEnabled && <View style={styles.containerFixedButtons}>
                <Pressable onPress={() => setEditJob(false)} style={[styles.fixedButton, {
                    marginTop: 8, backgroundColor: 'tomato'
                }]}><Text style={{ color: "white" }}>DISABLE EDITION</Text></Pressable>
            </View>}
        </>

    )
}

export default JobCreatedDetails;



