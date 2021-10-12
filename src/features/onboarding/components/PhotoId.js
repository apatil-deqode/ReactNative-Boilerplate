import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  CardContainer,
  ResetButton,
  PrimaryTextInput,
  SocialButton,
  DatePicker,
  ImagePicker,
  PrimaryButtonText,
} from '../../../common/components';
import I18n from 'i18n-js';
import {UploadIcon, Theme} from '../../../constants';

const t = key => I18n.t(`screens.userSelection.${key}`);

const PhotoId = ({style}) => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState();
  const [imageUri, setImageUri] = useState(undefined);

  const getImageData = ({data}) => {
    setImageUri(data.response ? data.response : undefined);
  };
  const onDateChange = d => {
    setExpirationDate(d);
  };
  const onResetPress = () => {
    setLicenseNumber('');
    setExpirationDate();
  };
  return (
    <CardContainer style={[styles.containerStyle, style]}>
      <ResetButton
        description="Photo ID"
        descriptionStyle={styles.descriptionStyle}
        onPress={onResetPress}
        style={styles.margin16}
      />
      <PrimaryTextInput
        containerStyle={styles.margin24}
        value={licenseNumber}
        placeholder={t('licenseNumberPH')}
        onChangeText={text => setLicenseNumber(text)}
        title={t('licenseNumber')}
      />
      <DatePicker
        containerStyle={[styles.margin24, styles.marginTop16]}
        title={t('expirationDate')}
        date={expirationDate}
        datePlaceholder={t('expirationDatePH')}
        onDateChange={onDateChange}
      />
      <ImagePicker
        style={[styles.addPhotoButton, styles.margin24, styles.marginTop40]}
        getImageData={data => getImageData(data)}>
        <UploadIcon />
        <PrimaryButtonText style={styles.addPhotoText}>
          {t('uploadDocumentation')}
        </PrimaryButtonText>
      </ImagePicker>
    </CardContainer>
  );
};

export default PhotoId;

const styles = StyleSheet.create({
  margin16: {
    marginHorizontal: 16,
  },
  margin24: {
    marginHorizontal: 24,
  },
  marginTop40: {
    marginTop: 40,
  },
  marginTop16: {
    marginTop: 16,
  },
  containerStyle: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  descriptionStyle: {
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0.38,
    fontWeight: '700',
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
