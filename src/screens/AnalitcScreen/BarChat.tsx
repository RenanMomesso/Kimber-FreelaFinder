import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Animated, ScrollView } from 'react-native';
import Svg, { G, Line, Circle, Rect, Text as SvgText } from 'react-native-svg'
import dimensions from '../../utils/dimensions';



const WIDTH = dimensions.width
const HEIGHT = dimensions.height

const barChatData = [
    {
        id: 1,
        value: 300,
        date: "2020-01-01",
        month: 'January'
    },
    {
        id: 2,
        value: 250,
        date: "2020-02-01",
        month: 'February'
    },
    {
        id: 3,
        value: 200,
        date: "2020-01-01",
        month: 'March'
    },
    {
        id: 4,
        value: 400,
        date: "2020-02-01",
        month: 'April'
    }, {
        id: 5,
        value: 500,
        date: "2020-01-01",
        month: 'June'
    },
    {
        id: 6,
        value: 50,
        date: "2020-02-01",
        month: 'July'
    },
    {
        id: 1,
        value: 300,
        date: "2020-01-01",
        month: 'January'
    },
    {
        id: 2,
        value: 250,
        date: "2020-02-01",
        month: 'February'
    },
    {
        id: 3,
        value: 200,
        date: "2020-01-01",
        month: 'March'
    },
    {
        id: 4,
        value: 400,
        date: "2020-02-01",
        month: 'April'
    }, {
        id: 5,
        value: 500,
        date: "2020-01-01",
        month: 'June'
    },
    {
        id: 6,
        value: 50,
        date: "2020-02-01",
        month: 'July'
    },


]
const BarChart = ({ containerHeight, backgroundColor = "white", axiosColor = "red" }: { containerHeight: number, backgroundColor: string, axiosColor: string }) => {

    const AnimatedLine = Animated.createAnimatedComponent(Line)
    const AnimatedCircle = Animated.createAnimatedComponent(Circle)
    const AnimatedRect = Animated.createAnimatedComponent(Rect)
    const AnimatedSvg = Animated.createAnimatedComponent(Svg)



    const marginLeft_for_y_axis = 50;
    const marginBottom_for_x_axis = 50;
    const padding_from_screen = 20

    const x_axis_x1_point = marginLeft_for_y_axis
    const x_axis_y1_point = containerHeight - marginBottom_for_x_axis
    const x_axis_x2_point = WIDTH - padding_from_screen
    const x_axis_y2_point = x_axis_y1_point

    const y_axis_x1_point = marginLeft_for_y_axis
    const y_axis_y1_point = padding_from_screen
    const y_axis_x2_point = marginLeft_for_y_axis
    const y_axis_y2_point = x_axis_y1_point

    const y_axis_height = containerHeight - padding_from_screen - marginBottom_for_x_axis

    const [yAxisData, setYaxisData] = useState([])

    const minValue = 0;
    const maxValue = Math.max.apply(Math, barChatData.map(item => item.value))

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    const gapBetweenYAxisValue = (maxValue - minValue) / 4

    useEffect(() => {
        const newLabels = Array.from({ length: 6 }).map((item, index) => minValue + gapBetweenYAxisValue * index)
        setYaxisData(newLabels)
    }, [])


    const renderYAxis = () => {
        return (
            <G key="y-axis">
                <Circle
                    cx={y_axis_x1_point}
                    cy={y_axis_y1_point}
                    r={4}
                    fill={axiosColor}
                />
                <Line
                    x1={y_axis_x1_point}
                    y1={y_axis_y1_point}
                    x2={y_axis_x2_point}
                    y2={y_axis_y2_point}
                    stroke={axiosColor}
                    strokeWidth={2}
                />
            </G>
        )
    }

    const render_x_ticks_label = () => {

        const x_axis_width = WIDTH - padding_from_screen - marginLeft_for_y_axis
        const gap_between_axis_ticks = x_axis_width / (barChatData.length + 1)
        return barChatData.map((item, index) => {
            const x_point_x_tick = gap_between_axis_ticks + x_axis_x1_point + gap_between_axis_ticks * index * 2
            return (
                <G key={`x-axis ticks and labels ${index}`}>
                    {/* <Line

                        x1={x_point_x_tick + 20}
                        y1={x_axis_y1_point}
                        x2={x_point_x_tick + 20}
                        y2={x_axis_y1_point + 10}
                        stroke={axiosColor}
                        strokeWidth={2}
                    /> */}
                    <SvgText fontSize={12} textAnchor='middle' x={x_point_x_tick + 20} y={x_axis_y1_point + 20} fill="black">
                        {item.month.substring(0,3)}
                    </SvgText>
                </G>
            )

        })
    }

    const render_y_ticks_label = () => {

        const y_axis_height = containerHeight - padding_from_screen - marginBottom_for_x_axis
        const gap_between_axis_ticks = y_axis_height / (yAxisData.length - 1)

        return yAxisData.map((item, index) => {
            const y_point_y_axis_ticks = y_axis_y2_point - gap_between_axis_ticks * index
            return (
                <G key={`y-axis ticks and labels ${index}`}>
                    <Line

                        x1={y_axis_x2_point}
                        y1={y_point_y_axis_ticks}
                        x2={y_axis_x2_point - 10}
                        y2={y_point_y_axis_ticks}
                        stroke={axiosColor}
                        strokeWidth={2}
                    />
                    <SvgText fontSize={12} textAnchor='middle' x={y_axis_x2_point - 20} y={y_point_y_axis_ticks + 5} fill="black">
                        {item}
                    </SvgText>

                </G>
            )

        })
    }

    const renderBarChat = () => {
        const x_axis_width = WIDTH - padding_from_screen - marginLeft_for_y_axis
        const gap_between_axis_ticks = x_axis_width / (barChatData.length + 1)
        const gap_between_y__axis_ticks = y_axis_height / (yAxisData.length - 1)
        return barChatData.map((item, index) => {

            const x_point_x_axis_tick = gap_between_axis_ticks + x_axis_x1_point + gap_between_axis_ticks * index * 2;
            let height = item.value * gap_between_y__axis_ticks / gapBetweenYAxisValue

            return (
                <G key={`bar chart ${index}`} onPress={() => console.warn(item?.value)} >
                    <Rect
                       
                        
                        strokeWidth={2}
                        x={x_point_x_axis_tick + 5}
                        y={x_axis_y1_point}
                        height={-height}
                        width={40}
                        fill={getRandomColor()}
                        
                    />

                </G>
            )
        })

    }

    const renderToolTips = () => {
        const gap_between_y_axis_ticks = y_axis_height / (yAxisData.length - 1)
        const gap_between_y__axis_ticks = y_axis_height / (yAxisData.length - 1)
        const x_axis_width = WIDTH - padding_from_screen - marginLeft_for_y_axis
        const gap_between_axis_ticks = x_axis_width / (barChatData.length + 1)

        return barChatData.map((item, index) => {
            const x_point_x_axis_tick = gap_between_axis_ticks + x_axis_x1_point + gap_between_axis_ticks * index * 2;
            let height = item.value * gap_between_y__axis_ticks / gapBetweenYAxisValue

            return (
                <G key={`tooltip chart ${index}`} onPress={() => console.warn(item?.value)}>
                    {/* <Line
                        x1={x_point_x_axis_tick + 20}
                        y1={y_axis_y2_point - height}
                        x2={x_point_x_axis_tick + 20}
                        y2={y_axis_y2_point - height -10}
                        stroke={'blue'}
                        strokeWidth={2}

                    /> */}
                    <SvgText
                        x={x_point_x_axis_tick + 20}
                        y={y_axis_y2_point - height -10}
                        fontSize={14}
                        fill="blue"
                        textAnchor='middle'
                    >
                        {item.value}

                    </SvgText>
                </G>

            )
        })
    }

    const render_x_axis = () => {
        return (<G>
            <Circle
                cx={x_axis_x1_point}
                cy={x_axis_y1_point}
                r={4}
                fill={axiosColor}
            />
            <Circle
                cx={x_axis_x2_point * 2}
                cy={x_axis_y1_point}
                r={4}
                fill={axiosColor}
            />
            <Line
                x1={x_axis_x1_point}
                y1={x_axis_y1_point}
                x2={x_axis_x2_point}
                y2={x_axis_y1_point}
                stroke={axiosColor}
                strokeWidth={2}

            />
        </G>)
    }

    return (
        <View style={[styles.container, { height: containerHeight }]}>
            <ScrollView horizontal contentContainerStyle={{ flex: 1, backgroundColor:'white' }}>

                <Svg height="100%" width="100%" style={{ backgroundColor }}>
                    {/* {render_x_axis()} */}
                    {render_x_ticks_label()}
                    {/* {renderYAxis()} */}
                    {/* {render_y_ticks_label()} */}
                    {renderBarChat()}
                    {renderToolTips()}
                </Svg>
            </ScrollView>
        </View>
    )
}

export default BarChart;


export const styles = StyleSheet.create({
    container: {
        backgroundColor: "black"
    }
})