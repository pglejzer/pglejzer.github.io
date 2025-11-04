export interface CVData {
  personal: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    website: string;
    linkedin: string;
    github: string;
    avatar: string;
  };
  about: {
    description: string;
    highlights: string[];
  };
  experience: Array<{
    company: string;
    position: string;
    period: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }>;
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
    other: string[];
    architecture: string[];
  };
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    period: string;
    location: string;
  }>;
  languages: Array<{
    language: string;
    level: string;
    description: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    github?: string;
  }>;
}

export const cvDataPL: CVData = {
  personal: {
    name: "Piotr Glejzer",
    title: "Frontend Developer",
    location: "Warszawa, Polska",
    email: "glejzerpiotr@gmail.com",
    phone: "+48 693 544 399",
    website: "https://pglejzer.github.io",
    linkedin: "https://www.linkedin.com/in/piotr-glejzer/",
    github: "https://github.com/pglejzer",
    avatar: "/img/avatar.jpg",
  },
  about: {
    description:
      "Frontend Developer z ponad 7-letnim doświadczeniem w tworzeniu skalowalnych, wydajnych aplikacji webowych. Udowodniona ekspertyza w React.js, Next.js i SSR, z mierzalnymi rezultatami takimi jak redukcja zapytań klientów o 80% oraz wzrost sprzedaży o 4-5%. Doświadczenie w prowadzeniu zespołów, optymalizacji wydajności i dostarczaniu efektywnych rozwiązań w środowisku międzynarodowym i Agile.",
    highlights: [
      "Redukcja zapytań do obsługi klienta o 80% przez automatyzację systemu zwrotów produktów",
      "Wzrost sprzedaży o 4-5% dzięki modernizacji stron produktowych z wykorzystaniem React i SSR",
      "Optymalizacja czasu ładowania o 10-15% poprzez implementację Cloudflare i GraphQL",
      "Prowadzenie zespołu międzynarodowego przy wdrażaniu systemu reklamowego Mabaya",
      "Mentoring juniorów, udział w rekrutacji i onboardingu nowych członków zespołu",
      "Kompleksowa przebudowa głównego komponentu nagłówka (Header) zgodnie z nowymi layoutami i wymaganiami biznesowymi, tworzenie dedykowanych serwisów do jego zarządzania oraz wdrożenie niestandardowego SSR renderingu i logiki integracji między mikrousługami",
    ],
  },
  experience: [
    {
      company: "Empik Group",
      position: "Front End Developer",
      period: "08/2021 - obecnie",
      location: "Warszawa",
      description:
        "Rozwój i utrzymanie platformy e-commerce obsługującej miliony użytkowników miesięcznie.",
      achievements: [
        "Zautomatyzowałem proces obsługi zwrotów produktów i reklamacji, redukując zapytania do obsługi klienta o ponad 80%",
        "Przebudowałem legacy stronę główną i strony produktowe z React i niestandardowym SSR, zwiększając sprzedaż o 4-5%",
        "Zoptymalizowałem SSR używając Cloudflare i GraphQL, redukując czas ładowania o 10-15% i poprawiając metryki Core Web Vitals",
        "Utrzymywałem i skalowałem niestandardowy CMS dla płynnych aktualizacji treści",
        "Integrowałem systemy zewnętrzne: InPost, LeaseLink, PayPo",
        "Budowałem aplikacje z React.js, Next.js, TypeScript i Ant Design, przekładając projekty Figma na responsywne interfejsy",
        "Prowadziłem implementację niestandardowego systemu reklamowego z integracją Mabaya w zespole międzynarodowym",
        "Testowałem z Jest i Playwright zapewniając kompatybilność cross-browser",
        "Mentorowałem praktykantów i nowych pracowników, pomagając w onboardingu i adaptacji",
        "Uczestniczyłem w procesach rekrutacyjnych, oceniając i wybierając nowych członków zespołu",
        "Współpracowałem z zespołami DevOps w integracjach Dockera do CI/CD z Jenkins",
        "Współpracowałem w zespołach Agile, wykonując code review i zapewniając wysokie standardy",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Ant Design",
        "GraphQL",
        "Cloudflare",
        "SSR",
        "Jest",
        "Playwright",
        "Docker",
        "Jenkins",
      ],
    },
    {
      company: "Mobica",
      position: "Front-End Developer",
      period: "03/2021 - 07/2021",
      location: "Łódź",
      description: "Rozwój rozwiązań IoT z integracją asystentów głosowych.",
      achievements: [
        "Budowałem rozwiązania IoT umożliwiające wyszukiwanie produktów głosowo, integrując Amazon Alexa i Google Actions Console",
        "Rozwijałem rozwiązania IoT z kontrolą głosową przez Amazon Alexa i Google Actions Console",
        "Rozwiązywałem problemy z uwierzytelnianiem w React SPA używając usług Okta",
        "Budowałem responsywną aplikację dashboard z React.js, Redux, REST API, SASS i Webpack",
        "Skupiałem się na tworzeniu przyjaznych interfejsów i zapewnieniu funkcjonalności cross-platform",
        "Współpracowałem w zespołach Agile/Scrum dostarczając funkcjonalności na czas",
        "Uczestniczyłem w dyskusjach technicznych, planowaniu sprintów i code review",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Redux",
        "Amazon Alexa",
        "Google Actions",
        "Dialogflow",
        "Okta",
        "REST API",
        "SASS",
        "Webpack",
      ],
    },
    {
      company: "MDBootstrap",
      position: "Front-End Developer",
      period: "09/2019 - 03/2021",
      location: "Warszawa",
      description:
        "Rozwój komponentów React dla szybkiego tworzenia stron i aplikacji.",
      achievements: [
        "Rozwijałem komponenty React do tworzenia stron używając bloków z Material Design",
        "Implementowałem regularne aktualizacje danych zapewniając aktualność informacji",
        "Refaktoryzowałem kod używając React.js, Webpack, SASS, HTML i Bootstrap",
        "Aktywnie uczestniczyłem w spotkaniach Scrum i planowaniu sprintów",
        "Zarządzałem i aktualizowałem pakiety, zapewniając kompatybilność",
        "Identyfikowałem i rozwiązywałem błędy, poprawiając stabilność systemu",
      ],
      technologies: [
        "React.js",
        "Material Design",
        "Webpack",
        "SASS",
        "Bootstrap",
        "HTML",
      ],
    },
    {
      company: "Devapoo",
      position: "Front-End Developer",
      period: "06/2019 - 09/2019",
      location: "Warszawa",
      description: "Budowa rozwiązań webowych używając technologii IBM.",
      achievements: [
        "Budowałem rozwiązania webowe z technologiami IBM, w tym aplikację timesheet dla dużej firmy telekomunikacyjnej",
        "Usprawniałem procesy biznesowe i funkcjonalność front-end z Vue.js i jQuery",
        "Rozwiązywałem krytyczne błędy, poprawiając stabilność systemu",
      ],
      technologies: ["Vue.js", "jQuery", "IBM Technologies"],
    },
    {
      company: "MDBootstrap",
      position: "Junior Front-End Developer",
      period: "06/2018 - 06/2019",
      location: "Warszawa",
      description:
        "Pierwsze doświadczenie komercyjne w rozwoju komponentów webowych.",
      achievements: [
        "Budowałem komponenty wielokrotnego użytku z React, jQuery, Bootstrap i REST API",
        "Naprawiałem błędy i implementowałem rozwiązania poprawiające wydajność",
      ],
      technologies: ["React", "jQuery", "Bootstrap", "REST API"],
    },
  ],
  skills: {
    frontend: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "React.js",
      "Next.js",
      "React Query",
      "Zustand",
      "Redux",
      "CSS-in-JS (Emotion, styled-components)",
      "CSS",
      "BEM",
      "SCSS",
      "LESS",
      "Ant Design",
      "MUI",
      "TailwindCSS",
      "Bootstrap",
      "React Testing Library",
      "RWD",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST API",
      "GraphQL",
      "MongoDB",
      "Mongoose",
      "Redis",
      "BullMQ",
      "Stripe",
      "JWT",
      "OAuth2",
      "CSRF",
      "WebSockets",
      "Docker",
      "Bull Board",
      "Queue workers",
      "Webhook handling",
      "CI/CD",
      "Jenkins",
      "API security",
      "Error tracking",
      "Performance monitoring",
    ],
    architecture: [
      "Microservices",
      "Microfrontends",
      "Event-driven systems",
      "Data-Driven Development",
      "Modular monolith",
      "Clean Architecture",
      "Scalability & concurrency management",
    ],
    tools: [
      "Jest",
      "Playwright",
      "Cypress",
      "Sentry",
      "Grafana",
      "Webpack",
      "Babel",
      "Docker",
      "Bull Board",
      "GIT",
      "Figma",
    ],
    other: [
      "SSR (Server-Side Rendering)",
      "Cloudflare",
      "Freemarker",
      "Agile/Scrum",
      "CI/CD",
      "Code Review",
      "Mentoring",
      "Performance optimization",
      "Security best practices",
    ],
  },
  education: [
    {
      institution: "Wyższa Szkoła Ekologii i Zarządzania",
      degree: "Inżynier",
      field: "Budownictwo",
      period: "10/2012 - 05/2017",
      location: "Warszawa",
    },
  ],
  languages: [
    {
      language: "Polski",
      level: "Ojczysty",
      description: "Język ojczysty",
    },
    {
      language: "Angielski",
      level: "B2+",
      description: "Profesjonalna biegłość w pracy",
    },
  ],
  projects: [],
};

