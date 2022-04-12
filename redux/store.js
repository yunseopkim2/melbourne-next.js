import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { rootSaga } from './sagas'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

export const createStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: [sagaMiddleware],
    })
    sagaMiddleware.run(rootSaga)
    return store
}



export const wrapper = createWrapper(createStore,
    { debug: process.env.NODE_ENV !== 'production' }
)