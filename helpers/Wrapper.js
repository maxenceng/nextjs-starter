// @flow

import React from 'react'
import { Provider } from 'react-redux'

import Layout from './Layout'
import store from '../store'

import '../style.scss'

export default Component => (
  // eslint-disable-next-line react/prefer-stateless-function
  class Wrapper extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Layout>
            <Component />
          </Layout>
        </Provider>
      )
    }
  }
)
