import NetInfo from '@react-native-community/netinfo';
import I18n from 'i18n-js';
const t = key => I18n.t(`errorMessage.api.${key}`);

export const CheckConnectivity = async () => {
  // For Android devices
  const response = await NetInfo.fetch();
  return response.isConnected;
};

export const throwInternetError = () => {
  throw new Error(t('internetError'));
};
