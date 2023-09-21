import React from 'react';
import { Text, View } from 'react-native';
import Animated, { scrollTo, useAnimatedReaction, useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useAuthContext } from '../../context/useContext';
import { useGlobalQueries } from '../../context/useQueries';
import ItemComponent from './ItemComponent';


function listToObject(list) {
    const values = Object.values(list);
    const object = {};

    for (let i = 0; i < values.length; i++) {
        object[values[i].id] = i;
    }
    return object;
}
const JobsCreated: React.FC = () => {
    const { listJobsQuery } = useGlobalQueries();
    const scrollY = useSharedValue(0)
    const scrollViewRef = useAnimatedRef()

    useAnimatedReaction(
        () => scrollY.value,
        (scrolling) => scrollTo(scrollViewRef, 0, scrolling, false)
    )

    const handleScroll = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y
    })

    const { user } = useAuthContext()


    const allJobs = listJobsQuery.listJobs?.items.filter(job => job?.author!.id === user!.id)

    const jobsCreatedSorted = allJobs?.sort((a, b) => {
        return new Date(a!.updatedAt!).getTime() - new Date(b!.updatedAt).getTime()
    }).sort((a, b) => {
        if (a!.status === "COMPLETED") {
            return -1
        }
        return 1
    })

    const positions = !!jobsCreatedSorted?.length ? useSharedValue(listToObject(jobsCreatedSorted)) : 0


    return (
        <Animated.ScrollView
            ref={scrollViewRef}
            scrollEventThrottle={16}
            onScroll={handleScroll}
            style={{
                flex: 1,
                position: 'relative',
                backgroundColor: 'white'
            }}
            contentContainerStyle={{
                height: !!jobsCreatedSorted?.length ? jobsCreatedSorted?.length * 120 : 200
            }}
        >
            {!!jobsCreatedSorted?.length ? jobsCreatedSorted?.map((item, index) => <ItemComponent
                scrollY={scrollY}
                index={index}
                key={index}
                item={item}
                positions={positions}
                jobsLength={jobsCreatedSorted?.length}
            />) : <Text style={{textAlign:'center'}}>All jobs created by you will be shown here.</Text>}
            <View style={{ height: 100 }} />
        </Animated.ScrollView>
    )

}

export default JobsCreated;