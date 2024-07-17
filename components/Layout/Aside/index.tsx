'use client'

import React, { memo } from 'react'
import { LuHome, LuSquareCode } from 'react-icons/lu'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

const Aside = () => {
  const pathname = usePathname()
  const navList = [
    {
      isActive: pathname === '/',
      icon: <LuHome size={20} className={pathname === '/' ? ' text-primary' : 'text-fontSecondary'} />,
      title: 'Dashboard',
      path: '/',
    },
    {
      isActive: pathname === '/abi',
      icon: <LuSquareCode size={20} className={pathname === '/abi' ? ' text-primary' : 'text-fontSecondary'} />,
      title: 'Encode ABI',
      path: '/abi',
    },
  ]
  return (
    <aside className="fixed left-0 top-0 h-full w-[255px] bg-cardBg">
      <h1 className=" flex h-16 items-center justify-start border-b border-borderPrimary pl-8 text-2xl font-bold text-fontPrimary">
        YASOL Tools
      </h1>
      <div className="flex flex-col gap-5 pt-8">
        {navList.map((nav) => (
          <Link href={nav.path} key={nav.title}>
            <h3 className="group flex items-center justify-between overflow-hidden pl-8">
              <div
                className={twMerge(
                  'flex items-center gap-3 py-1.5 font-medium',
                  nav.isActive ? ' text-fontPrimary' : 'text-fontSecondary'
                )}
              >
                {nav.icon} {nav.title}
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
