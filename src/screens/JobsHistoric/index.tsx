import React from 'react';
import { View } from 'react-native';
import { useAuthContext } from '../../context/useContext';
import { useGlobalQueries } from '../../context/useQueries';
import ListComponent from './ListComponent';


const JobsHistoric = () => {
  const { user } = useAuthContext()
  const { listJobsQuery } = useGlobalQueries()

  const completedJobs = listJobsQuery?.listJobs?.items.filter(item => item?.userApply?.items.some(apply => apply?.userID === user!.id))
  const sortedByAcceptedDate = completedJobs?.sort((a, b) => {
    if (a?.userApply?.items.some(apply => apply?.createdAt > b?.userApply?.items?.some(apply => apply?.createdAt))) return 1
    if (a?.userApply?.items.some(apply => apply?.createdAt < b?.userApply?.items.some(apply => apply?.createdAt))) return -1
    return 0
  })

  return <View style={{ flex: 1, backgroundColor: "white" }}>
    <ListComponent list={sortedByAcceptedDate} />
  </View>
}

export default JobsHistoric;