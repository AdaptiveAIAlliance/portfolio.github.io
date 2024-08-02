"use client";
import Image from "next/image";
import Header from "@/components/header";
import { profile } from "../configs/profle_data";
import Link from "next/link";
import ThreeScene from "@/components/three_scene";
import ThreeFiberScene from "@/components/threefiber_example";
import AIWriter from "react-aiwriter";
import React from "react";
import Typed from "typed.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  // const el = React.useRef(null);

  // React.useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     stringsElement: "#typed-strings",
  //     typeSpeed: 50,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);
  return (
    <>
      <Header />
      <ThreeFiberScene />{" "}
      <main className="flex text-slate-100   dark:text-emerald-100 flex-col justify-between px-24 ">
        <section className="min-h-screen flex flex-col justify-center align-middle py-16">
          <Card className="   min-h-max p-8 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 ">
            <CardHeader>
              <h1 className="text-3xl">Hi, I&apos;m {profile.name}</h1>
            </CardHeader>
            <CardContent>
              <h2>{profile.tagLine}</h2>
              <p>{profile.summery}</p>
            </CardContent>
            <CardFooter>
              <div className="flex  gap-x-3">
                <Button>
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button>
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </div>{" "}
            </CardFooter>
          </Card>
        </section>
        <section className="min-h-screen  py-16">
          {" "}
          <div className="flex flex-col gap-y-4 w-min-full  p-8 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-40 dark:bg-opacity-40">
            <h2 className="text-3xl font-bold">Featured skills</h2>
            <ul>
              {profile.skills.map((skill, index) => (
                <li key={index}>
                  <h3>{skill.title}</h3>
                  <p>{skill.list.join(", ")}</p>
                </li>
              ))}
            </ul>{" "}
          </div>
        </section>
        <section className="min-h-screen  py-16">
          <div className="flex flex-col gap-y-4 w-min-full  p-8 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-40 dark:bg-opacity-40">
            <h2 className="text-3xl font-bold">Projects</h2>
            <ul>
              {profile.projects.map((project, index) => (
                <li key={index}>
                  <h3>{project.title}</h3>
                  <p>{project.role}</p>
                  <p>{project.Technologies.join(", ")}</p>
                  <p>{project.Description}</p>
                  <Link href={project.Link}>link</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="min-h-screen  py-16">
          <div className="flex flex-col gap-y-4 w-min-full  p-8 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-40 dark:bg-opacity-40">
            <h2 className="text-3xl font-bold">Experiences</h2>
            <ul>
              {profile.projects.map((project, index) => (
                <li key={index}>
                  <h3>{project.title}</h3>
                  <p>{project.role}</p>
                  <p>{project.Technologies.join(", ")}</p>
                  <p>{project.Description}</p>
                  <Link href={project.Link}>link</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
