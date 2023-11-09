import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  closeButton: {
    width: horizontalScale(24),
    height: verticalScale(24),
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: horizontalScale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
