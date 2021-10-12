import axios from 'axios';
import {SessionManager} from './SessionManager';
import {severEnv} from '../constants/AppConstants';
import I18n from 'i18n-js';
const t = key => I18n.t(`errorMessage.api.${key}`);

export const HTTP_STATUS_CODE = {
  SUCCESS_OK: 200,
  REDIRECTION: 300,
  CLIENT_ERROR: 400,
  SERVER_ERROR: 500,
  UNAUTHORIZED_TOKEN: 401,
  REFRESH_TOKEN_LOGOUT: 400,
};

export const isSuccessAPI = apiResponse => {
  if (apiResponse) {
    if (
      apiResponse.status &&
      apiResponse.status >= HTTP_STATUS_CODE.SUCCESS_OK &&
      apiResponse.status <= HTTP_STATUS_CODE.REDIRECTION
    ) {
      return true;
    }
  }

  return false;
};

export const isInternalServerError = apiResponse => {
  if (apiResponse) {
    if (
      apiResponse.status &&
      apiResponse.status >= HTTP_STATUS_CODE.SERVER_ERROR
    ) {
      return true;
    }
  }

  return false;
};

export const parsedAPIResponse = apiResponse => {
  if (apiResponse) {
    const parsedResponse = apiResponse.json();

    if (parsedResponse) {
      return parsedResponse;
    }
  }

  return null;
};

export const isValidAPIResponse = parsedResponse => {
  if (
    parsedResponse &&
    parsedResponse.message &&
    typeof parsedResponse.message === 'string'
  ) {
    return true;
  }

  return false;
};

export const serverMessage = response => {
  let parsedServerMessage = null;
  const parsedResponse = response.data;

  if (parsedResponse && parsedResponse.error && parsedResponse.error.message) {
    const errorMessage = parsedResponse.error.message;

    parsedServerMessage = parseMessage(errorMessage);
  } else if (parsedResponse && parsedResponse.message) {
    const successMessage = parsedResponse.message;

    parsedServerMessage = parseMessage(successMessage);
  }

  return parsedServerMessage;
};

const parseMessage = serverResponseMessage => {
  let message = null;

  if (typeof serverResponseMessage === 'string') {
    message = serverResponseMessage;
  } else if (typeof serverResponseMessage === 'object') {
    for (let i = 0; i < serverResponseMessage.length; i += 1) {
      if (i === serverResponseMessage.length - 1) {
        message += `${serverResponseMessage[i]}`;
      } else {
        message += `${serverResponseMessage[i]}\n`;
      }
    }
  }

  return message;
};

export const getParseErrorMessage = response => {
  let errorMessage = 'Server error';

  if (isInternalServerError(response)) {
    errorMessage = 'Internal Server error';
  } else {
    const message = serverMessage(response);

    if (message) {
      errorMessage = message;
    }
  }

  return errorMessage;
};

export const throwError = e => {
  console.log('throwError >>>', e);
  if (e !== undefined && e.data !== undefined) {
    throw e.data;
  } else {
    let error = Error(t('serverError'));
    error.code = HTTP_STATUS_CODE.SERVER_ERROR;
    throw error;
  }
};

const httpConfig = {
  baseURL: severEnv.dev,
  headers: {},
  responseType: 'json',
};

const Request = axios.create(httpConfig);

function InterceptorsRequest(config) {
  const accessToken = SessionManager.getUserToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
}

// Add a request interceptor for auth Token
Request.interceptors.request.use(
  config => {
    return InterceptorsRequest(config);
  },
  error => {
    return Promise.reject(error.response);
  },
);

// Add a response interceptor for response handling
Request.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error.response);
  },
);

export default Request;
