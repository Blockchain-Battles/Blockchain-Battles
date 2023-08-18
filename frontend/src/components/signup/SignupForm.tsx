import FormGroup from "@/components/form/FormGroup";
import useLoginFormik from "@/formik/login/useLoginFormik";
import useSignupFormik from "@/formik/signup/useSignupFromik";
import { useAuth } from "@/provider/Auth/Auth";
import Link from "next/link";
import { FormEvent, useRef } from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import HideEye from "../ui/hideEye/HideEye";
type Props = {};
const SignupForm = (props: Props) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const { signup } = useAuth();
  const { formik } = useSignupFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  const submitHandler = (event: FormEvent) => {
    event?.preventDefault();
    formik.handleSubmit();
    if (formik.isValid) {
      const { username, password, email } = formik.values as any;
      signup(username, password, email);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex h-[90%] flex-col justify-between"
    >
      <div className="text-center text-[30px] font-semibold">Signup</div>
      <div className="inputs">
        <FormGroup
          formik={formik}
          name="email"
          placeholder="email"
          label="Email"
        />
        <FormGroup
          formik={formik}
          name="username"
          placeholder="username"
          label="Username"
        />
        <div className="relative">
          <FormGroup
            formik={formik}
            name="password"
            placeholder="password"
            type={showPass ? "text" : "password"}
            label="Password"
          />
          <span className="absolute bottom-[7px] right-[16px] cursor-pointer text-[25px]">
            <HideEye setShow={setShowPass} show={showPass} />
          </span>
        </div>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full rounded-[7px] bg-[#222] p-2 text-white transition-all hover:bg-[#444]"
        >
          Create Account
        </button>
      </div>
      <div className="p-2">
        <Link href={"/login"}>
          <p>already have an account?</p>
        </Link>
      </div>
    </form>
  );
};
export default SignupForm;
