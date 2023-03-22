import { createContext, useContext } from 'react';
import { initialState } from './shopReducer';
const ShopContext = createContext(initialState);
