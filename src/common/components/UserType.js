import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Theme} from '../../constants';
import {H3, P1_500} from '../../common/components';

export const UserType = ({
  style,
  type,
  description,
  children,
  backgroundColor,
}) => {
  const BGColor = backgroundColor ? backgroundColor : Theme.colors.BLACK_700;
  return (
    <View style={[styles.userTypeContainer, style, {backgroundColor: BGColor}]}>
      <View>{children}</View>
      <View
        style={{
          overflow: 'hidden',
          flexShrink: 1,
        }}>
        <H3 style={styles.userTypeText}>{type}</H3>
        <P1_500 style={styles.userTypeDescription}>{description}</P1_500>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
  },
  userTypeImage: {
    marginLeft: 5,
  },
  userTypeText: {
    color: Theme.colors.TEXT_WHITE1,
    fontSize: 22,
    lineHeight: 28,
    marginLeft: 20,
    marginTop: 10,
  },
  userTypeDescription: {
    color: Theme.colors.TEXT_WHITE1,
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 20,
    marginTop: 1,
  },
});
