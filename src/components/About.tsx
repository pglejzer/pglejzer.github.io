"use client";

import { MapPin, Github, Linkedin } from "lucide-react";
import type { CVData } from "@/data/cvData";
import Image from "next/image";
import { useState } from "react";

interface AboutProps {
  data: CVData;
  t: {
    sections: { about: string };
    stats: {
      experience: string;
      experienceYears: string;
      companies: string;
      companiesDesc: string;
      technologies: string;
      technologiesDesc: string;
    };
  };
}

export function About({ data, t }: AboutProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about" className="mb-12">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="card bg-base-100 lg:sticky lg:top-24">
            <div className="card-body items-center text-center">
              <div
                className="mb-4 cursor-pointer"
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
                style={{ perspective: "1000px" }}
              >
                <div
                  className="w-32 h-32 rounded-full border-2 border-base-content relative transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full bg-base-content flex items-center justify-center text-base-100 text-4xl font-bold"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    PG
                  </div>
                  <div
                    className="absolute inset-0 rounded-full overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <Image
                      src="/img/DSC_4886-smaller.jpg"
                      alt="Piotr Glejzer"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <h1 className="text-2xl font-bold">{data.personal.name}</h1>
              <div className="badge badge-outline mt-2">
                {data.personal.title}
              </div>

              <div className="flex items-center gap-2 text-sm mt-4 opacity-70">
                <MapPin className="w-4 h-4" />
                {data.personal.location}
              </div>

              <div className="divider"></div>

              <div className="flex gap-2">
                <a
                  href={data.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm btn-ghost"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={data.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-sm btn-ghost"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">{t.sections.about}</h2>
              <p className="text-base-content/80 leading-relaxed mb-6">
                {data.about.description}
              </p>

              <ul className="space-y-2 text-sm leading-relaxed opacity-90">
                {data.about.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="stats stats-vertical sm:stats-horizontal border border-base-content/10 w-full">
            <div className="stat place-items-center">
              <div className="stat-title">{t.stats.experience}</div>
              <div className="stat-value">7+</div>
              <div className="stat-desc">{t.stats.experienceYears}</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">{t.stats.companies}</div>
              <div className="stat-value">{data.experience.length}</div>
              <div className="stat-desc">{t.stats.companiesDesc}</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">{t.stats.technologies}</div>
              <div className="stat-value">30+</div>
              <div className="stat-desc">{t.stats.technologiesDesc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
