import React from "react";

export type UserState = {
  accessToken: string | null;
  refreshToken: string | null;
};

export interface UserStateContextInterface {
  user: UserState;
  setUser: React.Dispatch<React.SetStateAction<UserState>>;
}

export const UserContext = React.createContext<UserStateContextInterface>({
  user: {
    accessToken: null,
    refreshToken: null,
  },
  setUser: () => {},
});
