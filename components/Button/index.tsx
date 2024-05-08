import React, { PropsWithChildren } from 'react'

import { twMerge } from 'tailwind-merge'
const Button = ({ children }: PropsWithChildren) => {
  return <div className={twMerge('rounded bg-blue-500 px-4 py-2 font-bold text-white')}>{children}</div>
}

export default Button
