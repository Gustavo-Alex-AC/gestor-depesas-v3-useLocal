import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { DataProvider } from "../contexts/DataContext";
import Protected from "../pages/auth/Protected";
import SpinnerFullPage from "./SpinnerFullPage";

// Lazy loaded pages
const Welcome = lazy(() => import("../pages/auth/Welcome"));
const Dashboard = lazy(() => import("./Dashboard"));
const Income = lazy(() => import("./Income"));
const Expense = lazy(() => import("./Expense"));
const Instruções = lazy(() => import("./Instruções"));
const Apoio = lazy(() => import("./Apoio"));
const PageNotFound = lazy(() => import("../pages/auth/PageNotFound"));
const Login = lazy(() => import("../pages/auth/Login"));
const SignUp = lazy(() => import("../pages/auth/Signup"));

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            {/* 🔐 Public Routes */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* 🔐 Protected Routes */}
            <Route
              path="/welcome"
              element={
                <Protected>
                  <Welcome />
                </Protected>
              }
            />
            <Route
              path="/dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="/receitas"
              element={
                <Protected>
                  <Income />
                </Protected>
              }
            />
            <Route
              path="/despesas"
              element={
                <Protected>
                  <Expense />
                </Protected>
              }
            />
            <Route
              path="/instrucoes"
              element={
                <Protected>
                  <Instruções />
                </Protected>
              }
            />
            <Route
              path="/apoio"
              element={
                <Protected>
                  <Apoio />
                </Protected>
              }
            />

            {/* Página de erro 404 */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
