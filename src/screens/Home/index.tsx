import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { AppOpenAd, TestIds } from 'react-native-google-mobile-ads';
import { Job, Status } from '../../API';
import BottomSheet, { BottomSheetRefProps } from '../../components/BottomSheet';
import Categories from '../../components/Categories';
import JobCard from '../../components/JobCard';
import MenuButton from '../../components/MenuButton';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';
import { skills } from '../../constants/enums/skills';
import ChatIcon from '../../constants/icons/ChatIcon.svg';
import { useAuthContext } from '../../context/useContext';
import { useGlobalQueries } from '../../context/useQueries';
import { navigationRef } from '../../navigations/NavigationRef';
import { RootNavigationProps } from '../../navigations/types';



export type HomeScreenProps = {
    navigation: NavigationProp<RootNavigationProps>
}

const Home = ({ navigation }: HomeScreenProps) => {
    
    const { listJobsQuery, loadingJobs, refetchJobs, startPollingJobs, stopPollingJobs } = useGlobalQueries()
    const [selectedCategory, setSelectedCategory] = useState<[] | null>([])
    const [jobsQuantityShow, setJobsQuantityShow] = useState(1)
    const [loadingMoreJobs, setLoadingMoreJobs] = useState(false)
    const refBottomSheet = useRef<BottomSheetRefProps>(null);
    const { user } = useAuthContext()





    const jobsSorts = !!listJobsQuery && [...listJobsQuery?.listJobs?.items] || []

    const jobsDifferentFromCancelled = jobsSorts?.sort((a, b) => {
        return new Date(a!.updatedAt!).getTime() - new Date(b!.updatedAt).getTime()
    })

    const sortByAuthor = jobsDifferentFromCancelled.sort((a: Job, b: Job) => {
        return a.author?.id === user?.id ? 1 : -1;
    })

    const jobs = sortByAuthor.filter((item: Job) => ![Status.CANCELED, Status.COMPLETED, Status.FINISHED].includes(item.status!))
    const jobsFilteredWithCategories = !!selectedCategory?.length ? jobs.filter(item => item.categories?.some(item2 => selectedCategory?.includes(item2))) : jobs
    const jobsFilteredWithCategoriesWithLimit = jobsFilteredWithCategories.length > 10 ? jobsFilteredWithCategories.slice(0, 10) : jobsFilteredWithCategories

    const userCategoriesName = user?.categories?.map(item => item)

    const jobsForYou = sortByAuthor.filter((job: Job) => job.categories?.some(item => userCategoriesName?.includes(item))).filter((item: Job) => (item.author.id !== user?.id)).filter((item: Job) => item.userApply?.items.every(userApply => userApply?.userID !== user?.id))
    const itemSeparatorComponent = () => <View style={{ width: 2, backgroundColor: 'transparent', height: 0 }} />


    const filterByCategory = (category: string) => {
        const alreadySelectedCategory = selectedCategory?.includes(category)
        if (alreadySelectedCategory) {
            const removeCategory = selectedCategory?.filter(item => item !== category)
            setSelectedCategory(removeCategory)
        } else {
            setSelectedCategory(previousCategories => [...previousCategories!, category])
        }
    }

    const refetchQuery = async () => {
        await refetchJobs();
    }


    useEffect(() => {
        refetchQuery()
    }, [loadingJobs, jobs])


    useFocusEffect(() => {
        startPollingJobs(5000)

        return () => stopPollingJobs()
    })

    const fetchMoreJobs = () => {

        if (jobsFilteredWithCategories.length <= jobsQuantityShow) return
        setLoadingMoreJobs(true)
        setTimeout(() => {

            setJobsQuantityShow(jobsQuantityShow + 4)
            setLoadingMoreJobs(false)
        }, 300)
    };


    AppOpenAd.createForAdRequest(TestIds.APP_OPEN);
    return (
        <>
            <BottomSheet ref={refBottomSheet} navigation={navigation} />

            <View style={styles.container}>
                <View style={{ position: 'absolute', bottom: 0, zIndex: 10, alignSelf: 'center', backgroundColor: 'red' }}>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <MenuButton ref={refBottomSheet} />
                    <ChatIcon onPress={() => navigationRef.navigate("ChatNavigation")} />
                </View>
                {user?.fullname && <Text style={{ color: 'black', marginTop: 10 }} category='h4'>Hello, {user.fullname}</Text>}

                {loadingJobs ? <Text>Loading...</Text> : <FlatList
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={itemSeparatorComponent}
                    ListEmptyComponent={() => <View><Text>Empty jobs</Text></View>}
                    style={{ marginTop: 16 }}
                    ListHeaderComponent={
                        <>
                            <View style={styles.categoriesTextWrapper}>
                                <Text category='p'>Categories</Text>
                                {!!selectedCategory?.length && <Text category='p' onPress={() => setSelectedCategory([])}>Clear</Text>}
                            </View>
                            <View>

                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    ItemSeparatorComponent={itemSeparatorComponent}
                                    bounces={false}
                                    horizontal
                                    data={skills}
                                    renderItem={({ item }) => <Categories selectedItem={selectedCategory} handlePressedCategory={filterByCategory} item={item!} />}
                                    contentContainerStyle={{ marginTop: 20 }}
                                />
                            </View>
                            <Text category='h3semibold' style={{ marginTop: 20, fontWeight: 'bold', color: 'black' }}>Jobs for you</Text>

                            <View>
                                <FlatList
                                    ListEmptyComponent={() => <View><Text>Empty jobs</Text></View>}
                                    showsHorizontalScrollIndicator={false}
                                    ItemSeparatorComponent={itemSeparatorComponent}
                                    bounces={false}
                                    horizontal
                                    data={jobsForYou}
                                    renderItem={({ item }) => <JobCard item={item} />}
                                    contentContainerStyle={{ marginTop: 20 }}
                                />
                            </View>
                            <Text category='h3semibold' style={{ marginTop: 20, marginBottom: 10, fontWeight: 'bold', color: 'black' }}>Last jobs</Text>
                        </>
                    }
                    onRefresh={refetchQuery}
                    refreshing={loadingJobs}
                    bounces={false}
                    data={jobsFilteredWithCategoriesWithLimit}
                    ListFooterComponent={() => <View style={{ height: 50 }} />}
                    renderItem={({ item, index }) => <JobCard index={index!} item={item} horizontal />}
                    onEndReached={() => fetchMoreJobs()}
                />}
                {loadingMoreJobs && <ActivityIndicator style={{}} color={colors.main.primary} size={"small"} />}
            </View>

        </>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white', paddingTop: 72, paddingHorizontal: 20
    },
    categoriesTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 31
    }
})