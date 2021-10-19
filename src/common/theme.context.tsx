import React from "react";

export interface ThemeState {
  darkMode: boolean;
}

interface ThemeStateContextInterface {
  theme: ThemeState;
  setTheme: React.Dispatch<React.SetStateAction<ThemeState>>;
}

export const ThemeStateContext = React.createContext<ThemeStateContextInterface>({
  theme: { darkMode: true },
  setTheme: () => {},
});
