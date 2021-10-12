import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Theme} from '../../constants';
import {H3} from '../../common/components';

const CELL_COUNT = 4;
export const OtpInput = ({isError, getOTP}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const onChangeText = text => {
    setValue(text);
    getOTP(text);
  };
  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={text => onChangeText(text)}
      cellCount={CELL_COUNT}
      rootStyle={styles.otpInputcodeField}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <View>
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[
              styles.otpInputcell,
              isError
                ? styles.otpError
                : !isFocused && symbol
                ? styles.otpInputfocusCell
                : styles.otpInputcell,
            ]}>
            <H3 style={styles.otpInputcellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </H3>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  otpInputcodeField: {
    color: Theme.colors.TEXT_WHITE1,
    width: 280,
  },
  otpInputcell: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Theme.colors.TEXT_WHITE1,
  },
  otpError: {
    borderBottomColor: Theme.colors.STATUS_CAUTIONRED,
  },
  otpInputfocusCell: {
    borderBottomColor: Theme.colors.SECONDARY_500,
  },
  otpInputcellText: {
    color: Theme.colors.TEXT_WHITE1,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
