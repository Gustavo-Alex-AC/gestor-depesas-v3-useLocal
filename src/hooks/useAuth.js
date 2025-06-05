// src/hooks/useAuth.js
export function useAuth() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    isAuthenticated: !!token && !!user,
    user,
    token,
  };
}
