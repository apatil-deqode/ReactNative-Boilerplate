import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  CalenderIcon,
  NextArrow,
  ResendCodeIcon,
  ResetIcon,
  Theme,
} from '../../constants';
import {Assistive, PrimaryButtonText, Label} from './Texts';

export const PrimaryButton = ({onPress, style, title}) => {
  return (
    <TouchableOpacity style={[styles.primaryButton, style]} onPress={onPress}>
      <PrimaryButtonText style={styles.primaryText}>{title}</PrimaryButtonText>
    </TouchableOpacity>
  );
};

export const SecondaryButton = ({onPress, style, title}) => {
  return (
    <TouchableOpacity style={[styles.secondaryButton, style]} onPress={onPress}>
      <PrimaryButtonText style={styles.secondaryText}>
        {title}
      </PrimaryButtonText>
    </TouchableOpacity>
  );
};

export const SocialButton = ({children, onPress, style, title}) => {
  return (
    <TouchableOpacity style={[styles.socialButton, style]} onPress={onPress}>
      {children}
      <PrimaryButtonText style={styles.socialText}>{title}</PrimaryButtonText>
    </TouchableOpacity>
  );
};

export const InterrogativeButton = ({onPress, style, title, description}) => {
  return (
    <View style={[styles.interrogativeButton, style]}>
      <Assistive style={styles.interrogativeDisText}>{description}</Assistive>
      <TouchableOpacity style={styles.interrogativeClick} onPress={onPress}>
        <Assistive style={styles.interrogativeText}>{title}</Assistive>
        <NextArrow />
      </TouchableOpacity>
    </View>
  );
};

export const ResendCode = ({onPress, style, description}) => {
  const [secs, setSecs] = useState(30);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (secs !== 0) {
        setSecs(secs - 1);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [secs]);

  const onPressResend = () => {
    setSecs(30);
    onPress();
  };

  return (
    <View style={[styles.interrogativeButton, style]}>
      <Assistive style={styles.interrogativeDisText}>{description}</Assistive>
      <TouchableOpacity
        style={styles.interrogativeClick}
        onPress={() => onPressResend()}
        disabled={secs === 0 ? false : true}>
        <Assistive style={styles.interrogativeText}>
          {secs === 0 ? 'Resend Code' : `Resend in 0:${secs}`}
        </Assistive>
        {secs !== 0 ? <ResendCodeIcon /> : null}
      </TouchableOpacity>
    </View>
  );
};

export const DatePicker = ({
  onDateChange,
  date,
  datePlaceholder,
  containerStyle,
  isError,
  title,
}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const displayMode = Platform.OS === 'ios' ? 'inline' : 'default';
  const onChange = (event, d) => {
    setShowDatePicker(false);
    onDateChange(d);
  };

  const getText = () => {
    if (date) {
      return `${('0' + (new Date(date).getMonth() + 1)).slice(-2)}/${(
        '0' + new Date(date).getDate()
      ).slice(-2)}/${new Date(date).getFullYear()}`;
    } else {
      return datePlaceholder;
    }
  };

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
      <TouchableOpacity
        style={[
          styles.datePicker,
          {
            borderColor: isError
              ? Theme.colors.STATUS_CAUTION
              : Theme.colors.TEXT_WHITE2,
          },
        ]}
        onPress={() => setShowDatePicker(true)}>
        <Assistive style={styles.dateText}>{getText()}</Assistive>
        {!date && <CalenderIcon />}
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date ? date : new Date()}
          mode="date"
          display={displayMode}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export const ResetButton = ({
  onPress,
  style,
  description,
  descriptionStyle,
}) => {
  return (
    <View style={[styles.interrogativeButton, style]}>
      <Assistive style={[styles.interrogativeDisText, descriptionStyle]}>
        {description}
      </Assistive>
      <TouchableOpacity
        style={styles.interrogativeClick}
        onPress={() => onPress()}>
        <Assistive style={styles.interrogativeText}>{'Reset'}</Assistive>
        <ResetIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    borderRadius: 4,
    backgroundColor: Theme.colors.PRIMARY_700,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
  },
  secondaryButton: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Theme.colors.PRIMARY_500,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
  },
  socialButton: {
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Theme.colors.TEXT_BRAND2,
    height: 48,
    flexDirection: 'row',
  },
  interrogativeButton: {
    borderRadius: 4,
    alignItems: 'center',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  primaryText: {
    color: Theme.colors.TEXT_WHITE1,
  },
  secondaryText: {
    color: Theme.colors.TEXT_BRAND1,
  },
  socialText: {
    color: Theme.colors.TEXT_BRAND2,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  interrogativeDisText: {
    color: Theme.colors.TEXT_WHITE1,
  },
  interrogativeText: {
    color: Theme.colors.TEXT_BRAND3,
    marginRight: 8,
  },
  interrogativeClick: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: 'PTRootUI-Regular',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    color: Theme.colors.TEXT_WHITE2,
  },
  datePicker: {
    backgroundColor: Theme.colors.BLACK_300,
    borderRadius: 4,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8,
    height: 56,
  },
});
