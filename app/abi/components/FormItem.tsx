import React from 'react'
import { PropsWithChildren } from 'react'
import { memo } from 'react'

interface IFormItemProps {
  label: string
}
const FormItem = (props: PropsWithChildren<IFormItemProps>) => {
  const { label, children } = props
  return (
    <div className="flex flex-col gap-3">
      <span>{label}</span>
      {children}
    </div>
  )
}

export default memo(FormItem)
