import React, { useState } from 'react';
import { LayoutRectangle, Pressable, StyleSheet, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SortModal = () => {
  const [visible, setVisible] = useState(false)
  const [layout, setLayout] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0
  })
  console.log("🚀 ~ file: index.tsx:8 ~ SortModal ~ visible", visible)



  return (
    <>

      {visible && <Pressable style={styles.fullScreen} onPress={() => setVisible(false)}>

      </Pressable>}
      {visible && <Pressable style={{ position: 'absolute', top: layout.y, left: layout.x - 60, zIndex: 3, backgroundColor: 'red', right: 20, paddingHorizontal: 20 }}>
        <Text>Sort by</Text>
        <Text>Alphabetic </Text>
      </Pressable>}
      <Pressable onLayout={(event) => {
        setLayout(event.nativeEvent.layout)

      }} style={styles.container} onPress={() => setVisible(c => !c)}>
        <Text>Open</Text>
        <FontAwesome5 name='sort' />
      </Pressable>
    </>
  )
}

export default SortModal;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'flex-end',
    zIndex: 2
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1
  }
})