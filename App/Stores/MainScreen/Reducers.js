/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { MainTypes } from './Actions'

export const fetchHomeLoading = (state) => ({
  ...state,
  homeIsLoading: true,
  homeErrorMessage: null,
})

export const fetchHomeSuccess = (state, { home }) => ({
  ...state,
  home: home,
  homeIsLoading: false,
  homeErrorMessage: null,
})

export const fetchHomeFailure = (state, { errorMessage }) => ({
  ...state,
  home: {},
  homeIsLoading: false,
  homeErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [MainTypes.FETCH_HOME_LOADING]: fetchHomeLoading,
  [MainTypes.FETCH_HOME_SUCCESS]: fetchHomeSuccess,
  [MainTypes.FETCH_HOME_FAILURE]: fetchHomeFailure,
})
