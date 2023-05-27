"use client";
import { useSelector } from "react-redux";

export const SectionsPage: React.FC = () => {
  const SectionList = useSelector(
    (state: any) => state.NavbarReducer.sectionsList
  );

  const SectionsMap: JSX.Element[] = SectionList.map((sec: any) => (
    <section key={String(sec.id)} id={String(sec.id)}>
      <sec.name />
    </section>
  ));

  return <>{SectionsMap}</>;
};
