import Request from './Request';
import {
  facebookSigninUrl,
  forgotPasswordUrl,
  googleSigninUrl,
  loginUrl,
  resetPasswordUrl,
  signupUrl,
  verifyOtpUrl,
  updateRoleUrl,
} from './urls';

export class AuthService {
  static login = ({...params}) => {
    return Request.post(loginUrl(), params);
  };
  static signup = ({...params}) => {
    return Request.post(signupUrl(), params);
  };
  static facebookSignin = ({...params}) => {
    console.log('>>>>>>>', params);
    return Request.post(facebookSigninUrl(), params);
  };
  static googleSignin = ({...params}) => {
    return Request.post(googleSigninUrl(), params);
  };
  static forgotPassword = ({...params}) => {
    return Request.post(forgotPasswordUrl(), params);
  };
  static verifyOtp = ({...params}) => {
    console.log('>>>> param', params);
    return Request.post(verifyOtpUrl(), params);
  };
  static resetPassword = ({...params}) => {
    return Request.post(resetPasswordUrl(), params);
  };

  //Complete Profile
  static updateRole = ({...params}) => {
    return Request.post(updateRoleUrl(), params);
  };
}
