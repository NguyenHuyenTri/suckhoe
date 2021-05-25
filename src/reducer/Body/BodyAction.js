import types from "./BodyTypes";                                                           
import axios from "axios";                                                                             
																										 
                                                                                                                                                                                                         
																										 
/**                                                                                                      
 * get Body By Id                                                                            
 * @param {*} id                                                                                         
 * @returns                                                                                              
 */                                                                                                      
export const getBodyByIdRequest = (id) => {                                                  
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_BODY, body: false, });             
																										 
    try {                                                                                                
      // call get Body by id                                                                 
      const response = await axios.get(`https://trinh.toolgencode.com/public/api/bodies/${id}`);                                      
																										 
      dispatch({ type: types.GET_BY_ID_BODY, bodys: response.data});  
																										 
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										                                                                                               
