import { useReducer } from "react"

const reducer = (state,action) => {
  if(action.type==="decrement"){
    return {counter:state.counter-1}
  }else if(action.type==="increase"){
    return{counter:state.counter+1}
  }else if(action.type==="makeitzero"){
    return{counter:0}
  }
  
  
  else{
    throw new Error()
  }
}

const initialstate = {counter:0}

function Counter () {
  const [state, dispatch] = useReducer(reducer, initialstate)
  return(
    <div>
      <h1>Count : {state.counter}</h1>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
      <button onClick={()=>dispatch({type:"increase"})}>+</button>
      <button onClick={()=>dispatch({type:"makeitzero"})}>Reset</button>
    </div>
  )
}

export default Counter;