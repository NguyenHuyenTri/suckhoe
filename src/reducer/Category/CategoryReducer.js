import _ from "lodash";
import types from "./CategoryTypes";

const initialState = {
  isLoading: false,
  categorys: [],
  category: {}
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING_CATEGORY:
      return { ...state, isLoading: true };

    case types.GET_ALL_CATEGORY:
      return { ...state, categorys: action.categorys, isLoading: false };

    default:
      return state;
  }
};

export default CategoryReducer;
