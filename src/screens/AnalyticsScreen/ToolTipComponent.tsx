import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../../components/Text';

export interface ToolTipProps {
  toolTipVisible: boolean;
  value: number;
}

const ToolTip = ({ value, toolTipVisible }: ToolTipProps) => {
console.log("🚀 ~ file: ToolTipComponent.tsx:11 ~ ToolTip ~ toolTipVisible", toolTipVisible)

  if (toolTipVisible) {
    return (
      <View>
        <View style={{ height: 35, width: 50, paddingVertical: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(98, 24, 209, 0.2)', borderRadius: 7 }}>
          <Text style={{ color: "black", }}>${value || 0}</Text>
        </View>
        <View style={styles.container}>

          <View style={styles.TriangleShapeCSS} />

        </View>
      </View>
    )
  } else {
    return <></>
  }


}

export default ToolTip;



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 5,
    transform: [
      {
        rotate: '180deg'
      }
    ]
  },

  TriangleShapeCSS: {

    width: 0,
    height: 0,
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderBottomWidth: 11,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgba(98, 24, 209, 0.2)'
  }
})