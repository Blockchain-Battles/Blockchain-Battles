import { useAuth } from "@/provider/Auth/Auth";
import { FormEvent, useRef } from "react";

type Props = {};
const Login = (props: Props) => {
  const { login } = useAuth();
  const userRef = useRef<HTMLInputElement>(null!);
  const passRef = useRef<HTMLInputElement>(null!);

  const submitHandler = (event: FormEvent) => {
    event?.preventDefault();
    console.log(userRef.current.value);
    login(userRef.current.value, passRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="username" ref={userRef} />
      <input type="text" placeholder="password" ref={passRef} />
      <button type="submit">signup</button>
    </form>
  );
};
export default Login;
