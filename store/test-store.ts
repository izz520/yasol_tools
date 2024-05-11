import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type IState = {
  count: number
}

type IAction = {
  increment: () => void
}

type ITestState = IState & IAction

const testSate = create<ITestState, [['zustand/devtools', never]]>(
  devtools((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
  }))
)

export default testSate
