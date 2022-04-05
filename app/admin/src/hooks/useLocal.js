import { useState, useEffect } from "react";

const getItem = (key, initial) => {
  const item = JSON.parse(localStorage.getItem(key));
  if (item) return item;
  if (initial instanceof Function) return initial();
  return initial;
};

const useLocal = (key, initial) => {
  const [value, setValue] = useState(() => getItem(key, initial));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocal;
