"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex min-w-full min-h-screen justify-center align-middle items-center    ">
      <Card className="animate-pulse border-slate-100 border rounded-3xl p-4   w-fit justify-items-start text-neutral-900 dark:text-emerald-100 bg-clip-padding backdrop-filter backdrop-blur-xl bg-slate-400 dark:bg-emerald-900 bg-opacity-60 dark:bg-opacity-40 dark:border-neutral-950">
        <CardHeader>
          <CardTitle>Loading...</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
