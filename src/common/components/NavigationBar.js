import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationTitleText} from '.';
import {Layout, Theme} from '../../constants';

export const NavigationBar = ({
  style,
  title,
  leftIcon,
  rightIcon,
  onPressLeft,
  onPressRight,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPressLeft}>{leftIcon}</TouchableOpacity>
      <NavigationTitleText>{title}</NavigationTitleText>
      <TouchableOpacity onPress={onPressRight}>{rightIcon}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width,
    height: 40,
    backgroundColor: Theme.colors.BLACK_700,
    flexDirection: 'row',
  },
  cardContainer: {
    backgroundColor: Theme.colors.BLACK_900,
    borderRadius: 8,
    elevation: 8,
  },
});
