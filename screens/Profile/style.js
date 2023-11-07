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
  profileBox: {
    height: horizontalScale(252),
    paddingHorizontal: horizontalScale(32),
    paddingVertical: verticalScale(24),
    marginHorizontal: horizontalScale(16),
    marginTop: verticalScale(18),
    borderRadius: horizontalScale(24),
    backgroundColor: '#21283F',
  },
  image: {
    alignItems: 'center',
  },
  name: {
    fontFamily: getFontFamily('Nunito', '600'),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  info: {
    fontFamily: getFontFamily('Nunito', '600'),
    color: 'rgba(235, 235, 245, 0.6)',
    textAlign: 'center',
  },
  button: {
    marginTop: verticalScale(28),
  },
  itemContainer: {
    width: '100%',
    height: horizontalScale(56),
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(8),
    borderBottomWidth: 1,
    borderBottomColor: '#21283F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: getFontFamily('Nunito', '600'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(24),
    color: '#FFFFFF',
  },
  optionsContainer: {
    marginTop: verticalScale(25),
  },
  startItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: horizontalScale(16),
  },
  iconContainer: {
    height: horizontalScale(40),
    width: horizontalScale(40),
    borderRadius: horizontalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
