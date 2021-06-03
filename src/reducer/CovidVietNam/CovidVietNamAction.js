import types from "./CovidVietNamTypes";                                                           
import axios from "axios";                                                                             
                                                                                                   
export const GetCovidVietNamRequest = () => {                                                     
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_COVIDVIETNAM, covidvietnam: false, });             
																										 
    try {                                                                                                
      const response = await axios.get("https://corona.lmao.ninja/v2/countries/vn");                                          
      const resData = await response.data;                                                               
      if (resData !== 200) {                                                                             
      }                                                                                                  
																										 
      dispatch({                                                                                         
        type: types.GET_ALL_COVIDVIETNAM,                                                       
        covidvietnams: resData,                                                               
      });                                                                                                
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										 