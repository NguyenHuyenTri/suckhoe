import types from "./CovidVietNamTypes";                                                           
import axios from "axios";                                                                             
                                                                                                   
export const GetCovidVietNamRequest = () => {                                                     
  return async (dispatch) => {                                                                           
    dispatch({ type: types.SET_LOADING_COVIDVIETNAM, covidvietnam: false, });             
																										 
    try {                                                                                                
      const response = await axios.get("https://corona.lmao.ninja/v2/countries/vn"); 
      const response2 = await axios.get("https://trinh.toolgencode.com/public/api/covid/vn");                                         
      const resData = await response.data; 
      const rescovid = await response2.data;                                                              
      if (resData !== 200) {                                                                             
      }                                                                                                  
																										 
      dispatch({                                                                                         
        type: types.GET_ALL_COVIDVIETNAM,                                                       
        covidvietnams: resData, 
        covidrow:rescovid,                                                              
      });                                                                                                
    } catch (error) {                                                                                    
      throw error;                                                                                       
    }                                                                                                    
  };                                                                                                     
};                                                                                                       
																										 