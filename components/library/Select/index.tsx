import React, { Fragment, memo, useEffect, useState } from 'react'
import { HiCheck, HiChevronDown } from 'react-icons/hi2'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

export interface ISelectItemProps {
  name: string
  value: string
}
interface ISelectProps {
  onChange?: (value: ISelectItemProps) => void
  list: ISelectItemProps[]
  defaultSelect?: string
  zIndex?: number
  disable?: boolean
}
const Select = (props: ISelectProps) => {
  const { list, defaultSelect = '', onChange, zIndex = 10 } = props
  const [selected, setSelected] = useState<ISelectItemProps>({} as ISelectItemProps)
  useEffect(() => {
    if (defaultSelect) {
      const findItem = list.find((item) => item.value === defaultSelect)
      findItem && setSelected(findItem)
    }
  }, [defaultSelect, list])
  const handleChange = (value: ISelectItemProps) => {
    console.log(value)

    setSelected(value)
    if (onChange) {
      onChange(value)
    }
  }
  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <div className="relative">
          <ListboxButton className="relative w-full cursor-pointer rounded-md py-2.5 pl-3 pr-10 text-left text-sm font-normal text-fontPrimary shadow-sm ring-1 ring-inset ring-input focus:outline-none">
            <span className="block truncate">{selected?.name || 'Select network'}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronDown className=" h-5 w-5 text-fontSecondary" aria-hidden="true" />
            </span>
          </ListboxButton>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions
              className={twMerge(
                'border-globalBorder absolute mt-1 max-h-60 w-full overflow-auto rounded-md border bg-cardBg py-1 text-base shadow-lg focus:outline-none',
                `z-${zIndex}`
              )}
            >
              {list?.map((item) => (
                <ListboxOption
                  key={item.name}
                  value={item}
                  className={twMerge(
                    'group flex w-full items-center justify-between gap-2 rounded-lg px-3 py-1.5 hover:bg-bgSecondary data-[selected]:bg-bgSecondary'
                  )}
                >
                  <div className="text-sm/6 text-fontPrimary group-hover:text-primary group-data-[selected]:text-primary">
                    {item.name}
                  </div>
                  <HiCheck className="invisible size-4 fill-fontPrimary group-hover:fill-primary group-data-[selected]:visible group-data-[selected]:fill-primary" />
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}

export default memo(Select)
