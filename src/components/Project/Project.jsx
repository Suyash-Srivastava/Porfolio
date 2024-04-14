"use client";
import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import Image from "next/image";
import {
  Spotify,
  ZirohDBCloudNew,
  ZirohDBCloudOld,
  Sparrow,
} from "../../app/images";

function Project() {
  return (
    <section className="min-h-screen">
      <div>
        <h3 className="text-3xl py-1">Projects</h3>
        <p>
          These are the various application i developed throughout my journey
        </p>
        <div className="flex flex-col gap-5 lg:flex-wrap lg:flex-row">
          <div className="basis-1/3 flex-1">
            <label className="font-burtons font-bold" htmlFor="zunu social">
              Social
            </label>
            <ProjectCard
              imgSource={Sparrow}
              projectInfo={
                "Sparrow a social media app with a encryption layer on top of it, which provides full privacy to the user."
              }
            />
          </div>
          <div className="basis-1/3 flex-1">
            <label className="font-burtons font-bold" htmlFor="Ziroh DB old">
              ZirohDB Cloud
            </label>

            <ProjectCard
              imgSource={ZirohDBCloudNew}
              projectInfo={
                " Ziroh DB Cloud is a application which can be used by organizations to store there data in major DBMSs"
              }
            />
          </div>
          <div className="basis-1/3 flex-1">
            <label className="font-burtons font-bold" htmlFor="Spotify Clone">
              Spotify Clone
            </label>

            <ProjectCard
              imgSource={Spotify}
              projectInfo={
                "A Spotify Clone which uses GraphQL api to get data and uses custom audio player to give seamless experience of moving through the playlist"
              }
            />
          </div>
          <div className="basis-1/3 flex-1">
            <label className="font-burtons font-bold" htmlFor="Ziroh DB old">
              ZirohDB Cloud
            </label>
            <ProjectCard
              imgSource={ZirohDBCloudOld}
              projectInfo={
                "Old version of ZirohDB Cloud written in Angular , which i reworked with new UI and API integrationsOld version of ZirohDB Cloud written in Angular"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
