import { combineReducers, createStore ,applyMiddleware } from 'redux';
import thunk from "redux-thunk" 

import DrugReducer from '../reducer/Drug/DrugReducer';
import BodyReducer from '../reducer/Body/BodyReducer';
import CategoryReducer from '../reducer/Category/CategoryReducer';
import DiseaseReducer from '../reducer/Disease/DiseaseReducer';
import SlideReducer from '../reducer/Slides/SlideReducer'
import CovidVietNamReducer from '../reducer/CovidVietNam/CovidVietNamReducer';
import CovidWorldReducer from '../reducer/CovidWorld/CovidWorldReducer'
import UserReducer   from '../reducer/User/UserReducer'
const store = createStore( 
    combineReducers({ 
        drug:DrugReducer,
        body:BodyReducer,
        slide:SlideReducer,
        category:CategoryReducer,
        disease:DiseaseReducer,
        covidworld:CovidWorldReducer,
        covidvn:CovidVietNamReducer,
        user:UserReducer,
    }),applyMiddleware(thunk) 
  );

export  {store};