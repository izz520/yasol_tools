import React from 'react'

import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className="w-full flex-1 rounded-lg bg-cardBg p-4">
      <div className="flex items-center justify-between">
        <h3 className=" text-lg">Encode abi to methods</h3>
        <div>
          <Button>Add Contract</Button>
        </div>
      </div>
    </div>
  )
}

export default page
