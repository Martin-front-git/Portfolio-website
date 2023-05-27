'use client';
import { createSlice } from "@reduxjs/toolkit";
import HomePage from "@/app/Components/Home/page";
import About from "@/app/Components/About/page";
import Skills from "@/app/Components/Skills/page";
import Contacts from "@/app/Components/Contacts/page";
import { FC } from "react";

interface ILink {
    id: number,
    name: string,
    href: string | URL
 }
 interface ISection {
    id: number | string;
    name: FC<{}>
  }
 interface ILinks {
    linksList: ILink[],
    sectionsList : ISection[]
 }
 const initialState: ILinks = {
    linksList: [
        { id: 1, name: "Home", href: "/#1" },
        { id: 2, name: "About", href: "/#2" },
        { id: 3, name: "Skills", href: "/#3" },
        { id: 4, name: "Contacts", href: "/#4" },
    ],
    sectionsList: [
        { id: 1, name:  HomePage  },
        { id: 2, name: About },
        { id: 3, name: Skills },
        { id: 4, name: Contacts }
    ]
 };

  export const NavbarSlice = createSlice({
    name: "counter",
    initialState,
    reducers : {}
  });

  export default NavbarSlice.reducer;