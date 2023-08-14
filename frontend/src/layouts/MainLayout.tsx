import NavMenuItem from "@/components/layouts/NavMenuItem";
import { nunito } from "@/utils/font";
import classes from "./styles.module.scss";
import { ReactNode } from "react";
import { AiFillGithub } from "react-icons/ai";
type Props = {
  children: ReactNode;
};

const MainLayout = (props: Props) => {
  return (
    <section className={`min-h-screen w-screen bg-[#fff] ${nunito.className} `}>
      <header
        className={` flex h-[4rem] w-full items-center justify-between bg-transparent px-8 py-4  ${classes.header} `}
      >
        <div className="logo">Logo</div>
        <nav>
          <ul className="flex w-auto items-center justify-between px-4">
            <NavMenuItem>menu</NavMenuItem>
            <NavMenuItem>menu</NavMenuItem>
            <NavMenuItem>menu</NavMenuItem>
          </ul>
        </nav>
        <div className="socials">
          <div className={`cursor-pointer text-[30px]`}>
            <AiFillGithub />
          </div>
        </div>
      </header>
      <main className="px-8 py-4 ">{props.children}</main>
    </section>
  );
};
export default MainLayout;
