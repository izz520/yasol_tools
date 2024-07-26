import React, { memo } from 'react'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import Drawer from '@/components/library/Drawer'

import imgUrl from '@/constant/imgUrl'
import { formatAddress } from '@/libs/common/format'
import networkList from '@/libs/network.json'
import { IContractFromInfo } from '@/types/abi'

import MethodDrawer from './MethodDrawer'

interface IContractItem extends React.AnchorHTMLAttributes<HTMLDivElement>, IContractFromInfo {
  isActive?: boolean
}
const ContractItem = (props: IContractItem) => {
  const { name, address, network, className = '', isActive } = props

  const chainInfo = networkList.find((item) => item.chainID === network)

  const networkIcon = chainInfo?.icon || imgUrl.chain.defaultChainIcon

  return (
    <Drawer content={<MethodDrawer />}>
      <div
        className={twMerge(
          'cursor-pointer rounded-lg bg-cardBg p-4 transition-all',
          isActive ? 'ring-1 ring-primary' : 'shadow-sm hover:shadow-md',
          className
        )}
      >
        <div className=" flex items-center gap-3">
          <Image width={32} height={32} src={networkIcon} alt="chain icon" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{name}</span>
            <div className="flex gap-1">
              <span className=" text-xs text-fontSecondary">{formatAddress(address)}</span>
              <span className=" text-xs text-fontSecondary"> ( {chainInfo?.networkName.split(' ')[0]} )</span>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  )
}

export default memo(ContractItem)
