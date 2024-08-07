import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-w-full min-h-screen justify-center align-middle items-center    ">
      <Card className=" border-slate-100 border rounded-3xl p-4   w-fit justify-items-start text-neutral-900 dark:text-emerald-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950">
        <CardHeader>
          <CardTitle>Not Found</CardTitle>
        </CardHeader>
        <CardContent>Could not find requested resource</CardContent>
        <CardFooter>
          <Button>
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