export const cvDataEN: CVData = {
  personal: {
    name: "Piotr Glejzer",
    title: "Frontend Developer",
    location: "Warsaw, Poland",
    email: "glejzerpiotr@gmail.com",
    phone: "+48 693 544 399",
    website: "https://pglejzer.github.io",
    linkedin: "https://www.linkedin.com/in/piotr-glejzer/",
    github: "https://github.com/pglejzer",
    avatar: "/img/avatar.jpg",
  },
  about: {
    description:
      "Frontend Developer with 7+ years of experience building scalable, high-performance web applications. Proven expertise in React.js, Next.js, and SSR, with measurable results such as reducing customer inquiries by 80% and boosting sales by 4-5%. Skilled in leading teams, optimizing performance, and delivering impactful solutions in international and Agile environments.",
    highlights: [
      "80% reduction in customer service inquiries through product returns automation",
      "4-5% sales increase by modernizing product pages with React and SSR",
      "10-15% faster page loading through Cloudflare and GraphQL optimization",
      "Led international team implementing Mabaya advertising system integration",
      "Mentoring junior developers, participating in recruitment and onboarding processes",
      "Comprehensive redesign of the main Header component in alignment with new layouts and business requirements, development of dedicated management services, and implementation of custom SSR rendering with advanced microservice integration logic",
    ],
  },
  experience: [
    {
      company: "Empik Group",
      position: "Front End Developer",
      period: "08/2021 - present",
      location: "Warsaw",
      description:
        "Development and maintenance of e-commerce platform serving millions of users monthly.",
      achievements: [
        "Automated and streamlined the process of handling product returns and complaints, reducing customer service inquiries by over 80%",
        "Rebuilt legacy homepage and product pages with React and custom SSR, introducing modern design that improved performance and boosted sales by 4-5%",
        "Optimized SSR using Cloudflare and GraphQL, reducing page load time by 10-15% and improving Core Web Vitals metrics (CLS, FID, LCP)",
        "Maintained and scaled a custom CMS for seamless content updates",
        "Integrated external systems: InPost, LeaseLink, and PayPo",
        "Built web applications with React.js, Next.js, TypeScript, and Ant Design, translating Figma designs into responsive interfaces",
        "Led the implementation of a custom ads system with Mabaya integration in collaboration with international team",
        "Conducted testing with Jest and Playwright to ensure cross-browser compatibility",
        "Mentored interns and new employees, assisting in their onboarding and acclimatization",
        "Participated in recruitment processes, contributing to evaluation and selection of new team members",
        "Collaborated with DevOps teams to integrate Dockerized applications into CI/CD pipelines using Jenkins",
        "Collaborated in Agile teams, performing code reviews and ensuring high-quality standards",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Ant Design",
        "GraphQL",
        "Cloudflare",
        "SSR",
        "Jest",
        "Playwright",
        "Docker",
        "Jenkins",
      ],
    },
    {
      company: "Mobica",
      position: "Front-End Developer",
      period: "03/2021 - 07/2021",
      location: "Lodz",
      description:
        "Development of IoT solutions with voice assistant integration.",
      achievements: [
        "Built IoT solutions enabling voice-command product searches and interactions, integrating Amazon Alexa and Google Actions Console",
        "Developed IoT solutions, enabling voice-controlled product interactions via Amazon Alexa and Google Actions Console",
        "Resolved authentication issues in React SPAs using Okta services",
        "Built a responsive dashboard application with React.js, Redux, REST API, SASS, and Webpack",
        "Focused on creating user-friendly interfaces and ensuring cross-platform functionality",
        "Collaborated within Agile/Scrum teams to deliver features on time",
        "Participated in technical discussions, sprint planning, and code reviews",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Redux",
        "Amazon Alexa",
        "Google Actions",
        "Dialogflow",
        "Okta",
        "REST API",
        "SASS",
        "Webpack",
      ],
    },
    {
      company: "MDBootstrap",
      position: "Front-End Developer",
      period: "09/2019 - 03/2021",
      location: "Warsaw",
      description:
        "Development of React components for rapid website and application creation.",
      achievements: [
        "Developed React components for creating websites and applications using quick-use blocks with Material Design elements",
        "Implemented regular data updates to ensure accuracy and up-to-date information",
        "Refactored code using React.js, Webpack, SASS, HTML, and Bootstrap to improve performance and maintainability",
        "Actively participated in Scrum meetings, contributing to sprint planning",
        "Managed and updated packages, ensuring compatibility and efficient software releases",
        "Identified and resolved bugs, improving system stability and user experience",
      ],
      technologies: [
        "React.js",
        "Material Design",
        "Webpack",
        "SASS",
        "Bootstrap",
        "HTML",
      ],
    },
    {
      company: "Devapoo",
      position: "Front-End Developer",
      period: "06/2019 - 09/2019",
      location: "Warsaw",
      description: "Building web solutions using IBM technologies.",
      achievements: [
        "Built web solutions using IBM technologies, including a timesheet application for a major telecom company",
        "Enhanced business processes and front-end functionality with Vue.js and jQuery",
        "Resolved critical bugs, improving system stability and user experience",
      ],
      technologies: ["Vue.js", "jQuery", "IBM Technologies"],
    },
    {
      company: "MDBootstrap",
      position: "Junior Front-End Developer",
      period: "06/2018 - 06/2019",
      location: "Warsaw",
      description: "First commercial experience in web component development.",
      achievements: [
        "Built reusable components using React, jQuery, Bootstrap, and REST API, improving design consistency",
        "Fixed bugs and implemented solutions to improve application performance",
      ],
      technologies: ["React", "jQuery", "Bootstrap", "REST API"],
    },
  ],
  skills: {
    frontend: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "React.js",
      "Next.js",
      "React Query",
      "Zustand",
      "Redux",
      "CSS-in-JS (Emotion, styled-components)",
      "CSS",
      "BEM",
      "SCSS",
      "LESS",
      "Ant Design",
      "DaisyUI",
      "MUI",
      "TailwindCSS",
      "Bootstrap",
      "React Testing Library",
      "RWD",
    ],
    backend: [
      "Node.js",
      "Express.js",
      "REST API",
      "GraphQL",
      "MongoDB",
      "Mongoose",
      "Redis",
      "BullMQ",
      "Stripe",
      "JWT",
      "OAuth2",
      "CSRF",
      "WebSockets",
      "Docker",
      "Bull Board",
      "Queue workers",
      "Webhook handling",
      "CI/CD",
      "Jenkins",
      "API security",
      "Error tracking",
      "Performance monitoring",
    ],
    architecture: [
      "Microservices",
      "Microfrontends",
      "Event-driven systems",
      "Data-Driven Development",
      "Modular monolith",
      "Clean Architecture",
      "Scalability & concurrency management",
    ],
    tools: [
      "Jest",
      "Playwright",
      "Cypress",
      "Sentry",
      "Grafana",
      "Webpack",
      "Babel",
      "Docker",
      "Bull Board",
      "GIT",
      "Figma",
    ],
    other: [
      "SSR (Server-Side Rendering)",
      "Cloudflare",
      "Freemarker",
      "Agile/Scrum",
      "CI/CD",
      "Code Review",
      "Mentoring",
      "Performance optimization",
      "Security best practices",
    ],
  },
  education: [
    {
      institution: "University of Ecology and Management",
      degree: "Engineer",
      field: "Civil Engineering",
      period: "10/2012 - 05/2017",
      location: "Warsaw",
    },
  ],
  languages: [
    {
      language: "Polish",
      level: "Native",
      description: "Native Speaker",
    },
    {
      language: "English",
      level: "B2+",
      description: "Professional Working Proficiency",
    },
  ],
  projects: [],
};

