'use client'

import React, { memo } from 'react'
import { LuCommand, LuHome, LuPackage, LuSquareCode } from 'react-icons/lu'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const Aside = () => {
  const pathname = usePathname()
  const navList = [
    {
      isActive: pathname === '/',
      Icon: LuHome,
      title: 'Dashboard',
      path: '/',
    },
    {
      isActive: pathname === '/abi',
      Icon: LuSquareCode,
      title: 'Encode ABI',
      path: '/abi',
    },
    {
      isActive: pathname === '/calldata',
      Icon: LuPackage,
      title: 'Encode CallData',
      path: '/calldata',
    },
  ]
  return (
    <aside className="fixed left-0 top-0 h-full w-[255px] bg-cardBg">
      <h1 className=" flex  items-center justify-start gap-2 border-b border-r border-borderPrimary py-3 pl-8 text-2xl font-bold text-fontPrimary">
        <span className="flex size-10 items-center justify-center rounded-lg bg-fontPrimary">
          <LuCommand className="text-cardBg" />
        </span>
        <span className="text-fontPrimary">YASOT</span>
      </h1>
      <div className="flex flex-col gap-5 pt-6">
        {navList.map((nav) => (
          <Link href={nav.path} key={nav.title}>
            <h3 className="group flex items-center justify-between overflow-hidden pl-8">
              <div
                className={twMerge(
                  'flex items-center gap-3 py-1.5 font-medium hover:text-fontHover',
                  nav.isActive ? ' !text-fontPrimary' : 'text-fontSecondary'
                )}
              >
                <nav.Icon
                  size={20}
                  className={twMerge(
                    'group-hover:text-fontHover',
                    nav.isActive ? '!text-primary' : 'text-fontSecondary'
                  )}
                />{' '}
                {nav.title}
              </div>
              <span
                className={twMerge(
                  'h-8 w-1 -translate-y-9 rounded-full bg-transparent transition-all group-hover:translate-y-0  group-hover:bg-fontSecondary',
                  nav.isActive && 'h-8 translate-y-0 !bg-primary'
                )}
              ></span>
            </h3>
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default memo(Aside)
