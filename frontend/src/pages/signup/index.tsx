import { useAuth } from "@/provider/Auth/Auth";
import { FormEvent, useRef } from "react";

type Props = {};
const Signup = (props: Props) => {
  const { signup } = useAuth();
  const userRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const passRef = useRef<HTMLInputElement>(null!);

  const submitHandler = (event: FormEvent) => {
    event?.preventDefault();
    signup(
      userRef.current.value,
      passRef.current.value,
      emailRef.current.value
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="username" ref={userRef} />
      <input type="text" placeholder="password" ref={passRef} />
      <input type="text" placeholder="email" ref={emailRef} />
      <button type="submit">signup</button>
    </form>
  );
};
export default Signup;
