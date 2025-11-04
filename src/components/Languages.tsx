"use client";

import { MessageCircle } from "lucide-react";
import type { CVData } from "@/data/cvData";

interface LanguagesProps {
  data: CVData;
  t: {
    sections: { languages: string };
  };
}

export function Languages({ data, t }: LanguagesProps) {
  return (
    <section id="languages" className="mb-12">
      <div className="card bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">{t.sections.languages}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.languages.map((lang) => (
              <div
                key={lang.description}
                className="flex gap-3 p-4 rounded-lg bg-base-200/50 hover:bg-base-200 transition-colors"
              >
                <div className="hidden sm:flex w-10 h-10 rounded-lg border border-base-content/10 items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold">{lang.language}</h3>
                    <div className="badge badge-outline badge-sm">
                      {lang.level}
                    </div>
                  </div>
                  <p className="text-xs opacity-70">{lang.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
