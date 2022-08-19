import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useUser from "lib/useUser";
import { User } from "pages/api/user";

const AuthContext = createContext<User | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();

  const { user: userData } = useUser({
    redirectTo: "/",
  });

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  return <AuthContext.Provider value={user!}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
  const context = useContext(AuthContext);

  // if (context === undefined) {
  //   throw new Error("useAuthContext must be used within a AuthProvider");
  // }

  return context;
}
