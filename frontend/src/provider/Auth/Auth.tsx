import { createContext, useContext, useState } from "react";
import Parse from "parse";
import { useRouter } from "next/router";

export const AuthContext = createContext<{
  isLoggedIn: boolean;
  login: (username: string, password: string) => void;
  signup: (username: string, password: string) => void;
}>({ isLoggedIn: false, login: () => {}, signup: () => {} });

export const AuthProvider = (props: { children: JSX.Element }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  const login = async (username: string, password: string) => {
    try {
      const user = await Parse.User.logIn(username, password);
      const userName = user.get("username");
      setIsLoggedIn(true);
      console.log(`${userName} just logged in!`);
      router.push("/");
    } catch (error: any) {
      console.log(error?.message || "login faild");
    }
  };

  const signup = async (username: string, password: string) => {
    console.log({ username, password });
    try {
      const user = new Parse.User();
      user.set("username", username);
      user.set("password", password);
      await user.signUp();
      await login(username, password);
    } catch (error: any) {
      console.log(error || "signup faild");
    }
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, signup }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
