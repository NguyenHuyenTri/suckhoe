import _ from "lodash";                                                                      
import types from "./CovidWorldTypes";                                                 
																							   
const initialState = {                                                                         
  isLoading: false,                                                                            
  covidworlds: [],
  covidcountrys: [],                                                                    
  covidworld: {}                                                                       
};                                                                                             
																							   
const CovidWorldReducer = (state = initialState, action) => {                            
  switch (action.type) {                                                                       
    case types.SET_LOADING_COVIDWORLD:                                              
      return { ...state, isLoading: true };                                                    
																							   
    case types.GET_ALL_COVIDWORLD:                                                  
      return { ...state, covidworlds: action.covidworlds,covidcountrys:action.covidcountrys, isLoading: false };  
																							   
    default:                                                                                   
      return state;                                                                            
  }                                                                                            
};                                                                                             
																							   
export default CovidWorldReducer;                                                        
