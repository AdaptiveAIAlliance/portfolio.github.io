// "use client";
import Image from "next/image";
import Header from "@/components/header";
import { profile } from "../configs/profle_data";

import ThreeFiberScene from "@/components/threefiber_example";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import BasicParallax from "@/components/basicParallax";
import { getSortedPostsData } from "@/lib/posts";
import BlogCards from "@/components/blogCards";
async function getPosts() {
  const allPostsData = getSortedPostsData();

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return allPostsData;
}
export default async function Home() {
  // const [postsData, setPostsData] = useState<posts>([]);
  // // let posts;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getPosts();
  //     console.log("data from");
  //     console.log(data);

  //     setPostsData(data);
  //     setTimeout(async () => {}, 3000);
  //   };

  //   fetchData();
  // }, []);
  const postsData = await getPosts();
  return (
    <>
      <ThreeFiberScene />
      <Header />

      <main className="flex text-neutral-900 min-h-screen   dark:text-emerald-100 flex-col justify-center items-center sm:px-0 px-8  ">
        <section className="h-[90vh] mb-14 flex content-center justify-center w-full">
          <Card className="rounded-2xl w-[80vw] mt-32 backdrop-filter backdrop-blur-xl bg-slate-200 dark:bg-emerald-900 bg-opacity-40 dark:bg-opacity-40 dark:bg-emerald-800/40">
            <CardHeader>
              <h1
                className="absolute   text-3xl font-bold   block  text-neutral-100 dark:text-emerald-100"
                // style={{
                //   textShadow:
                //     "0rem 0rem 1rem rgb(209 250 229 / var(--tw-text-opacity))",
                // }}
              >
                Welcome
              </h1>
            </CardHeader>
          </Card>
          {/* <Carousel
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
          </Carousel> */}
        </section>
        <section className="mx-24">
          <div className="rounded-2xl w-[80vw] my-4  backdrop-filter backdrop-blur-xl bg-slate-200 dark:bg-emerald-900 bg-opacity-40 dark:bg-opacity-40 dark:bg-emerald-800/40">
            <h2 className="mx-auto text-center p-4 text-xl leading-8">
              Latest posts
            </h2>
            <BlogCards posts={postsData ?? []}></BlogCards>
          </div>
        </section>
      </main>
    </>
  );
}
