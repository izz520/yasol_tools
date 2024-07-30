import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { IContractFromInfo } from '@/types/abi'

interface IAbiState {
  contracts: IContractFromInfo[]
  selectKey: string
}

interface IAbiAction {
  setContracts: (contracts: IContractFromInfo[]) => void
  addContract: (contract: IContractFromInfo) => void
  setSelectKey: (key: string) => void
}

type IAbiStore = IAbiState & IAbiAction

const AbiStore = create<IAbiStore, [['zustand/devtools', never], ['zustand/persist', IAbiState]]>(
  devtools(
    persist(
      (set) => ({
        contracts: [],
        selectKey: '',
        setContracts: (contracts: IContractFromInfo[]) => set((state) => ({ ...state, contracts })),
        addContract: (contract: IContractFromInfo) =>
          set((state) => ({ ...state, contracts: [...state.contracts, contract] })),
        setSelectKey: (key: string) => set((state) => ({ ...state, selectKey: key })),
      }),
      {
        name: 'encodeAbi_contracts',
      }
    ),
    {
      name: 'encodeAbi_store',
    }
  )
)
export default AbiStore
