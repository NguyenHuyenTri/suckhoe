import { combineReducers, createStore ,applyMiddleware } from 'redux';
import thunk from "redux-thunk" 

import DrugReducer from '../reducer/Drug/DrugReducer';
import BodyReducer from '../reducer/Body/BodyReducer';
import CategoryReducer from '../reducer/Category/CategoryReducer';
import DiseaseReducer from '../reducer/Disease/DiseaseReducer';
import SlideReducer from '../reducer/Slides/SlideReducer'

const store = createStore( 
    combineReducers({ 
        drug:DrugReducer,
        body:BodyReducer,
        slide:SlideReducer,
        category:CategoryReducer,
        disease:DiseaseReducer,
    }),applyMiddleware(thunk) 
  );

export  {store};