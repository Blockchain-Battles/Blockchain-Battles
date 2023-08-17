import FormGroup from "@/components/form/FormGroup";
import useLoginFormik from "@/formik/login/useLoginFormik";
import { useAuth } from "@/provider/Auth/Auth";
import Link from "next/link";
import { FormEvent, useRef } from "react";

type Props = {};
const LoginForm = (props: Props) => {
  const { login } = useAuth();
  const { formik } = useLoginFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });
  const userRef = useRef<HTMLInputElement>(null!);
  const passRef = useRef<HTMLInputElement>(null!);

  const submitHandler = (event: FormEvent) => {
    event?.preventDefault();
    formik.handleSubmit();
    if (formik.isValid) {
      console.log({ formikvalues: formik.values });
      const { username, password } = formik.values as any;
      //   console.log(userRef.current.value);
      login(username, password);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex h-[90%] flex-col justify-between"
    >
      <div className="text-center text-[30px] font-semibold">Login</div>
      <div className="inputs">
        <FormGroup
          formik={formik}
          name="username"
          placeholder="username"
          label="Username"
        />
        <FormGroup
          formik={formik}
          name="password"
          placeholder="password"
          type="password"
          label="Password"
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full rounded-[7px] bg-[#222] p-2 text-white transition-all hover:bg-[#444]"
        >
          Login
        </button>
      </div>
      <div className="p-2">
        <Link href={"/signup"}>
          <p>don&apos;t have an account?</p>
        </Link>
      </div>
    </form>
  );
};
export default LoginForm;
