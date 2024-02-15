import { BrowserRouter, Route, Routes } from "react-router-dom";
import Income from "./Income";
import Expense from "./Expense";
import { DataProvider } from "../contexts/DataContext";
import Instruções from "./Instruções";
import Apoio from "./Apoio";
import Dashboard from "./Dashboard";
import Welcome from "../pages/auth/Welcome";
import Protected from "../pages/auth/Protected";
import PageNotFound from "../pages/auth/PageNotFound";

//import SignIn from "../pages/auth/SignIn";

function App() {
  return (
    <div>
      <DataProvider>
        <BrowserRouter>
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
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}
export default App;
