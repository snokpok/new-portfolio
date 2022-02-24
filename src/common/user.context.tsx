import React from "react";

export type UserState = {
  accessToken: string | null;
};

export interface UserStateContextInterface {
  user: UserState;
  setUser: React.Dispatch<React.SetStateAction<UserState>>;
}

export const UserContext = React.createContext<UserStateContextInterface>({
  user: {
    accessToken: null,
  },
  setUser: () => {},
});
