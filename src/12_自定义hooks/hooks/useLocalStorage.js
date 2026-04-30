import { useEffect, useState } from "react";
function useLocalStorage() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token])

  return [token, setToken]
}

export default useLocalStorage