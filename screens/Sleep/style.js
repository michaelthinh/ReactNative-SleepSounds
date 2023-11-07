import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  headerTextContainer: {
    marginTop: verticalScale(14),
    marginHorizontal: horizontalScale(16),
  },
  categories: {
    marginTop: verticalScale(26),
    marginLeft: horizontalScale(16),
  },
  categoryItem: {
    marginRight: horizontalScale(16),
  },
  albumItemsContainer: {
    marginTop: verticalScale(24),
    marginHorizontal: horizontalScale(16),
  },
});

export default style;
