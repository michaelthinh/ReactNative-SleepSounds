import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  headerTextContainer: {
    marginTop: verticalScale(14),
    marginHorizontal: horizontalScale(16),
  },
  categories: {
    marginVertical: verticalScale(26),
    marginLeft: horizontalScale(16),
  },
  categoryItem: {
    marginRight: horizontalScale(16),
  },
  albumItemsContainer: {
    marginHorizontal: horizontalScale(16),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  singleAlbumItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(23),
  },
});

export default style;
