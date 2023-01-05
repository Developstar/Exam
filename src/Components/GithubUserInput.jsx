import { useState, useRef } from "react"
import useCounter from "../hooks/useCounter";
import { useNavigate, Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";


export default function Gitinput(){
  const [state, increment, decrement, reset, setValue, inputRef] = useCounter();
const navigate = useNavigate();
  const openProfile = (id)=>{
    navigate("./GithubFetchPage",{
      state:{
        id: inputOne.current.value
      }
    })
  }


  
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
      
          <input ref={inputRef} onChange={(e) => setRepoNum(e.target.value)}  value={repoNum} type={"number"} placeholder={"Enter your number here"} name="value"  className="counterapp-text" />
          
        
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
      
        
          <input ref={inputOne} onChange={(e) => setUserName(e.target.value)} value={userName}  type={"text"} placeholder={"Enter your github username"} name="value"  className="counterapp-text" /> 
    
      <div>
        <button onClick={()=>{getNum();getText(); }} className="fetch-btn">Fetch Repo</button>
      </div>

      
           <NavLink
        
        to="./GithubFetchPage"
        className="errorpage-link"
        state={{
          id: "Developstar"
        }}
      >
        Error 404
      </NavLink>
    <Link
      to="./GithubFetchPage"
      state={{
        id: "Developstar"
      }}
      >
      Open Page
      </Link>

      <button onClick={openProfile}>Open Page</button>
    </>
  )
}                                                                                                                                                                                                                                              