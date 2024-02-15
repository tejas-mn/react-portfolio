import { useState, useEffect } from "react"

export const useAutoBoldText = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.auto-format');
    elements.forEach(element => {
      let htmlContent = element.innerHTML;
      const boldSyntax = /\*(.*?)\*/g;
      htmlContent = htmlContent.replace(boldSyntax, '<strong><i>$1</i></strong>');
      element.innerHTML = htmlContent;
    });
  });
};

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