import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import Parse, { User } from "parse";
import { useRouter } from "next/router";

export const AuthContext = createContext<{
  getIsLoggedIn: () => boolean;
  login: (username: string, password: string) => void;
  signup: (username: string, password: string, email: string) => void;
  isLoggedIn: boolean;
  logout: () => void;
}>({
  getIsLoggedIn: () => false,
  login: () => {},
  signup: () => {},
  isLoggedIn: false,
  logout: () => {},
});

function AuthProviderNotMemoized(props: { children: JSX.Element }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = async (username: string, password: string) => {
    try {
      const user = await Parse.User.logIn(username, password);
      const userName = user.get("username");
      console.log(`${userName} just logged in!`);
      router.push("/");
    } catch (error: any) {
      console.log(error?.message || "login faild");
    }
  };

  const signup = async (username: string, password: string, email: string) => {
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
  };

  const logout = async () => {
    await User.logOut();
    setIsLoggedIn(false);
  };

  const getIsLoggedIn = () => {
    return !!Parse.User.current();
  };

  const loggedIn = getIsLoggedIn();

  useEffect(() => {
    if (!loggedIn && typeof window !== undefined) {
      if (!router.pathname.match(/^\/(signup|login)/)) {
        router.replace("/login");
      }
    }
  });

  useEffect(() => {
    setIsLoggedIn(loggedIn);
  }, [loggedIn]);

  return (
    <AuthContext.Provider
      value={{ getIsLoggedIn, login, signup, isLoggedIn, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export const AuthProvider = memo(AuthProviderNotMemoized);

export const useAuth = () => useContext(AuthContext);
