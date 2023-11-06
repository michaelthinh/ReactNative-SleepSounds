import React from 'react';
import {SafeAreaView, View} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';

const Composer = () => {
  return (
    <SafeAreaView style={[globalStyle.mainBackground, globalStyle.flex]}>
      <View style={style.headerTextContainer}>
        <Header type={2} title={'Composer'} color={'#FFF'} />
      </View>
    </SafeAreaView>
  );
};

export default Composer;
