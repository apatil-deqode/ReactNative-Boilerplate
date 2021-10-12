/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Modal, StyleSheet, View, TouchableOpacity} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {CameraIcon, FolderIcon, Theme} from '../../constants';
import {H4, P2, P1_700} from '.';

export const ImagePicker = ({getImageData, style, children}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      setModalVisible(false);
      getImageData({
        data: {
          response: response.assets ? response.assets[0].uri : '',
          error: response.errorMessage ? response.errorMessage : '',
        },
      });
    });
  };

  const openCamera = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      setModalVisible(false);
      getImageData({
        data: {
          response: response.assets ? response.assets[0].uri : '',
          error: response.errorMessage ? response.errorMessage : '',
        },
      });
    });
  };

  return (
    <TouchableOpacity style={style} onPress={() => setModalVisible(true)}>
      {children}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.overlay}>
          <H4 style={{color: Theme.colors.TEXT_WHITE1}}>Add a photo</H4>
          <P2 style={{color: Theme.colors.TEXT_WHITE1}}>
            File must be in an image format.
          </P2>

          <View style={styles.imagePickerbtn}>
            <TouchableOpacity
              onPress={() => {
                openGallery();
              }}
              style={{justifyContent: 'center'}}>
              <P1_700
                style={{
                  color: Theme.colors.TEXT_BRAND2,
                  position: 'absolute',
                  marginHorizontal: 30,
                }}>
                Select from device
              </P1_700>
              <FolderIcon />
            </TouchableOpacity>
            <View
              style={{
                height: 1,
                backgroundColor: Theme.colors.TEXT_WHITE1,
                marginVertical: 20,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                openCamera();
              }}
              style={{justifyContent: 'center'}}>
              <P1_700
                style={{
                  color: Theme.colors.TEXT_BRAND2,
                  marginHorizontal: 30,
                  position: 'absolute',
                }}>
                Take a photo
              </P1_700>
              <CameraIcon />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    marginTop: 'auto',
    backgroundColor: Theme.colors.BLACK_500,
    padding: 20,
  },
  imagePickerbtn: {
    marginTop: 40,
    marginBottom: 10,
  },
});
