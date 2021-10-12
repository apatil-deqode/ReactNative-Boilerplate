import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationTitleText} from '../../../common/components';
import {Theme} from '../../../constants';
import {OnboardingScreen} from '../constants/OnboardingScreen';
import {SettingsScreen} from '../constants/SettingsScreen';
import {HeaderTitle} from '../constants/HeaderTitle';
import {NavigationBack} from '../../../common/components/NavigationBack';

const Splash = React.lazy(() =>
  import('../../../features/onboarding/screens/Splash'),
);
const WalkThrough = React.lazy(() =>
  import('../../../features/onboarding/screens/WalkThrough'),
);
const Login = React.lazy(() =>
  import('../../../features/onboarding/screens/Login'),
);
const Signup = React.lazy(() =>
  import('../../../features/onboarding/screens/Signup'),
);
const ResetPasswordEmail = React.lazy(() =>
  import(
    '../../../features/onboarding/screens/forgotPassword/ResetPasswordEmail'
  ),
);
const OtpVerification = React.lazy(() =>
  import('../../../features/onboarding/screens/forgotPassword/OtpVerification'),
);
const ResetPassword = React.lazy(() =>
  import('../../../features/onboarding/screens/forgotPassword/ResetPassword'),
);
const ResetPasswordDone = React.lazy(() =>
  import(
    '../../../features/onboarding/screens/forgotPassword/ResetPasswordDone'
  ),
);
const SelectUserType = React.lazy(() =>
  import('../../../features/onboarding/screens/completeProfile/SelectUserType'),
);
const GetsApproved = React.lazy(() =>
  import('../../../features/onboarding/screens/completeProfile/GetsApproved'),
);

const ChangePassword = React.lazy(() =>
  import('../../../features/settings/screens/ChangePassword'),
);
const ChangePasswordDone = React.lazy(() =>
  import('../../../features/settings/screens/ChangePasswordDone'),
);
const Stack = createStackNavigator();

export const OnboardingNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerStyle: styles.headerStyle,
      headerTitleAlign: 'center',
      headerTintColor: Theme.colors.WHITE,
      headerBackTitleVisible: false,
      headerBackImage: () => <NavigationBack />,
    }}
    initialRouteName={OnboardingScreen.Splash}>
    <Stack.Screen
      name={OnboardingScreen.Splash}
      component={Splash}
      headerShown={{headerShown: false}}
    />
    <Stack.Screen
      name={OnboardingScreen.WalkThrough}
      component={WalkThrough}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={OnboardingScreen.Login}
      component={Login}
      options={{
        headerTitle: () => (
          <NavigationTitleText style={styles.headerTitle}>
            {HeaderTitle.Login}
          </NavigationTitleText>
        ),
      }}
    />
    <Stack.Screen
      name={OnboardingScreen.Signup}
      component={Signup}
      options={{
        headerTitle: () => (
          <NavigationTitleText style={styles.headerTitle}>
            {HeaderTitle.Signup}
          </NavigationTitleText>
        ),
      }}
    />
    <Stack.Screen
      name={OnboardingScreen.ResetPasswordEmail}
      component={ResetPasswordEmail}
      options={{
        headerTitle: () => (
          <NavigationTitleText style={styles.headerTitle}>
            {HeaderTitle.ResetYourPassword}
          </NavigationTitleText>
        ),
      }}
    />
    <Stack.Screen
      name={OnboardingScreen.OtpVerification}
      component={OtpVerification}
      options={{
        headerTitle: () => (
          <NavigationTitleText style={styles.headerTitle}>
            {HeaderTitle.ResetYourPassword}
          </NavigationTitleText>
        ),
      }}
    />
    <Stack.Screen
      name={OnboardingScreen.ResetPassword}
      component={ResetPassword}
      options={{
        headerTitle: () => (
          <NavigationTitleText style={styles.headerTitle}>
            {HeaderTitle.ResetYourPassword}
          </NavigationTitleText>
        ),
      }}
    />
    <Stack.Screen
      name={OnboardingScreen.ResetPasswordDone}
      component={ResetPasswordDone}
      options={{
        headerTitle: () => (
          <NavigationTitleText style={styles.headerTitle}>
            {HeaderTitle.allSet}
          </NavigationTitleText>
        ),
      }}
    />
    <Stack.Screen
      name={OnboardingScreen.SelectUserType}
      component={SelectUserType}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={OnboardingScreen.GetsApproved}
      component={GetsApproved}
      options={{
        headerTitle: () => (
          <NavigationTitleText style={styles.headerTitle}>
            {HeaderTitle.GetsApproved}
          </NavigationTitleText>
        ),
      }}
    />
    <Stack.Screen
      name={SettingsScreen.ChangePassword}
      component={ChangePassword}
      options={{
        headerTitle: () => (
          <NavigationTitleText style={styles.headerTitle}>
            {HeaderTitle.ResetPassword}
          </NavigationTitleText>
        ),
      }}
    />
    <Stack.Screen
      name={SettingsScreen.ChangePasswordDone}
      component={ChangePasswordDone}
      options={{
        headerTitle: () => (
          <NavigationTitleText style={styles.headerTitle}>
            {HeaderTitle.allSet}
          </NavigationTitleText>
        ),
      }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  headerTitle: {
    color: Theme.colors.WHITE,
  },
  headerStyle: {
    backgroundColor: Theme.colors.BLACK_700,
  },
});
