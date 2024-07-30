import React, { useMemo, useState } from 'react'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import AbiStore from '@/store/abi-store'

import networkList from '@/libs/network.json'

import { IAbiItem } from '../types'
import MethodItem from './MethodItem'

type ITab = 'read' | 'write'
const MethodCard = () => {
  const contracts = AbiStore((state) => state.contracts)
  const selectKey = AbiStore((state) => state.selectKey)
  const [currentTab, setCurrentTab] = useState<ITab>('read')
  const selectContract = useMemo(() => {
    return contracts.find((item) => item.network + item.address === selectKey)
  }, [selectKey, contracts])
  console.log('🚀 ~ selectContract ~ selectContract:', selectContract)

  const chainInfo = useMemo(
    () => networkList.find((item) => item.chainID === selectContract?.network),
    [selectContract, networkList]
  )
  console.log('🚀 ~ MethodCard ~ chainInfo:', chainInfo)

  const methods = useMemo(() => {
    const list = JSON.parse(selectContract?.abi || '[]') as IAbiItem[]
    return list.filter((fun) => fun.type === 'function')
  }, [selectContract])
  console.log('🚀 ~ methods ~ methods:', methods)

  const readMethods = useMemo(() => {
    return methods.filter((item) => item.stateMutability === 'view')
  }, [methods])

  const writeMethods = useMemo(() => {
    return methods.filter((item) => item.stateMutability !== 'view')
  }, [methods])

  return (
    <div className="flex w-full flex-1 flex-col gap-10">
      <div className=" flex items-center gap-3">
        <Image width={40} height={40} src={chainInfo?.icon || ''} alt="chain icon" />
        <div className="flex flex-col">
          <span className={twMerge('font-medium text-fontPrimary')}>{selectContract?.name}</span>
          <div className={twMerge(' flex gap-1 text-sm text-fontSecondary')}>
            <span>{selectContract?.address}</span>
            <span> ( {chainInfo?.networkName} )</span>
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-2 border-b border-borderPrimary px-2 py-1">
        <span
          className={twMerge(
            ' cursor-pointer bg-cardBg font-medium',
            currentTab === 'read' && ' border-b border-primary'
          )}
          onClick={() => setCurrentTab('read')}
        >
          Read
        </span>
        <span
          className={twMerge(
            ' cursor-pointer bg-cardBg font-medium',
            currentTab === 'write' && ' border-b border-primary'
          )}
          onClick={() => setCurrentTab('write')}
        >
          Write
        </span>
      </div>
      <div className={twMerge('flex-col gap-5 overflow-y-auto', currentTab === 'read' ? 'flex' : 'hidden h-0')}>
        {readMethods.map((item) => {
          return <MethodItem functionType={currentTab} key={item.name} {...item} />
        })}
      </div>
      <div className={twMerge('flex-col gap-5 overflow-y-auto', currentTab === 'write' ? 'flex' : 'hidden h-0')}>
        {writeMethods.map((item) => {
          return <MethodItem functionType={currentTab} key={item.name} {...item} />
        })}
      </div>
    </div>
  )
}

export default MethodCard
