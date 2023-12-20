/* eslint-disable react/prop-types */
import { useState } from "react";
import navContext from "./navContext";

export default function UserContextProvider({ children }) {
  const [active, setActive] = useState("all");
  return (
    <navContext.Provider value={{ active, setActive }}>
      {children}
    </navContext.Provider>
  );
}
