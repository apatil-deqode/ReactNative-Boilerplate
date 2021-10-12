import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  CardContainer,
  Container,
  ErrorDialogue,
  H2,
  InterrogativeButton,
  P1,
  PrimaryButton,
  PrimaryTextInput,
  Loader,
} from '../../../../common/components';
import I18n from 'i18n-js';
import {Theme} from '../../../../constants';
import {ValidationMessages} from '../../../../constants';
import {useValidation} from 'react-native-form-validator';
import {forgotPassword} from '../../../../store/reducers';

const t = key => I18n.t(`screens.onBording.${key}`);
const ResetPasswordEmail = ({navigation}) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoaderShow, setIsLoaderShow] = useState(false);

  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const {validate, isFieldInError, getErrorsInField} = useValidation({
    state: {email},
    messages: ValidationMessages,
  });
  const showError = (message, isShow) => {
    setErrorMessage(message);
    setIsError(isShow);
    setIsLoaderShow(false);
  };
  const onPressSendCode = () => {
    showError(undefined, false);
    if (checkValidations() === true) {
      setIsLoaderShow(true);
      dispatch(forgotPassword({email}))
        .then(data => {
          setIsLoaderShow(false);
          navigation.push('OtpVerification', {email});
        })
        .catch(err => {
          showError(err.message, true);
        });
    }
  };

  const onPressSignup = () => {
    showError(undefined, false);
    navigation.push('Signup');
  };

  const checkValidations = () => {
    return validate({
      email: {required: true, email: true},
    });
  };
  const emailErrorMsg =
    isFieldInError('email') === true ? getErrorsInField('email')[0] : undefined;
  return (
    <Container isLoaderShow={isLoaderShow}>
      <ScrollView>
        {isError && (
          <ErrorDialogue
            style={{margin: 20}}
            isError={isError}
            message={errorMessage}
          />
        )}
        <CardContainer style={styles.CardContainer}>
          <H2 style={{color: Theme.colors.TEXT_WHITE1}}>
            {t('enterYourEmailAddress')}
          </H2>
          <P1 style={styles.messageText}>
            {t('weWillSendSecureVerificationCode')}
          </P1>
          <PrimaryTextInput
            value={email}
            placeholder={t('emailPH')}
            onChangeText={text => setEmail(text)}
            keyboardType={'email-address'}
            title={t('email')}
            message={emailErrorMsg}
            isError={isFieldInError('email')}
          />
          <InterrogativeButton
            style={{marginTop: 40, morginBottom: 20}}
            onPress={() => onPressSignup()}
            title={t('signUp')}
            description={t('doYouNeedToCreateAnAccount')}
          />
        </CardContainer>
      </ScrollView>
      <View style={styles.viewFooter}>
        <PrimaryButton
          title={t('sendCode')}
          onPress={() => onPressSendCode()}
        />
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
export default ResetPasswordEmail;
