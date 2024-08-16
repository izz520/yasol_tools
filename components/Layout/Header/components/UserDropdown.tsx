import React, { memo } from 'react'
import { LuLogOut, LuSettings, LuUser } from 'react-icons/lu'

import Image from 'next/image'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import UserStore from '@/store/user-store'

import getAvatar from '@/libs/common/getAvatar'

type IMenu = 'profile' | 'setting' | 'logout'
const UserDropdown = () => {
  const account = UserStore((state) => state.account)
  const changeIsLogin = UserStore((state) => state.changeIsLogin)
  const changeMenu = (menu: IMenu) => {
    if (menu === 'logout') return logout()
    if (menu === 'profile') return console.log('Profile')
    if (menu === 'setting') return console.log('Setting')
  }

  const logout = () => {
    changeIsLogin(false)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          width={24}
          height={24}
          src={getAvatar(account)}
          alt="user"
          className="cursor-pointer rounded-full"
          unoptimized={true}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" mr-2">
        <DropdownMenuItem>
          <div className="flex cursor-pointer items-center gap-2" onClick={() => changeMenu('profile')}>
            <LuUser />
            Profile
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex cursor-pointer items-center gap-2" onClick={() => changeMenu('setting')}>
            <LuSettings /> Setting
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex cursor-pointer items-center gap-2" onClick={() => changeMenu('logout')}>
            <LuLogOut /> Log out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default memo(UserDropdown)
