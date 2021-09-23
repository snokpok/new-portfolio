import React from "react";

export interface ThemeState {
  darkMode: boolean;
}

interface ThemeStateContext {
  theme: ThemeState;
  setTheme: React.Dispatch<React.SetStateAction<ThemeState>>;
}

export const ThemeContext = React.createContext<ThemeStateContext>({
  theme: { darkMode: true },
  setTheme: () => {},
});
