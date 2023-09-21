import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import React, { useState } from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';
import { SafeAreaView } from "react-native-safe-area-context";
import { ListUserAppliesQuery, ListUserAppliesQueryVariables } from '../../API';
import BackIcon from '../../components/BackIcon';
import Text from '../../components/Text';
import { colors } from '../../constants/colors';
import { useAuthContext } from '../../context/useContext';
import { listUserApplies } from '../../graphql/queries';
import { navigationRef } from '../../navigations/NavigationRef';
import dimensions from '../../utils/dimensions';
import JobsAnalyticsTransactions from './JobsTransaction';



const AnalyticsScreen: React.FC = () => {
  const [toolTipVisible, setToolTipVisible] = useState(false)
  const { user } = useAuthContext()
  const { data } = useQuery<ListUserAppliesQuery, ListUserAppliesQueryVariables>(gql(listUserApplies), {
    variables: {
      filter: {
        userID: {
          eq: user?.id
        }
      }
    }
  })

  const totalYear = data?.listUserApplies?.items?.reduce((acc: any, curr: any) => {
    console.log("Acc", acc)
    console.log("Curr", curr)
    if (+curr?.price === null) return acc
    return acc + +curr?.price || 0
  }, 0)
  console.log("🚀 ~ file: index.tsx:34 ~ totalYear ~ totalYear", totalYear)



  const createBarData = () => {
    let barData = [
      {
        label: "JAN",
        value: 100,
        frontColor: '#332C68',
        onPress: () => {
          setToolTipVisible(c => !c)
        },
        topLabelComponent: () => null,
      },
      {
        label: "FEV",
        frontColor: '#FBBC04',

        topLabelComponent: () => null,
        value: 321,
      },
      {
        label: "MAR",
        value: 421,
        frontColor: colors.meaning.error,
        topLabelComponent: () => null,
      },
      {
        label: "APR",
        frontColor: '#177AD5',
        value: 324,
        topLabelComponent: () => null,
      },
      {
        label: "MAI",
        frontColor: '#7238C9',
        value: 642,
        topLabelComponent: () => null,
      },
      {
        label: "JUN",
        frontColor: '#F29423',

        topLabelComponent: () => null,

        value: 532,
      },
      {
        label: "JUL",
        frontColor: '#35C759',
        value: 533,
        topLabelComponent: () => null,
      },
      {
        label: "AUG",

        topLabelComponent: () => null,
        value: 744,
      },
      {
        label: "SEP",
        value: 216,
        frontColor: colors.meaning.error,
        topLabelComponent: () => null,
      },
      {
        label: "OCT",
        frontColor: '#177AD5',

        topLabelComponent: () => null,
        value: 473,
      },
      {
        label: "NOV",
        value: 232,
        frontColor: '#332C68',
        topLabelComponent: () => null,
      },
      {
        label: "DEZ",
        frontColor: '#FBBC04',
        value: 12,
        topLabelComponent: () => null,
      },

    ]
    const sumAllValueForTheSameMonth = (totalApplied: any) => {
      const totalAppliedByMonth = totalApplied.reduce((acc: any, curr: any) => {
        const month = moment(curr?.createdAt).format('ll').split(' ')[0].toUpperCase()
        if (!acc[month]) acc[month] = 0
        acc[month] += +curr?.price || 0
        return acc
      }, {})
      return totalAppliedByMonth
    }
    // for (let i = 0; i < totalApplied.length; i++) {
    //   const value = totalApplied?.[i]?.price || 0
    //   const month = moment(totalApplied[i]?.createdAt).format('ll').split(' ')[0].toUpperCase()
    //   const index = barData.findIndex((item) => item.label === month)
    //   const result = sumAllValueForTheSameMonth(totalApplied)
    //   const valueMonth = result[month]
    //   if (index === -1) continue
    //   if (barData[index]?.value === undefined) barData[index].value = 0
    //   if (index >= 0) {
    //     barData[index].value += Number(value)
    //     barData[index].topLabelComponent = () => <ToolTip value={valueMonth} toolTipVisible={toolTipVisible} />
    //   }
    // }
    return barData
  };

  const createWeekBarData = () => {
    let barData = [
      {
        label: "Mon",
        value: 400,
        frontColor: 'red',
        onPress: () => setToolTipVisible(c => !c),
        topLabelComponent: () => null,
      },
      {
        label: "Sat",
        frontColor: '#FBBC04',

        topLabelComponent: () => null,
        value: 222,
      },
      {
        label: "Tue",
        value: 935,
        frontColor: colors.meaning.error,
        topLabelComponent: () => null,
      },
      {
        label: "Wed",
        frontColor: '#177AD5',
        value: 121,
        topLabelComponent: () => null,
      },
      {
        label: "Thu",
        frontColor: '#7238C9',
        value: 663,
        topLabelComponent: () => null,
      },
      {
        label: "Fri",
        frontColor: '#F29423',

        topLabelComponent: () => null,

        value: 324,
      },
      {
        label: "Sun",
        frontColor: '#35C759',
        value: 952,
        topLabelComponent: () => null,
      },
    ]



    return barData
  }

  const createBarDays = () => {
    let barData = [
      {
        label: "1",

      }
    ]
  }

  const totalApplied = data?.listUserApplies?.items || []

  const [period, setPeriod] = useState("Month")

  const periods = {

    week: "Week",
    month: "Month",
    year: "Year",
  }

  const periodData = {

    week: createWeekBarData(),
    month: createBarData(),
    year: createWeekBarData(),
  }

  const getOnlyTwoItemsOfAppliedsArray = totalApplied.length >= 2 ? totalApplied.slice(0, 2) : totalApplied


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF", padding: 20 }}>

      <View>
        <BackIcon />
      </View>


      {totalApplied.length === 0 ?
        <Text style={{ color: "#202020", alignItems: 'center', justifyContent: 'center', textAlign: 'center', }} category='h6'>No data yet {'\n'} Complete any service to see your analytics here.</Text> :
        <>
          <Text style={{ marginTop: 10, textAlign: 'center' }}>Total Balance</Text>
          <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: 10 }} category='h1'>R$ {totalYear?.toFixed(2)}</Text>
          <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: 5 }} >You earned</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 20 }}>
            {Object.keys(periods).map((item) => {
              return (
                <Text onPress={() => setPeriod(periods[item])}
                  style={{
                    backgroundColor: periods[item] === period ? colors.meaning.info : 'transparent',
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 8,
                    color: periods[item] === period ? "white" : 'gray'
                  }}>{periods[item]}</Text>

              )
            })}
          </View>
          <View style={{ marginTop: 50 }}>
            <BarChart
              barWidth={22}
              noOfSections={3}
              barBorderRadius={4}
              frontColor="lightgray"
              data={periodData[period.toLowerCase()]}
              yAxisThickness={0}
              xAxisThickness={0}
              animationDuration={200}
              isAnimated={true}
              // yAxisAtTop={false}
              yAxisTextStyle={{ color: "transparent" }}
              yAxisOffset={0}
              yAxisLabelWidth={-20}
              capColor={"transparent"}
              dashWidth={0}
              showGradient={false}
              stepHeight={25}
              barStyle={{
                shadowColor: "#000",
                elevation: 2,
                width: 34,
                bottom: 20,
              }}

              width={dimensions.width}
              spacing={40}

            />
          </View>
        </>
      }
      {!!totalApplied.length && <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <Text>Recent transactions</Text>
          <Text onPress={() => navigationRef.navigate("JobsHistoricNavigation")} style={{ color: "blue" }}>See more</Text>
        </View>
        {getOnlyTwoItemsOfAppliedsArray.map(item => {
          if (!item || !item?.jobID) return null
          return <JobsAnalyticsTransactions
            jobID={item?.jobID}
            serviceDoneDate={item.createdAt}
            jobPrice={item.price!}
          />
        })}
      </View>}
    </SafeAreaView>
  );
}

export default AnalyticsScreen;