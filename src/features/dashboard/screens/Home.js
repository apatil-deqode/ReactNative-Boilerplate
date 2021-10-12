import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Home = ({_navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
