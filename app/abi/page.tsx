'use client'

import React from 'react'

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

const page = () => {
  const contracts = abiStore((state) => state.contracts)
  return (
    <div className="flex w-full flex-1 flex-col gap-4">
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
      <div className="flex w-full gap-4">
        <div className=" flex flex-col">
          <AddContract />
          {contracts.map((contract) => {
            return <ContractItem isActive={false} key={contract.address + contract.network} {...contract} />
          })}
        </div>
        <div className="w-full flex-1">123</div>
      </div>
    </div>
  )
}

export default page
