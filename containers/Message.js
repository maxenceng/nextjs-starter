// @flow

import React from 'react'
import { connect } from 'react-redux'

import MessageComponent from '../components/Message'

type Props = {
  message: string,
}

const Message = ({ message }: Props) => <MessageComponent text={message} />

const mapStateToProps = ({ message }: Props) => ({
  message,
})

export default connect(mapStateToProps, {})(Message)
