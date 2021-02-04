import { createContext, useState } from "react";

export const GlobalContext = createContext({
  text: "This is the initial context",
  setText: null,
});

export const ContextProvider = ({ children }) => {
  const [text, setText] = useState("This is the initial context");
  const contextValue = {
    text,
    setText,
  };
  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
