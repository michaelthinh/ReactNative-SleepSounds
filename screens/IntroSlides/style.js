import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  image: {
    marginTop: verticalScale(170),
    marginHorizontal: horizontalScale(35),
    alignItems: 'center',
  },
  title: {
    marginTop: verticalScale(32),
    marginHorizontal: horizontalScale(24),
    alignItems: 'center',
  },
  description: {
    marginTop: verticalScale(8),
    marginHorizontal: horizontalScale(24),
  },
  text: {
    fontFamily: getFontFamily('Nunito', '600'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(24),
    color: 'rgba(235, 235, 245, 0.6)',
    textAlign: 'center',
  },
});

export default style;
