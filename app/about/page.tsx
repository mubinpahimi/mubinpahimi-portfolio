"use client";

import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function AboutPage() {
  const careerJourney = [
    {
      title: "Senior UI/UX Designer",
      company: "PRISM+ · Full-time",
      date: "Apr 2025 - Present",
    },
    {
      title: "UI/UX Designer",
      company: "Mandrill Tech Sdn Bhd · Full-time",
      date: "Oct 2022 - Apr 2025 · 2 yrs 7 mos",
    },
    {
      title: "UI/UX Designer",
      company: "Razer Merchant Services · Contract",
      date: "Mar 2022 - Aug 2022",
    },
    {
      title: "Web and Graphic Designer",
      company: "Babyhaven.my",
      date: "Oct 2020 - Sep 2021",
    },
    {
      title: "Freelance Graphic Designer",
      company: "DesignCrowd · Full-time",
      date: "Feb 2018 - Aug 2021",
    },
  ];

  return (
    <div className="relative pb-[65px] bg-zinc-900">
      <Navigation />

      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* About Me Section */}
        <div className="w-full">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-zinc-400">
            Hey there! 👋 I’m a Senior UI/UX Designer with over five years of
            experience turning complicated apps into smooth, intuitive, and
            sometimes even fun experiences. From fintech 💳 to e-commerce 🛒, I
            love designing interfaces that make users go, “Wow, that was easy!”
          </p>
          <p className="mt-4 text-zinc-400">
            With a Computer Science background 💻, I can speak both design and
            developer languages, which means fewer “Wait, can you fix this?”
            moments in the team. I thrive on solving problems creatively,
            conducting research, testing endlessly, and occasionally
            overthinking button colors.
          </p>
          <p className="mt-4 text-zinc-400">
            When I’m not designing, you can find me playing golf and video games, exploring new tools, or obsessing over
            pixel-perfect icons. My goal? To create experiences that delight
            users and make life just a little easier—while keeping things fun
            along the way! 😎
          </p>
        </div>

		<div className="mt-6">
  <a
    href="https://drive.google.com/file/d/1baNrODQRya23-dqDmdX_jHq2USnzBiZ7/view"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-12 py-4 text-sm font-medium uppercase text-black bg-white rounded-lg shadow-md
               hover:bg-zinc-800 hover:text-white transition-colors duration-500"
  >
    View My Resume
  </a>
</div>





        <div className="w-full h-px bg-zinc-800" />

        {/* Career Journey Section */}
        <div className="w-full space-y-6">
          <h3 className="text-2xl font-bold text-zinc-100 sm:text-3xl">
            Career Journey
          </h3>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {careerJourney.map((job, index) => (
              <Card key={index}>
                <article className="relative w-full h-full p-6 group">
                  <h4 className="text-xl font-bold text-zinc-100 group-hover:text-white sm:text-2xl">
                    {job.title}
                  </h4>
                  <p className="mt-2 text-zinc-400 group-hover:text-zinc-300">
                    {job.company}
                  </p>
                  <p className="mt-1 text-zinc-400 group-hover:text-zinc-300">
                    {job.date}
                  </p>
                </article>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
