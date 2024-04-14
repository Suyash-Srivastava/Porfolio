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
import Lottie from "react-lottie";

import hashIcon from "../../public/hash-front-color.svg";
// import reactIcon from "../../public/react.png";
import reactIcon from "../../public/lottie/reactIcon.json";
import tools from "../../public/lottie/tools.json";
import Styling from "../../public/lottie/Styling.json";

import ProfileImg from "../../public/Developer3D-removebg-preview.png";
import technology from "../../public/technology.png";

import { useState } from "react";
import FlippingCard from "@/components/FlippingCard/FlippingCard/FlippingCard";
import Project from "@/components/Project/Project";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-12 py-6 md:px-20 lg:px-40 dark:bg-black">
        <section className="min-h-screen">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl font-burtons">Suyash</h1>
            <ul className="flex items-center">
              <a
                href="https://ghosty.hashnode.dev/"
                className="text-xl font-burtons"
              >
                Blog
                {/*                 <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer"
                /> */}
              </a>
              <li>
                <a
                  href="https://drive.google.com/file/d/17Yn6Kxhfmh_qoxjvaGGXDOy-pBNfCS1o/view?usp=sharing"
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
                <h3 className="text-2xl py-2 ">Frontend Developer</h3>
                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
                  Experienced and passionate frontend developer with{" "}
                  <span className="font-medium">
                    over 3 years of experience
                  </span>{" "}
                  building beautiful, responsive and user-friendly websites and
                  mobile applications. Proficient in &nbsp;
                  <span className="font-medium">
                    React, NextJS, React Native and TypeScript.
                  </span>
                  <br />
                  <br /> Skilled in developing and implementing complex UI
                  designs with attention to detail and performance optimization.
                  Looking for new challenges to continue growing as a frontend
                  developer and help organizations build excellent applications
                  with my skills.
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
          <div>
            <h3 className="text-3xl py-1">What I bring to the Table ?</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              <span className="text-teal-500">
                {" "}
                Clean and maintainable code{" "}
              </span>
              for high-scale applications, keeping in mind the requirements for
              it. I have developed
              <span className="text-teal-500">
                {" "}
                multiple web/mobile applications{" "}
              </span>{" "}
              in my journey which i am proud.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I work with latest JS Frameworks such as
              <span className="text-teal-500">
                {" "}
                React, NextJS, React Native{" "}
              </span>{" "}
              and CSS frameworks like
              <span className="text-teal-500">
                {" "}
                sass, tailwind, shopify-restyle{" "}
              </span>{" "}
              .
            </p>
          </div>
          <div className="lg:flex gap-10 justify-center">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center w-96 m-auto">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: reactIcon,
                }}
                width={100}
                height={100}
                alt="tech stack"
              />
              <h3>Frameworks / Libraries</h3>
              <p className="py-2 text-sm"></p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">NextJS</p>
              <p className="text-gray-800 py-1">TypeScript</p>
              <p className="text-gray-800 py-1">React Native</p>
              <p></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center w-96 m-auto">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: Styling,
                }}
                width={80}
                height={80}
                style={{ marginTop: 12, marginBottom: 12 }}
                alt="tech stack"
              />
              <h3>Styles</h3>
              <p className="py-2 text-sm"></p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Sass</p>
              <p className="text-gray-800 py-1">TailWind</p>
              <p className="text-gray-800 py-1">Material UI</p>
              <p></p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center w-96 m-auto">
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: tools,
                }}
                width={100}
                height={100}
                alt="tech stack"
              />
              <h3>Tools</h3>
              <p className="py-2 text-sm"></p>
              <p className="text-gray-800 py-1">GIT</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Postman</p>
              <p className="text-gray-800 py-1">VS Code</p>
              <p></p>
            </div>
          </div>
        </section>
        <Project />
      </main>
    </div>
  );
}
