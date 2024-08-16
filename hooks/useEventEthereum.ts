import { useEffect } from 'react'

import UserStore from '@/store/user-store'

import { IAddress } from '@/types/user'

const useEventEthereum = () => {
  const changeIsLogin = UserStore((state) => state.changeIsLogin)
  const changeAccount = UserStore((state) => state.changeAccount)
  const changeChainId = UserStore((state) => state.changeChainId)
  useEffect(() => {
    window.ethereum.on('accountsChanged', changeAccounts)
    window.ethereum.on('chainChanged', changeChain)
    // window.ethereum.on('connect', changeConnect)
    window.ethereum.on('disconnect', changeAccounts)

    return () => {
      window.ethereum.removeListener('accountsChanged', changeAccounts)
      window.ethereum.removeListener('chainChanged', changeChain)
      // window.ethereum.removeListener('connect', changeConnect)
      // window.ethereum.removeListener('disconnect', changeDisconnect)
    }
  }, [])

  const changeAccounts = (accounts: IAddress[]) => {
    console.log('new account', accounts[0])
    if (accounts.length === 0) {
      changeIsLogin(false)
      changeAccount('0x')
      return
    }
    changeAccount(accounts[0])
    changeIsLogin(true)
  }

  const changeChain = (chainId: string) => {
    console.log('new chainId', chainId)
    changeChainId(chainId)
  }
}

export default useEventEthereum
