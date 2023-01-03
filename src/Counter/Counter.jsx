
import useCounter from "../hooks/useCounter";
import Gitinput from "../Components/GithubUserInput"



const CounterApp = () => {
  const [state, increment, decrement, reset, setValue, inputRef] = useCounter();

 
  return(
    <>
     
      <section>
         <Gitinput/> 
      </section>
    <section className="counterapp-container">
 <p className="counter-value">Numbers of Repositories you want to fetch: {state.count}</p>
        <div>
          <input ref={inputRef} type={"number"} placeholder={"Enter your number here"} name="value"  className="counterapp-text" />
          
        </div>
        <div className="counterbtn-container">
          <button  className="counter-btn" onClick={setValue}>Set Value</button>
          <button  className="counter-btn" onClick={increment}>Increase</button>
          <button  className="counter-btn" onClick={decrement}>Decrease</button>
          <button  className="counter-btn" onClick={reset}>Reset</button>
        </div>
      
      </section>
      <section>
        <div>
        <button  className="fetch-btn">Fetch Repo</button>
      </div>
      </section>
       
      
    </>
   );
 };

export default CounterApp;




// const CounterApp = () => {
//   const [state, dispatch] = useReducer(myCounterReducer, initialState);

//   const inputRef = useRef();

//   return (
//     <section className="counterapp-container">
      
//       <p>{state.counter}</p>

//       <div>
//         <input
//           type="text"
//           className="counterapp-text"
//           placeholder=" set counter"
//           ref={inputRef}
//         />
//       </div>

//       <div className="counterbtn-container">
//         <button
//           className="counter-btn"
//           onClick={() => dispatch({ type: "increment" })}
//         >
//           Increment
//         </button>
//         <button
//           className="counter-btn"
//           onClick={() => dispatch({ type: "decrement" })}
//         >
//           Decrement
//         </button>
//         <button
//           className="counter-btn"
//           onClick={() => dispatch({ type: "reset" })}
//         >
//           Reset
//         </button>
//         <button
//           className="counter-btn "
//           onClick={() => {
//             const payload = inputRef.current.value;
//             dispatch({ type: "set", payload: payload });
//           }}
//         >
//           Set Value
//         </button>
//       </div>
//     </section>
//   );
// };

// export default CounterApp;

