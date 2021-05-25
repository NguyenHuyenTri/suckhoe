import types from "./DrugTypes";                                                           
import axios from "axios";                                                                             
                                                                                                      																										 
/**                                                                                                      
 * Get all Drug Request                                                                      
 * @returns                                                                                              
 */                                                                                                      
export const GetAllDrugRequest = () => {                                                     
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_DRUG, drug: false, });             
																										 
    try {                                                                                                
      const response = await axios.get("https://trinh.toolgencode.com/public/api/medicines");                                          
      const resData = await response.data;                                                          
      if (resData !== 200) {                                                                             
      }                                                                                                  
																										 
      dispatch({                                                                                         
        type: types.GET_ALL_DRUG,                                                       
        drugs: resData,                                                     
      });                                                                                                
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										                                                                                                    
