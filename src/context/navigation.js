import { createContext, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPaht, setCurrentPath] = useState("/");

  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
