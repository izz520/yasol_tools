import React, { memo, useRef, useState } from 'react'

import { Player } from '@lottiefiles/react-lottie-player'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useToast } from '@/hooks/useToast'
import { formatUpperCaseFirst } from '@/libs/common/format'
import LoadingJson from '@/lottie/loading.json'

import { IAbiItem } from '../types'
import MethodTypeBadge from './MethodTypeBadge'

interface IMethodItemProps extends IAbiItem {
  functionType: 'read' | 'write'
  readContract?: (funName: string, args: string[]) => Promise<any>
  writeContract?: (funName: string, args: string[]) => Promise<any>
}
const MethodItem = (props: IMethodItemProps) => {
  const { functionType, readContract, writeContract, ...abiInfo } = props

  const { errorToast } = useToast()

  const inputsRef = useRef<any[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [inputs, setInputs] = useState<any[]>(new Array(abiInfo.inputs.length).fill(''))

  const [output, setOutput] = useState<any[]>([])

  const handleQuery = async () => {
    if (isLoading) return
    try {
      setIsLoading(true)
      if (functionType === 'read') {
        console.log('inputsRef.current', inputsRef.current)
        const result = await readContract?.(abiInfo.name, inputsRef.current)
        console.log('result', result)
        formateResult(result)
        console.log('output', abiInfo.outputs)
        return
      }
      console.log('write')
      const result = await writeContract?.(abiInfo.name, inputsRef.current)
      console.log('result', result)
      const outPut = {
        name: 'transactionHash',
        type: 'hex',
        value: result.hash,
      }
      setOutput([outPut])
    } catch (err: any) {
      console.log('err', err)
      errorToast(err.message.split(' (')[0] || 'contract error')
    } finally {
      setIsLoading(false)
    }
  }

  const formateResult = (result: any) => {
    const isArray = Array.isArray(result)
    const outputs = abiInfo.outputs
    console.log('🚀 ~ formateResult ~ isArray:', isArray)
    if (!isArray) {
      const formateValue = outputs[0].type.includes('uint') ? Number(result) : result
      return setOutput([
        {
          name: outputs[0].name,
          value: formateValue,
        },
      ])
    }
    const resultList = outputs.map((item, index) => {
      const name = item.name
      console.log(`result[${index}]`, result[index])

      return {
        name: name,
        type: item.type,
        value: item.type.includes('uint') ? Number(result[index]) : result[index],
      }
    })
    console.log('resultList', resultList)

    setOutput(resultList)
  }

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value
    console.log('🚀 ~ changeInput ~ value:', value)
    inputsRef.current[index] = value
    setInputs([...inputsRef.current])
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1.5">
        <MethodTypeBadge type={functionType}>{formatUpperCaseFirst(functionType)}</MethodTypeBadge>
        <span className=" text-sm font-medium">{abiInfo.name}</span>
      </div>
      {abiInfo.inputs.length > 0 && (
        <div className="flex flex-col gap-2 pl-4">
          {abiInfo.inputs?.map((input, index) => {
            return (
              <div key={input.name + index} className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <span className=" text-sm">{input.name}</span>
                  <span className=" text-sm text-fontSecondary">({input.type})</span>
                </div>
                <Input
                  value={inputs[index]}
                  className=" max-w-[50%] bg-transparent py-1.5"
                  onChange={(e) => changeInput(e, index)}
                />
              </div>
            )
          })}
        </div>
      )}
      <Button
        variant="secondary"
        size="sm"
        className="ml-4 h-auto w-fit px-2 py-1 text-sm font-normal"
        onClick={handleQuery}
      >
        Query
      </Button>
      {isLoading && (
        <div className=" relative h-[42px] w-full overflow-hidden">
          <Player
            autoplay
            loop
            src={LoadingJson}
            className=" absolute -top-7"
            style={{ height: '100px', width: '100px' }}
          />
        </div>
      )}
      {output.length > 0 && (
        <div className="pl-4">
          <div className="space-y-2 rounded-md bg-[rgba(217,214,214,0.1)] px-4 py-3">
            {output.length === 1 && <div className="text-sm">{output[0].value}</div>}
            {output.length > 1 &&
              output?.map((outputItem, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <span className=" text-sm text-fontSecondary">
                      {outputItem.name} ({outputItem.type})
                    </span>
                    <span className=" text-sm">{outputItem.value}</span>
                  </div>
                )
              })}
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(MethodItem)
