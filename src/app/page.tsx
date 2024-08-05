"use client";
import Image from "next/image";
import Header from "@/components/header";
import { profile } from "../configs/profle_data";
import Link from "next/link";
import ThreeScene from "@/components/three_scene";
import ThreeFiberScene from "@/components/threefiber_example";
import AIWriter from "react-aiwriter";
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const [tab, setTab] = useState("hi");

  const onTabChange = (value: string) => {
    setTab(value);
  };
  return (
    <>
      <Header />
      <ThreeFiberScene />
      <main className="flex text-slate-100   dark:text-emerald-100 flex-col justify-between px-24  ">
        <Tabs
          defaultValue="hi"
          className="min-h-screen flex flex-col justify-center jt align-top py-16 text-neutral-900 max-w-full duration-300"
        >
          <TabsList className="border-slate-100 border-t border-x rounded-t-3xl p-0 h-16 rounded-b-none  w-fit justify-items-start text-neutral-900 bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950">
            <TabsTrigger
              className="border-slate-100  h-full rounded-tl-3xl rounded-tr-none rounded-b-none  data-[state=active]:bg-slate-200  data-[state=active]:text-neutral-900 data-[state=active]:bg-opacity-40 hover:bg-slate-200 hover:bg-opacity-60  hover:data-[state=active]:bg-slate-200 hover:data-[state=active]:bg-opacity-40 dark:text-emerald-100 dark:data-[state=active]:bg-emerald-900/60 dark:hover:data-[state=active]:bg-emerald-900/60 dark:hover:bg-emerald-800/60"
              value="hi"
            >
              <span>Hi, ...</span>
            </TabsTrigger>
            <TabsTrigger
              className="border-slate-100 h-full  rounded-t-none   rounded-b-none  data-[state=active]:bg-slate-200 data-[state=active]:text-neutral-900 data-[state=active]:bg-opacity-40 hover:bg-slate-200 hover:bg-opacity-60 hover:data-[state=active]:bg-slate-200 hover:data-[state=active]:bg-opacity-40 dark:text-emerald-100 dark:data-[state=active]:bg-emerald-900/60 dark:hover:data-[state=active]:bg-emerald-900/60 dark:hover:bg-emerald-800/60"
              value="skills"
            >
              <span>Featured skills</span>
            </TabsTrigger>
            <TabsTrigger
              className="border-slate-100 h-full  rounded-t-none   rounded-b-none  data-[state=active]:bg-slate-200 data-[state=active]:text-neutral-900 data-[state=active]:bg-opacity-40 hover:bg-slate-200 hover:bg-opacity-60 hover:data-[state=active]:bg-slate-200 hover:data-[state=active]:bg-opacity-40 dark:text-emerald-100 dark:data-[state=active]:bg-emerald-900/60 dark:hover:data-[state=active]:bg-emerald-900/60 dark:hover:bg-emerald-800/60"
              value="projects"
            >
              <span>Projects</span>
            </TabsTrigger>
            <TabsTrigger
              className="border-slate-100 h-full  rounded-t-none rounded-tr-3xl  rounded-b-none  data-[state=active]:bg-slate-200 data-[state=active]:text-neutral-900 data-[state=active]:bg-opacity-40 hover:bg-slate-200 hover:bg-opacity-60 hover:data-[state=active]:bg-slate-200 hover:data-[state=active]:bg-opacity-40 dark:text-emerald-100 dark:data-[state=active]:bg-emerald-900/60 dark:hover:data-[state=active]:bg-emerald-900/60 dark:hover:bg-emerald-800/60"
              value="exp"
            >
              <span>Experiences</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent
            className="data-[state=active]:mt-0 duration-300 "
            value="hi"
          >
            <section>
              <Card
                style={{ minHeight: "55vh" }}
                className=" flex align-middle flex-col justify-evenly p-8 rounded-tl-none rounded-tr-3xl rounded-b-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 "
              >
                <h1 className="text-3xl">Hi, I&apos;m {profile.name}</h1>
                <CardContent className="mt-8">
                  <h2>{profile.tagLine}</h2>
                  <p>{profile.summery}</p>
                </CardContent>
                <CardFooter className="flex  gap-x-3">
                  <Button>
                    <Link href="#projects">View My Work</Link>
                  </Button>
                  <Button>
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                </CardFooter>{" "}
              </Card>
            </section>
          </TabsContent>
          <TabsContent
            className="data-[state=active]:mt-0 duration-300 min-h-96"
            value="skills"
          >
            <section>
              <div
                style={{ minHeight: "55vh" }}
                className=" flex align-middle flex-col flex-wrap justify-evenly text-neutral-900 text-center  p-8 rounded-tl-none rounded-tr-3xl rounded-b-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 border border-slate-100 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950"
              >
                <h2 className="text-3xl dark:text-slate-200">
                  Featured skills
                </h2>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                  ]}
                  className="mt-8 w-full"
                >
                  <CarouselContent className=" justify-start">
                    {profile.skills.map((skill, index) => (
                      <CarouselItem
                        key={index}
                        className="px-8 basis-full flex align-middle flex-col flex-wrap justify-evenly "
                      >
                        <Card className="bg-slate-200/40 dark:bg-emerald-800/40 py-4 ">
                          <CardHeader className="">
                            <CardTitle> {skill.title}</CardTitle>
                          </CardHeader>

                          <CardContent className="p-6 flex gap-2 flex-wrap justify-center align-middle">
                            {skill.list.map((s, i) => (
                              <Badge key={i}> {s}</Badge>
                            ))}
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="dark:bg-emerald-100/60" />
                  <CarouselNext className="dark:bg-emerald-100/60" />
                </Carousel>
              </div>
            </section>
          </TabsContent>
          <TabsContent
            className="data-[state=active]:mt-0 duration-300 min-h-96"
            value="projects"
          >
            <section>
              <div
                style={{ minHeight: "55vh" }}
                className="flex align-middle flex-col justify-center text-neutral-900 text-center  p-8 rounded-tl-none rounded-tr-3xl rounded-b-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 border border-slate-100 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950"
              >
                <h2 className="text-3xl  dark:text-slate-200">Projects</h2>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                  ]}
                  className="mt-8"
                >
                  <CarouselContent className=" justify-start">
                    {profile.projects.map((project, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-full justify-start"
                      >
                        <Card className="bg-slate-200/40 dark:bg-emerald-800/40 py-4 ">
                          <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription className="py-2 dark:text-emerald-200">
                              {project.role}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            {project.Description}
                            {project.Outcome}
                          </CardContent>

                          <CardFooter className="justify-center">
                            <div className=" text-center  flex  gap-2 flex-wrap justify-center align-middle">
                              {project.Technologies.map((s, i) => (
                                <Badge key={i}> {s}</Badge>
                              ))}
                            </div>
                          </CardFooter>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="dark:bg-emerald-100/60" />
                  <CarouselNext className="dark:bg-emerald-100/60" />
                </Carousel>
              </div>
            </section>
          </TabsContent>
          <TabsContent
            className="data-[state=active]:mt-0 duration-300 min-h-96"
            value="exp"
          >
            <section>
              <div
                style={{ minHeight: "55vh" }}
                className="flex align-middle flex-col justify-center text-neutral-900 text-center  p-8 rounded-tl-none rounded-tr-3xl rounded-b-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 border border-slate-100 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950"
              >
                <h2 className="text-3xl  dark:text-slate-200">Experiences</h2>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                  className="mt-8"
                >
                  <CarouselContent className=" justify-start">
                    {profile.experiences.map((exp, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-full justify-start"
                      >
                        <Card className="bg-slate-200/40 dark:bg-emerald-800/40 py-4 ">
                          <CardHeader>
                            <CardTitle>{exp.title}</CardTitle>
                            <CardDescription className="py-2 dark:text-emerald-200">
                              {exp.company}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>{exp.tasks}</CardContent>

                          <CardFooter className="justify-between text-center  flex  gap-2 flex-wrap align-middle">
                            <p>{exp.startDate}</p>
                            <p>{exp.endDate}</p>
                          </CardFooter>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="dark:bg-emerald-100/60" />
                  <CarouselNext className="dark:bg-emerald-100/60" />
                </Carousel>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
