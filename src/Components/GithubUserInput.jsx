import { useState, useRef } from "react"
import useCounter from "../hooks/useCounter";
import { Navigate, Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";



export default function Gitinput(){
  const [state, increment, decrement, reset, setValue, inputRef] = useCounter();
  

const [repoNum, setRepoNum] = useState('')
const getNum = ()=>{
  let numOfRepo = inputRef.current.value
  console.log(numOfRepo)
}

  const getIncValue = ()=>{
    
    let increaseVal = state.count
    console.log(increaseVal)
  }

  
const [userName, setUserName] = useState('')
  let inputOne = useRef();
const getText = ()=>{
  let GithubUserName = inputOne.current.value
  console.log(GithubUserName)
}
  
  

  
  return(
    <>
      <section className="counterapp-container">
 <p className="counter-value">Numbers of Repositories you want to fetch: {state.count}</p>
        <div>
          <input ref={inputRef} onChange={(e) => setRepoNum(e.target.value)}  value={repoNum} type={"number"} placeholder={"Enter your number here"} name="value"  className="counterapp-text" />
          
        </div>
        <div className="counterbtn-container">
          <button  className="counter-btn" onClick={setValue}>Set Value</button>
          <button  className="counter-btn" onClick={()=>{increment();getIncValue();}}>Increase</button>
          <button  className="counter-btn" onClick={decrement}>Decrease</button>
          <button  className="counter-btn" onClick={reset}>Reset</button>
        </div>
      
      </section>
      <section>
        
      </section>
       

      
      <p className="gitrepotext">Enter your github username to fetch your repositories</p>
      <div>
        
          <input ref={inputOne} onChange={(e) => setUserName(e.target.value)} value={userName}  type={"text"} placeholder={"Enter your github username"} name="value"  className="counterapp-text" /> 
    </div>
      <div>
        <button onClick={()=>{getNum();getText(); }} className="fetch-btn">Fetch Repo</button>
      </div>

      
           <NavLink
        style={({ isActive }) =>
          isActive ? { color: "green" } : { color: "black" }
        }
        to="./GithubFetchPage"
        className="navlink-btn"
      >
        Error 404
      </NavLink>
    
    </>
  )
}                                                                                                                                                                                                                                              