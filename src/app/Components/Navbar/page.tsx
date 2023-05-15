import style from "./Navbar.module.scss";
import { LinksPage } from "./Links";
import { SectionsPage } from "./Sections";

export default function NavbarPage() {
  return (
    <>
      <div className={style.navbar}>
        <div className={style.linksBlock}>
          <LinksPage />
        </div>
        <div>
          <SectionsPage />
        </div>
      </div>
    </>
  );
}
