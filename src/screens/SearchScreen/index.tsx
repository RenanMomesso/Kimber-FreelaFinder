import { gql, useSubscription } from '@apollo/client';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Keyboard, Pressable, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontIcon from 'react-native-vector-icons/Fontisto';
import { Category, Job, OnCreateJobSubscription } from '../../API';
import Text from '../../components/Text';
import { useAuthContext } from '../../context/useContext';
import { useGlobalQueries } from '../../context/useQueries';
import { onCreateJob } from '../../graphql/subscriptions';
import JobCardSearchScreen from './JobCardSearchScreen';
import RenderUsersItem from './comps/RenderUsersItem';
import { styles } from './styles';

const SearchScreen = () => {
    const { user } = useAuthContext()
    const { listJobsQuery, users } = useGlobalQueries();
    const [textSearch, setTextSearch] = useState<string>("")
    const [isCancelVisible, setIsCancelVisible] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState([])
    const [newJob, setNewJob] = useState<Job[]>([])
    const inputRef = useRef(null)
    const handleInputFocus = () => {
        inputRef.current!.focus()!
    }





    const handleChangeText = (text: string) => {
        setTextSearch(text)
    }

    const handlePressCancel = () => {
        Keyboard.dismiss()
        setTextSearch("")
    }


    const filterJobsCreatedByMe = listJobsQuery.listJobs?.items.filter(job => job?.author?.id !== user?.id)
    const filterAlreadyAppliedJobs = filterJobsCreatedByMe?.filter(item => !!!item?.userApply?.items.length ||
        item.userApply.items.some(jobItem => jobItem?.userID !== user?.id))
    const filteredJobs = filterAlreadyAppliedJobs?.filter((item) => {
        return item?.title.toLowerCase().includes(textSearch.toLowerCase()) ||
            item?.description?.toLowerCase().includes(textSearch.toLowerCase()) ||
            item?.categories?.some((cat) => cat?.toLowerCase().includes(textSearch.toLowerCase())) ||
            item?.categories.some(cat => selectedCategories.includes(cat))
    })

    const { data: createJobSubSub } = useSubscription<OnCreateJobSubscription>(gql(onCreateJob))

    useEffect(() => {
        if (createJobSubSub?.onCreateJob) {
            setNewJob(alreadyExistingJob => [createJobSubSub?.onCreateJob as Job[] || [], ...alreadyExistingJob])
        }
    }, [createJobSubSub])


    const newJobsSearch = listJobsQuery.listJobs?.items.length && [...filteredJobs, ...newJob]




    const handlePressCategories = (category: Category) => {
        const alreadySelectedCategory = selectedCategories.find((item) => item === category.name)
        if (alreadySelectedCategory) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category.name))
        } else {
            setSelectedCategories([...selectedCategories, category.name])
        }
    }


    console.log("users", users?.length)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.inputHeader}>
                    <Pressable onPress={handleInputFocus} style={styles.searchLabel}>
                        <FontIcon name='search' size={16} color="black" />
                        <TextInput value={textSearch} onChangeText={handleChangeText} style={styles.textinput} ref={inputRef} />
                    </Pressable>
                    {!!textSearch.length && <Text category='h6' style={{ marginLeft: 7 }} onPress={handlePressCancel}>Cancel</Text>}
                </View>
                {/* <SortModal /> */}
                {/* <View style={{ marginTop: 12, marginBottom: 22, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Pressable style={{ backgroundColor: colors.main.primary, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8, borderRadius: 8, paddingVertical: 6 }}>
                        <Text style={{ color: 'white' }}>Filter</Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor: colors.main.primary, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 8, borderRadius: 8, paddingVertical: 6 }}>
                        <Text style={{ color: 'white' }}>Sort by</Text>
                    </Pressable>
                </View> */}
                <View style={{ marginTop: 5 }}>
                    <FlatList
                        ListHeaderComponent={() => <>
                            <Text style={{ marginVertical: 10 }}>Search for users</Text>
                            <FlatList
                                keyExtractor={(_, index) => index.toString()}
                                data={users}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => <RenderUsersItem item={item} />}
                            />
                        </>}
                        showsVerticalScrollIndicator={false}
                        data={newJobsSearch}
                        keyExtractor={(_, index) => index.toString()}
                        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                        ListEmptyComponent={() => <Text style={{ marginVertical: 10 }}>No service created yet. {'\n'}Come back later or create one service.</Text>}
                        renderItem={({ item }) => <JobCardSearchScreen item={item} />}
                        ListFooterComponent={() => <View style={{ height: 100 }} />}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SearchScreen;
