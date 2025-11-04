"use client";

import { ExternalLink, Github, FolderOpen } from "lucide-react";
import type { CVData } from "@/data/cvData";

interface ProjectsProps {
  data: CVData;
  t: {
    sections: { projects: string };
  };
}

export function Projects({ data, t }: ProjectsProps) {
  if (data.projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="mb-12">
      <div className="card bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">{t.sections.projects}</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <div
                key={project.name}
                className="p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg border border-base-content/10 flex items-center justify-center flex-shrink-0">
                      <FolderOpen className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold">{project.name}</h3>
                  </div>

                  <div className="flex gap-1">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-xs btn-ghost"
                        aria-label="View project"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-xs btn-ghost"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm opacity-80 mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="badge badge-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
