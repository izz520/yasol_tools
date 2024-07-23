import React from 'react'

import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import AddContract from './components/AddContract'

const page = () => {
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
      <div className="grid grid-cols-4 gap-4">
        <AddContract />
        {/* <Example /> */}
      </div>
    </div>
  )
}

export default page
