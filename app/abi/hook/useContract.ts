import { useCallback, useMemo } from 'react'

import { Contract, ethers } from 'ethers'

import AbiStore from '@/store/abi-store'
import UserStore from '@/store/user-store'

import useProvider from '@/hooks/useProvider'
import networkList from '@/libs/network.json'

import { IAbiItem } from '../types'

const useContract = () => {
  const contracts = AbiStore((state) => state.contracts)
  const selectKey = AbiStore((state) => state.selectKey)
  const connectChainId = UserStore((state) => state.chainId)
  const { provider: ethereumProvider } = useProvider()
  const selectContract = useMemo(() => {
    return contracts.find((item) => item.network + item.address === selectKey)
  }, [selectKey, contracts])

  const chainInfo = useMemo(
    () => networkList.find((item) => item.chainID === selectContract?.network),
    [selectContract, networkList]
  )

  const provider = useMemo(() => {
    const currentChain = Number(connectChainId)
    const currentContractChain = Number(selectContract?.network)
    if (currentContractChain !== currentChain) {
      console.log('use custom rpc')
      const rpcProvider = new ethers.providers.JsonRpcProvider(chainInfo?.rpcUrls[0])
      console.log('rpcProvider', rpcProvider)

      return rpcProvider
    }
    return ethereumProvider
  }, [ethereumProvider, connectChainId, selectContract, chainInfo])

  const methods = useMemo(() => {
    const list = JSON.parse(selectContract?.abi || '[]') as IAbiItem[]
    return list.filter((fun) => fun.type === 'function')
  }, [selectContract])

  const contract = useMemo(() => {
    if (!provider || !selectContract?.address) return null

    return new Contract(selectContract?.address as string, methods, provider)
  }, [provider, selectContract, methods])

  const readContract = useCallback(
    async (funName: string, args: string[]) => {
      if (contract) {
        console.log('funName', funName)
        console.log('args', args)
        const result = await contract[funName](...args)
        return result
      }
    },
    [contract]
  )
  return {
    selectContract,
    methods,
    readContract,
  }
}

export default useContract
