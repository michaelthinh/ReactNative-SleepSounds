import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  songs: [
    {
      songId: 1,
      name: 'Nang Am Xa Dan',
      singer: 'Son Tung MTP',
      image:
        'https://images.unsplash.com/photo-1507697364665-69eec30ea71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80',
      source: '',
      categoryIds: [1, 2],
    },
    {
      songId: 2,
      name: 'Em cua ngay hom qua',
      singer: 'Son Tung MTP',
      image:
        'https://images.unsplash.com/photo-1507697364665-69eec30ea71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80',
      source: '',
      categoryIds: [2, 3],
    },
    {
      songId: 3,
      name: 'Con mua ngang qua',
      singer: 'Son Tung MTP',
      image:
        'https://images.unsplash.com/photo-1507697364665-69eec30ea71e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80',
      source: '',
      categoryIds: [4],
    },
  ],
  selectedSongId: 1,
};

export const Songs = createSlice({
  name: 'songs',
  initialState: initialState,
  reducers: {
    resetSongs: () => {
      return initialState;
    },
    updateSelectedSongId: (state, action) => {
      state.selectedSongId = action.payload;
    },
  },
});

export const {resetSongs, updateSelectedSongId} = Songs.actions;
export default Songs.reducer;
