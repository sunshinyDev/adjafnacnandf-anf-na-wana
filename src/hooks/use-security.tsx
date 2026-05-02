import { useEffect } from "react";

export function useSecurity() {
  useEffect(() => {
    // Bloqueia o botão direito do mouse (Menu de Contexto)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Bloqueia atalhos de teclado comuns de desenvolvedor
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloqueia o F12
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Bloqueia Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (
        e.ctrlKey &&
        e.shiftKey &&
        (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")
      ) {
        e.preventDefault();
        return false;
      }

      // Bloqueia Ctrl+U (Ver Código Fonte)
      if (e.ctrlKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault();
        return false;
      }
    };

    // "Debugger Trap" (Armadilha de Depuração)
    // Se o console for forçado a abrir, isso vai travar a aba do invasor
    const debuggerInterval = setInterval(() => {
      Function("debugger")();
    }, 500);

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(debuggerInterval);
    };
  }, []);
}
