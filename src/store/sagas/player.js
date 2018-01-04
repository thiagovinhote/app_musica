import { cps, put } from 'redux-saga/effects';
import { NativeModules } from 'react-native';

import ActionsCreators from 'store/ducks/player';

const { RNSound } = NativeModules;

export function* setSong(action) {
  try {
    yield cps(RNSound.prepare, action.song.url, 0, {});

    yield put(ActionsCreators.playerSetSongSuccess(action.song, action.list));
    yield put(ActionsCreators.playerPlay());
  } catch (e) {
    yield put(ActionsCreators.playerSetSongFailure());
  }
}

export function* play() {
  yield cps(RNSound.play, 0);
}

export function* pause() {
  yield cps(RNSound.pause, 0);
}
