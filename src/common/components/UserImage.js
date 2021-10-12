import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {DefaultAvatarIcon} from '../../constants';

export const UserImage = ({uri, style}) => {
  const height = style.height;
  const width = style.width;
  return (
    <View style={[styles.container, style]}>
      {uri ? (
        <Image style={{height: height, width: width}} source={{uri: uri}} />
      ) : (
        <DefaultAvatarIcon height={style.height} width={style.width} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
