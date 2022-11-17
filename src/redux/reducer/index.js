import * as CommonConstants from "../../common/commonConstants";

const initialState = CommonConstants.INITIAL_STATE;

const reducer = (
  state = initialState,
  action = {
    type: CommonConstants.LOAD_RANDOM_IDEA,
  }
) => {
  switch (action.type) {
    case CommonConstants.LOAD_RANDOM_IDEA:
      return { ...state, randomIdea: initialState, loading: true };
    case CommonConstants.GET_RANDOM_IDEA_OK:
      return { ...state, randomIdea: action.payload, loading: false };

    default:
      return state;
  }
};
export default reducer;
