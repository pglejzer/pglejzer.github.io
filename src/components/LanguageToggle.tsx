"use client";

import { useState, useEffect } from "react";
import { Languages } from "lucide-react";
import type { Language } from "@/data/cvData";

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageToggle({
  language,
  onLanguageChange,
}: LanguageToggleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="btn btn-ghost btn-circle">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <Languages className="w-5 h-5" />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box z-[1] w-32 p-2 shadow border border-base-200"
      >
        <li>
          <button
            onClick={() => onLanguageChange("pl")}
            className={`${
              language === "pl" ? "active" : ""
            } flex items-center gap-2`}
          >
            <span className="fi fi-pl w-4 h-3 rounded-sm"></span>
            PL
          </button>
        </li>
        <li>
          <button
            onClick={() => onLanguageChange("en")}
            className={`${
              language === "en" ? "active" : ""
            } flex items-center gap-2`}
          >
            <span className="fi fi-gb w-4 h-3 rounded-sm"></span>
            EN
          </button>
        </li>
      </ul>
    </div>
  );
}
