'use client'

import React, { memo } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

import { Plus } from 'lucide-react'

import Modal from '@/components/library/Modal'
import Select, { ISelectItemProps } from '@/components/library/Select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import abiStore from '@/store/abi-store'

import networkConfig from '@/libs/network.json'

import { IAddContractFromInfo } from '../types'
import FormItem from './FormItem'

const options = networkConfig.map((network) => {
  return {
    name: network.networkName,
    value: network.chainID,
  }
})

const initFromInfo: IAddContractFromInfo = {
  name: '',
  address: '',
  network: '',
  abi: '',
}
const AddContract = () => {
  const [open, setOpen] = useState<boolean>(false)
  const formInfoRef = useRef<IAddContractFromInfo>(initFromInfo)
  const addContract = abiStore((state) => state.addContract)
  const changeContractName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    formInfoRef.current.name = value
    // setFormInfo((prev) => ({ ...prev, name: value }))
  }

  const changeContractAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    formInfoRef.current.address = value
    // setFormInfo((prev) => ({ ...prev, address: value }))
  }

  const changeNetwork = (item: ISelectItemProps) => {
    console.log(item)
    formInfoRef.current.network = item.value
    // setFormInfo((prev) => ({ ...prev, network: item.value }))
  }

  const changeAbi = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    formInfoRef.current.abi = value
    // setFormInfo((prev) => ({ ...prev, abi: value }))
  }

  const confirmSaveContract = () => {
    addContract(formInfoRef.current)
    // const contracts: IAddContractFromInfo[] = JSON.parse(getSession('local', 'encodeAbi_contracts') || '[]')
    // const index = contracts.findLastIndex(
    //   (item: IAddContractFromInfo) =>
    //     item.address === formInfoRef.current.address && item.network === formInfoRef.current.network
    // )
    // const newContracts = index !== -1 ? (contracts[index] = formInfoRef.current) : contracts.concat(formInfoRef.current)
    // setSession('local', 'encodeAbi_contracts', JSON.stringify(newContracts))
    setOpen(false)
  }
  const Comp = () => {
    return (
      <div className="w-full space-y-6">
        <FormItem label="Contract Name">
          <Input
            placeholder="Enter a name you like"
            defaultValue={formInfoRef.current.name}
            onChange={changeContractName}
          />
        </FormItem>
        <FormItem label="Contract Address">
          <Input placeholder="0x" defaultValue={formInfoRef.current.address} onChange={changeContractAddress} />
        </FormItem>
        <FormItem label="Network">
          <Select list={options} defaultSelect={formInfoRef.current.network} onChange={changeNetwork} />
        </FormItem>
        <FormItem label="ABI">
          <Textarea defaultValue={formInfoRef.current.abi} onChange={changeAbi} />
        </FormItem>
      </div>
    )
  }

  return (
    <Modal open={open} onOpen={setOpen} title="Add Contract" content={<Comp />} onConfirm={confirmSaveContract}>
      <div className="flex h-[60px] w-[235px] flex-shrink-0  cursor-pointer items-center justify-center gap-1 rounded-lg border border-dashed border-borderDashed bg-cardBg text-fontHover shadow-sm hover:border-primary hover:text-primary">
        <Plus size={20} />
        AddContract
      </div>
    </Modal>
  )
}

export default memo(AddContract)
