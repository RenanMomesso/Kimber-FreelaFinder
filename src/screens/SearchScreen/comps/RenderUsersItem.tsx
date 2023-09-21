import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { User } from '../../../API';
import ClickAvatar from '../../../components/ClickAvatar';
import Text from '../../../components/Text';
import dimensions from '../../../utils/dimensions';

export interface RenderItemProps {
  item: User
}

const RenderUsersItem = ({ item: user }: RenderItemProps) => {
  if (!user || !user.fullname) return <View />;
  return (
    <Pressable style={styles.container}>
      <View style={styles.avatarText}>
        <ClickAvatar imageKey={user.avatar!} redirect={user.id} />
        <Text category='h5m' style={styles.fullNameText}>{user.fullname}</Text>
      </View>
      <Text>{user?.profission}</Text>
      {user.categories.slice(0, 3).map(item => <Text category='h6'>{item}</Text>)}
    </Pressable>
  )
}

export default RenderUsersItem;

export const styles = StyleSheet.create({
  container: {
    height: 140,
    width: dimensions.width / 2.2,
  },
  avatarText: {
    flexDirection: 'row',
  },
  fullNameText: {
    marginLeft: 10,
    textTransform: 'capitalize'
  }
})