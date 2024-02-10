import { useEffect} from "react";

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