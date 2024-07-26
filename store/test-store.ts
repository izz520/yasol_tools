import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ITokenState {
  isUpdateBidList: boolean
}
interface ITokenAction {
  changeIsUpdateBidList: (value: boolean) => void
}

type ITokenStore = ITokenState & ITokenAction

const tokenStore = create<ITokenStore, [['zustand/devtools', never]]>(
  devtools((set) => ({
    isUpdateBidList: false,
    changeIsUpdateBidList: (value: boolean) => set((state: ITokenStore) => ({ ...state, isUpdateBidList: value })),
  }))
)
export default tokenStore
