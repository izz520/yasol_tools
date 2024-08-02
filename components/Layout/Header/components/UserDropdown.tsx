import React, { memo } from 'react'

import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import UserStore from '@/store/user-store'

import getAvatar from '@/libs/common/getAvatar'

const UserDropdown = () => {
  const account = UserStore((state) => state.account)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image width={24} height={24} src={getAvatar(account)} alt="user" className="rounded-full" unoptimized={true} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" mr-2">
        <DropdownMenuCheckboxItem>Profile</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Log out</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default memo(UserDropdown)
