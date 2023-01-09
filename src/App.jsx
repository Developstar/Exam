import "./App.css";
import { lazy, Suspense } from "react";
import NavBar from "./Components/NavBar";

import {  Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";



const GitFetchPage = lazy(()=> import("./Components/GithubFetchPage"));
const Home = lazy(() => import("./HomePage/Home"));
const ErrorBoundaryTest = lazy(() =>
  import("./ErrorBoundaryTest/ErrorBoundaryTest")
);
const ErrorPageTest = lazy(() => import("./ErrorPageTest/ErrorPageTest"));

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" className="errFallBack">
      <div className="container">
        <h1 className="errFallBack_para" style={{ color: "red" }}>OOPs! Something went wrong</h1>
        <pre >{error.message}</pre>
        <button onClick={resetErrorBoundary}> Reset </button>
      </div>
    </div>
  );
};

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <HelmetProvider>
        <NavBar />
        
        
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => navigate("/")}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/errorboundarytest"
                element={<ErrorBoundaryTest />}
              />
              <Route path="/404errortest" element={<ErrorPageTest />} />
              <Route path="*" element={<ErrorPageTest />} />
              <Route path="/GithubFetchPage" element={<GitFetchPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        
      </HelmetProvider>
    </div>
  );
}

export default App;