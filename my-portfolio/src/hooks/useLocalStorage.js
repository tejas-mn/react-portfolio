import { useState, useEffect } from "react"

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const val = localStorage.getItem(key)
    if (val != null) return val;
    return (typeof defaultValue === "function") ? defaultValue() : defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, value)
  }, [key, value])

  return [value, setValue]
}