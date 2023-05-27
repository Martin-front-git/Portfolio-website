"use client";
import { useSelector } from "react-redux";
import style from "./Navbar.module.scss";
import Link from "next/link";

export const LinksPage: React.FC = () => {
  const LinksList = useSelector((state: any) => state.NavbarReducer.linksList);

  const LinksMap: JSX.Element[] = LinksList.map((li: any) => (
    <Link className={style.link} href={li.href} key={li.id}>
      {li.name}
    </Link>
  ));

  return <>{LinksMap}</>;
};
