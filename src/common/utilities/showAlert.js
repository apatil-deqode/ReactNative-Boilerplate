import {Alert} from 'react-native';

export const showAlert = ({title, msg, cancelText, onCancel, okText, onOk}) => {
  Alert.alert(title ?? 'Alert', msg, [
    {
      text: cancelText ?? 'Cancel',
      onPress: () => onCancel && onCancel(),
      style: 'cancel',
    },
    {
      text: okText ?? 'Okay',
      onPress: () => {
        onOk && onOk();
      },
    },
  ]);
};
