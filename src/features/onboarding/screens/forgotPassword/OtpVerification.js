import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  CardContainer,
  Container,
  ErrorDialogue,
  H2,
  OtpInput,
  P1,
  PrimaryButton,
  ResendCode,
  Loader,
} from '../../../../common/components';
import I18n from 'i18n-js';
import {Theme} from '../../../../constants';
import {forgotPassword, verifyOtp} from '../../../../store/reducers';
const t = key => I18n.t(`screens.onBording.${key}`);
const OtpVerification = ({navigation, route}) => {
  const storeStates = useSelector(state => state);
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoaderShow, setIsLoaderShow] = useState(false);

  const [otp, setOtp] = useState('');
  const {email} = route.params;

  const showError = (message, isShow) => {
    setErrorMessage(message);
    setIsError(isShow);
    setIsLoaderShow(false);
  };

  const onPressConfirm = () => {
    showError(undefined, false);
    const validOtp = storeStates.user.forgotPassword.message.message.text;
    if (otp.length >= 4) {
      if (parseInt(otp) === parseInt(validOtp)) {
        setIsLoaderShow(true);
        dispatch(verifyOtp({email, otp}))
          .then(data => {
            setIsLoaderShow(false);
            navigation.push('ResetPassword');
          })
          .catch(err => {
            showError(err.message, true);
          });
      } else {
        setIsError(true);
        setErrorMessage(t('wrongCode'));
      }
    } else {
      setIsError(true);
      setErrorMessage(t('invaildCode'));
    }
  };

  const onPressResendCode = () => {
    showError(undefined, false);
    dispatch(forgotPassword({email}))
      .then(data => {
        setIsLoaderShow(false);
      })
      .catch(err => {
        showError(err.message, true);
      });
  };

  const getOTP = text => {
    setIsError(false);
    setOtp(text);
  };

  return (
    <Container isLoaderShow={isLoaderShow}>
      <ScrollView>
        {isError && (
          <ErrorDialogue
            isError={isError}
            message={errorMessage}
            style={{margin: 20}}
          />
        )}
        <CardContainer style={styles.CardContainer}>
          <H2 style={{color: Theme.colors.TEXT_WHITE1}}>
            {t('enterTheSecureVerificationCode')}
          </H2>
          <P1 style={styles.messageText}>{t('weSentItTo') + ' ' + email}</P1>
          <View style={{alignItems: 'center'}}>
            <OtpInput isError={isError} getOTP={text => getOTP(text)} />
          </View>
          <ResendCode
            style={{marginTop: 40, morginBottom: 20}}
            onPress={() => onPressResendCode()}
            description={t('needANewCode')}
          />
        </CardContainer>
      </ScrollView>

      <View style={styles.viewFooter}>
        <PrimaryButton title={t('confirm')} onPress={() => onPressConfirm()} />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  CardContainer: {
    margin: 20,
    padding: 24,
  },
  viewFooter: {
    marginTop: 'auto',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Theme.colors.BLACK_700,
  },
  messageText: {
    color: Theme.colors.TEXT_WHITE1,
    marginTop: 16,
    marginBottom: 24,
  },
});
export default OtpVerification;
