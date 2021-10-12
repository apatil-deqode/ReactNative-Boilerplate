import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {BackIcon, CrossIcon} from '../../constants';

export const NavigationBack = () => {
  return (
    <View style={styles.container}>
      <BackIcon />
    </View>
  );
};

export const NavigationCross = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CrossIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
