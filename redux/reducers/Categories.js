import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      categoryId: 1,
      name: 'Instumental',
      description:
        'Instrumental songs are compositions of music that do not include any vocals or lyrics. They feature a range of instruments, from classical instruments including pianos, violins, and cellos, to more modern instruments such as guitars, drums, and synthesizers. The focus of instrumental songs is on the music itself, with the instruments communicating the emotions and energy of the piece. Instrumental music can be found in a wide range of genres, from classical and jazz to rock, electronic, and hip-hop. Some popular instrumental artists include Yanni, John Williams, and Hans Zimmer.',
    },
    {
      categoryId: 2,
      name: 'Ambient',
      description:
        'Ambient songs typically have a minimalistic and atmospheric sound, often featuring synthesizers, pads, and other electronic sounds. They are designed to create a relaxing or meditative atmosphere, and may contain repetitive or slowly evolving musical patterns. Often lacking traditional song structure or lyrics, ambient music is more focused on creating a mood or setting a tone. Popular examples of ambient music artists include Brian Eno, Aphex Twin, and Tangerine Dream.',
    },
    {
      categoryId: 3,
      name: 'Child',
      description:
        "Child songs, also known as children's songs, are musical compositions created specifically for young children. They are often designed to be simple, catchy, and easy to sing, with repetitive lyrics that are easy for kids to remember. Child songs may feature themes related to education, play, family, friends, and other topics that are relevant and interesting to young children. Often, these songs are accompanied by simple dances or gestures that children can learn and replicate. Child songs can be found in a variety of genres, from nursery rhymes and folk songs to modern pop and hip-hop. Some popular children's song artists include Raffi, Sharon, Lois & Bram, and The Wiggles",
    },
    {
      categoryId: 4,
      name: 'Meditation',
      description:
        'Meditation songs are musical compositions that are designed to aid in the practice of meditation. These songs typically feature slow, calming melodies, with soothing instruments like flutes, harps, and soft percussion, as well as ambient sounds like running water and bird calls. Many meditation songs also incorporate elements of nature and spirituality, like the sounds of wind or the chanting of mantras. The purpose of meditation songs is to help create a peaceful, relaxing environment that can support the mental focus and stillness needed for meditation practice. These songs are often used in various forms of meditation, including mindfulness meditation, guided meditation, and yoga. Some popular meditation song artists include Deva Premal, Snatam Kaur, and Karunesh.',
    },
  ],
  selectedCategoryId: 1,
};

export const Catergories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} = Catergories.actions;
export default Catergories.reducer;
