import { createStore } from 'redux'

const initalState = {
  counter: 0,
  showCounter: false,
}

const counterReducer = (state = initalState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
    }
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1,
    }
  }

  if (action.type === 'İNCREASE') {
    return {
      counter: state.counter + action.amount,
    }
  }

  return state
}
const store = createStore(counterReducer)

console.log(store.getState())
export default store
