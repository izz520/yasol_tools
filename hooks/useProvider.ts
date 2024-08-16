import { useEffect, useState } from 'react'

import { ethers } from 'ethers'

const useProvider = () => {
  const [provider, setProvider] = useState<ethers.providers.JsonRpcProvider>()

  useEffect(() => {
    if (window.ethereum) {
      setProvider(new ethers.providers.Web3Provider(window.ethereum))
    }
  }, [])

  return {
    provider,
  }
}

export default useProvider
