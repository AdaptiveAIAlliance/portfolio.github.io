"use client";
import Image from "next/image";
import Header from "@/components/header";
import { profile } from "../configs/profle_data";
import Link from "next/link";
import ThreeScene from "@/components/three_scene";
import ThreeFiberScene from "@/components/threefiber_example";
import AIWriter from "react-aiwriter";
import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import BasicParallax from "@/components/BasicParallax";

export default function Home() {
  const [tab, setTab] = useState("hi");

  const onTabChange = (value: string) => {
    setTab(value);
  };
  return (
    <>
      <ThreeFiberScene />
      <Header />
      <main className="flex text-neutral-900 min-h-screen   dark:text-emerald-100 flex-col justify-center items-center sm:px-0 px-8  ">
        <h1
          className="absolute left-[10vw] top-[15vh] text-3xl font-bold   block  text-neutral-950"
          style={{
            textShadow:
              "0rem 0rem 1rem rgb(209 250 229 / var(--tw-text-opacity))",
          }}
        >
          Welcome
        </h1>
        <section className="h-screen flex content-center justify-center w-full">
          <Carousel
            orientation="vertical"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full flex items-center align-middle justify-center content-center "
          >
            <CarouselContent className=" h-[60vh]">
              {profile.skills.map((skill, index) => (
                <CarouselItem
                  key={index}
                  className="h-[60vh] pt-1 flex flex-col items-center justify-center"
                >
                  <Card className=" py-4 backdrop-filter backdrop-blur-xl bg-slate-200 dark:bg-emerald-900 bg-opacity-40 dark:bg-opacity-40 dark:bg-emerald-800/40">
                    <CardHeader className="">
                      <CardTitle className=" leading-8">
                        {skill.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="p-6 ">
                      {skill.list.map((s, i) => (
                        <Badge key={i}> {s}</Badge>
                      ))}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="animate-pulse dark:bg-emerald-100/60 absolute m-auto top-[15vh] right-[10vw] translate-x-0 left-auto" />
            <CarouselNext className="animate-pulse dark:bg-emerald-100/60 absolute m-auto bottom-[15vh] right-[10vw] translate-x-0 left-auto" />
          </Carousel>
        </section>
        <section className="mx-24">
          <Card className=" w-[80vw] my-24  backdrop-filter backdrop-blur-xl bg-slate-200 dark:bg-emerald-900 bg-opacity-40 dark:bg-opacity-40 dark:bg-emerald-800/40">
            <BasicParallax>
              <div className=" h-screen ">
                <CardHeader className="">
                  <CardTitle className=" leading-8">test</CardTitle>
                </CardHeader>
                <CardContent className="p-6 ">test</CardContent>{" "}
              </div>
            </BasicParallax>
          </Card>
        </section>
      </main>
    </>
  );
}
