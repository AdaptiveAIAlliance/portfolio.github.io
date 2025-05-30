"use client";
import Image from "next/image";
import Header from "@/components/HeaderBar";
import { profile } from "../../configs/profile_data";
import Link from "next/link";
import ThreeScene from "@/components/ThreeScene";
import ThreeFiberScene from "@/components/ThreefiberExample";
import AIWriter from "react-aiwriter";
import { TypeAnimation } from "react-type-animation";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Badge, badgeVariants } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import BasicParallax from "@/components/BasicParallax";
import BlogCards from "@/components/BlogCardsBlock";
import { posts } from "@/types/types";
import { getSortedPostsData } from "@/lib/posts";
import { GetStaticProps } from "next";
import { getUIComponentData } from "@/lib/staticFilesUtils";
import { FcFolder } from "react-icons/fc";
import UIComponentsList from "@/components/UIComponentsList";
import GlassContainer from "@/components/GlassContainer";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getUIComponentData();
  return {
    props: {
      data,
    },
  };
};
export default function UICompinentes({ data }: { data: any }) {
  // const [posts, setPosts] = useState<posts>([]);
  // // const onTabChange = (value: string) => {};
  // useEffect(() => {
  //   const load = async () => {
  //     const postsData = await getPosts();
  //     setPosts((prevPost) => postsData);
  //   };
  //   load();
  // }, []);
  console.log(data);

  return (
    <>
      <main className="flex text-neutral-900 min-h-screen   dark:text-emerald-100 flex-col justify-center items-center sm:px-0 px-8  ">
        <section className="h-screen flex items-center justify-center w-full">
          <GlassContainer className="w-[80vw] mt-32p">
            <UIComponentsList paths={data.uiComponentPaths}></UIComponentsList>
          </GlassContainer>
        </section>
      </main>
    </>
  );
}
