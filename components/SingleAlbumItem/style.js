import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  image: {
    width: horizontalScale(148),
    height: verticalScale(148),
    borderRadius: horizontalScale(16),
  },
  playButton: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(8),
    right: horizontalScale(12),
    width: horizontalScale(24),
    height: verticalScale(24),
    borderRadius: horizontalScale(24),
    backgroundColor: 'rgba(20, 25, 39, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumInfo: {
    marginTop: verticalScale(12),
  },
  albumNumbers: {
    marginTop: verticalScale(6),
    color: 'rgba(235, 235, 245, 0.6)',
  },
});

export default style;
