import React, { useState } from "react";

export const LocationKeyContext = React.createContext();

export function LocationKeyProvider({ children }) {
  const [locationKey, setLocationKey] = useState("");
  return (
    <LocationKeyContext.Provider value={[locationKey, setLocationKey]}>
      {children}
    </LocationKeyContext.Provider>
  );
}
