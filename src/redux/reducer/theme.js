// redux
import actionTheme from '../action/theme'

const initialState = { theme: 'olive' }
const reducerTheme = (state = initialState, action) => {
  switch (action.type) {
    case actionTheme.updateCurrent.type:
      return { ...state, theme: action.payload }
  }
  return state
}

export default reducerTheme
