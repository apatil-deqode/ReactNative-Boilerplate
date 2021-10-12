import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Container,
  ErrorDialogue,
  InterrogativeButton,
  PrimaryButton,
  PrimaryTextInput,
  SocialButton,
  Loader,
} from '../../../common/components';
import I18n from 'i18n-js';
import {
  FacebookIcon,
  GoogleIcon,
  SocialAccounts,
  ValidationMessages,
} from '../../../constants';
import {useValidation} from 'react-native-form-validator';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {facebookSignin, signup, googleSignin} from '../../../store/reducers';

const t = key => I18n.t(`screens.onBording.${key}`);
const Signup = ({navigation}) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoaderShow, setIsLoaderShow] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const {validate, isFieldInError, getErrorsInField} = useValidation({
    state: {email, password},
    messages: ValidationMessages,
  });
  const showError = (message, isShow) => {
    setErrorMessage(message);
    setIsError(isShow);
    setIsLoaderShow(false);
  };
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: SocialAccounts.googleWebClientId,
      offlineAccess: true,
      iosClientId: SocialAccounts.iosClientId,
    });
  }, []);
  const onPressCreateAccount = () => {
    showError(undefined, false);
    if (checkValidations() === true) {
      setIsLoaderShow(true);
      dispatch(signup({email, password}))
        .then(data => {
          setIsLoaderShow(false);
          signUpSuccess();
        })
        .catch(err => {
          showError(err.message, true);
        });
    }
  };
  const onPressFacebook = () => {
    showError(undefined, false);
    LoginManager.logInWithPermissions(['email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken().then(data => {
            console.log(data.accessToken.toString());
            setIsLoaderShow(true);
            dispatch(facebookSignin({token: data.accessToken}))
              .then(data => {
                setIsLoaderShow(false);
                signUpSuccess();
              })
              .catch(err => {
                showError(err.message, true);
              });
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };
  const onPressGoogle = async () => {
    showError(undefined, false);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setIsLoaderShow(true);
      dispatch(googleSignin({token: userInfo.idToken}))
        .then(data => {
          setIsLoaderShow(false);
          signUpSuccess();
        })
        .catch(err => {
          showError(err.message, true);
        });
      // console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  };
  const signUpSuccess = () => {
    navigation.push('SelectUserType');
  };
  const onPressLogin = () => {
    showError(undefined, false);
    navigation.push('Login');
  };
  const checkValidations = () => {
    return validate({
      password: {required: true, minlength: 8, maxlength: 12},
      email: {required: true, email: true},
    });
  };
  const emailErrorMsg =
    isFieldInError('email') === true ? getErrorsInField('email')[0] : undefined;
  const passwordErrorMsg =
    isFieldInError('password') === true
      ? getErrorsInField('password')[0]
      : undefined;
  return (
    <Container isLoaderShow={isLoaderShow}>
      <ScrollView style={styles.margin20}>
        {isError && <ErrorDialogue isError={isError} message={errorMessage} />}
        <PrimaryTextInput
          containerStyle={styles.marginTop24}
          value={email}
          placeholder={t('emailPH')}
          onChangeText={text => setEmail(text)}
          keyboardType={'email-address'}
          title={t('email')}
          message={emailErrorMsg}
          isError={isFieldInError('email')}
        />
        <PrimaryTextInput
          containerStyle={styles.marginTop24}
          value={password}
          placeholder={t('chooseStrongPassword')}
          onChangeText={text => setPassword(text)}
          title={t('password')}
          message={passwordErrorMsg}
          isError={isFieldInError('password')}
          secureTextEntry={true}
        />
        <PrimaryButton
          style={styles.marginTop24}
          title={t('createAccount')}
          onPress={() => onPressCreateAccount()}
        />
        <InterrogativeButton
          style={styles.marginTop52}
          onPress={() => onPressLogin()}
          title={t('loginSmall')}
          description={t('doYouAlreadyHaveAnAccount')}
        />
        <SocialButton
          onPress={() => onPressGoogle()}
          title={t('signupWithGoogle')}
          style={styles.marginTop40}>
          <GoogleIcon />
        </SocialButton>
        <SocialButton
          onPress={() => onPressFacebook()}
          title={t('signupWithFacebook')}
          style={styles.marginTop16}>
          <FacebookIcon />
        </SocialButton>
      </ScrollView>
    </Container>
  );
};
const styles = StyleSheet.create({
  marginTop24: {
    marginTop: 24,
  },
  marginTop40: {
    marginTop: 40,
  },
  marginTop16: {
    marginTop: 16,
  },
  marginTop52: {
    marginTop: 52,
  },
  margin20: {
    margin: 20,
  },
});
export default Signup;
