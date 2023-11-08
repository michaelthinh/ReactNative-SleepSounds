import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily('Nunito', '900'),
    fontSize: scaleFontSize(34),
    lineHeight: scaleFontSize(38),
    color: '#022150',
  },
  title2: {
    fontFamily: getFontFamily('Nunito', '900'),
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  title3: {
    fontFamily: getFontFamily('Nunito', '900'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(20),
    color: '#022150',
  },
});

export default style;
