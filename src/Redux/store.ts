import { configureStore } from '@reduxjs/toolkit';
import SkillsReducer from './Reducers/SkillsReducer';
import NavbarReducer from './Reducers/NavbarReducer';

const store = configureStore({
  reducer: {
    SkillsReducer,
    NavbarReducer
  },
});

export default store;