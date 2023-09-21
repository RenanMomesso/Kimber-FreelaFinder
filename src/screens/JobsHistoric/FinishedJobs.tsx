import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useGlobalQueries } from '../../context/useQueries';
import ListComponent from './ListComponent';
import { useAuthContext } from '../../context/useContext';


const FinishedJobs = () => {

    const { listJobsQuery } = useGlobalQueries();
    const { user } = useAuthContext();
    // const finishedJobs = listJobsQuery.listJobs?.items.filter(job => ["COMPLETED", "FINISHED", "CANCELED"].includes(job?.status) && (!!job?.jobDoneBy || job?.jobDoneBy?.user?.id !== user?.id))
    const finishedJobs = listJobsQuery.listJobs?.items.filter(job => (job?.userApply?.items.some(apply => apply?.userID === user!.id) && !!job.jobDoneBy?.userID && job.jobDoneBy?.userID !== user!.id))
    return <View style={{ flex: 1, backgroundColor: "white" }}>
        <ListComponent list={finishedJobs} />
    </View>
}

export default FinishedJobs;