import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ErrorPageTest = () => {
  return (
    <section className="errorpage-container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Custom Counter Errorpage</title>
        <meta
          name="keywords"
          content="Counter App, Error page, useReducer Counter App,..."
        />
        <meta
          name="description"
          content="You're viewing the errorpage of this simple counter app built using custom hooks and useReducer in React JS."
        />
      </Helmet>

      <h1>404 Error!</h1>
      <p>No page found.</p>
      <br />
      <br />
      <p>
        <Link className="errorpage-link" to="/">
          Back Home
        </Link>
      </p>
    </section>
  );
};

export default ErrorPageTest;