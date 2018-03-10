// @flow

import React from 'react'
import { connect } from 'react-redux'

import ButtonComponent from '../components/Button'
import { sayMessage } from '../actions/messageAction'

type Props = {
  text: string,
  message: string,
  sayMessage: Function,
}

class Button extends React.Component<Props, null> {
  handleClick = () => this.props.sayMessage(this.props.message)

  render() {
    return (
      <ButtonComponent text={this.props.text} onClick={this.handleClick} />
    )
  }
}

export default connect(null, { sayMessage })(Button)
