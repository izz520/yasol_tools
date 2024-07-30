import React, { PropsWithChildren } from 'react'

import { twMerge } from 'tailwind-merge'

import { Button } from '../ui/button'

interface IButtonProps extends PropsWithChildren {
  onClick?: () => void
}
const UpdateButton = ({ children, onClick }: IButtonProps) => {
  return <Button>{children}</Button>
}

export default UpdateButton
