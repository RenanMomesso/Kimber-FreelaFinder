import React from 'react';
import { View } from 'react-native';
import { useGlobalQueries } from '../../context/useQueries';
import { useAuthContext } from '../../context/useContext';
import ListComponent from './ListComponent';


const JobsHistoric = () => {
  const { user } = useAuthContext()
  const { listJobsQuery } = useGlobalQueries()


  const completedJobs = listJobsQuery?.listJobs.items.filter(item => item.userApply?.items.some(apply => apply?.userID === user!.id) && item.status === "COMPLETED")

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ListComponent list={completedJobs} />
    </View>
  )
}

export default JobsHistoric;