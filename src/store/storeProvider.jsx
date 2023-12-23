'use client'

import store from './app/store'
import { Provider } from 'react-redux'

export const storeProvider = (childern)=>{

    return <Provider store={store}>{childern}</Provider>
}