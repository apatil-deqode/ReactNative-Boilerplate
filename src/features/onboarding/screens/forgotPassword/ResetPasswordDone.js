import React, {useState, useLayoutEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  CardContainer,
  Container,
  P1,
  PrimaryButton,
  NavigationCross,
} from '../../../../common/components';
import I18n from 'i18n-js';
import {AllSetIcon, Theme} from '../../../../constants';
const t = key => I18n.t(`screens.onBording.${key}`);
const ResetPasswordDone = ({navigation}) => {
  const onPressLogin = () => {
    navigation.navigate('Login');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
      headerRight: () => (
        <NavigationCross onPress={() => navigation.navigate('Login')} />
      ),
    });
  }, []);

  return (
    <Container>
      <ScrollView>
        <CardContainer style={styles.CardContainer}>
          <AllSetIcon />
          <P1 style={styles.messageText}>{t('successfullyUpdatedPassword')}</P1>
        </CardContainer>
      </ScrollView>
      <View style={styles.viewFooter}>
        <PrimaryButton title={t('login')} onPress={() => onPressLogin()} />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  CardContainer: {
    margin: 20,
    padding: 24,
    alignItems: 'center',
  },
  viewFooter: {
    marginTop: 'auto',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Theme.colors.BLACK_700,
  },
  messageText: {
    color: Theme.colors.TEXT_WHITE1,
    marginTop: 16,
    marginBottom: 24,
  },
});
export default ResetPasswordDone;
