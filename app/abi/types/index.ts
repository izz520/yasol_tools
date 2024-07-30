export interface IAddContractFromInfo {
  name: string
  address: string
  network: string
  abi: string
}

export interface IAbiItem {
  inputs: IInput[]
  name: string
  outputs: IOutput[]
  stateMutability: string
  type: string
}

export interface IOutput {
  internalType: string
  name: string
  type: string
}

export interface IInput {
  internalType: string
  name: string
  type: string
}

export type ITab = 'read' | 'write'
