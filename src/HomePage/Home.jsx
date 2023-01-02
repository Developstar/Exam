import { Helmet } from "react-helmet-async";
import CounterApp from "../Counter/Counter";



const Home = () => {
  return (
    <section className='homepage-container'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Custom Counter Homepage</title>
        <meta
          name="keywords"
          content="Counter App, useReducer Counter App,..."
        />
        <meta
          name="description"
          content="A simple counter app built using custom hooks and useReducer in React JS."
        />
      </Helmet>
      <h1>Counter App</h1>
      <p>Enter your github username to fetch your repositories</p>
      
      
      <CounterApp/>
    </section>
  );
};

export default Home;