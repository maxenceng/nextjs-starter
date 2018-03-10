// @flow

import React from 'react'

import Wrapper from '../helpers/Wrapper'
import Button from '../containers/Button'
import Message from '../containers/Message'

import '../style.scss'

export default Wrapper(() => (
  <div>
    <p className="example">About NextJS</p>
    <Button text="About Button" message="About OK!" />
    <Message />
  </div>
))
