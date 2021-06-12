import _ from "lodash";                                                                      
import types from "./BodyTypes";                                                 
																							   
const initialState = {                                                                         
  isLoading: false,                                                                            
  bodys: [],                                                                                                                                          
};                                                                                             
																							   
const BodyReducer = (state = initialState, action) => {                            
  switch (action.type) {                                                                       
    case types.SET_LOADING_BODY:                                              
      return { ...state,bodys:[], isLoading: true };                                                    
																							   
    case types.GET_BY_ID_BODY:                                                
      return { ...state, bodys: action.bodys, isLoading: false };    
																							   
    default:                                                                                   
      return state;                                                                            
  }                                                                                            
};                                                                                             
																							   
export default BodyReducer;                                                        
