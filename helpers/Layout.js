// @flow

import * as React from 'react'

import Nav from '../components/Nav'

type Props = {
  children: React.Node
}

export default ({ children }: Props) => (
  <div>
    <Nav />
    {children}
  </div>
)
