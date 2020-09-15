import { createContext } from 'react'
import { createStoreHook, createDispatchHook, createSelectorHook } from 'react-redux'

export const MyContext = createContext(null)
export const useStore = createStoreHook(MyContext)
export const useDispatch = createDispatchHook(MyContext)
export const useSelector = createSelectorHook(MyContext)