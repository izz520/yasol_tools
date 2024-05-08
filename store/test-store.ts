import { create } from 'zustand'

type IState = {
  count: number
}

type IAction = {
  increment: () => void
}

const testSate = create<IState & IAction>((set) => ({
  count: 0,
  increment: () => set((state: IState) => ({ count: state.count + 1 })),
}))

export default testSate
