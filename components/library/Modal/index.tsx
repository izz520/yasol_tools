'use client'

import React, { memo, PropsWithChildren, ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface IModalProps {
  open: boolean
  title: string
  desc?: string
  content: ReactNode
  showConfirmBtn?: boolean
  confirmBtnText?: string
  onConfirm?: () => void
  onOpen?: (bool: boolean) => void
}
const Modal = (props: PropsWithChildren<IModalProps>) => {
  const {
    open,
    title,
    desc,
    children,
    content,
    showConfirmBtn = true,
    confirmBtnText = 'Save',
    onConfirm,
    onOpen,
  } = props
  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md" aria-describedby="Add Contract">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {desc && <DialogDescription>{desc}</DialogDescription>}
        </DialogHeader>
        <div className="flex items-center space-x-2">{content}</div>
        <DialogFooter className="w-full">
          {showConfirmBtn && (
            <Button className="w-full" onClick={onConfirm}>
              {confirmBtnText}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default memo(Modal)
