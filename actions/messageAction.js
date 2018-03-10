// @flow

import { createAction } from 'redux-actions'

export const SAY_MESSAGE = 'SAY_MESSAGE'

export const sayMessage = createAction(SAY_MESSAGE)

export default (message: string) => (dispatch: Function) => {
  dispatch(sayMessage(message))
}
