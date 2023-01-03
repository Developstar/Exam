import { useState } from "react"

export default function Gitinput(){
const [state, setState] = useState('')

  
const  getValue = (event)=>{
  
  setState({value:event.target.value})
}
  console.log(state)
  return(
    <>
      <div>
          <input  onChange={getValue} type={"text"} placeholder={"Enter your github username"} name="value"  className="counterapp-text" /> 
    </div>
     
    
    </>
  )
}                                                                                                                                                                                                                                              