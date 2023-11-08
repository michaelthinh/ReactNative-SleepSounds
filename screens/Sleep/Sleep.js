import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, ScrollView, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

import Header from '../../components/Header/Header';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';
import Tab from '../../components/Tab/Tab';
import SingleAlbumItem from '../../components/SingleAlbumItem/SingleAlbumItem';

const Sleep = () => {
  const categories = useSelector(state => state.categories);
  const albums = useSelector(state => state.albums);

  const dispatch = useDispatch();

  const [albumItems, setAlbumItems] = useState([]);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    const items = albums.albums.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setAlbumItems(items);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={[globalStyle.mainBackground, globalStyle.flex]}>
      <View style={style.headerTextContainer}>
        <Header type={2} title={'Sleep'} color={'#FFF'} />
      </View>
      <View style={style.categories}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingCategories) {
              return;
            }
            setIsLoadingCategories(true);
            let newData = pagination(
              categories.categories,
              categoryPage,
              categoryPageSize,
            );
            if (newData.length > 0) {
              setCategoryList(prevState => [...prevState, ...newData]);
              setCategoryPage(prevState => prevState + 1);
            }
            setIsLoadingCategories(false);
          }}
          data={categoryList}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({item}) => (
            <View style={style.categoryItem} key={item.categoryId}>
              <Tab
                tabId={item.categoryId}
                onPress={value => dispatch(updateSelectedCategoryId(value))}
                title={item.name}
                isInactive={item.categoryId !== categories.selectedCategoryId}
              />
            </View>
          )}
        />
      </View>
      <ScrollView>
        {albumItems.length > 0 ? (
          <View style={style.albumItemsContainer}>
            {albumItems.map(value => {
              const categoryInformation = categories.categories.find(
                val => val.categoryId === categories.selectedCategoryId,
              );
              return (
                <View key={value.albumId} style={style.singleAlbumItem}>
                  <SingleAlbumItem
                    // onPress={selectedDonationId => {
                    //   dispatch(updateSelectedDonationId(selectedDonationId));
                    //   navigation.navigate(Routes.SingleDonationItem, {
                    //     categoryInformation: categoryInformation,
                    //   });
                    // }}
                    albumItemId={value.albumId}
                    image={value.image}
                    albumTitle={value.name}
                    categoryTitle={categoryInformation.name}
                    albumNumberOfSongs={value.songIds.length}
                  />
                </View>
              );
            })}
          </View>
        ) : (
          <View style={style.albumItemsContainer}>
            <Header
              type={3}
              title={'No albums found with this category'}
              color={'#FFFFFF'}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Sleep;
