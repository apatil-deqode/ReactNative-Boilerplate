import React, {useRef} from 'react';
import {FlatList, Animated, StyleSheet, View} from 'react-native';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import {
  Container,
  PrimaryButton,
  SecondaryButton,
} from '../../../common/components';
import {walkTroughMockData} from '../../../../__mocks__/walkTroughMockData';
import WalkThroughItem from '../components/WalkThroughItem';
import I18n from 'i18n-js';

const t = key => I18n.t(`screens.walktrough.${key}`);
const WalkThrough = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const mockDataRef = useRef(null);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const onPressLogin = () => {
    navigation.push('Login');
  };
  const onPressSignup = () => {
    navigation.push('Signup');
  };
  return (
    <Container>
      <View style={{height: '75%'}}>
        <FlatList
          data={walkTroughMockData}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={item => item.id.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}
          viewabilityConfig={viewConfig}
          ref={mockDataRef}
          renderItem={({item}) => <WalkThroughItem item={item} />}
        />
        <ExpandingDot
          data={walkTroughMockData}
          expandingDotWidth={10}
          inActiveDotColor={'#FFFF'}
          activeDotColor={'#FFFF'}
          scrollX={scrollX}
          dotStyle={styles.dotStyle}
          containerStyle={{
            bottom: 2,
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton title={t('login')} onPress={() => onPressLogin()} />
        <SecondaryButton title={t('signUp')} onPress={() => onPressSignup()} />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  btn: {
    marginTop: 8,
  },
  dotStyle: {
    backgroundColor: '#347af0',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 120,
    marginTop: 'auto',
    bottom: 20,
  },
});

export default WalkThrough;
