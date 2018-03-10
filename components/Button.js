// @flow

import React from 'react'

type Props = {
  onClick: Function,
  text: string,
}

export default ({ onClick, text }: Props) => <button onClick={onClick}>{text}</button>
