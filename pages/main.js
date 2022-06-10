import {MainLayout} from "../components/MainLayout/MainLayout";
import React from "react";
import Image from "next/image";
import NFTIcons from '../public/NFTIcons/Rectangle 26.png'
import {SectionPage} from "../components/SectionPage/SectionPage";

export default function Main() {
    return (
        <MainLayout>
           <SectionPage/>
        </MainLayout>
    )
}