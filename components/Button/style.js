import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('Nunito', '900'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(16),
    color: 'rgba(254, 254, 254, 1)',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default style;
