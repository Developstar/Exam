import React from 'react';
import {Helmet} from 'react-helmet-async'
import { ErrorBoundary } from "react-error-boundary";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/errorBoundary.css";


const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <>
    <Helmet>
      <title>Error Boundary</title>
      <meta name="description" content="A page for testing react error boundary for any error occurring in react" />
      <link rel="canonical" href="/pages/errorBoundary" />
    </Helmet>
    <div role="alert" className="errFallBack">
      <div className="container">
        <h1 className="errFallBack_para" style={{ color: "red" }}>OOPs! Something went wrong</h1>
        <pre >{error.message}</pre>
        <button onClick={resetErrorBoundary}>Reset</button>
      </div>
    </div>
    </>
  );
};

// causing an error for the error fall back
const User = ({ errorName }) => {
  if (errorName === "Omoo") {
    throw new Error("Click the button below to exit this page");
  }
  return (
    <div className="user">
      <h1>{errorName}</h1>
    </div>
  );
};

function ErrorBoundaryTest() {
  const navigate = useNavigate();
  return (
    <div className="error-boundary">

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => navigate("/")}
      >
        <User errorName="Omoo" />
      </ErrorBoundary>
    </div>
  );
}
export default ErrorBoundaryTest;