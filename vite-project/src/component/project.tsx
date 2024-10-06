import React from "react";
import { PROJECTS } from "../constans/index";

const Project: React.FC = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-4xl text-center">Project</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div className="flex flex-wrap mb-8 lg:justify-center" key={index}>
            <div className="w-full lg:w-1/4">
              <img
                width={250}
                height={250}
                className="mb-6 rounded"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              {" "}
              <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="p-2 mr-2 text-sm font-medium rounded bg-stone-900 text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;