import React from "react";
import Image from "next/image";

const ProjectCard = (props) => {
  const { imgSource, projectInfo } = props;

  return (
    <div className="relative aspect-video rounded-md">
      <Image
        className="relative object-cover h-full rounded-md"
        src={imgSource}
        alt="Project Card"
      />
      <div className="font-serif hover:text-white text-transparent w-full h-full z-0 absolute hover:backdrop-brightness-0 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-5 transition-all duration-150 rounded-md">
        {projectInfo}
      </div>
    </div>
  );
};

export default ProjectCard;
