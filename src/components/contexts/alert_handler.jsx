import React, { createContext, useContext, useState } from "react";

// Contextを作成
export const AlertHandlerContext = createContext({});

// AlertHandlerProviderコンポーネントを作成
export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    message: "",
  });

  const showAlert = (message) => {
    setAlertState({ visible: true, message });
  };

  const closeAlert = () => {
    setAlertState({ visible: false, message: "" });
  };

  // Contextの値を作成
  const contextValue = {
    ...alertState,
    showAlert,
    closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

// useContextのカスタムフックを作成
export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
