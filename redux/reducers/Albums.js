import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  albums: [
    {
      albumId: 1,
      songIds: [1, 2],
      categoryIds: [1],
      name: 'Guitar Camp',
      image:
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      albumId: 2,
      songIds: [2, 3],
      categoryIds: [1, 2],
      name: 'Chill Hop',
      image:
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      albumId: 3,
      songIds: [1],
      categoryIds: [1],
      name: 'Summer Night',
      image:
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      albumId: 4,
      songIds: [3],
      categoryIds: [1, 3],
      name: 'Awakening',
      image:
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
    {
      albumId: 5,
      songIds: [2],
      categoryIds: [2, 3],
      name: 'Space Travel',
      image:
        'https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },
  ],
  selectedAlbumId: 1,
};

export const Albums = createSlice({
  name: 'albums',
  initialState: initialState,
  reducers: {
    resetAlbums: () => {
      return initialState;
    },
    updateSelectedAlbumId: (state, action) => {
      state.selectedAlbumId = action.payload;
    },
  },
});

export const {resetAlbums, updateSelectedAlbumId} = Albums.actions;
export default Albums.reducer;
