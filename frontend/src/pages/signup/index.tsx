import SignupForm from "@features/authorization/signup/SignupForm";
import Head from "next/head";
import Image from "next/image";

type Props = {};
const Signup = (props: Props) => {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <section className="mx-auto mt-8 flex h-[70vh] w-full max-w-[700px] items-center rounded-[7px] bg-[#eeeeeea2] shadow-md">
        <div className="h-full w-[50%] px-4 py-6">
          <SignupForm />
        </div>

        <div className="flex h-full w-[50%] items-center justify-center bg-white">
          <Image alt="login" src="/login.jpg" width={400} height={700} />
        </div>
      </section>
    </>
  );
};
export default Signup;
