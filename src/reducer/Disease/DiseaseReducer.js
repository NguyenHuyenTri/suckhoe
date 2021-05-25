import _ from "lodash";                                                                      
import types from "./DiseaseTypes";                                                 
																							   
const initialState = {                                                                         
  isLoading: false,                                                                            
  diseases: [],                                                                                                                                      
};                                                                                             
																							   
const DiseaseReducer = (state = initialState, action) => {                            
  switch (action.type) {                                                                       
    case types.SET_LOADING_DISEASE:                                              
      return { ...state, isLoading: true };                                                    
  																   
    case types.GET_ALL_DISEASE:                                                  
      return { ...state, diseases: action.diseases, isLoading: false };  
  
    default:                                                                                   
      return state;                                                                            
  }                                                                                            
};                                                                                             
																							   
export default DiseaseReducer;                                                        
