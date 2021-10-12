import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {P4_700, P2_500} from '../../../common/components';
import {Layout, Theme} from '../../../constants';

const WalkThroughItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.url} />
      <View style={styles.textView}>
        <P4_700 style={styles.title}>{item.title} </P4_700>
        <P2_500 style={styles.description}>{item.description} </P2_500>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width,
  },
  image: {
    width: '100%',
    height: '70%',
  },
  textView: {
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
  },
  title: {
    color: Theme.colors.WHITE,
  },
  description: {
    color: Theme.colors.WHITE,
  },
});

export default WalkThroughItem;
