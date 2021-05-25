import types from "./CategoryTypes";                                                           
import axios from "axios";                                                                             
																										 
/**                                                                                                      
 * Get all Category Request                                                                      
 * @returns                                                                                              
 */                                                                                                      
export const GetAllCategoryRequest = () => {                                                     
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_CATEGORY, category: false, });             
																										 
    try {                                                                                                
      const response = await axios.get("https://trinh.toolgencode.com/public/api/categories");                                          
      const resData = await response.data;                                                               
																										 
      dispatch({                                                                                         
        type: types.GET_ALL_CATEGORY,                                                       
        categorys: resData,                                                               
      });                                                                                                
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
                                                                                          
