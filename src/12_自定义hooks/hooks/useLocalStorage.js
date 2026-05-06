import { useEffect, useState } from "react";
function useLocalStorage(key) {
  // 兼容基本数据类型存储，兼容复杂数据类型存储（对象、数组）
  const [data, setData] = useState(() => {
    const item = localStorage.getItem(key);
    if (!item) return '';
    return JSON.parse(item);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData]
}

export default useLocalStorage