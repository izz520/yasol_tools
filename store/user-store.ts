import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { IAddress } from '@/types/user'

interface IUserState {
  account: IAddress
  isLogin: boolean
  chainId: string
}

interface IUserAction {
  changeIsLogin: (value: boolean) => void
  changeAccount: (value: IAddress) => void
  changeChainId: (value: string) => void
}

type IUserStore = IUserState & IUserAction

const UserStore = create<IUserStore, [['zustand/devtools', IUserState], ['zustand/persist', IUserState]]>(
  devtools(
    persist(
      (set) => ({
        account: '0x',
        isLogin: false,
        chainId: '0x1',
        changeIsLogin: (value: boolean) => set((state) => ({ ...state, isLogin: value })),
        changeAccount: (value: IAddress) => set((state) => ({ ...state, account: value })),
        changeChainId: (value: string) => set((state) => ({ ...state, chainId: value })),
      }),
      {
        name: 'userStore',
      }
    ),
    {
      name: 'userStore',
    }
  )
)

export default UserStore
