import _ from "lodash";                                                                      
import types from "./CovidVietNamTypes";                                                 
																							   
const initialState = {                                                                         
  isLoading: false,                                                                            
  covidvietnams: [],                                                                     
  covidvietnam: {}                                                                       
};                                                                                             
																							   
const CovidVietNamReducer = (state = initialState, action) => {                            
  switch (action.type) {                                                                       
    case types.SET_LOADING_COVIDVIETNAM:                                              
      return { ...state, isLoading: true };                                                    
																							   
    case types.GET_ALL_COVIDVIETNAM:                                                  
      return { ...state, covidvietnams: action.covidvietnams, isLoading: false };  
																							   
    default:                                                                                   
      return state;                                                                            
  }                                                                                            
};                                                                                             
																							   
export default CovidVietNamReducer;                                                        
