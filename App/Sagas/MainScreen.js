import { put, call } from 'redux-saga/effects'
import MainActions from 'App/Stores/MainScreen/Actions'
import { mrsoiService } from 'App/Services/mrsoiService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake home informations.
 * Feel free to remove it.
 */
export function* fetchHome() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(MainActions.fetchHomeLoading())

  // Fetch home informations from an API
  const home = yield call(mrsoiService.fetchHome)
  console.log('function*fetchHome -> home', home)
  if (home) {
    yield put(MainActions.fetchHomeSuccess(home))
  } else {
    yield put(MainActions.fetchHomeFailure('There was an error while fetching home informations.'))
  }
}
