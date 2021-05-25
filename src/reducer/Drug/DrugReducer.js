import _ from "lodash";                                                                      
import types from "./DrugTypes";                                                 
																							   
const initialState = {                                                                         
  isLoading: false,                                                                            
  drugs: [],                                                                     
  drug: {}                                                                       
};                                                                                             
																							   
const DrugReducer = (state = initialState, action) => {                            
  switch (action.type) {                                                                       
    case types.SET_LOADING_DRUG:                                              
      return { ...state, isLoading: true };                                                    
																							   
    case types.GET_ALL_DRUG:                                                  
      return { ...state, drugs: action.drugs, isLoading: false };  
																							   
    default:                                                                                   
      return state;                                                                            
  }                                                                                            
};                                                                                             
																							   
export default DrugReducer;                                                        
