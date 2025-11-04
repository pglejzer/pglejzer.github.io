"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";
import type { CVData } from "@/data/cvData";

interface EducationProps {
  data: CVData;
  t: {
    sections: { education: string };
  };
}

export function Education({ data, t }: EducationProps) {
  return (
    <section id="education" className="mb-12">
      <div className="card bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">{t.sections.education}</h2>

          <div className="space-y-4">
            {data.education.map((edu) => (
              <div
                key={edu.period}
                className="flex gap-4 p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors"
              >
                <div className="hidden sm:flex w-12 h-12 rounded-lg border border-base-content/10 items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold">{edu.degree}</h3>
                  <p className="font-semibold text-sm">{edu.field}</p>
                  <p className="text-sm opacity-70">{edu.institution}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="badge badge-ghost badge-sm gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </div>
                    <div className="badge badge-ghost badge-sm gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
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
