import React from 'react';
import {Text, View, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import {Routes} from '../../navigation/Routes';

const slides = [
  {
    key: 1,
    title: 'Exclusive Music',
    description:
      "We have an author's library of sounds that you will not find anywhere else",
    image: require('../../assets/images/exclusive-music.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Relax sleep sounds',
    description: 'Our sounds will help to relax and improve your sleep health',
    image: require('../../assets/images/relax-sleep-sounds.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 3,
    title: 'Story for kids',
    description:
      'Famous fairy tales with soothing sounds will help your children fall asleep faster',
    image: require('../../assets/images/story-for-kids.png'),
    backgroundColor: '#59b2ab',
  },
];

const IntroSlides = ({navigation}) => {
  return (
    <AppIntroSlider
      data={slides}
      showDoneButton={true}
      showNextButton={true}
      showSkipButton
      onDone={() => {
        setTimeout(() => {
          navigation.navigate(Routes.Home, {
            screen: Routes.Home,
            initial: false,
          });
        }, 500);
      }}
      onSkip={() => {
        setTimeout(() => {
          navigation.navigate(Routes.Home, {
            screen: Routes.Home,
            initial: false,
          });
        }, 500);
      }}
      renderItem={({item}) => (
        <View style={[globalStyle.mainBackground, globalStyle.flex]}>
          <View style={style.image}>
            <Image source={item.image} />
          </View>
          <View style={style.title}>
            <Header title={item.title} type={1} color={'#FFFFFF'} />
          </View>
          <View style={style.description}>
            <Text style={style.text}>{item.description}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default IntroSlides;
