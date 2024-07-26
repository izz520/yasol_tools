/**
 * eg. 0x00A34dA88DDCd6b18094259CDc91c0730c955A8b -> 0x00A34...5A8b
 * @param address IAddress
 * @returns string
 */
export const formatAddress = (address: string): string => {
  if (!address) return '0x'
  if (address === '0x') return '0x'
  const start = address.slice(0, 7)
  const end = address.slice(-4)
  return `${start}...${end}`
}
