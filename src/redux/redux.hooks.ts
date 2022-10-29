import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import type { RootState, AppDispatch } from './store'


export const useAppDispatch = () => useDispatch<AppDispatch>();   // func for change state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;  // state