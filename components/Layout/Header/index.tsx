import React, { memo } from 'react'

const Header = () => {
  return (
    <header className="sticky top-0 h-16 w-full bg-transparent px-6 py-8">
      <section className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-bold text-fontPrimary">Dashboard</h2>
          <p className="text-sm font-medium text-fontSecondary">Welcome to You 🎉</p>
        </div>
        <div className=" rounded-full bg-cardBg p-2.5"></div>
      </section>
    </header>
  )
}

export default memo(Header)
