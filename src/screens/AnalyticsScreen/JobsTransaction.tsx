import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { GetJobQuery, GetJobQueryVariables } from '../../API';
import Text from '../../components/Text';
import { getJob } from '../../graphql/queries';
import { navigationRef } from '../../navigations/NavigationRef';
import { imagesMock } from '../../utils/imagesMock';
import { getPublicImg } from '../../utils/publicimages';


export interface JobTransactionProps {
  jobID: string;
  serviceDoneDate: string;
  jobPrice: string;
}

const JobsAnalyticsTransactions = ({ jobID, serviceDoneDate, jobPrice }: JobTransactionProps) => {

  if (!jobPrice) jobPrice = "0"
  const { data } = useQuery<GetJobQuery, GetJobQueryVariables>(gql(getJob), {
    variables: {
      id: jobID
    }
  })

  const job = data?.getJob
  const jobImage = !!job?.Images?.items && !!job.Images.items[0]?.key ? getPublicImg(job?.Images?.items[0]?.key) : job?.author?.avatar ? getPublicImg(job?.author?.avatar) : imagesMock.noImage


  return (
    <Pressable style={styles.container} onPress={() => navigationRef.navigate("JobsHistoricDetails", {
      id: jobID
    })}>
      <Image style={styles.image} source={{ uri: jobImage }} />
      <View style={styles.jobInfo}>
        <Text  category='h5m'>{job?.title?.substring(0, 15)}</Text>
        <Text category='h6'>Debit Card</Text>
      </View>
      <View style={styles.jobDetails}>
        <Text>${jobPrice}</Text>
        <Text  category='h6'>{moment(serviceDoneDate).format("L")}</Text>
      </View>
    </Pressable>
  )
}

export default JobsAnalyticsTransactions;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E5E5E5',
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  jobInfo: {
    marginLeft: 8
  },
  jobDetails: {
    marginLeft: 'auto',
  },
})