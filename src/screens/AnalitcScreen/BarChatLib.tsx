import React from 'react';
import { View } from 'react-native';
import {
    BarChart,
} from "react-native-chart-kit";
import dimensions from '../../utils/dimensions';

// import { Container } from './styles';
const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43]
        }
    ]
};
const BarChatLib: React.FC = () => {
    return <BarChart

        data={data}
        width={dimensions.width}
        height={220}
        yAxisLabel=""
        
        showBarTops={true}
        showValuesOnTopOfBars
        style={{ borderWidth: 2, borderColor: 'red' }}
        chartConfig={{
            backgroundColor: "#e26a00",

            decimalPlaces: 2, // optional, defaults to 2dp
            barRadius: 6,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 40
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
            }
        }}
        verticalLabelRotation={30}
    />
}

export default BarChatLib;