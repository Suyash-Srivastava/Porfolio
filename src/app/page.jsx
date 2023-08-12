"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import hashIcon from "../../public/hash-front-color.svg";
import reactIcon from "../../public/react.png";

import ProfileImg from "../../public/Developer3D-removebg-preview.png";
import technology from "../../public/technology.png";

import { Spotify, ZirohDBCloudNew, ZirohDBCloudOld, Sparrow } from "./images";

import { useState } from "react";
import FlippingCard from "@/components/FlippingCard/FlippingCard/FlippingCard";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-black">
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between items-center">
            <h1 className="text-xl font-burtons">Suyash</h1>
            <ul className="flex items-center">
              <a href="https://ghosty.hashnode.dev/" className="text-xl font-burtons">
                Blog
{/*                 <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer"
                /> */}
              </a>
              <li>
                <a
                   href="https://media.licdn.com/dms/document/media/C562DAQEs9PcgFsiOiQ/profile-treasury-document-pdf-analyzed/0/1679150036812?e=1692835200&v=beta&t=nu_c1cEaFRHiTXIFXHi0kLlKlDoo23OWSLaJf5t1Sng"
                  className="bg-gradient-to-r from-cyan-500 bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center">
            <div className="flex flex-row w-full justify-around flex-wrap mb-auto mt-16 h-max">
              <div className="text-center w-auto">
                <h2 className="text-5xl py-2 text-teal-600 font-bold">
                  Suyash Srivastava
                </h2>
                <h3 className="text-2xl py-2 ">
                  Frontend Developer & Designer
                </h3>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
                  Experienced and passionate frontend developer with over 2
                  years of experience building beautiful, responsive and
                  user-friendly websites and applications. Proficient in HTML,
                  CSS, JavaScript, and popular frontend frameworks such as
                  React, NextJS.
                  <br />
                  <br /> Skilled in developing and implementing complex UI
                  designs with attention to detail and performance optimization.
                  Looking for new challenges to continue growing as a frontend
                  developer and contribute to exciting projects.
                </p>
              </div>
              <div className="w-auto">
                <div className="rounded-full bg-gradient-to-b from-teal-500 w-80 h-80 overflow-hidden ">
                  <Image src={ProfileImg} alt="profile" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen">
          <div className="sm: mt-16">
            <h3 className="text-3xl py-1">What I do ?</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              I am a developer who writes a
              <span className="text-teal-500"> clean and maintainable code </span>
              for high-scale applications keeping in mind the requirments for
              it. I have developed
              <span className="text-teal-500"> various applications </span> in
              my journey which i am proud.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I work with latest JavaScript frameworks such as
              <span className="text-teal-500"> React ,NextJS </span> and CSS
              frameworks like
              <span className="text-teal-500"> Sass ,Tailwind </span> .
            </p>
          </div>
          <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center w-96 m-auto">
              <Image
                src={reactIcon}
                width={100}
                height={100}
                alt="tech stack"
              />
              <h3>Frameworks</h3>
              <p className="py-2 text-sm">What my apps work ...</p>
              {/* <h4 className="py-4 text-teal-600">My Tech Stack</h4> */}
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">NextJS</p>
              <p className="text-gray-800 py-1">Angular</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center w-96 m-auto">
              <Image src={hashIcon} width={100} height={100} alt="tech stack" />
              <h3>Styles</h3>
              <p className="py-2 text-sm">How i style my applications ...</p>
              {/* <h4 className="py-4 text-teal-600">My Tech Stack</h4> */}
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Sass</p>
              <p className="text-gray-800 py-1">TailWind</p>
              <p className="text-gray-800 py-1">Material UI</p>
              <p></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center w-96 m-auto">
              <Image
                src={technology}
                width={100}
                height={100}
                alt="tech stack"
              />
              <h3>Tools</h3>
              <p className="py-2 text-sm">
                What tools come in handy while developing my apps ...
              </p>
              {/* <h4 className="py-4 text-teal-600">My Tech Stack</h4> */}
              <p className="text-gray-800 py-1">VS Code</p>
              <p className="text-gray-800 py-1">Postman</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">GIT</p>
              <p></p>
            </div>
          </div>
        </section>
        <section>
          <div
            className="p-8"
            style={{
              border: "2px",
              borderStyle: "solid",
              borderRadius: "2rem",
            }}
          >
            <h3 className="text-3xl py-1">Projects</h3>
            <p>
              These are the various appication i developed throughout my journey
            </p>
            <div className="flex flex-col gap-10 py-10 lg:flex-wrap lg:flex-row">
              <div className="basis-1/3 flex-1">
                <label className="font-burtons font-bold" htmlFor="zunu social">
                  Social
                </label>

                <FlippingCard
                  front={ <Image
                    src={Sparrow}
                    className="rounded-lg object-cover"
                    alt="sparrow social media"
                    style={{ height: "100%", width: "100%" }}
                  />}
                  back={<p>Sparrow a social media app with enchanced security</p>}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <label
                  className="font-burtons font-bold"
                  htmlFor="Ziroh DB old"
                >
                  ZirohDB Cloud
                </label>
                <FlippingCard
                  front={ <Image
                    src={ZirohDBCloudNew}
                    className="rounded-lg object-cover"
                    alt="Ziroh DB Cloud "
                    style={{ height: "100%", width: "100%" }}
                  />}
                  back={<p>Ziroh DB Cloud is a application which can be used by organiztions to store there data in major DBMSs</p>}
                />
                
              </div>
              <div className="basis-1/3 flex-1">
                <label
                  className="font-burtons font-bold"
                  htmlFor="Spotify Clone"
                >
                  Spotify Clone
                </label>
                <FlippingCard
                  front={ <Image
                    src={Spotify}
                    className="rounded-lg object-cover"
                    alt="spotify"
                    style={{ height: "100%", width: "100%" }}
                  />}
                  back={<p>A Spotify Clone which uses GraphQL api to get data and uses custom audio player to give seamless expirence of moving through the playlist</p>}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <label
                  className="font-burtons font-bold"
                  htmlFor="Ziroh DB old"
                >
                  ZirohDB Cloud
                </label>
                <FlippingCard
                  front={ <Image
                    src={ZirohDBCloudOld}
                    className="rounded-lg object-cover"
                    alt="Ziroh DB old"
                    style={{ height: "100%", width: "100%" }}
                  />}
                  back={<p>Old version of ZirohDB Cloud written in Angular , which i reworked with new UI and API integrations</p>}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
