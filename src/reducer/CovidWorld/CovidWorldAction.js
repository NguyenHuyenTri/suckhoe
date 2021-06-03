import types from "./CovidWorldTypes";                                                           
import axios from "axios";                                                                             
																										 
																										 
/**                                                                                                      
 * Get all CovidWorld Request                                                                      
 * @returns                                                                                              
 */                                                                                                      
export const GetAllCovidWorldRequest = () => {                                                     
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_COVIDWORLD, covidworld: false, });             
																										 
    try {                                                                                                
      const response = await axios.get("https://disease.sh/v3/covid-19/all"); 
      const responseall = await axios.get("https://corona.lmao.ninja/v2/countries");                                         
      const resData = await response.data;
      const resDataall = await responseall.data;                                                           
      dispatch({                                                                                         
        type: types.GET_ALL_COVIDWORLD,                                                       
        covidworlds: resData, 
        covidcountrys: resDataall,                                                            
      });                                                                                                
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										                                                                                                 
