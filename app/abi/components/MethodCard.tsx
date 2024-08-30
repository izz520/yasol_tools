import React, { useMemo, useState } from 'react'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import useContract from '../hook/useContract'
import networkList from '@/libs/network.json'

import MethodItem from './MethodItem'

type ITab = 'read' | 'write'
const MethodCard = () => {
  const [currentTab, setCurrentTab] = useState<ITab>('read')
  const { selectContract, methods, readContract, writeContract } = useContract()

  const chainInfo = useMemo(
    () => networkList.find((item) => item.chainID === selectContract?.network),
    [selectContract, networkList]
  )

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
        {readMethods.map((item, index) => {
          return <MethodItem functionType={currentTab} readContract={readContract} key={item.name + index} {...item} />
        })}
      </div>
      <div className={twMerge('flex-col gap-5 overflow-y-auto', currentTab === 'write' ? 'flex' : 'hidden h-0')}>
        {writeMethods.map((item, index) => {
          return (
            <MethodItem functionType={currentTab} writeContract={writeContract} key={item.name + index} {...item} />
          )
        })}
      </div>
    </div>
  )
}

export default MethodCard
