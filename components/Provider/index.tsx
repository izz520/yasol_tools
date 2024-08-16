'use client'

import React, { PropsWithChildren } from 'react'

import EthereumProvider from './Ethereum'

const Providers = ({ children }: PropsWithChildren) => {
  return <EthereumProvider>{children}</EthereumProvider>
}

export default Providers
