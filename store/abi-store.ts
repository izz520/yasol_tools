import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import { IContractFromInfo } from '@/types/abi'

interface IAbiState {
  contracts: IContractFromInfo[]
}

interface IAbiAction {
  setContracts: (contracts: IContractFromInfo[]) => void
  addContract: (contract: IContractFromInfo) => void
}

type IAbiStore = IAbiState & IAbiAction

const AbiStore = create<IAbiStore, [['zustand/devtools', never], ['zustand/persist', IAbiState]]>(
  devtools(
    persist(
      (set) => ({
        contracts: [],
        setContracts: (contracts: IContractFromInfo[]) => set((state) => ({ ...state, contracts })),
        addContract: (contract: IContractFromInfo) =>
          set((state) => ({ ...state, contracts: [...state.contracts, contract] })),
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
