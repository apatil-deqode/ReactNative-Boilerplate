import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Theme} from '../../constants';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Loader} from './Loader';

export const Container = ({children, style, isLoaderShow, ...props}) => {
  return (
    <SafeAreaView {...props} style={[styles.container, style]}>
      {children}
      {isLoaderShow === true ? <Loader /> : null}
    </SafeAreaView>
  );
};

export const CardContainer = ({children, style, ...props}) => {
  return (
    <View {...props} style={[styles.cardContainer, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.BLACK_500,
  },
  cardContainer: {
    backgroundColor: Theme.colors.BLACK_900,
    borderRadius: 8,
    elevation: 8,
  },
});
