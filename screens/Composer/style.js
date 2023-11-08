import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  headerTextContainer: {
    marginTop: verticalScale(14),
    marginHorizontal: horizontalScale(16),
  },
  composerContainer: {
    marginTop: verticalScale(26),
    marginLeft: horizontalScale(16),
  },
  composerSettings: {
    marginBottom: verticalScale(24),
  },
  composerSettingTitle: {
    fontFamily: getFontFamily('Nunito', '600'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(24),
    color: '#FFFFFF',
  },
  composerSettingSubTitle: {
    fontFamily: getFontFamily('Nunito', '600'),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(16),
    color: 'rgba(235, 235, 245, 0.6)',
  },
  composerList: {
    marginTop: verticalScale(16),
  },
  composerItem: {
    marginRight: horizontalScale(8),
    width: horizontalScale(98),
    height: verticalScale(122),
    backgroundColor: '#21283F',
    borderRadius: horizontalScale(16),
  },
  composerTop: {
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  composerBottom: {
    borderBottomRightRadius: horizontalScale(16),
    borderBottomLeftRadius: horizontalScale(16),
    height: '25%',
    backgroundColor: '#2D344B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  composerTitle: {
    textAlign: 'center',
    fontFamily: getFontFamily('Nunito', '600'),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(16),
    color: '#FFFFFF',
  },
});

export default style;
