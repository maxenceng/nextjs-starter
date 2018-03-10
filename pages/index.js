// @flow

import React from 'react'

import Wrapper from '../helpers/Wrapper'
import Button from '../containers/Button'
import Message from '../containers/Message'

import '../style.scss'

const Index = () => (
  <div>
    <p className="example">Hello NextJS</p>
    <Button text="Hello Button" message="Redux OK!" />
    <Message />
  </div>
)

export default Wrapper(Index)
