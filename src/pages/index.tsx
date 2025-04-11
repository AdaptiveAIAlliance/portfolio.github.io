"use client";
import Image from "next/image";
import Header from "@/components/HeaderBar";
import { profile } from "../configs/profle_data";
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
import { Github, icons, Linkedin, Mail } from "lucide-react";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const posts = await getSortedPostsData();
  const posts: posts = await getSortedPostsData();
  const data = await getUIComponentData();
  return {
    props: {
      posts,
      data,
    },
  };
};
export default function Home({
  posts,
  data,
}: {
  posts: posts;
  data: { uiComponentPaths: string[] };
}) {
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

  const carouselContent = [
    {
      title: "Latest Posts",
      description: "Read the lates content",

      content: (
        <BlogCards
          posts={posts}
          uiSwitch={{
            clasification: false,
            intro: true,
            image: true,
            title: true,
            layout: "row",
          }}
        ></BlogCards>
      ),
    },
    {
      title: "UI mini projects",
      description: "Checkout lates projects",
      content: (
        <div className="flex flex-col w-full justify-between">
          <UIComponentsList paths={data.uiComponentPaths}></UIComponentsList>

          <Link
            className={` w-20 text-center justify-center place-self-end  ${badgeVariants(
              {
                variant: "secondary",
              }
            )} `}
            href={`/ui-mini-projects/`}
          >
            View all
          </Link>
        </div>
      ),
    },
    {
      title: "Get in touch",
      description: "",
      content: (
        <section
          id="contact"
          className="flex flex-col m-auto w-[32rem] items-center text-center "
        >
          <h3 className="text-xl font-bold mb-12 ">Contact Me</h3>
          <p>
            I&apos;d love to hear from you. Whether you have a project idea, a
            question, or just want to chat, please don&apos;t hesitate to reach
            out.
          </p>

          <div className="contact-details flex gap-8 justify-around flex-wrap mt-10">
            {[
              {
                title: "Email",
                href: "mailto:your.email@example.com",
                icon: <Mail size={14} />,
              },
              {
                title: "Linkedin",
                href: "mailto:your.email@example.com",
                icon: <Linkedin size={14} />,
              },
              {
                title: "Github",
                href: "mailto:your.email@example.com",
                icon: <Github size={14} />,
              },
            ].map((c, i) => (
              <Button key={i} className="felx gap-x-2 hover:animate-pulse">
                {c.icon}
                <a href={c.href}>
                  <h4>{c.title}</h4>
                </a>
              </Button>
            ))}
          </div>
        </section>
      ),
    },
  ];
  return (
    <>
      <main className="flex text-neutral-900 min-h-screen   dark:text-emerald-100 flex-col justify-center items-center sm:px-0 px-8  ">
        <section className="h-screen flex content-center justify-center w-full">
          <Carousel
            orientation="vertical"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
            className="w-full flex flex-col items-center align-middle justify-center content-center "
          >
            <h1 className="fixed top-24 left-1 self-start -rotate-[24deg]  mt-8 ml-4 block [text-shadow:_0_0_20px_rgba(10,10,10,1)] dark:[text-shadow:_0_0_20px_rgba(209,250,229,.8)] text-3xl font-bold font-[cursive]  animate-pulse blur-[1px]  text-neutral-700  dark:text-emerald-700">
              What&apos;s new?
            </h1>
            <CarouselContent className="rounded-t-2xl  h-[60vh]   w-4/5 m-auto ">
              {carouselContent.map((c, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full p-0 h-fit flex flex-col items-center justify-center"
                >
                  <div className="rounded-t-2xl flex flex-col justify-center items-center p-4 pb-2 w-fit h-fit backdrop-filter backdrop-blur-xl bg-slate-200 bg-opacity-40 dark:bg-opacity-40 dark:bg-emerald-800/40">
                    <h2 className="block w-max text-xl font-extrabold">
                      {c.title}
                    </h2>
                    <p>{c.description}</p>
                  </div>
                  <GlassContainer className="">{c.content}</GlassContainer>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="animate-pulse dark:bg-emerald-100/60 absolute m-auto top-[15vh] right-[10vw] translate-x-0 left-auto" />
            <CarouselNext className="animate-pulse dark:bg-emerald-100/60 absolute m-auto bottom-[5vh] right-[10vw] translate-x-0 left-auto" />
          </Carousel>
        </section>
      </main>
    </>
  );
}
