import { ReactNode } from "react";
import HomePage from "../Home/page";
import About from "../About/page";
import Skills from "../Skills/page";
import Contacts from "../Contacts/page";

interface ISection {
  id: number | string;
  name: ReactNode;
}

let SectionList: ISection[] = [
  { id: 1, name: <HomePage /> },
  { id: 2, name: <About /> },
  { id: 3, name: <Skills /> },
  { id: 4, name: <Contacts /> },
];

export const SectionsPage: React.FC = () => {
  const SectionsMap: JSX.Element[] = SectionList.map((sec) => (
    <section key={String(sec.id)} id={String(sec.id)}>
      {sec.name}
    </section>
  ));
  return <>{SectionsMap}</>;
};
