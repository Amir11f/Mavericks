'use client'

import store from './store'
import { Provider } from 'react-redux'

export const StoreProvider = ({childern})=>{

    return <Provider store={store}>{childern}</Provider>
}