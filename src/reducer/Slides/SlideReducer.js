import _ from "lodash";                                                                      
import types from "./SlideTypes";                                                 
																							   
const initialState = {                                                                         
  isLoading: false,                                                                            
  slides: [],                                                                     
  slide: {}                                                                       
};                                                                                             
																							   
const SlideReducer = (state = initialState, action) => {                            
  switch (action.type) {                                                                       
    case types.SET_LOADING_SLIDE:                                              
      return { ...state, isLoading: true };                                                    
																							   
    case types.GET_ALL_SLIDE:                                                  
      return { ...state, slides: action.slides, isLoading: false };  
																							   
    default:                                                                                   
      return state;                                                                            
  }                                                                                            
};                                                                                             
																							   
export default SlideReducer;                                                        
