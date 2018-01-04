import api from 'services/api';

import { call, put } from 'redux-saga/effects';
import ActionsCreators from 'store/ducks/search';

export function* getSearchSongs(action) {
  const response = yield call(api.get, `/songs?q=${action.search}`);

  if (response.ok) {
    yield put(ActionsCreators.searchSuccess(response.data));
  } else {
    yield put(ActionsCreators.searchFailure());
  }
}
