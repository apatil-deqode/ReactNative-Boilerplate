import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationBack} from '../../../common/components/NavigationBack';
import {Theme} from '../../../constants';
import {DashboardScreen} from '../constants/DashboardScreen';
import {StyleSheet} from 'react-native';

const Home = React.lazy(() =>
  import('../../../features/dashboard/screens/Home'),
);

const Stack = createStackNavigator();

export const DashboardNavigator = () => (
  <Stack.Navigator
    mode="modal"
    headerMode="none"
    initialRouteName={DashboardScreen.Home}
    screenOptions={{
      headerStyle: styles.headerStyle,
      headerTitleAlign: 'center',
      headerTintColor: Theme.colors.WHITE,
      headerBackTitleVisible: false,
      headerBackImage: () => <NavigationBack />,
    }}>
    <Stack.Screen name={DashboardScreen.Home} component={Home} />
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
