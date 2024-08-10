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

type Props = {
  posts: posts;
};

export default function BlogCards(prop: Props): ReactElement {
  const posts = prop.posts;

  return (
    <ol
      className="sm:m-8 flex sm:flex-row flex-wrap flex-col gap-y-4 sm:p-8 py-4 px-0 justify-center items-center"
      style={{ gap: "1rem" }}
    >
      {posts.map((post) => (
        <li key={post.id} className="">
          <Link className="" href={`blog/${post.id}`}></Link>

          <Card className="bg-slate-600/20 min-h-72 overflow-auto rounded-2xl hover:bg-slate-200 hover:bg-opacity-40 duration-300 max-w-80 hover:shadow-lg hover:shadow-slate-200/40 ">
            <Link className="" href={`/blog/${post.id}`}>
              <CardHeader className="p-0 rounded-2xl">
                <Image
                  width={320}
                  height={320}
                  src={assetPathResolver("/blog/" + post.featImage)}
                  alt={post.alt}
                />
                <CardTitle className="leading-8 min-h-32 px-4 py-4">
                  {post.title}
                </CardTitle>
              </CardHeader>
            </Link>

            <CardContent className="p-4">
              <div className="p-0 pb-2 flex flex-row flex-wrap gap-4 justify-between">
                <div className=" flex flex-row flex-wrap gap-2">
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
                <div className=" flex flex-row flex-wrap gap-2">
                  {post.tags.splice(0, 2).map((t: string) => (
                    <Link
                      className={badgeVariants({ variant: "secondary" })}
                      key={t}
                      href={`/tag/${t}`}
                    >
                      {t}
                    </Link>
                  ))}
                </div>
              </div>
              {post.intro}
            </CardContent>
          </Card>
        </li>
      ))}
    </ol>
  );
}
