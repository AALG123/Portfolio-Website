export const personalInfo = {
  name: "Assem Alghaithi",
  title: "Software Engineer & Computer Science Student",
  email: "alghaihtia@gmail.com",
  phone: "650-588-8540",
  location: "San Bruno, CA",
  bio: "I'm a computer science student at Skyline College with a passion for building innovative software solutions. My interests span machine intelligence, data processing, and full-stack development.",
  about: `I'm a dedicated computer science student at Skyline College, pursuing an Associate of Science degree (expected May 2025). I'm building a strong foundation in software engineering, with proficiency in core languages and modern frameworks.

My professional journey includes volunteer software engineering experience and leadership roles in student developer communities. I'm passionate about creating technology that solves real-world problems and enhances user experiences.

Beyond coding, I actively participate in hackathons and contribute to open-source projects, constantly expanding my knowledge and skills in the ever-evolving tech landscape.`,
  socialLinks: [
    { name: "GitHub", url: "https://github.com/AALG123", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/assem-alghaithi/", icon: "Linkedin" },
    { name: "Twitter", url: "https://x.com/sythfounder", icon: "Twitter" }
  ],
  resumeUrl: "/src/pictures/Resume.pdf",
  headshot: "/src/pictures/Selfy.jpg"
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["Java", "C/C++", "Kotlin", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Web & Mobile Development",
    items: ["React", "Next.js", "TailwindCSS", "Android (Kotlin)", "Node.js"]
  },
  {
    category: "AI & Data Technologies",
    items: ["Hume.AI", "OpenAI Integration", "Data Processing"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Unreal Engine", "VS Code", "Command Line"]
  }
];

export const projects = [
  {
    id: "minecraft-3d-maze",
    title: "Minecraft 3D Maze",
    description: "A 3D maze game built with p5.js featuring dynamic maze generation with Eller's algorithm, character control, immersive textures, and adaptive user interface.",
    image: "/src/pictures/Minecraft maze.png",
    technologies: ["JavaScript", "p5.js", "3D Graphics", "Game Development"],
    link: "https://samiam2024.itch.io/miinecraft-3d-maze",
    github: "https://github.com/AALG123/Hackathon-Project",
    category: "Game Development",
    featured: true,
    details: "Created for The First SMCCD Intercollegiate Hackathon, this game features dynamic maze generation using Eller's algorithm, interactive character controls with sound effects, immersive 3D visuals with custom textures, dynamic lighting system, progressive gameplay stages, audio integration, responsive UI, and clear objectives with victory conditions."
  },
  {
    id: "degree-class-generator",
    title: "Degree Class Generator",
    description: "A course planning tool for Skyline College, Cañada College, and College of San Mateo students that generates optimal class schedules based on course availability and academic goals.",
    image: "/src/pictures/skylinecollege.png",
    technologies: ["Java", "Java Swing", "Maven", "UI Design"],
    link: "https://github.com/AALG123/DegreeClassGenerator",
    github: "https://github.com/AALG123/DegreeClassGenerator",
    category: "Educational Software",
    featured: true,
    details: "This tool features an intelligent class generator that considers multiple colleges' course offerings, a user-friendly Java Swing GUI, and Maven integration for streamlined development. It helps students create the most optimal class schedules tailored to their academic needs across all three San Mateo County Community College District schools."
  },
  {
    id: "vocis",
    title: "Vocis",
    description: "An AI-powered public speaking practice platform built during CalHacks 2024. The application simulates challenging public speaking scenarios to help users improve their skills.",
    image: "/src/pictures/vocis.png",
    technologies: ["React", "Next.js", "TailwindCSS", "Shadcn UI", "Hume.AI", "OpenAI"],
    link: "https://devpost.com/software/vocis",
    category: "Web Development",
    featured: true,
    details: "As part of a hackathon team, I helped develop Vocis, implementing layout designs and a file-import API in Next.js/Tailwind. The app was deployed as a functional prototype at CalHacks v11."
  },
  {
    id: "gdg-website",
    title: "Skyline College GDG Chapter Website",
    description: "Contributed to the Google Developer Group (GDG) on Campus – Skyline College club website with a focus on performance optimization.",
    image: "/src/pictures/skylinecollege.png",
    technologies: ["HTML", "CSS", "JavaScript", "Web Performance"],
    link: "https://www.skylinecs.club/home",
    github: "https://github.com/gdg-skyline",
    category: "Web Development",
    featured: false,
    details: "I opened an issue proposing web performance optimizations, such as converting images to WebP to speed up page loads. This demonstrates my engagement with open-source maintenance and front-end optimization."
  },
  {
    id: "good-subs",
    title: "Good Subs Market App & Website",
    description: "Led the development of a Kotlin-based Android app and responsive website for Good Subs Market as a volunteer project.",
    image: "/src/pictures/Goodsubsmarket.png",
    technologies: ["Kotlin", "Android", "HTML", "CSS", "JavaScript"],
    link: "https://goodsubsmarkets.com/",
    category: "Mobile Development",
    featured: true,
    details: "The app improves customer service and inventory management, while the website enhances the store's online presence. This project utilized Kotlin for mobile and standard web technologies for the site."
  },
  {
    id: "syth-ai",
    title: "Syth AI",
    description: "An expert AI assistant and senior software developer with extensive knowledge across numerous programming languages, frameworks, and best practices.",
    image: "/src/pictures/Ios syth app.png",
    technologies: ["AI", "Software Development", "Programming", "Code Generation", "Technical Expertise"],
    link: "https://syth.ai",
    category: "AI",
    featured: true,
    details: "Syth is an expert AI assistant that assists with a wide range of software development tasks, from designing and building applications to debugging and optimizing code. With comprehensive knowledge of programming languages and frameworks, Syth provides detailed solutions including code, instructions, and project guidance."
  }
];

export const experience = [
  {
    title: "Organizer & Project Manager",
    company: "Google Developer Groups (GDG) – Skyline College",
    period: "September 2024 - Present",
    description: "Serve as Organizer and Project Manager for Skyline College's Google Developer Group (GDG) chapter.",
    achievements: [
      "Coordinate on-campus events and manage volunteer teams",
      "Facilitate Google technology workshops, fostering a vibrant developer community"
    ]
  },
  {
    title: "Scientific Researcher: SSG",
    company: "Stanford University (Remote Apprenticeship)",
    period: "September 2024 - November 2024",
    description: "Participated in a remote research apprenticeship program with Stanford University.",
    achievements: [
      "Conducted AI/game development-related research in small scientific groups",
      "Gained hands-on experience in research design and methodology"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Computing Talent Initiative",
    period: "June 2024 - September 2024",
    description: "Remote software engineering internship based in Seaside, California.",
    achievements: [
      "Utilized Python programming language for development tasks",
      "Participated in work-based learning program",
      "Gained hands-on experience in software engineering practices"
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Seshaat, Inc. (Remote)",
    period: "April 2024 - September 2024",
    description: "Worked as a remote software engineering intern for Seshaat, Inc.",
    achievements: [
      "Collaborated on AI-driven consumer tech experiments and product reviews",
      "Assisted with content development and research for AI Tech Report"
    ]
  },
  {
    title: "Volunteer Software Engineer",
    company: "GoodSubsMarket – Colma, CA",
    period: "November 2023 - April 2024",
    description: "Volunteered as a software engineer to improve digital presence and operational efficiency.",
    achievements: [
      "Created a responsive website for better online visibility",
      "Optimized Android-based monitors via ADB shell commands, enhancing energy efficiency"
    ]
  }
];

export const education = [
  {
    degree: "Associate of Science in Computer Science",
    institution: "Skyline College",
    location: "San Bruno, CA",
    period: "Expected May 2026",
    description: "Coursework includes programming fundamentals, algorithms, data structures, and machine intelligence."
  }
];