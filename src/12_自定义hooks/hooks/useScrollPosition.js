import { useEffect, useState } from "react";
function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    function scroll() {
      console.log(window.scrollX, window.scrollY);
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    }
  }, [])
  return [scrollX, scrollY]
}

export default useScrollPosition