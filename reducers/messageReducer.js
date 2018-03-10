// @flow

import { SAY_MESSAGE } from '../actions/messageAction'

export default (state: string = '', action: { type: string, payload: string }): any => {
  switch (action.type) {
    case SAY_MESSAGE:
      return action.payload
    default:
      return state
  }
}
