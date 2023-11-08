import React from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faGift,
  faHeadphonesSimple,
  faMusic,
  faPersonDress,
} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';

const Composer = () => {
  const activeChild = {backgroundColor: '#4870FF'};
  const activeNature = {backgroundColor: '#00D971'};
  const activeAnimals = {backgroundColor: '#FF9C41'};
  return (
    <SafeAreaView style={[globalStyle.mainBackground, globalStyle.flex]}>
      <View style={style.headerTextContainer}>
        <Header type={2} title={'Composer'} color={'#FFF'} />
      </View>
      <ScrollView style={style.composerContainer}>
        <View style={style.composerSettings}>
          <Text style={style.composerSettingTitle}>Child</Text>
          <Text style={style.composerSettingSubTitle}>
            Quickly stabilize your baby’s emotions
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={style.composerList}>
            <Pressable style={style.composerItem} active={true}>
              <View style={style.composerTop}>
                <FontAwesomeIcon
                  icon={faPersonDress}
                  color={'#FFFFFF'}
                  size={scaleFontSize(28)}
                />
              </View>
              <View style={style.composerBottom}>
                <Text style={style.composerTitle}>Famale Voice</Text>
              </View>
            </Pressable>
            <Pressable style={[style.composerItem, activeChild]}>
              <View style={style.composerTop}>
                <FontAwesomeIcon
                  icon={faHeadphonesSimple}
                  color={'#FFFFFF'}
                  size={scaleFontSize(28)}
                />
              </View>
              <View style={style.composerBottom}>
                <Text style={style.composerTitle}>White noize</Text>
              </View>
            </Pressable>
            <Pressable style={style.composerItem}>
              <View style={style.composerTop}>
                <FontAwesomeIcon
                  icon={faMusic}
                  color={'#FFFFFF'}
                  size={scaleFontSize(28)}
                />
              </View>
              <View style={style.composerBottom}>
                <Text style={style.composerTitle}>Lullaby</Text>
              </View>
            </Pressable>
          </ScrollView>
        </View>
        <View style={style.composerSettings}>
          <Text style={style.composerSettingTitle}>Nature</Text>
          <Text style={style.composerSettingSubTitle}>
            It will allow you to merge with nature
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={style.composerList}>
            <Pressable style={[style.composerItem, activeNature]} active={true}>
              <View style={style.composerTop}>
                <FontAwesomeIcon
                  icon={faPersonDress}
                  color={'#FFFFFF'}
                  size={scaleFontSize(28)}
                />
              </View>
              <View style={style.composerBottom}>
                <Text style={style.composerTitle}>Famale Voice</Text>
              </View>
            </Pressable>
            <Pressable style={[style.composerItem, activeNature]}>
              <View style={style.composerTop}>
                <FontAwesomeIcon
                  icon={faHeadphonesSimple}
                  color={'#FFFFFF'}
                  size={scaleFontSize(28)}
                />
              </View>
              <View style={style.composerBottom}>
                <Text style={style.composerTitle}>White noize</Text>
              </View>
            </Pressable>
            <Pressable style={style.composerItem}>
              <View style={style.composerTop}>
                <FontAwesomeIcon
                  icon={faMusic}
                  color={'#FFFFFF'}
                  size={scaleFontSize(28)}
                />
              </View>
              <View style={style.composerBottom}>
                <Text style={style.composerTitle}>Lullaby</Text>
              </View>
            </Pressable>
            <Pressable style={style.composerItem}>
              <View style={style.composerTop}>
                <FontAwesomeIcon
                  icon={faGift}
                  color={'#FFFFFF'}
                  size={scaleFontSize(28)}
                />
              </View>
              <View style={style.composerBottom}>
                <Text style={style.composerTitle}>Chillin</Text>
              </View>
            </Pressable>
          </ScrollView>
        </View>
        <View style={style.composerSettings}>
          <Text style={style.composerSettingTitle}>Animals</Text>
          <Text style={style.composerSettingSubTitle}>
            These sounds will help you forget about the silence
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={style.composerList}>
            <Pressable style={style.composerItem}>
              <View style={style.composerTop}>
                <FontAwesomeIcon
                  icon={faPersonDress}
                  color={'#FFFFFF'}
                  size={scaleFontSize(28)}
                />
              </View>
              <View style={style.composerBottom}>
                <Text style={style.composerTitle}>Famale Voice</Text>
              </View>
            </Pressable>
            <Pressable style={[style.composerItem, activeAnimals]}>
              <View style={style.composerTop}>
                <FontAwesomeIcon
                  icon={faHeadphonesSimple}
                  color={'#FFFFFF'}
                  size={scaleFontSize(28)}
                />
              </View>
              <View style={style.composerBottom}>
                <Text style={style.composerTitle}>White noize</Text>
              </View>
            </Pressable>
            <Pressable style={[style.composerItem, activeAnimals]}>
              <View style={style.composerTop}>
                <FontAwesomeIcon
                  icon={faMusic}
                  color={'#FFFFFF'}
                  size={scaleFontSize(28)}
                />
              </View>
              <View style={style.composerBottom}>
                <Text style={style.composerTitle}>Lullaby</Text>
              </View>
            </Pressable>
            <Pressable style={style.composerItem}>
              <View style={style.composerTop}>
                <FontAwesomeIcon
                  icon={faGift}
                  color={'#FFFFFF'}
                  size={scaleFontSize(28)}
                />
              </View>
              <View style={style.composerBottom}>
                <Text style={style.composerTitle}>Chillin</Text>
              </View>
            </Pressable>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Composer;
