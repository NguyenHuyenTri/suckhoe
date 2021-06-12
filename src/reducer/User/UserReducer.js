import _ from "lodash";
import types from "./UserTypes";

const initialState = {
  isLoading: false,
  users: [],
  history: [],
  historyId: [],
  historyscan:[],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING_USER:
      return { ...state, isLoading: true };

    case types.GET_ALL_USER:
      return { ...state, users: action.users, isLoading: false };

    case types.GET_ALL_HISTORY:
      return { ...state, history: action.history, historyId: action.historyId, isLoading: false };

    case types.GET_ALL_HISTORYSCAN:
      return { ...state, historyscan: action.historyscan, isLoading: false };

    default:
      return state;
  }
};

export default UserReducer;
