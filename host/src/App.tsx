import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

const ApplicationsApp = lazy(() => import("applications/ApplicationsApp"));

const InterviewsApp = lazy(() => import("interviews/InterviewsApp"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/applications">Applications</Link>
        <Link to="/interviews">Interviews</Link>
        <Routes>
          <Route
            path="/applications/*"
            element={
              <ErrorBoundary>
                <Suspense fallback={<p>Loading applications...</p>}>
                  <ApplicationsApp />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route
            path="/interviews/*"
            element={
              <ErrorBoundary>
                <Suspense fallback={<p>Loading interviews ...</p>}>
                  <InterviewsApp />
                </Suspense>
              </ErrorBoundary>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
