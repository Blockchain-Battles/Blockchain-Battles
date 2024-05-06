import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = NextLinkProps & MuiLinkProps;

const NavbarLink = (props: Props) => {
  const pathname = usePathname();
  console.log({ pathname });
  const isActive = props.href === pathname;
  return (
    <MuiLink
      sx={{ transition: ".2s all ease" }}
      underline="none"
      color={isActive ? "primary" : "grey"}
      component={NextLink}
      {...props}
    />
  );
};

export default NavbarLink;
