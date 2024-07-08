/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, StatusBar, StyleSheet, FlatList, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import items from './items';
import NextButton from './NextButton';
import Welcome from '../Welcome/Welcome';

const Onboarding = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const itemsRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < items.length - 1) {
      itemsRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate(Welcome);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={{flex: 3}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          pagingEnabled={true}
          data={items}
          renderItem={({item}) => <OnboardingItem item={item} />}
          bounces={false}
          keyExtractor={item => item.id.toString()}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={itemsRef}
        />
      </View>

      <Paginator data={items} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / items.length)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding;
