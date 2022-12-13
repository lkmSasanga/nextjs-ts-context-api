import { createContext, useContext, ReactNode, useState } from "react";

type authContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

const AuthContext = createContext<authContextType>({} as authContextType);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<string>("");

  const value = {
    user,
    setUser,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
