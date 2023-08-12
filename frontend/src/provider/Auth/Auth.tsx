import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Parse from "parse";
import { useRouter } from "next/router";

export const AuthContext = createContext<{
  getIsLoggedIn: () => boolean;
  login: (username: string, password: string) => void;
  signup: (username: string, password: string, email: string) => void;
}>({ getIsLoggedIn: () => false, login: () => {}, signup: () => {} });

function AuthProviderNotMemoized(props: { children: JSX.Element }) {
  const router = useRouter();
  useEffect(() => {
    if (!getIsLoggedIn()) {
      if (!router.pathname.match(/^\/(signup|login)/)) {
        router.replace("/login");
      }
      return;
    }
  }, []);
  const login = useCallback(async (username: string, password: string) => {
    try {
      const user = await Parse.User.logIn(username, password);
      const userName = user.get("username");
      console.log(`${userName} just logged in!`);
      router.push("/");
    } catch (error: any) {
      console.log(error?.message || "login faild");
    }
  }, []);

  const signup = useCallback(
    async (username: string, password: string, email: string) => {
      console.log({ username, password });
      try {
        const user = new Parse.User();
        user.set("username", username);
        user.set("password", password);
        user.set("email", email);
        await user.signUp();
        router.push("/");
      } catch (error: any) {
        console.log(error || "signup faild");
      }
    },
    []
  );

  const getIsLoggedIn = useCallback((): boolean => {
    return !!Parse.User.current();
  }, []);
  return (
    <AuthContext.Provider value={{ getIsLoggedIn, login, signup }}>
      {props.children}
    </AuthContext.Provider>
  );
}
export const AuthProvider = memo(AuthProviderNotMemoized);

export const useAuth = () => useContext(AuthContext);
