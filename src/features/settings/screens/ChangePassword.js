import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  CardContainer,
  Container,
  ErrorDialogue,
  PrimaryButton,
  Loader,
  PasswordTextInput,
} from '../../../common/components';
import I18n from 'i18n-js';
import {Theme} from '../../../constants';
import {ValidationMessages} from '../../../constants';
import {useValidation} from 'react-native-form-validator';
import {ScrollView} from 'react-native-gesture-handler';
import {resetPassword} from '../../../store/reducers';
const t = key => I18n.t(`screens.onBording.${key}`);
const ChangePassword = ({navigation}) => {
  const storeStates = useSelector(state => state);
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoaderShow, setIsLoaderShow] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {validate, isFieldInError, getErrorsInField} = useValidation({
    state: {password, confirmPassword},
    messages: ValidationMessages,
  });

  const showError = (message, isShow) => {
    setErrorMessage(message);
    setIsError(isShow);
    setIsLoaderShow(false);
  };

  const onPressChangePassword = () => {
    showError(undefined, false);
    if (checkValidations() === true) {
      setIsLoaderShow(true);
      dispatch(
        resetPassword({
          confirmedPassword: confirmPassword,
          newpassword: password,
        }),
      )
        .then(data => {
          setIsLoaderShow(false);
          navigation.push('ChangePasswordDone');
        })
        .catch(err => {
          showError(err.message, true);
        });
    }
  };

  const checkValidations = () => {
    return validate({
      password: {required: true, minlength: 8, maxlength: 12},
      confirmPassword: {required: true, equalPassword: password},
    });
  };
  const passwordErrorMsg =
    isFieldInError('password') === true
      ? getErrorsInField('password')[0]
      : 'Must be at least 8 characters.';
  const confirmPasswordErrorMsg =
    isFieldInError('confirmPassword') === true
      ? getErrorsInField('confirmPassword')[0]
      : undefined;
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
          <PasswordTextInput
            value={password}
            placeholder={t('newPasswordPH')}
            onChangeText={text => setPassword(text)}
            title={t('newPassword')}
            message={passwordErrorMsg}
            isError={isFieldInError('password')}
          />
          <PasswordTextInput
            value={confirmPassword}
            placeholder={t('confirmNewPasswordPH')}
            onChangeText={text => setConfirmPassword(text)}
            title={t('confirmNewPassword')}
            message={confirmPasswordErrorMsg}
            isError={isFieldInError('confirmPassword')}
            containerStyle={{marginTop: 26}}
          />
        </CardContainer>
      </ScrollView>
      <View style={styles.viewFooter}>
        <PrimaryButton
          title={I18n.t('screens.settings.changePassword')}
          onPress={() => onPressChangePassword()}
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
export default ChangePassword;
