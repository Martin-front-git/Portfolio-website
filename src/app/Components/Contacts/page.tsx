"use client";
import Image, { StaticImageData } from "next/image";
import style from "./Contacts.module.scss";
import linkedin from "./../../Images/linkedin.png";
import gmail from "./../../Images/gmail.png";
import github from "./../../Images/github.png";

interface ILinks {
  id: number;
  link: string;
  name: string;
  image: StaticImageData;
}
let LinksList: ILinks[] = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/martin-hovhannisyan",
    name: "linkedin.com/in/martin-hovhannisyan",
    image: linkedin,
  },
  {
    id: 2,
    link: "https://github.com/Martin-front-git",
    name: "github.com/Martin-front-git",
    image: github,
  },
  { id: 3, link: "/#4", name: "MartinHovhannisyan31@gmail.com", image: gmail },
];

const Contacts: React.FC = () => {
  const handleLinkClick = (link: string) => {
    window.open(link, "_blank");
  };

  let LinksMap = LinksList.map((li) => (
    <div className="flex items-center">
      <Image
        key={li.id}
        className="w-[100px] h-[100px]"
        src={li.image}
        alt="image"
        onClick={() => handleLinkClick(li.link)}
      />
      <h1 className={style.image}>{li.name}</h1>
    </div>
  ));

  return (
    <div className="h-screen">
      <div>{LinksMap}</div>
    </div>
  );
};

export default Contacts;
