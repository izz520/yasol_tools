'use client'

import React, { memo } from 'react'

import { Button } from '@/components/ui/button'

import UserStore from '@/store/user-store'

import UserDropdown from './components/UserDropdown'
import useLogin from './hook/useLogin'

const Header = () => {
  const isLogin = UserStore((state) => state.isLogin)
  const { handleConnect } = useLogin()

  return (
    <>
      <header className="fixed left-0 top-0  h-16 w-full bg-cardBg  pl-[255px]">
        <div className="flex h-full items-center justify-between px-6">
          <div></div>
          {isLogin ? <UserDropdown /> : <Button onClick={handleConnect}>Connect Wallet</Button>}
        </div>
      </header>
      {/* <section className="h-16"></section> */}
    </>
  )
}

export default memo(Header)
