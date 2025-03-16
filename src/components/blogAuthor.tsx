import { ReactElement } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { assetPathResolver } from "@/utils/utils";
type Props = {
  author: string;
  authorImage: string;
};
export default function BlogAuthor(props: Props): ReactElement {
  return (
    <div className=" w-full  flex flex-row items-center gap-4 dark:text-emerald-100 align-middle justify-start">
      <Avatar>
        <AvatarImage src={assetPathResolver(props.authorImage)} />
        <AvatarFallback>
          {props.author != null && props.author != "undefined"
            ? props.author
                .split(" ")
                .map((w) => w[0])
                .slice(0, 2)
                .join("")
            : ""}
        </AvatarFallback>
      </Avatar>
      <Separator
        className="w-px h-8 bg-slate-100  dark:bg-emerald-100 content-center"
        orientation="vertical"
      />
      <p className="content-center">{props.author}</p>
    </div>
  );
}
