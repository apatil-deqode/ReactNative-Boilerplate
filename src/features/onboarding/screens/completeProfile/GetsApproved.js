import React, {useState, useLayoutEffect} from 'react';
import {StyleSheet, View, FlatList, Image, Text} from 'react-native';
import I18n from 'i18n-js';
import {AllSetIcon, Theme, UserTypes} from '../../../../constants';
import {UserTypeMockData} from '../../../../../__mocks__/userTypeData';
import {
  P1_700,
  P2,
  PrimaryButton,
  CardContainer,
  Container,
  P1,
} from '../../../../common/components';
import {HeaderTitle} from '../../../../app/navigation/constants/HeaderTitle';
const t = key => I18n.t(`screens.userSelection.${key}`);

const GetsApproved = ({route, navigation}) => {
  const onPressLetsGo = () => navigation.push('ChangePassword');
  const {userType} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:
        userType === UserTypes.Client
          ? HeaderTitle.GetsStarted
          : HeaderTitle.GetsApproved,
    });
  }, []);

  const userMessage =
    userType === UserTypes.Client
      ? t('clientMsg')
      : userType === UserTypes.Center
      ? t('centerMsg')
      : t('coachMsg');

  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row', marginVertical: 10}}>
      <Image style={{marginTop: 5, height: 20, width: 20}} source={item.url} />
      <View
        style={{
          width: '90%',
          marginHorizontal: 10,
        }}>
        <P1_700 style={{color: Theme.colors.WHITE}}>{item.title}</P1_700>
        <P2
          style={{
            color: Theme.colors.WHITE,
            width: '100%',
          }}>
          {item.description}
        </P2>
      </View>
    </View>
  );

  return (
    <Container>
      <P1
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
          color: Theme.colors.TEXT_WHITE1,
        }}>
        {userMessage}
      </P1>
      <CardContainer style={styles.CardContainer}>
        <FlatList
          data={UserTypeMockData[userType]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={false}
          contentContainerStyle={{
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </CardContainer>
      <View style={styles.viewFooter}>
        <PrimaryButton title={t('letsGo')} onPress={() => onPressLetsGo()} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    flex: 1,
    margin: 20,
    padding: 24,
    alignItems: 'center',
    minHeight: '10%',
    maxHeight: '60%',
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
export default GetsApproved;
