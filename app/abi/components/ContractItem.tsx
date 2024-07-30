import React, { memo } from 'react'

import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import imgUrl from '@/constant/imgUrl'
import { formatAddress } from '@/libs/common/format'
import networkList from '@/libs/network.json'
import { IContractFromInfo } from '@/types/abi'

interface IContractItem extends React.AnchorHTMLAttributes<HTMLDivElement>, IContractFromInfo {
  isActive?: boolean
}
const ContractItem = (props: IContractItem) => {
  const { name, address, network, className = '', isActive } = props

  const chainInfo = networkList.find((item) => item.chainID === network)

  const networkIcon = chainInfo?.icon || imgUrl.chain.defaultChainIcon

  return (
    <div
      className={twMerge(
        'cursor-pointer rounded-lg bg-cardBg px-4 py-3 transition-all',
        isActive ? 'bg-bgSecondary ring-1 ring-primary' : 'shadow-sm hover:shadow-md',
        className
      )}
    >
      <div className=" flex items-center gap-3">
        <Image width={32} height={32} src={networkIcon} alt="chain icon" />
        <div className="flex flex-col">
          <span className={twMerge('text-sm font-medium', isActive ? 'text-primary' : 'text-fontPrimary')}>{name}</span>
          <div className={twMerge(' flex gap-1 text-xs', isActive ? ' text-primary' : 'text-fontSecondary')}>
            <span>{formatAddress(address)}</span>
            <span> ( {chainInfo?.networkName.split(' ')[0]} )</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ContractItem)
