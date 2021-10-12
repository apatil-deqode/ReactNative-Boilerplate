import {Alert} from 'react-native';

export const showErrorAlert = (title, msg) => {
  Alert.alert(title ?? 'Error', msg);
};
