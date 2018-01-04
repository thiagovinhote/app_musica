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
    console.tron.log(e);
    yield put(ActionsCreators.playerSetSongFailure());
  }
}

export function* play() {
  try {
    yield cps(RNSound.play, 0);
  } catch (e) {
    console.tron.log(e);
  }
}

export function* pause() {
  try {
    yield cps(RNSound.pause, 0);
  } catch (e) {
    console.tron.log(e);
  }
}
