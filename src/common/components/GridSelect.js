import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {P3} from './Texts';
import {Theme} from '../../constants';

const GridSelect = ({isSelection, getSelected, selected, gridData, style}) => {
  const onPress = item => {
    getSelected(isSelection, item);
  };

  return (
    <View style={[styles.gridContainer, style]}>
      {gridData.map((item, index) => {
        if (isSelection && selected.includes(item)) {
          return null;
        }

        return (
          <TouchableOpacity
            key={`${item}-${index}`}
            style={[styles.pill, isSelection ? styles.pill1 : styles.pill2]}
            onPress={() => onPress(item)}>
            <P3 style={isSelection ? styles.text1 : styles.text2}>{item}</P3>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default GridSelect;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: Theme.colors.BLACK_500,
  },
  pill: {
    marginRight: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  pill1: {
    backgroundColor: Theme.colors.BLACK_50,
  },
  pill2: {
    backgroundColor: Theme.colors.BLACK_500,
    borderWidth: 1,
    borderColor: Theme.colors.TERTIARY_700,
  },
  text1: {
    color: Theme.colors.BLACK_500,
    lineHeight: 20,
    letterSpacing: -0.44,
  },
  text2: {
    color: Theme.colors.WHITE,
    lineHeight: 20,
    letterSpacing: -0.44,
  },
});
