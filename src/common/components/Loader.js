import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Theme} from '../../constants';

export const Loader = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator
        size="large"
        color={Theme.colors.PRIMARY_900}
        animating={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.BLACK_100A,
  },
});
