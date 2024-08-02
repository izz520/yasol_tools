import UserStore from '@/store/user-store'

import useEventEthereum from '@/hooks/useEventEthereum'

const useLogin = () => {
  const changeIsLogin = UserStore((state) => state.changeIsLogin)
  const changeAccount = UserStore((state) => state.changeAccount)
  useEventEthereum()
  const handleConnect = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    console.log('accounts', accounts)
    changeIsLogin(true)
    changeAccount(accounts[0])
  }

  return {
    handleConnect,
  }
}

export default useLogin
