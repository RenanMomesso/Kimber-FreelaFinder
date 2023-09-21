import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListJobDoneBiesQuery, ListJobDoneBiesQueryVariables } from '../../API';
import BackIcon from '../../components/BackIcon';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';
import { useAuthContext } from '../../context/useContext';
import { listJobDoneBies } from '../../graphql/queries';


const AnalitcScreen: React.FC = () => {
    const { user } = useAuthContext()
    const { data } = useQuery<ListJobDoneBiesQuery, ListJobDoneBiesQueryVariables>(gql(listJobDoneBies), {

        variables: {
            filter: {
                userID: {
                    eq: user?.id
                }
            }
        }
    },)

    console.log("dataaaaaaaaa", data?.listJobDoneBies?.items.map(item => item?.jobPaidValue))
    const total = data?.listJobDoneBies?.items?.reduce((acc, item) => {
        console.log(acc, item)
        if (item?.jobPaidValue === null) return acc
        return acc + item?.jobPaidValue || 0
    }, 0)
    console.log("🚀 =====================>", total)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, justifyContent: 'space-between' }}>
                <BackIcon />
                <Text>...</Text>
            </View>
            <Text style={{ textAlign: 'center', color: colors.gray.gray60 }}>Total balance</Text>
            <Text style={{ textAlign: 'center', color: colors.gray.gray60 }}>${+total}</Text>

            <View>
                {/* <BarChart containerHeight={400} backgroundColor='red' axiosColor='red' /> */}
            </View>
        </SafeAreaView>
    )
}

export default AnalitcScreen;