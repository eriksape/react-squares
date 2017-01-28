import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from './../reducers'

const logger = createLogger({
    predicate: () => true,
    collapsed: true,
    duration: true,
})

export default function configureStore() {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(logger)
        )
    )

     window.store = store

    return store
}