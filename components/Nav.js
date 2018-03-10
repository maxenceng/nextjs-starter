// @flow

import React from 'react'
import Link from 'next/link'

import { routes } from '../helpers/routes.json'


export default () => routes.map(route => <Link key={route} href={`/${route}`}><a>{route}</a></Link>)
