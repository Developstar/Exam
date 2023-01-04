
import useCounter from "../hooks/useCounter";
import Gitinput from "../Components/GithubUserInput"



const CounterApp = () => {
  const [state, increment, decrement, reset, setValue, inputRef] = useCounter();

 
  return(
    <>
   
      <section>
        <section>
         <Gitinput/> 
      </section>
        
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

