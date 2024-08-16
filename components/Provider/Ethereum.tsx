import React, { PropsWithChildren } from 'react'

import useEventEthereum from '@/hooks/useEventEthereum'

const EthereumProvider = ({ children }: PropsWithChildren) => {
  useEventEthereum()
  return <>{children}</>
}

export default EthereumProvider
