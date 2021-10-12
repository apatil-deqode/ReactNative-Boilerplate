import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ErrorIcon, Theme, WarningIcon} from '../../constants';
import {Assistive} from './Texts';

export const ErrorDialogue = ({isError, style, message}) => {
  const backgroundColor = isError
    ? Theme.colors.STATUS_NEGATIVE
    : Theme.colors.STATUS_CAUTION2;
  const borderColor = isError
    ? Theme.colors.PRIMARY_900
    : Theme.colors.STATUS_CAUTION;

  return (
    <View
      style={[
        styles.container,
        {borderColor: borderColor, backgroundColor: backgroundColor},
        style,
      ]}>
      {isError ? <ErrorIcon /> : <WarningIcon />}
      <Assistive style={{color: Theme.colors.TEXT_WHITE1, marginLeft: 8}}>
        {message}
      </Assistive>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
});
