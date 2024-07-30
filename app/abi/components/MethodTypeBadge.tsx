import React, { memo, PropsWithChildren } from 'react'

import { twMerge } from 'tailwind-merge'

import { ITab } from '../types'

interface IMethodTypeProps {
  type: ITab
}
const MethodTypeBadge = (props: PropsWithChildren<IMethodTypeProps>) => {
  const { type, children } = props

  const typeStyle: Record<ITab, string> = {
    read: 'bg-green2 text-primary border-green6 border',
    write: 'bg-orange2 text-orange8 border border-orange6',
  }

  return <div className={twMerge('w-fit rounded px-1 py-0.5 text-xs', typeStyle[type])}>{children}</div>
}

export default memo(MethodTypeBadge)