export const translations = {
  pl: {
    nav: {
      about: "O mnie",
      experience: "Doświadczenie",
      skills: "Umiejętności",
      education: "Wykształcenie",
      languages: "Języki",
      contact: "Kontakt",
    },
    buttons: {
      downloadCV: "Pobierz CV",
      viewProject: "Zobacz projekt",
      contactMe: "Skontaktuj się",
    },
    sections: {
      about: "O mnie",
      experience: "Doświadczenie zawodowe",
      skills: "Umiejętności",
      education: "Wykształcenie",
      languages: "Języki obce",
      projects: "Projekty",
    },
    stats: {
      experience: "Doświadczenie",
      experienceYears: "lat pracy",
      companies: "Firmy",
      companiesDesc: "pracodawców",
      technologies: "Technologie",
      technologiesDesc: "narzędzi",
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      contact: "Contact",
    },
    buttons: {
      downloadCV: "Download CV",
      viewProject: "View Project",
      contactMe: "Contact Me",
    },
    sections: {
      about: "About Me",
      experience: "Work Experience",
      skills: "Skills",
      education: "Education",
      languages: "Languages",
      projects: "Projects",
    },
    stats: {
      experience: "Experience",
      experienceYears: "years",
      companies: "Companies",
      companiesDesc: "employers",
      technologies: "Technologies",
      technologiesDesc: "tools",
    },
  },
};

export type Language = "pl" | "en";
