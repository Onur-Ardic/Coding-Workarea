import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decremant, incremant } from './redux/counterSlice'

function App() {
  const dispatch = useDispatch()
  const { value } = useSelector((store) => store.counter)
  console.log(value)
  return (
    <>
      <h1>{value}</h1>

      <button onClick={() => dispatch(incremant())}>Arttır</button>

      <button onClick={() => dispatch(decremant())}>Azalt</button>
    </>
  )
}

export default App
