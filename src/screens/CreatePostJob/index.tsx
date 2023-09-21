import { gql, useMutation } from '@apollo/client';
import { Storage } from 'aws-amplify';
import React, { useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Image, Pressable, ScrollView, Switch, TextInput, TouchableOpacity, View } from 'react-native';
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { default as AntDesign, default as AntDesignIcon } from 'react-native-vector-icons/AntDesign';
import { CreateImagesInput, CreateImagesMutation, CreateImagesMutationVariables, CreateJobInput, CreateJobMutation, CreateJobMutationVariables, Status } from '../../API';
import BackIcon from '../../components/BackIcon';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';
import { skills } from '../../constants/enums/skills';
import { useAuthContext } from '../../context/useContext';
import { useGlobalQueries } from '../../context/useQueries';
import { createImages } from '../../graphql/mutations';
import { navigationRef } from '../../navigations/NavigationRef';
import CategoriesButton from '../JobCreatedDetails/Categories';
import InputComponent from './InputAndLabel';
import { CREATE_POST_JOB } from './query';
import styles from './styles';





const CreatePostScreen = () => {

    const titleRef = useRef(null)

    const [selectedPhotos, setSelectedPhotos] = useState<null | Asset[] | undefined>(null)
    const [choosedCategories, setChoosedCategories] = useState([])

    const [title, setTitle] = useState('creating testing for testing all jobs')
    const [description, setDescription] = useState('creating testing for testing all jobs creating testing for testing all jobs creating testing for testing all jobs creating testing for testing all jobs')
    const [loadingCreateJob, setLoadingCreateJob] = useState(false)
    const [jobRemote, setJobRemote] = useState(false)
    const [jobUrgent, setJobUrgent] = useState(false)
    const [newRequirementsOpen, setNewRequirementsOpen] = useState(false)
    const [newRequirementText, setNewRequirementText] = useState("")
    const [jobRequirements, setJobRequirements] = useState([])
    const [jobCategories, setJobCategories] = useState([])

    const [price, setPrice] = useState("")
    const { user } = useAuthContext()
    const { categories, refetchJobs } = useGlobalQueries()
    const [mutationCreateJob] = useMutation<CreateJobMutation, CreateJobMutationVariables, CreateJobInput>(gql(CREATE_POST_JOB), {
        refetchQueries: ['ListJobs'],

    })

    const [doCreateImage] = useMutation<CreateImagesMutation, CreateImagesMutationVariables, CreateImagesInput>(gql(createImages), {
        awaitRefetchQueries: true,
        refetchQueries: ['ListJobs'],

    })


    //abordagem 1
    // usuario sob no aws assim que cria imagem
    const handleDeleteImage = async (index: number) => {
        const newPhotos = selectedPhotos?.filter((_, i) => i !== index)
        // const removeFromStorage = await Storage.remove(selectedPhotos[index]?.key)
        // console.log("REMOVE FROM STORAGE", removeFromStorage)
        setSelectedPhotos(newPhotos)
    }

    const handleOpenImagePicker = async () => {
        try {
            await launchImageLibrary({
                mediaType: "mixed",
                selectionLimit: 4,
            }, async ({ didCancel, errorCode, errorMessage, assets }) => {
                if (!didCancel && !errorCode && assets && assets.length > 0) {
                    if (selectedPhotos?.length && selectedPhotos?.length > 4) {
                        Alert.alert("You can't select more than 4 photos")
                        return
                    }
                    setSelectedPhotos(previousState => {
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

    const handleCreatePost = async () => {
        setLoadingCreateJob(true)

        try {
            const { data } = await mutationCreateJob({
                variables: {
                    input: {
                        title,
                        description,
                        urgent: jobUrgent,
                        canBeDoneRemotely: jobRemote,
                        jobAuthorId: user?.attributes.sub,
                        status: Status.OPEN,
                        minimumPrice: Number(price),
                        qualifications: jobRequirements,
                        categories: jobCategories.map(item => item),


                    }
                }
            })


            if (selectedPhotos?.length) {
                for (let i = 0; i < selectedPhotos?.length; i++) {
                    const asset = selectedPhotos[i]
                    const { uri }: { uri?: any } = asset
                    const response = await fetch(uri)
                    const blob = await response.blob()
                    const key = `job/${user?.id}${Date.now()}.png`
                    const ob = await Storage.put(key, blob, {
                        contentType: 'image/png',
                        level: 'public',
                    })


                    if (data?.createJob?.id) {

                        const { data: doCreateImageMutation } = await doCreateImage({
                            variables: {
                                input: {
                                    jobID: data?.createJob?.id,
                                    key,

                                }
                            }
                        })
                    }
                }

            }

            if (data?.createJob) {

                // setTitle("")
                // setDescription("")
                setJobRemote(false)
                setJobUrgent(false)
                setPrice("")
                setJobCategories([])
                setChoosedCategories([])
                setSelectedPhotos(null)
                setJobRequirements([])
                navigationRef.goBack()
            }
            setLoadingCreateJob(false)
        } catch (error) {
            Alert.alert("Error", (error as Error).message)

        } finally {
            setLoadingCreateJob(false)
            await refetchJobs()
        }
    };



    const disabledButton = title.length >= 10 && description.length >= 50 && !!price && jobCategories.length > 0
    console.log("🚀 ~ file: index.tsx:172 ~ CreatePostScreen ~ disabledButton", disabledButton)




    const changeUsecallback = (value: string) => {
        setTitle(value)
    }

    const handleDeleteRequirements = (index: number) => {
        const requirementsDelete = jobRequirements?.filter((_, i) => i !== index)
        setJobRequirements(requirementsDelete)
    }

    const handleCancelAddNewRequirements = () => {
        setNewRequirementsOpen(false)
        setNewRequirementText('')
    }

    const handleAddNewRequirement = () => {
        setJobRequirements([...jobRequirements, newRequirementText])
        setNewRequirementText('')
        setNewRequirementsOpen(false)
    }

    const updateJobRequirements = (index: number, text: string) => {
        const copyRequirements = [...jobRequirements]
        copyRequirements[index] = text
        setJobRequirements(copyRequirements)

    }

    const getNotSelectedCategories = useMemo(() => {
        return skills?.length ? skills.filter(o1 => !jobCategories.some((o2: any) => o1 === o2)) : []
    }, [jobCategories])

    console.log("job categories", jobCategories)
    const onPressHandleAddOrRemoveCategory = (category: string) => {
        console.log({ category })
        if (jobCategories.includes(category)) {
            setJobCategories(jobCategories.filter((item) => item !== category))
        } else {
            setJobCategories([...jobCategories, category])
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>


            <ScrollView style={styles.container} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false} >
                {/* <KeyboardAvoidingView behavior='padding' style={{ marginTop: 30, }}> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <BackIcon marginTop={0} />
                    <Text category='h3semibold' style={{ color: "#202020", marginBottom: 30 }}>Create a Service</Text>
                    <View />
                </View>
                <Text style={{ color: "#202020", marginBottom: 10 }}>Upload Files</Text>
                {selectedPhotos?.length ? <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {selectedPhotos.map((item, index) => {

                        return (
                            <View key={index} style={{ marginRight: 10, marginBottom: 10 }}>
                                <View>
                                    <Pressable style={{ marginRight: 6, justifyContent: 'center', padding: 4, borderRadius: 8, position: 'absolute', zIndex: 3, right: 10 }} onPress={() => handleDeleteImage(index)}>
                                        <AntDesignIcon name="closecircle" color="tomato" />
                                    </Pressable>
                                    <Image source={{ uri: item.uri }} style={{ width: 100, height: 100 }} />
                                </View>
                            </View>
                        )
                    }
                    )}
                    <TouchableOpacity onPress={handleOpenImagePicker} style={{
                        width: 100,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 2,
                        borderColor: 'black',
                        borderStyle: 'dashed'

                    }}>
                        <Text style={{ color: "black" }}>+</Text>
                    </TouchableOpacity>
                </View> : <TouchableOpacity
                    onPress={handleOpenImagePicker}
                    style={styles.buttonAddImages}>
                    <Text style={{ color: "black" }}>PNG, JPEG, WEBP, PDF, VIDEO</Text>
                </TouchableOpacity>}


                <InputComponent placeholder={"eg. Titl"} maxLength={40} minLength={10} numberOfLines={1} title="Title" inputValue={title} inputChange={changeUsecallback} />
                <InputComponent
                    placeholder={"eg. Landing Page Design"}
                    minLength={50}
                    numberOfLines={4}
                    maxLength={600}
                    textAlignVertical="top"
                    title="Description"
                    multiline
                    inputValue={description}
                    inputChange={setDescription}
                />

                {/* requirements begin */}
                <Text style={{ color: "#202020", marginBottom: 5 }}>Requirements: </Text>

                {!!jobRequirements?.length && jobRequirements.map((item, index) => {
                    return (
                        <View style={{ flexDirection: 'row', alignItems: 'center', minHeight: 20 }}>
                            <AntDesign name="delete" size={20} onPress={() => handleDeleteRequirements(index)} />
                            <TextInput
                                multiline
                                scrollEnabled
                                maxLength={100}
                                value={jobRequirements[index] && jobRequirements[index]?.trim()}
                                onChangeText={(txt) => updateJobRequirements(index, txt)}
                            />
                        </View>
                    )
                })}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {!newRequirementsOpen && <AntDesign name="plus" size={20} onPress={() => setNewRequirementsOpen(true)} />}
                    {newRequirementsOpen && <Pressable style={{ flexDirection: 'row', width: '85%', alignItems: 'center', minHeight: 20 }}>

                        <AntDesign name="back" size={20} onPress={handleCancelAddNewRequirements} />
                        <TextInput
                            maxLength={100}
                            multiline
                            value={newRequirementText}
                            onChangeText={setNewRequirementText}
                            style={{ marginLeft: 6, paddingLeft: 6, borderWidth: 1, paddingVertical: 0, borderRadius: 6, width: '100%', marginRight: 5 }}
                            onSubmitEditing={handleAddNewRequirement}
                        />
                        {!!newRequirementText?.length && <AntDesign name="pluscircle" size={20} style={{ right: 0 }} onPress={handleAddNewRequirement} />}

                    </Pressable>}
                </View>
                {/* requirements end */}

                {/* categories init; */}
                <Text style={{ fontWeight: 'bold', color: "black", marginTop: 20 }}>Categories</Text>
                <ScrollView horizontal>
                    {!!jobCategories?.length ? jobCategories?.map((item, index) => {
                        return <CategoriesButton isSelected remove key={index} onPress={() => onPressHandleAddOrRemoveCategory(item)} name={item} />
                    }) : <View style={{ height: 25 }}>
                        <Text>No categories selected.</Text></View>}
                </ScrollView>
                {<ScrollView horizontal>
                    {getNotSelectedCategories.map((item, index) => {
                        return <CategoriesButton key={index} onPress={() => onPressHandleAddOrRemoveCategory(item)} name={item} />
                    })}
                </ScrollView>}
                {/* categories end */}

                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', color: "#202020" }}>Price</Text>

                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Text>$</Text>
                        <TextInput
                            placeholder='$0'
                            keyboardType='number-pad'

                            style={styles.priceInputStyle}
                            value={price}
                            ref={titleRef}
                            maxLength={3}
                            onChangeText={setPrice}
                        />
                    </View>
                </View>

                <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <Text style={{ fontWeight: 'bold', color: "#202020" }}>Can it be done remotely?:</Text>
                    <Switch trackColor={{ false: colors.gray.gray10, true: 'lightgray' }} value={jobRemote} thumbColor={jobRemote ? colors.meaning.info : 'gray'} onChange={() => setJobRemote(previousState => !previousState)} />
                </View>

                <View style={[{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 }]}>
                    <Text style={{ fontWeight: 'bold', color: "#202020" }}>Is it urgently?:</Text>
                    <Switch trackColor={{ false: colors.gray.gray10, true: 'lightgray' }} thumbColor={jobUrgent ? colors.meaning.info : 'gray'} value={jobUrgent} onChange={() => setJobUrgent(previousState => !previousState)} />
                </View>
                <Pressable disabled={!disabledButton || loadingCreateJob} onPress={handleCreatePost} style={[styles.createPostButton, { backgroundColor: !disabledButton ? 'gray' : colors.meaning.info }]}>
                    <Text style={{ color: 'white' }}>{loadingCreateJob ? <ActivityIndicator color={"white"} /> : 'Create Post'}</Text>
                </Pressable>
                <View style={{ height: 60 }} />
                {/* </KeyboardAvoidingView> */}
            </ScrollView >
        </SafeAreaView>
    )
};

export default CreatePostScreen