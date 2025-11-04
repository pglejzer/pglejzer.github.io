"use client";

import { Calendar, MapPin, Briefcase } from "lucide-react";
import type { CVData } from "@/data/cvData";

interface WorkHistoryProps {
  data: CVData;
  t: {
    sections: { experience: string };
  };
}

export function WorkHistory({ data, t }: WorkHistoryProps) {
  return (
    <section id="experience" className="mb-12">
      <div className="card bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">{t.sections.experience}</h2>

          <div className="space-y-4">
            {data.experience.map((work) => (
              <div
                key={work.description}
                className="flex gap-4 p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors"
              >
                <div className="hidden sm:flex w-12 h-12 rounded-lg border border-base-content/10 items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-bold">{work.position}</h3>
                      <p className="font-semibold text-sm">{work.company}</p>
                    </div>
                  </div>

                  <p className="text-sm opacity-80 mb-3">{work.description}</p>

                  {work.achievements && work.achievements.length > 0 && (
                    <ul className="text-sm opacity-70 space-y-1 mb-3">
                      {work.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-2">
                          <span>•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge badge-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs opacity-70">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {work.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {work.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
