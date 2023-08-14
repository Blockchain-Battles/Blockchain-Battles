import NavMenuItem from "@/components/layouts/NavMenuItem";
import { nunito } from "@/utils/font";
import classes from "./styles.module.scss";
import { ReactNode } from "react";
import { CiLogout, CiLogin } from "react-icons/ci";
import { useAuth } from "@/provider/Auth/Auth";
import { useRouter } from "next/router";
import Link from "next/link";
type Props = {
  children: ReactNode;
};

const MainLayout = (props: Props) => {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();
  return (
    <section className={`min-h-screen w-screen bg-[#fff] ${nunito.className} `}>
      <header
        className={` flex h-[4rem] w-full items-center justify-between bg-transparent px-8 py-4  ${classes.header} `}
      >
        <div className="logo">Logo</div>
        <nav>
          <ul className="flex w-auto items-center justify-between px-4">
            <NavMenuItem>
              <Link
                className={`${
                  router.pathname === "/" ? classes.activeLink : null
                }`}
                href={"/"}
              >
                Home
              </Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link
                className={`${
                  router.pathname.includes("/games") ? classes.activeLink : null
                }`}
                href={"/games"}
              >
                Games
              </Link>
            </NavMenuItem>
            <NavMenuItem>
              <Link
                className={`${
                  router.pathname.includes("/contacts") ? classes.activeLink : null
                }`}
                href={"/contacts"}
              >
                Contacts
              </Link>
            </NavMenuItem>
          </ul>
        </nav>
        <div className="controller">
          <div className={`cursor-pointer text-[25px]`}>
            {isLoggedIn && <CiLogout onClick={logout} />}
            {!isLoggedIn && (
              <CiLogin
                onClick={() => {
                  router.push("/login");
                }}
              />
            )}
          </div>
        </div>
      </header>
      <main className="px-8 py-4 ">{props.children}</main>
    </section>
  );
};
export default MainLayout;
