import { takeLatest, all } from 'redux-saga/effects'
import { MainTypes } from 'App/Stores/MainScreen/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchHome } from './MainScreen'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(MainTypes.FETCH_HOME, fetchHome),
  ])
}
