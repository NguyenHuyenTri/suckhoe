import types from "./SlideTypes";                                                           
import axios from "axios";                                                                             
																										 
																										 
/**                                                                                                      
 * Get all Slide Request                                                                      
 * @returns                                                                                              
 */                                                                                                      
export const GetAllSlideRequest = () => {                                                     
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_SLIDE, slide: false, });
             
    try {                                                                                                
      const response = await axios.get("https://trinh.toolgencode.com/public/api/slides");                                          
      const resData = await response.data;   

      dispatch({                                                                                         
        type: types.GET_ALL_SLIDE,                                                       
        slides: resData,                                                               
      });                                                                                                
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
                                                                                                    
