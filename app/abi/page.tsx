'use client'

import React, { useEffect, useMemo } from 'react'

import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import abiStore from '@/store/abi-store'

import AddContract from './components/AddContract'
import ContractItem from './components/ContractItem'
import MethodCard from './components/MethodCard'

const AbiPage = () => {
  const contracts = abiStore((state) => state.contracts)
  const selectKey = abiStore((state) => state.selectKey)
  const setSelectKey = abiStore((state) => state.setSelectKey)

  const selectKeyTemp = useMemo(() => {
    if (contracts.length === 0 && selectKey === '') return ''
    if (contracts.length > 0 && selectKey === '') return contracts[0].network + contracts[0].address
    return selectKey
  }, [selectKey, contracts])
  console.log('🚀 ~ selectKeyTemp ~ selectKeyTemp:', selectKeyTemp)

  useEffect(() => {
    if (!selectKey) setSelectKey(selectKeyTemp)
  }, [selectKey, selectKeyTemp])

  return (
    <div className="flex w-full flex-1 flex-col gap-4 rounded-lg bg-cardBg px-4 py-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/" className="hover:text-fontPrimary">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Encode Abi</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div>
        <h3 className=" text-xl font-medium text-fontPrimary">Encode Abi</h3>
        <p className=" text-sm text-fontSecondary">
          Use the contract&apos;s abi to parse out all read and write methods
        </p>
      </div>
      <div className="flex h-[calc(100vh-220px)] w-full gap-4 overflow-y-hidden">
        <div className=" flex flex-col gap-3 border-r border-borderPrimary pl-[1px] pr-4">
          <AddContract />
          {contracts.map((contract) => {
            const selectIndex = contract.network + contract.address === selectKeyTemp
            return <ContractItem isActive={selectIndex} key={contract.address + contract.network} {...contract} />
          })}
        </div>
        <MethodCard />
      </div>
    </div>
  )
}

export default AbiPage
