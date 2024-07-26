import { Message } from './toast'

const copy = (text: string, showMessage = false, messageText = 'Copy successfully!') => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
  } else {
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.style.position = 'fixed'
    textarea.style.clip = 'rect(0 0 0 0)'
    textarea.style.top = '0.1rem'
    textarea.value = text
    textarea.select()
    document.execCommand('copy', true)
    document.body.removeChild(textarea)
  }
  if (showMessage) Message.success(messageText)
}

export default copy
