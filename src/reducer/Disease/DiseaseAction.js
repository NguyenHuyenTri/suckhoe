import types from "./DiseaseTypes";                                                           
import axios from "axios";                                                                             
																										 
/**                                                                                                      
 * Get all Disease Request                                                                      
 * @returns                                                                                              
 */                                                                                                      
export const GetAllDiseaseRequest = () => {                                                     
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_DISEASE, disease: false, });             
																										 
    try {                                                                                                
      const response = await axios.get("https://trinh.toolgencode.com/public/api/diseases");                                          
      const resData = await response.data;                                                               
      if (resData !== 200) {                                                                             
      }                                                                                                  
																										 
      dispatch({                                                                                         
        type: types.GET_ALL_DISEASE,                                                       
        diseases: resData,                                                               
      });                                                                                                
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										                                                                                                  
