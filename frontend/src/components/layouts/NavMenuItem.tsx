import { ReactNode } from "react";

type Props = { children: ReactNode };
const NavMenuItem = (props: Props) => {
  return (
    <li className="mx-4 cursor-pointer select-none rounded-[7px] px-2 py-1 text-[15px] text-[#111]">
      {props.children}
    </li>
  );
};
export default NavMenuItem;
