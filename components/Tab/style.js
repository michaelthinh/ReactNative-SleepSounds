import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#4870FF',
    height: verticalScale(34),
    justifyContent: 'center',
    borderRadius: horizontalScale(20),
  },
  title: {
    fontFamily: getFontFamily('Nunito', '900'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(16),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inactiveTab: {
    backgroundColor: '#21283F',
  },
  inactiveTitle: {
    color: '#FFFFFF',
  },
});

export default style;
