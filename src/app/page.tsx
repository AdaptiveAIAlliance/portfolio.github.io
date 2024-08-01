import Image from "next/image";
import Header from "@/components/header";
import { profile } from "../configs/profle_data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex text-slate-800   dark:text-slate-300 flex-col items-center justify-between p-24 ">
        <section className="min-h-screen">
          <div className="hero-content">
            <h1>Hi, I&apos;m {profile.name}</h1>
            <h2>{profile.tagLine}</h2>
            <p>{profile.summery}</p>
            <div className="flex flex-col gap-x-3">
              <Link
                href="#projects"
                className="text-slate-600 hover:text-lime-400  dark:text-slate-300 dark:hover:text-lime-400"
              >
                View My Work
              </Link>
              <Link
                className="text-slate-600 hover:text-lime-400  dark:text-slate-300 dark:hover:text-lime-400"
                href="#contact"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
        <section className="min-h-screen">
          <div className="flex flex-col gap-y-4 w-min-full">
            <h2 className="text-3xl font-bold">Featured skills</h2>
            <ul>
              {profile.skills.map((skill, index) => (
                <li key={index}>
                  <h3>{skill.title}</h3>
                  <p>{skill.list.join(", ")}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="min-h-screen">
          <div className="flex flex-col gap-y-4 w-min-full">
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
        <section className="min-h-screen">
          <div className="flex flex-col gap-y-4 w-min-full">
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
