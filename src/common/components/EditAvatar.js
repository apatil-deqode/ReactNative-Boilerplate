/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {ImagePicker} from '.';
import {CameraIcon, Theme} from '../../constants';
import {P2} from '.';
import {PrimaryButtonText} from './Texts';
import {UserImage} from './UserImage';

export const EditAvatar = ({title, style, getImageUri}) => {
  const [imageUri, setImageUri] = useState(undefined);

  const getImageData = ({data}) => {
    setImageUri(data.response ? data.response : undefined);
    data.response ? getImageUri({uri: data.response}) : null;
  };

  return (
    <View style={[styles.container, style]}>
      <UserImage uri={imageUri} style={styles.userImage} />
      <View style={{flexShrink: 1, marginLeft: 15}}>
        <P2 style={styles.startProfileText}>{title}</P2>
        <ImagePicker
          style={styles.addPhotoButton}
          getImageData={data => getImageData(data)}>
          <CameraIcon />
          <PrimaryButtonText style={styles.addPhotoText}>
            ADD A PHOTO
          </PrimaryButtonText>
        </ImagePicker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 2,
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  startProfileText: {
    color: Theme.colors.TEXT_WHITE1,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Theme.colors.WHITE,
  },
  addPhotoButton: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Theme.colors.TEXT_BRAND2,
    height: 48,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoText: {
    color: Theme.colors.TEXT_BRAND2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});
