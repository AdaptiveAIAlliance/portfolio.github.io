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
import { ReactElement } from "react";
import { posts, postSingle } from "@/types/types";

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
  const contentLength = uiSwitch?.layout === "row" ? 30 : 90;
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
  }) => (
    <li key={post.id} className="basis-1/5">
      <Card
        className={`bg-slate-600/20  overflow-auto rounded-2xl hover:bg-slate-200 hover:bg-opacity-40 duration-300 hover:shadow-lg hover:shadow-slate-200/40 ${
          uiSwitch?.layout === "row"
            ? "flex flex-row justify-between w-60 p-2 sm:p-0 sm:w-96 md:w-[32rem]"
            : "flex flex-col min-h-72 min-w-72 max-w-80"
        }`}
      >
        <Link className="" href={`/blog/${post.id}`}>
          <CardHeader
            className={`p-0 rounded-2xl ${
              uiSwitch?.layout === "row"
                ? "md:w-[128px] w-full hidden md:block "
                : ""
            }`}
          >
            {uiSwitch?.image !== false && (
              <Image
                className="w-full"
                width={320}
                height={320}
                src={assetPathResolver("/blog/" + post.featImage)}
                alt={post.alt}
              />
            )}
          </CardHeader>{" "}
        </Link>

        <CardContent
          className={` ${
            uiSwitch?.layout === "row" ? "w-full py-2 pl-2" : "p-4 "
          }`}
        >
          {uiSwitch?.title !== false && (
            <Link className="pb-1" href={`/blog/${post.id}`}>
              <CardTitle className=" min-h-20 text-xl pb-1 ">
                {post.title}
              </CardTitle>
            </Link>
          )}
          {(uiSwitch?.clasification !== false || uiSwitch?.intro !== false) && (
            <>
              {uiSwitch?.clasification !== false &&
                (post.tags.length > 0 || post.categories.length > 0) && (
                  <div className="p-0 pb-2 flex flex-row  gap-2 justify-between">
                    {post.categories.length > 0 && (
                      <div className=" flex flex-row  gap-2">
                        {post.categories.splice(0, 3).map((c: string) => (
                          <Link
                            className={badgeVariants({ variant: "default" })}
                            key={c}
                            href={`/category/${c}`}
                          >
                            {c}
                          </Link>
                        ))}
                      </div>
                    )}
                    {post.tags.length > 0 && (
                      <div className=" flex flex-row gap-2">
                        {post.tags.splice(0, 2).map((t: string) => (
                          <Link
                            className={badgeVariants({
                              variant: "secondary",
                            })}
                            key={t}
                            href={`/tag/${t}`}
                          >
                            {t}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              {uiSwitch?.intro !== false && post.intro.length > contentLength
                ? post.intro.substring(0, contentLength) + "..."
                : post.intro}
            </>
          )}
        </CardContent>
      </Card>
    </li>
  );
  return (
    <ol
      className={` flex w-full sm:flex-row flex-wrap gap-y-2 gap-x-4 lg:px-8 py-4 px-0  justify-center overflow-y-scroll ${
        uiSwitch?.layout === "row"
          ? "2xl:justify-between  items-center"
          : "lg:justify-between  items-start"
      }`}
    >
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} uiSwitch={uiSwitch} />
      ))}
    </ol>
  );
}
