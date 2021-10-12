import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const LoadingText = ({children}) => {
  return <Text style={styles.loadingText}>Loading...</Text>;
};

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 18,
    color: 'black',
    padding: 10,
    alignSelf: 'center',
  },
});
