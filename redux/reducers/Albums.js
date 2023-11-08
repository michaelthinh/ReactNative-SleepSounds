import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  albums: [
    {
      albumId: 1,
      songIds: [],
      categoryIds: [1],
      name: 'Guitar Camp',
      image:
        'https://images.unsplash.com/photo-1517771778436-39f5763f5270?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      albumId: 2,
      songIds: [],
      categoryIds: [1, 2],
      name: 'Chill Hop',
      image:
        'https://images.unsplash.com/photo-1533929702053-9986939ea193?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      albumId: 3,
      songIds: [],
      categoryIds: [2],
      name: 'Summer Night',
      image:
        'https://images.unsplash.com/photo-1581500274180-6331eea8b184?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      albumId: 4,
      songIds: [1],
      categoryIds: [2, 3],
      name: 'Awakening',
      image:
        'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      albumId: 5,
      songIds: [],
      categoryIds: [2, 3],
      name: 'Space Travel',
      image:
        'https://images.unsplash.com/photo-1535332371349-a5d229f49cb5?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      albumId: 6,
      songIds: [2, 3],
      categoryIds: [1, 2, 3, 4],
      name: 'Asians',
      image:
        'https://images.unsplash.com/photo-1535139262971-c51845709a48?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      albumId: 7,
      songIds: [2, 3],
      categoryIds: [1, 2, 3, 4],
      name: 'Mountains',
      image:
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
