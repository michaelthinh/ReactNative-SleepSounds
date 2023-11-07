import React from 'react';
import {
  Image,
  SafeAreaView,
  View,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronRight,
  faCrown,
  faFilter,
  faHandcuffs,
  faHeadphones,
  faHeart,
  faRightFromBracket,
  faShare,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.mainBackground, globalStyle.flex]}>
      <View style={style.headerTextContainer}>
        <Header type={2} title={'Profile'} color={'#FFF'} />
      </View>
      <View style={style.profileBox}>
        <View style={style.image}>
          <Image
            source={require('../../assets/images/anonymus-avatar.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={style.name}>Authorization</Text>
        <Text style={style.info}>
          In order to access the library of favorite packs of sounds, log in
          with Apple ID
        </Text>
        <View style={style.button}>
          <Button
            title="Login with Google"
            color={'#141927'}
            onPress={() => {}}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.optionsContainer}>
        <Pressable style={style.itemContainer}>
          <View style={style.startItem}>
            <View style={[style.iconContainer, {backgroundColor: '#4C382D'}]}>
              <FontAwesomeIcon
                icon={faCrown}
                size={scaleFontSize(24)}
                color="#FF9C41"
              />
            </View>
            <View style={style.textContainer}>
              <Text style={style.text}>Get Premium</Text>
            </View>
          </View>
          <View style={style.chevron}>
            <FontAwesomeIcon
              icon={faChevronRight}
              color="#FFFFFF"
              size={scaleFontSize(24)}
            />
          </View>
        </Pressable>
        <Pressable style={style.itemContainer}>
          <View style={style.startItem}>
            <View style={[style.iconContainer, {backgroundColor: '#202e5b'}]}>
              <FontAwesomeIcon
                icon={faHeart}
                size={scaleFontSize(24)}
                color="#4870ff"
              />
            </View>
            <View style={style.textContainer}>
              <Text style={style.text}>Favorites</Text>
            </View>
          </View>
          <View style={style.chevron}>
            <FontAwesomeIcon
              icon={faChevronRight}
              color="#FFFFFF"
              size={scaleFontSize(24)}
            />
          </View>
        </Pressable>
        <Pressable style={style.itemContainer}>
          <View style={style.startItem}>
            <View style={[style.iconContainer, {backgroundColor: '#0f4739'}]}>
              <FontAwesomeIcon
                icon={faHandcuffs}
                size={scaleFontSize(24)}
                color="#00d971"
              />
            </View>
            <View style={style.textContainer}>
              <Text style={style.text}>Private Policy</Text>
            </View>
          </View>
          <View style={style.chevron}>
            <FontAwesomeIcon
              icon={faChevronRight}
              color="#FFFFFF"
              size={scaleFontSize(24)}
            />
          </View>
        </Pressable>
        <Pressable style={style.itemContainer}>
          <View style={style.startItem}>
            <View style={[style.iconContainer, {backgroundColor: '#0f4739'}]}>
              <FontAwesomeIcon
                icon={faFilter}
                size={scaleFontSize(24)}
                color="#00d971"
              />
            </View>
            <View style={style.textContainer}>
              <Text style={style.text}>Private Policy</Text>
            </View>
          </View>
          <View style={style.chevron}>
            <FontAwesomeIcon
              icon={faChevronRight}
              color="#FFFFFF"
              size={scaleFontSize(24)}
            />
          </View>
        </Pressable>
        <Pressable style={style.itemContainer}>
          <View style={style.startItem}>
            <View style={[style.iconContainer, {backgroundColor: '#4c1e32'}]}>
              <FontAwesomeIcon
                icon={faStar}
                size={scaleFontSize(24)}
                color="#ff2d55"
              />
            </View>
            <View style={style.textContainer}>
              <Text style={style.text}>Rate Us</Text>
            </View>
          </View>
          <View style={style.chevron}>
            <FontAwesomeIcon
              icon={faChevronRight}
              color="#FFFFFF"
              size={scaleFontSize(24)}
            />
          </View>
        </Pressable>
        <Pressable style={style.itemContainer}>
          <View style={style.startItem}>
            <View style={[style.iconContainer, {backgroundColor: '#4c1e32'}]}>
              <FontAwesomeIcon
                icon={faHeadphones}
                size={scaleFontSize(24)}
                color="#ff2d55"
              />
            </View>
            <View style={style.textContainer}>
              <Text style={style.text}>Send Feedback</Text>
            </View>
          </View>
          <View style={style.chevron}>
            <FontAwesomeIcon
              icon={faChevronRight}
              color="#FFFFFF"
              size={scaleFontSize(24)}
            />
          </View>
        </Pressable>
        <Pressable style={style.itemContainer}>
          <View style={style.startItem}>
            <View style={[style.iconContainer, {backgroundColor: '#4c1e32'}]}>
              <FontAwesomeIcon
                icon={faShare}
                size={scaleFontSize(24)}
                color="#ff2d55"
              />
            </View>
            <View style={style.textContainer}>
              <Text style={style.text}>Share</Text>
            </View>
          </View>
          <View style={style.chevron}>
            <FontAwesomeIcon
              icon={faChevronRight}
              color="#FFFFFF"
              size={scaleFontSize(24)}
            />
          </View>
        </Pressable>
        <Pressable style={style.itemContainer}>
          <View style={style.startItem}>
            <View style={[style.iconContainer, {backgroundColor: '#FF0000'}]}>
              <FontAwesomeIcon
                icon={faRightFromBracket}
                size={scaleFontSize(24)}
                color="#FFFFFF"
              />
            </View>
            <View style={style.textContainer}>
              <Text style={style.text}>Log Out</Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
