import create from 'zustand'
import { devtools } from 'zustand/middleware'

// eslint-disable-next-line no-unused-vars
const createStateSlice = (set, get) => ({
  isSubmitted: false,
  setIsSubmitted: () => set(state => ({ ...state, isSubmitted: true }))
})

const createRootSlice = (set, get) => ({
  ...createStateSlice(set, get)
})

export const useStore = create(devtools(createRootSlice))
