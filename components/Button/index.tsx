import React, { PropsWithChildren } from 'react'

import { twMerge } from 'tailwind-merge'

interface IButtonProps extends PropsWithChildren {
  onClick?: () => void
}
const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <div className={twMerge('rounded bg-blue-500 px-4 py-2 font-bold text-white')} onClick={onClick}>
      {children}
    </div>
  )
}

export default Button
