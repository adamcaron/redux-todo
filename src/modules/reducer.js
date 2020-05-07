import ACTIONS from './action'
import { cloneDeep, findIndex } from 'lodash'

const defaultState = {
  items: [],
}

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.TYPES.CREATE_ITEM: {
      console.log(action)

      const item = action.payload
      const newItem = { id: state.items.length + 1, description: item }
      const newState = cloneDeep(state)
      newState.items.push(newItem)

      return newState
    }

    case ACTIONS.TYPES.DELETE_ITEM: {
      const newState = cloneDeep(state)
      const index = findIndex(newState.items, { id: action.payload })
      newState.items.splice(index, 1)

      return newState
    }

    default:
      return state
  }
}

export default todoReducer
