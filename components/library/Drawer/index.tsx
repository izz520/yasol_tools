import React, { memo, PropsWithChildren, ReactNode } from 'react'

import { DrawerContent, DrawerTrigger, Drawer as DrawerUI } from '@/components/ui/drawer'

interface IDrawerProps {
  content?: ReactNode
}
const Drawer = (props: PropsWithChildren<IDrawerProps>) => {
  const { children, content } = props
  return (
    <DrawerUI>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent>{content}</DrawerContent>
    </DrawerUI>
  )
}

export default memo(Drawer)
