import {CommonActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Navigator} from '../../../app/navigation/constants/Navigator';
import {OnboardingScreen} from '../../../app/navigation/constants/OnboardingScreen';
import {Container} from '../../../common/components/Containers';
import {AppLogo} from '../../../constants/SvgAssets';

const SPLASH_TIMEOUT = 3000;

const Splash = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    setTimeout(validateNavigationFlow, SPLASH_TIMEOUT);
  }, [validateNavigationFlow]);

  const validateNavigationFlow = React.useCallback(() => {
    // TODO: Validate flow where have to redirect.
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: Navigator.OnboardingNavigator,
            params: {screen: OnboardingScreen.WalkThrough},
          },
        ],
      }),
    );
  }, [navigation]);

  return (
    <Container style={styles.container}>
      <AppLogo />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
