import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  premiumBackground: {
    flex: 1,
  },
  closeButton: {
    marginTop: verticalScale(16),
    marginHorizontal: horizontalScale(16),
  },
  premiumInfo: {
    marginTop: verticalScale(98),
    marginLeft: horizontalScale(65),
  },
  premiumItemContainer: {
    marginTop: verticalScale(16),
  },
  premiumItem: {
    marginBottom: verticalScale(16),
    flexDirection: 'row',
    gap: horizontalScale(16),
  },
  premiumDescription: {
    marginTop: verticalScale(124),
    marginHorizontal: horizontalScale(48),
  },
  descriptionText: {
    color: 'rgba(255, 255, 255, 0.54)',
    fontFamily: getFontFamily('Nunito', '600'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(24),
    textAlign: 'center',
  },
  subscribeButton: {
    marginTop: verticalScale(24),
    marginHorizontal: verticalScale(24),
  },
  footer: {
    marginTop: verticalScale(32),
    marginHorizontal: horizontalScale(64),
    flexDirection: 'row',
    gap: horizontalScale(16),
  },
  footerText: {
    fontFamily: getFontFamily('Nunito', '600'),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(16),
    textDecorationLine: 'underline',
    color: 'rgba(235, 235, 245, 0.6)',
  },
});

export default style;
