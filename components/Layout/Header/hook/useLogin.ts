import UserStore from '@/store/user-store'

const useLogin = () => {
  const changeIsLogin = UserStore((state) => state.changeIsLogin)
  const changeAccount = UserStore((state) => state.changeAccount)
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
