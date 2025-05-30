"use client";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { assetPathResolver } from "@/utils/utils";
import Image from "next/image";
import { badgeVariants } from "./ui/badge";
import { ReactElement, useEffect, useState } from "react";
import { posts, postSingle } from "@/types/types";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
type Props = {
  posts: posts;
  uiSwitch: postSectionsSwitch | null;
};

type postSectionsSwitch = {
  clasification: Boolean | null;
  intro: Boolean | null;
  image: Boolean | null;
  title: Boolean | null;
  layout: "row" | "column" | null;
};

export default function BlogCards(props: Props): ReactElement {
  const posts = props.posts;
  const uiSwitch = props.uiSwitch;

  const contentLength = uiSwitch?.layout === "row" ? 30 : 70;
  const BlogCard = ({
    post,
    uiSwitch = {
      clasification: true,
      intro: true,
      image: true,
      title: true,
      layout: "column",
    },
  }: {
    post: postSingle;
    uiSwitch: postSectionsSwitch | null;
  }) => {
    return (
      <li key={post.id} className="basis-1/5">
        <Card
          className={`bg-slate-600/20  overflow-auto rounded-2xl hover:bg-slate-200 hover:bg-opacity-40 duration-300 hover:shadow-lg hover:shadow-slate-200/40 ${
            uiSwitch?.layout === "row"
              ? "flex flex-row justify-between w-60 p-2 sm:p-0 sm:w-96 md:w-[32rem]"
              : "flex flex-col min-h-72 min-w-[20rem] max-w-[22rem]"
          }`}
        >
          <CardHeader
            className={`p-0 rounded-2xl ${
              uiSwitch?.layout === "row"
                ? "md:w-[200px] w-full hidden md:block "
                : ""
            }`}
          >
            {uiSwitch?.image !== false && (
              <Link href={`/blog/${post.id}`}>
                <Image
                  className={`w-full ${
                    uiSwitch?.layout === "row"
                      ? "rounded-l-2xl"
                      : "rounded-t-2xl h-80"
                  }`}
                  width={320}
                  height={320}
                  src={assetPathResolver("/blog/" + post.featImage)}
                  alt={post.alt}
                />
              </Link>
            )}
          </CardHeader>
          <CardContent
            className={` ${
              uiSwitch?.layout === "row" ? "w-full py-2 pl-2" : "p-4 "
            }`}
          >
            {uiSwitch?.title !== false && (
              <CardTitle className=" min-h-20 text-lg pb-1 ">
                <Link href={`/blog/${post.id}`}>
                  {post.title.length >= 60
                    ? post.title.slice(0, 56) + "..."
                    : post.title}
                </Link>
              </CardTitle>
            )}
            {(uiSwitch?.clasification !== false ||
              uiSwitch?.intro !== false) && (
              <div>
                {uiSwitch?.clasification !== false &&
                  ((post.tags !== undefined && post.tags.length > 0) ||
                    (post.categories !== undefined &&
                      post.categories.length > 0)) && (
                    <div className="p-0 pb-2 flex flex-row  gap-2 justify-between">
                      {post.categories.length > 0 && (
                        <div className=" flex flex-row  gap-2">
                          {post.categories.slice(0, 3).map((c: string) => (
                            <Link
                              className={badgeVariants({ variant: "default" })}
                              key={c}
                              href={`/category/${c}`}
                            >
                              {c.length >= 6 ? c.slice(0, 3) + "..." : c}
                            </Link>
                          ))}
                        </div>
                      )}
                      {post.tags.length > 0 && (
                        <div className=" flex flex-row gap-2">
                          {post.tags.slice(0, 2).map((t: string) => (
                            <Link
                              className={badgeVariants({
                                variant: "secondary",
                              })}
                              key={t}
                              href={`/tag/${t}`}
                            >
                              {t.length >= 6 ? t.slice(0, 3) + "..." : t}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                {uiSwitch?.intro !== false &&
                post.intro !== undefined &&
                post.intro.length > contentLength
                  ? post.intro.substring(0, contentLength) + "..."
                  : post.intro}
              </div>
            )}
          </CardContent>
        </Card>
      </li>
    );
  };

  return (
    <ol
      className={` flex w-full self-center  justify-center  sm:flex-row flex-wrap gap-y-8 gap-x-4 lg:px-8 py-10 px-0 overflow-y-scroll ${
        uiSwitch?.layout === "row"
          ? "2xl:justify-between h-96  items-center"
          : " xl:justify-evenly  items-start"
      }`}
    >
      {posts.map((post: postSingle) => (
        <BlogCard key={post.id} post={post} uiSwitch={uiSwitch} />
      ))}
    </ol>
  );
}
