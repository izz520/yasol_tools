import useProvider from '@/hooks/useProvider'

const useRead = () => {
  const { provider } = useProvider()

  const readContract = () => {
    const signer = provider?.getSigner()
    console.log('signer', signer)
  }

  return {
    readContract,
  }
}

export default useRead
