"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import wall from "../../Images/wall.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import style from "./Home.module.scss";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    tl.fromTo(
      "." + style["text"],
      { y: 30, duration: 2, opacity: 0 },
      {
        y: 0,
        duration: 2,
        opacity: 1,
      }
    );
    tl.fromTo(
      "." + style["btn"],
      { y: 40, duration: 2, opacity: 0 },
      {
        y: 0,
        duration: 2,
        opacity: 1,
      }
    );
  });
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <div className={style.homeBlock}>
        <div className={style.textBlock}>
          <h1 className={style.text}>Frontend Developer</h1>
          <button className={style.btn}>
            <Link href={"../#4"}>Contacts</Link>
          </button>
        </div>
        <Image alt="picture" src={wall} className={style.img} />
      </div>
    </>
  );
};

export default HomePage;
