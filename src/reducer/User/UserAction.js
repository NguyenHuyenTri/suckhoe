import types from "./UserTypes";
import auth from '@react-native-firebase/auth';
import axios from 'axios';
/**                                                                                                      
 * Get all User Request                                                                      
 * @returns                                                                                              
 */
export const GetAllUserRequest = () => {
  return async (dispatch) => {
    dispatch({ type: types.SET_LOADING_USER, user: false, });
    try {
      auth().onAuthStateChanged((user) => {

        if (user) {
          dispatch({
            type: types.GET_ALL_USER,
            users: user,
          });
          if (user.emailVerified) {
            axios.get(`https://trinh.toolgencode.com/public/api/history/${user.email}`)
              .then((value) => {
                dispatch({
                  type: types.GET_ALL_HISTORY,
                  history: value.data.list,
                  historyId: value.data.id,
                });
              }).catch(() => {
                throw error;
              })

          }
        }
      });

    } catch (error) {
      throw error;
    }
  };
};



/**                                                                                                      
 * Get all User Request                                                                      
 * @returns                                                                                              
 */
export const GetInsertHistoryRequest = (id) => {
  return async (dispatch) => {
    dispatch({ type: types.SET_LOADING_USER, user: false, });
    try {
      auth().onAuthStateChanged((user) => {

        if (user) {
          dispatch({
            type: types.GET_ALL_USER,
            users: user,
          });
          if (user.emailVerified) {
            data = {
              email: user.email,
              id_medicines: id,
            }
            axios.post(`https://trinh.toolgencode.com/public/api/history`, data)
              .then((value) => {
                dispatch({
                  type: types.GET_ALL_HISTORY,
                  history: value.data.list,
                  historyId: value.data.id,
                });
              }).catch(() => {
                throw error;
              })

          }
        }
      });
    } catch (error) {
      throw error;
    }
  };
};


/**                                                                                                      
 * Get all history Scan Request                                                                      
 * @returns                                                                                              
 */
 export const GetAllHistoryScanRequest = () => {
  return async (dispatch) => {
    dispatch({ type: types.SET_LOADING_USER, user: false, });
    try {
      auth().onAuthStateChanged((user) => {

        if (user) {
          dispatch({
            type: types.GET_ALL_USER,
            users: user,
          });
          if (user.emailVerified) {
            axios.get(`https://trinh.toolgencode.com/public/api/historyscan/${user.email}`)
              .then((value) => {
                dispatch({
                  type: types.GET_ALL_HISTORYSCAN,
                  historyscan: value.data,
                });
              }).catch(() => {
                throw error;
              })
          }
        }
      });

    } catch (error) {
      throw error;
    }
  };
};


/**                                                                                                      
 * Get all User Request                                                                      
 * @returns                                                                                              
 */
 export const GetInsertHistoryScanRequest = (url) => {
  return async (dispatch) => {
    dispatch({ type: types.SET_LOADING_USER, user: false, });
    try {
      auth().onAuthStateChanged((user) => {

        if (user) {
          dispatch({
            type: types.GET_ALL_USER,
            users: user,
          });
          if (user.emailVerified) {
            data = {
              email: user.email,
              url: url,
            }
            axios.post(`https://trinh.toolgencode.com/public/api/historyscan`, data)
              .then((value) => {
                dispatch({
                  type: types.GET_ALL_HISTORYSCAN,
                  historyscan: value.data,
                });
              }).catch(() => {
                throw error;
              })

          }
        }
      });
    } catch (error) {
      throw error;
    }
  };
};




