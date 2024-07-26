import { toast } from 'react-hot-toast'

interface IToastOptions {
  duration: number
}
export const Message = {
  success: (message: string, option?: IToastOptions) => {
    toast.success(message, { ...option })
  },
  error: (message: string, option?: IToastOptions) => {
    toast.error(message, { ...option })
  },
  info: (message: string, option?: IToastOptions) => {
    toast(message, { ...option })
  },
  emoji: (message: string, option?: IToastOptions) => {
    toast(message, {
      icon: '👏',
      ...option,
    })
  },
}
// eg: message.success("111")
// 👏✋
