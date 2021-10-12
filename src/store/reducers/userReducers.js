import {createSlice} from '@reduxjs/toolkit';
import {AuthService} from '../../api/AuthService';
import {throwError} from '../../api/Request';
import {SessionManager} from '../../api/SessionManager';
import {
  CheckConnectivity,
  throwInternetError,
} from '../../common/utilities/internetConnection';
// Slice

const slice = createSlice({
  name: 'user',
  initialState: {
    auth: {
      token: null,
    },
    forgotPassword: {
      message: null,
      accessToken: null,
    },
    userInfo: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      SessionManager.setUserToken(action.payload.access_token);
      state.auth = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.auth = null;
    },
    forgotEmailSuccess: (state, action) => {
      state.forgotPassword.message = action.payload;
    },
    verifyOtpSuccess: (state, action) => {
      state.forgotPassword.accessToken = action.payload;
    },
    getUserInfoSuccess: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
export default slice.reducer;
// Actions
export const {
  loginSuccess,
  logoutSuccess,
  setAuth,
  forgotEmailSuccess,
  verifyOtpSuccess,
  getUserInfoSuccess,
} = slice.actions;

export const login =
  ({email, password}) =>
  async dispatch => {
    const isConnected = await CheckConnectivity();
    if (isConnected === true) {
      try {
        const loginResponse = await AuthService.login({email, password});
        dispatch(loginSuccess(loginResponse));
      } catch (e) {
        throwError(e);
      }
    } else {
      throwInternetError();
    }
  };

export const facebookSignin =
  ({token}) =>
  async dispatch => {
    const isConnected = await CheckConnectivity();
    if (isConnected === true) {
      try {
        const facebookResponse = await AuthService.facebookSignin({token});
        dispatch(loginSuccess(facebookResponse));
      } catch (e) {
        throwError(e);
      }
    } else {
      throwInternetError();
    }
  };

export const googleSignin =
  ({token}) =>
  async dispatch => {
    const isConnected = await CheckConnectivity();
    if (isConnected === true) {
      try {
        const googleResponse = await AuthService.googleSignin({token});
        dispatch(loginSuccess(googleResponse));
      } catch (e) {
        throwError(e);
      }
    } else {
      throwInternetError();
    }
  };

export const signup =
  ({email, password}) =>
  async dispatch => {
    const isConnected = await CheckConnectivity();
    if (isConnected === true) {
      try {
        const signupResponse = await AuthService.signup({email, password});
        dispatch(loginSuccess(signupResponse));
      } catch (e) {
        throwError(e);
      }
    } else {
      throwInternetError();
    }
  };

export const forgotPassword =
  ({email}) =>
  async dispatch => {
    const isConnected = await CheckConnectivity();
    if (isConnected === true) {
      try {
        const forgotResponse = await AuthService.forgotPassword({
          email,
          newcode: true,
        });
        dispatch(forgotEmailSuccess(forgotResponse));
      } catch (e) {
        throwError(e);
      }
    } else {
      throwInternetError();
    }
  };

export const verifyOtp =
  ({email, otp}) =>
  async dispatch => {
    const isConnected = await CheckConnectivity();
    if (isConnected === true) {
      try {
        const OtpResponse = await AuthService.verifyOtp({email, otp});
        dispatch(verifyOtpSuccess(OtpResponse));
      } catch (e) {
        throwError(e);
      }
    } else {
      throwInternetError();
    }
  };

export const resetPassword =
  ({confirmedPassword, newpassword}) =>
  async dispatch => {
    const isConnected = await CheckConnectivity();
    if (isConnected === true) {
      try {
        const resetResponse = await AuthService.resetPassword({
          confirmedPassword,
          newpassword,
        });
      } catch (e) {
        throwError(e);
      }
    } else {
      throwInternetError();
    }
  };

export const logout = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess());
  } catch (e) {
    throwError(e);
  }
};

export const updateRole = role => async dispatch => {
  const isConnected = await CheckConnectivity();
  if (isConnected === true) {
    try {
      const updateRoleResponse = await AuthService.updateRole({role});
      dispatch(getUserInfoSuccess(updateRoleResponse));
    } catch (e) {
      throwError(e);
    }
  } else {
    throwInternetError();
  }
};
