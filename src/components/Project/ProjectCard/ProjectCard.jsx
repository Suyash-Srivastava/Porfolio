import React from "react";
import Image from "next/image";

const ProjectCard = (props) => {
  const { imgSource, projectInfo } = props;

  return (
    <div>
      <Image
        src={imgSource}
        style={{ flex: 1 / 2, objectFit: "cover" }}
        alt="Project Card"
      />
    </div>
  );
};

export default ProjectCard;
