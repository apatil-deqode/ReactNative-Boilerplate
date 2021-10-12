import {createStackNavigator} from '@react-navigation/stack';
import React, {Suspense} from 'react';
import {LoadingText} from '../../../common/components';
import {Navigator} from '../constants/Navigator';

const OnboardingNavigator = React.lazy(() =>
  import('./OnboardingNavigator').then(module => ({
    default: module.OnboardingNavigator,
  })),
);
const DashboardNavigator = React.lazy(() =>
  import('./DashboardNavigator').then(module => ({
    default: module.DashboardNavigator,
  })),
);

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Suspense fallback={<LoadingText />}>
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      initialRouteName={Navigator.OnboardingNavigator}>
      <Stack.Screen
        name={Navigator.OnboardingNavigator}
        component={OnboardingNavigator}
      />
      <Stack.Screen
        name={Navigator.DashboardNavigator}
        component={DashboardNavigator}
      />
    </Stack.Navigator>
  </Suspense>
);
