import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DataProvider } from "../contexts/DataContext";
import Protected from "../pages/auth/Protected";
import { lazy } from "react";
import { Suspense } from "react";
import SpinnerFullPage from "./SpinnerFullPage";

// import Welcome from "../pages/auth/Welcome";
// import Dashboard from "./Dashboard";
// import Income from "./Income";
// import Expense from "./Expense";
// import Instruções from "./Instruções";
// import Apoio from "./Apoio";
// import PageNotFound from "../pages/auth/PageNotFound";

const Welcome = lazy(() => import("../pages/auth/Welcome"));
const Dashboard = lazy(() => import("./Dashboard"));
const Income = lazy(() => import("./Income"));
const Expense = lazy(() => import("./Expense"));
const Instruções = lazy(() => import("./Instruções"));
const Apoio = lazy(() => import("./Apoio"));
const PageNotFound = lazy(() => import("../pages/auth/PageNotFound"));

function App() {
  return (
    <div>
      <DataProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route
                path="/dashboard"
                element={
                  <Protected>
                    <Dashboard />
                  </Protected>
                }
              />
              <Route
                path="receitas"
                element={
                  <Protected>
                    <Income />
                  </Protected>
                }
              />
              <Route
                path="despesas"
                element={
                  <Protected>
                    <Expense />
                  </Protected>
                }
              />
              <Route
                path="instrucoes"
                element={
                  <Protected>
                    <Instruções />
                  </Protected>
                }
              />
              <Route
                path="apoio"
                element={
                  <Protected>
                    <Apoio />
                  </Protected>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}
export default App;
