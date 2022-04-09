import { createStore } from 'redux'
import { persistStore } from 'redux-persist'

// redux
import rootReducer from './reducer/root'

const store = createStore(rootReducer)
persistStore(store)

export default store
