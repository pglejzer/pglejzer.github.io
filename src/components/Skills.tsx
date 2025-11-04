"use client";

import { Code, Database, Wrench, Zap, Server } from "lucide-react";
import type { CVData } from "@/data/cvData";

interface SkillsProps {
  data: CVData;
  t: {
    sections: { skills: string };
  };
}

const categories = [
  { key: "frontend" as const, icon: Code, label: "Frontend" },
  { key: "backend" as const, icon: Database, label: "Backend" },
  { key: "architecture" as const, icon: Server, label: "Architecture" },
  { key: "tools" as const, icon: Wrench, label: "Tools" },
  { key: "other" as const, icon: Zap, label: "Other" },
];

export function Skills({ data, t }: SkillsProps) {
  return (
    <section id="skills" className="mb-12">
      <div className="card bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">{t.sections.skills}</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.key}
                  className="p-4 rounded-lg bg-base-200/50"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg border border-base-content/10 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold">{category.label}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {data.skills[category.key].map((skill, index) => (
                      <span key={skill} className="badge badge-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
