import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import I18n from 'i18n-js';
import {
  UserType,
  Container,
  PrimaryButton,
  H1,
  ErrorDialogue,
  Loader,
} from '../../../../common/components';
import {
  Theme,
  CenterType,
  ClientType,
  CoachType,
  UserTypes,
} from '../../../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {updateRole} from '../../../../store/reducers';
const t = key => I18n.t(`screens.completeProfile.${key}`);
const SelectUserType = ({navigation}) => {
  const dispatch = useDispatch();
  const storeStates = useSelector(state => state);

  const [selectedUserType, setSelectedUserType] = useState(undefined);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoaderShow, setIsLoaderShow] = useState(false);

  const showError = (message, isShow) => {
    setErrorMessage(message);
    setIsError(isShow);
    setIsLoaderShow(false);
  };

  const onPressGetStart = () => {
    showError(undefined, false);
    setIsLoaderShow(true);
    console.log(selectedUserType);
    dispatch(updateRole(selectedUserType))
      .then(data => {
        setIsLoaderShow(false);
        navigation.push('GetsApproved', {
          userType: selectedUserType,
        });
      })
      .catch(err => {
        showError(err.message, true);
      });
  };
  const onPressSelectType = type => {
    showError(undefined, false);
    setSelectedUserType(type);
  };
  return (
    <Container isLoaderShow={isLoaderShow}>
      <ScrollView style={{margin: 20}}>
        {isError && <ErrorDialogue isError={isError} message={errorMessage} />}
        <H1 style={{color: Theme.colors.TEXT_WHITE1, marginBottom: 40}}>
          {'Which one are you?'}
        </H1>
        <TouchableOpacity onPress={() => onPressSelectType(UserTypes.Client)}>
          <UserType
            type={t('clientType')}
            description={t('clientTypeMsg')}
            backgroundColor={
              selectedUserType === UserTypes.Client
                ? Theme.colors.SECONDARY_100A
                : null
            }>
            <ClientType />
          </UserType>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressSelectType(UserTypes.Coach)}>
          <UserType
            style={{
              marginVertical: 40,
            }}
            type={t('coachType')}
            description={t('coachTypeMsg')}
            backgroundColor={
              selectedUserType === UserTypes.Coach
                ? Theme.colors.PRIMARY_100A
                : null
            }>
            <CoachType />
          </UserType>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressSelectType(UserTypes.Center)}>
          <UserType
            type={t('centerType')}
            description={t('centerTypeMsg')}
            backgroundColor={
              selectedUserType === UserTypes.Center
                ? Theme.colors.TERTIARY_100A
                : null
            }>
            <CenterType />
          </UserType>
        </TouchableOpacity>
      </ScrollView>
      {selectedUserType ? (
        <View style={styles.viewFooter}>
          <PrimaryButton
            title={t('getStarted')}
            onPress={() => onPressGetStart()}
          />
        </View>
      ) : null}
    </Container>
  );
};
const styles = StyleSheet.create({
  viewFooter: {
    marginTop: 'auto',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Theme.colors.BLACK_700,
  },
});
export default SelectUserType;
