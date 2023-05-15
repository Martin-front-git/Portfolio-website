import { Url } from "next/dist/shared/lib/router/router";
import style from "./Navbar.module.scss";
import Link from "next/link";

interface ILinks {
  id: number;
  name: string;
  href: string | Url;
}
let LinksList: ILinks[] = [
  { id: 1, name: "Home", href: "/#1" },
  { id: 2, name: "About", href: "/#2" },
  { id: 3, name: "Skills", href: "/#3" },
  { id: 4, name: "Contacts", href: "/#4" },
];

export const LinksPage: React.FC = () => {
  const LinksMap: JSX.Element[] = LinksList.map((li) => (
    <Link className={style.link} href={li.href} key={li.id}>
      {li.name}
    </Link>
  ));
  return <>{LinksMap}</>;
};
