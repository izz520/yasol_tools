import { toast } from 'react-hot-toast'
import { useToaster } from 'react-hot-toast/headless'

interface IToastOptions {
  duration: number
}
export function useToast() {
  const { toasts } = useToaster()
  const Message = {
    successToast: (message: string, option?: IToastOptions) => {
      if (!toasts.length) {
        toast.success(message, option)
      }
    },
    errorToast: (message: string, option?: IToastOptions) => {
      if (!toasts.length) toast.error(message, option)
    },
    infoToast: (message: string, option?: IToastOptions) => {
      if (!toasts.length) toast(message, option)
    },
    emojiToast: (message: string, option?: IToastOptions) => {
      if (!toasts.length)
        toast(message, {
          icon: '👏',
          ...option,
        })
    },
  }
  return Message
}

// export const Message = {
//   success: (message: string, option?: IToastOptions) => {
//     toast.success(message, option);
//   },
//   error: (message: string, option?: IToastOptions) => {
//     toast.error(message, option);
//   },
//   info: (message: string, option?: IToastOptions) => {
//     toast(message, option);
//   },
//   emoji: (message: string, option?: IToastOptions) => {
//     toast(message, {
//       icon: "👏",
//       ...option,
//     });
//   },
// };
