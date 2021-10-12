import _ from 'lodash';
import React, {useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {CloseEye, OpenEye, Theme, YellowCrossIcon} from '../../constants';
import {Label, Assistive} from './Texts';
export const PrimaryTextInput = ({
  value,
  placeholder,
  onChangeText,
  maxLength,
  editable,
  multiline,
  keyboardType,
  title,
  message,
  messageColor,
  isError,
  containerStyle,
  secureTextEntry,
  inputStyle,
}) => {
  const errorColor = messageColor
    ? messageColor
    : isError
    ? Theme.colors.STATUS_CAUTION
    : Theme.colors.TEXT_WHITE3;
  return (
    <View style={containerStyle}>
      <Label
        style={{
          color: isError
            ? Theme.colors.STATUS_CAUTION
            : Theme.colors.TEXT_WHITE1,
        }}>
        {title}
      </Label>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: isError
              ? Theme.colors.STATUS_CAUTION
              : Theme.colors.TEXT_WHITE2,
          },
          inputStyle,
        ]}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        editable={editable}
        pointerEvents={editable === false ? 'none' : 'auto'}
        multiline={multiline ? multiline : false}
        placeholderTextColor={Theme.colors.TEXT_WHITE2}
        keyboardType={keyboardType ? keyboardType : 'default'}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
      />
      {!_.isEmpty(message) ? (
        <View style={styles.errorView}>
          {isError ? <YellowCrossIcon /> : null}
          <Assistive
            style={[
              styles.errorMessage,
              {
                color: errorColor,
              },
            ]}>
            {message}
          </Assistive>
        </View>
      ) : null}
      <View />
    </View>
  );
};

export const PasswordTextInput = ({
  value,
  placeholder,
  onChangeText,
  maxLength,
  editable,
  multiline,
  keyboardType,
  title,
  message,
  messageColor,
  isError,
  containerStyle,
}) => {
  const [isSecureText, setIsSecureText] = useState(true);
  return (
    <View style={containerStyle}>
      <PrimaryTextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        maxLength={maxLength}
        editable={editable}
        multiline={multiline}
        keyboardType={keyboardType}
        title={title}
        message={message}
        messageColor={messageColor}
        isError={isError}
        secureTextEntry={isSecureText}
        inputStyle={{paddingRight: 40}}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          justifyContent: 'center',
          padding: 10,
          marginTop: 30,
        }}
        onPress={() => setIsSecureText(!isSecureText)}>
        {isSecureText === true ? <CloseEye /> : <OpenEye />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    backgroundColor: Theme.colors.BLACK_300,
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 8,
    padding: 15,
    color: Theme.colors.TEXT_WHITE1,
  },
  errorMessage: {
    marginLeft: 4,
    marginTop: 2,
  },
  errorView: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 4,
  },
});
