import { call, put, takeLatest, all } from "redux-saga/effects";
import * as CommonConstants from "../../common/commonConstants";
import * as api from "../../api/getIdeaFromAPI";

function* getNewsDataWatcher() {
  yield all([
    takeLatest(CommonConstants.LOAD_RANDOM_IDEA, pushHeadlinesToStore),
  ]);
}

function* pushHeadlinesToStore(action) {
  const randomIdea = yield call(api.getAnIdea, "");
  yield put({
    type: CommonConstants.GET_RANDOM_IDEA_OK,
    payload: randomIdea,
  });
}

export default getNewsDataWatcher;
