import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const increasebyfive = () => {
    dispatch({ type: 'İNCREASE', amount: 5 })
  }
  return (
    <>
      <h4>{counter}</h4>
      <button onClick={incrementHandler}>Arttır</button>
      <button onClick={increasebyfive}>+5</button>
      <button onClick={decrementHandler}>Azalt</button>
    </>
  )
}

export default Counter
