import LoginForm from "@/components/login/LoginForm";
import Image from "next/image";

type Props = {};
const Login = (props: Props) => {
  return (
    <section className="mx-auto mt-8 flex h-[70vh] w-full max-w-[700px] items-center rounded-[7px] bg-[#eeeeeea2] shadow-md">
      <div className="w-[50%] px-4 py-8 h-full">
        <LoginForm />
      </div>

      <div className="flex h-full w-[50%] items-center justify-center bg-white">
        <Image alt="login" src="/login.jpg" width={400} height={700} />
      </div>
    </section>
  );
};
export default Login;
