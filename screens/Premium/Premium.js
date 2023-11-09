import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  Text,
  Pressable,
  Alert,
} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import CloseButton from '../../components/CloseButton/CloseButton';
import {scaleFontSize} from '../../assets/styles/scaling';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMicrophone, faMusic} from '@fortawesome/free-solid-svg-icons';
import {faFortAwesome} from '@fortawesome/free-brands-svg-icons';
import {Routes} from '../../navigation/Routes';

const imageURL = {
  uri: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const Premium = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.mainBackground, globalStyle.flex]}>
      <ImageBackground
        source={imageURL}
        resizeMode="cover"
        style={style.premiumBackground}>
        <View style={style.closeButton}>
          <CloseButton
            color={'#141927'}
            size={scaleFontSize(24)}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={style.premiumInfo}>
          <Header type={1} color={'#FFFFFF'} title={'Get Premium'} />
          <View style={style.premiumItemContainer}>
            <View style={style.premiumItem}>
              <FontAwesomeIcon
                icon={faMusic}
                size={scaleFontSize(24)}
                color={'#FF9C41'}
              />
              <Header type={2} color={'#FFFFFF'} title={'Unlock 50+ sounds'} />
            </View>
            <View style={style.premiumItem}>
              <FontAwesomeIcon
                icon={faMicrophone}
                size={scaleFontSize(24)}
                color={'#FF9C41'}
              />
              <Header type={2} color={'#FFFFFF'} title={'Unlock All Sounds'} />
            </View>
            <View style={style.premiumItem}>
              <FontAwesomeIcon
                icon={faFortAwesome}
                size={scaleFontSize(24)}
                color={'#FF9C41'}
              />
              <Header
                type={2}
                color={'#FFFFFF'}
                title={'Unlock All Fairy Tales'}
              />
            </View>
          </View>
        </View>
        <View style={style.premiumDescription}>
          <Text style={style.descriptionText}>Auto-renewable</Text>
          <Text style={style.descriptionText}>subscription at $%/week</Text>
        </View>
        <View style={style.subscribeButton}>
          <Button
            title={'Subscribe for $%/week'}
            color={'#4870FF'}
            onPress={() => {
              Alert.alert(
                'Congrats',
                'You’re a premium user now. You will be redirected to Home Page after 3 seconds',
              );
              setTimeout(() => {
                navigation.navigate(Routes.Sleep);
              }, 3000);
            }}
          />
        </View>
        <View style={style.footer}>
          <Pressable>
            <Text style={style.footerText}>Private Policy</Text>
          </Pressable>
          <Pressable>
            <Text style={style.footerText}>Terms Of Use</Text>
          </Pressable>
          <Pressable>
            <Text style={style.footerText}>Restore</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Premium;
