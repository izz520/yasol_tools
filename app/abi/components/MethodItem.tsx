import React, { memo, useMemo } from 'react'

import { Contract, ethers } from 'ethers'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import AbiStore from '@/store/abi-store'

import { formatUpperCaseFirst } from '@/libs/common/format'
import networkList from '@/libs/network.json'

import { IAbiItem } from '../types'
import MethodTypeBadge from './MethodTypeBadge'

interface IMethodItemProps extends IAbiItem {
  functionType: 'read' | 'write'
}
const MethodItem = (props: IMethodItemProps) => {
  const { functionType, ...abiInfo } = props
  const selectKey = AbiStore((state) => state.selectKey)
  const contracts = AbiStore((state) => state.contracts)

  const selectContract = useMemo(() => {
    return contracts.find((item) => item.network + item.address === selectKey)
  }, [selectKey, contracts])

  const chainInfo = useMemo(
    () => networkList.find((item) => item.chainID === selectContract?.network),
    [selectContract, networkList]
  )
  const handleQuery = () => {
    const rpc = chainInfo?.rpcUrls[0]
    const provider = new ethers.providers.JsonRpcProvider(rpc)
    const contract = new Contract(selectContract?.address as string, [abiInfo] as any, provider)
    console.log('🚀 ~ handleQuery ~ contract:', contract)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1.5">
        <MethodTypeBadge type={functionType}>{formatUpperCaseFirst(functionType)}</MethodTypeBadge>
        <span className=" text-sm font-medium">{abiInfo.name}</span>
      </div>
      {abiInfo.inputs.length > 0 && (
        <div className="flex flex-col gap-2 pl-4">
          {abiInfo.inputs?.map((input, index) => {
            return (
              <div key={input.name + index} className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <span className=" text-sm">{input.name}</span>
                  <span className=" text-sm text-fontSecondary">({input.type})</span>
                </div>
                <Input className=" max-w-[50%] bg-transparent py-1.5" />
              </div>
            )
          })}
        </div>
      )}
      <Button
        variant="secondary"
        size="sm"
        className="ml-4 h-auto w-fit px-2 py-1 text-sm font-normal"
        onClick={handleQuery}
      >
        Query
      </Button>
    </div>
  )
}

export default memo(MethodItem)
