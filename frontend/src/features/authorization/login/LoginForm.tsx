import FormGroup from "@/features/forms/components/FormGroup";
import { useAuth } from "@/features/authorization/Auth/Auth";
import Link from "next/link";
import { FormEvent, useState } from "react";
import useLoginFormik from "@/features/forms/lib/formik/login/useLoginFormik";
import HideEye from "@/features/ui/components/hideEye/HideEye";

type Props = {};
const LoginForm = (props: Props) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const { login } = useAuth();
  const { formik } = useLoginFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const submitHandler = (event: FormEvent) => {
    event?.preventDefault();
    formik.handleSubmit();
    if (formik.isValid) {
      const { username, password } = formik.values as any;
      login(username, password);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex h-[90%] select-none flex-col justify-between"
    >
      <div className="text-center text-[30px] font-semibold">Login</div>
      <div className="inputs">
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
