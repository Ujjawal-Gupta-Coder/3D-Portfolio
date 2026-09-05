import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const LIVE_LINK = "https://example.com"

//🔦 temperarily closed: const RESUME_GOOGLE_DRIVE = "https://drive.google.com/file/d/1SNyiDDQjbJIA6ALp67s0_hwgArX7gtyn/view?usp=sharing"
const RESUME_GOOGLE_DRIVE = "https://drive.google.com/file/d/1tLiRLYXSuv78GnIPY6_t1YDXohLdzPfb/view?usp=sharing"

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const aboutPoints = [
{
  icon: "💻",
  text: "Full-stack developer building modern web applications with MERN, Next.js, TypeScript, and AI.",
},
{
  icon: "🚀",
  text: "Creator of IdeaLink—an AI-powered startup platform connecting innovators with investors.",
},
{
  icon: "🏢",
  text: "Completed 6-month internship at TickYourList, improving UI/UX and frontend performance.",
},
{
  icon: "🎓",
  text: "BCA graduate, currently pursuing an MCA with a strong focus on software development.",
},
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Modern Web Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "AI Integrator",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solver",
    icon: <ProblemSolvingIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    }, 
    {
      name: "C++",
      icon: "/assets/tech/cpp.svg",
      link: "https://devdocs.io/cpp/",
    },
  ],
  frameworks: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/express.svg",
      link: "https://expressjs.com/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Vite",
      icon: "/assets/tech/vite.svg",
      link: "https://vite.dev/",
    },
  ],
  libraries: [
    {
      name: "Socket.io",
      icon: "/assets/tech/socket-io.svg",
      link: "https://socket.io/docs/v4/",
    },
    {
      name: "Shadcn",
      icon: "/assets/tech/shadcn.svg",
      link: "https://ui.shadcn.com/docs",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Zustand",
      icon: "/assets/tech/zustand.svg",
      link: "https://zustand-demo.pmnd.rs",
    },
    {
      name: "JWT (Authentication)",
      icon: "/assets/tech/jwt.svg",
      link: "https://www.jwt.io/introduction",
    },
    {
      name: "Gemini AI API",
      icon: "/assets/tech/gemini-ai.svg",
      link: "https://ai.google.dev/gemini-api/docs/libraries",
    },
    {
      name: "Chart.js",
      icon: "/assets/tech/chart-js.svg",
      link: "https://www.chartjs.org/docs/latest/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/tech/github.svg",
      link: "https://github.com/",
    },
    {
      name: "VS Code",
      icon: "/assets/tech/vs-code.svg",
      link: "https://code.visualstudio.com/docs",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "RESTful APIs",
      icon: "/assets/tech/rest-api.svg",
      link: "https://docs.github.com/en/rest?apiVersion=2026-03-10",
    },
    {
      name: "Cloudinary",
      icon: "/assets/tech/cloudinary.svg",
      link: "https://cloudinary.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
    {
      name: "Vercel",
      icon: "/assets/tech/vercel.svg",
      link: "https://vercel.com/docs",
    },
    {
      name: "Render",
      icon: "/assets/tech/render.jpeg",
      link: "https://render.com/docs",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "Sanity",
      icon: "/assets/tech/sanity.svg",
      link: "https://www.sanity.io/",
    },
  ],
};

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "TickYourList",
    link: "https://www.tickyourlist.com/",
    icon: "/assets/company/tyl.png",
    certificate: "https://drive.google.com/file/d/1676AX8LPbL6-incyX13dFm__iCoVZAe5/view?usp=sharing",
    iconBg: "#E6DEDD",
    date: "Jun 2025 – Dec 2025",
    points: [
      "Built a full-featured admin dashboard with CRUD functionality.",
      "Integrated interactive maps for location-based tour discovery.",
      "Developed reusable UI components to improve consistency.",
      "Created a real-time booking summary with instant updates.",
      "Collaborated in Agile sprints using Git/GitHub and code reviews.",  
     ],
  },
  {
    title: "Python Programming Intern",
    company_name: "Ybi Foundation",
    link: "https://www.ybifoundation.com/",
    icon: "/assets/company/ybl.png",
    certificate: "https://drive.google.com/file/d/1Ic7VEleEkwVQPsLlgbdEYhU4HuCiqTd3/view?usp=sharing",
    iconBg: "#E6DEDD",
    date: "Jan 2025",
    points: [
      "Mastered Python fundamentals, including problem-solving and core programming concepts.",
      "Built mini Python applications to apply programming logic and practical skills.",
      "Strengthened debugging, code quality, and clean coding practices through mentorship.",
    ],
  },
  
];

const education = [
  {
    course: "Master of Computer Applications (MCA)",
    institute_name: "Institute of Computer Science, Vikram University Ujjain (M.P.)",
    icon: "/assets/education/college_mca.png",
    iconBg: "#E6DEDD",
    duration: "Jul 2026 – Aug 2028 (Expected)",
    points: [
      // "Current CGPA : --/10", 
    ],
  }, 
  {
    course: "Bachelor of Computer Applications (BCA)",
    institute_name: "Government Madhav Science PG College, Ujjain (M.P.)",
    icon: "/assets/education/college_bca.png",
    iconBg: "#E6DEDD",
    duration: "May 2023 – Apr 2026",
    points: [
      "CGPA : 8.3/10", 
    ],
  }, 
  {
    course: "Higher Secondary Education",
    institute_name: "Government Higher Secondary Excellence School, Ujjain (M.P.)",
    icon: "/assets/education/school.png",
    iconBg: "#E6DEDD",
    duration: "May 2022 – Apr 2023",
    points: [
      "Percentage Score : 88.8%", 
    ],
  }, 
  {
    course: "Secondary Education",
    institute_name: "Government Higher Secondary Excellence School, Ujjain (M.P.)",
    icon: "/assets/education/school.png",
    iconBg: "#E6DEDD",
    duration: "May 2020 – Apr 2021",
    points: [
      "Percentage Score : 98%", 
    ],
  }, 
];

const topProjects = [
  // HireLoop Project
  {
    name: "HireLoop",
    description:
      "HireLoop is an AI-powered interview preparation platform that simulates technical, coding, system design, and behavioral interviews with AI-driven questioning, voice interviews, real-time coding, transcription, analytics, and PDF reports.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "Supabase",
        color: "orange-text-gradient",
      },
      {
        name: "Google Gemini",
        color: "yellow-text-gradient",
      },
    ],
    time: "Aug 2026 (Ongoing)",
    image: "/assets/projects/hireloop-project.png",
    github_link: "https://github.com/Ujjawal-Gupta-Coder/HireLoop",
    live_link: "https://hireloop-ai.vercel.app/",
    // youtube_link: "https://youtu.be/Wzaoukdz1WY",
  },
  // IdeaLink Project
  {
    name: "IdeaLink",
    description:
      "IDEA Link is a platform connecting innovators with investors. Founders can pitch startups, get AI-generated pitches, summaries, recommendations, real-time updates, comments, and profile management. Investors discover, view, and connect instantly via email.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "Shadcn",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "yellow-text-gradient",
      },
    ],
    time: "Nov 2025",
    image: "/assets/projects/idea-link-project.png",
    github_link: "https://github.com/Ujjawal-Gupta-Coder/Idea-Link",
    live_link: "https://idea-link-orpin.vercel.app/",
    youtube_link: "https://youtu.be/Wzaoukdz1WY",
  },
   // ChatSphere Project
  {
    name: "ChatSphere",
    description:
      "ChatSphere is a modern real-time chat app built with the MERN stack and Socket.io, offering smooth real time messaging as well as media sharing. It features profile controls, typing indicators, online user filters, and 30+ dynamic themes for a rich, interactive chat experience.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Zustand",
        color: "pink-text-gradient",
      },
      {
        name: "Daisyui",
        color: "orange-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "yellow-text-gradient",
      },
    ],
    time: "Jun 2025",
    image: "/assets/projects/chatSphere-project.png",
    github_link: "https://github.com/Ujjawal-Gupta-Coder/Chat-Sphere",
    live_link: "https://chat-sphere-eosin.vercel.app/",
    youtube_link: "https://youtu.be/UB_IZiclm9o?si=KEGzFy0KKw9B4cNN",
  },
];

const otherProjects = [
  // Expense Tracker
  {
    name: "Expense Tracker",
    description:
      "Expense Tracker is a powerful application that helps you add, manage, and analyze your expenses with ease. With features like filtering, dynamic expense tracking, and insightful charts, it ensures better financial planning.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "React-Hook-Form",
        color: "orange-text-gradient",
      },
      {
        name: "Chart.js",
        color: "yellow-text-gradient",
      },
    ],
    time: "Feb 2025",
    image: "/assets/projects/expenseTracker-project.png",
    github_link: "https://github.com/Ujjawal-Gupta-Coder/Expense-Tracker",
    live_link: "https://expense-tracker-mu-sage.vercel.app/",
    youtube_link: "https://youtu.be/HVAZ6ArPY-8?si=uz1H65WOas-N35hm",
  },
  // 3D Portfolio
  {
    name: "3D Portfolio",
    description:
      "A fully responsive 3D animated portfolio with interactive elements like a computer and Earth. It showcases my About Me, education, experience, skills, projects, coding profiles, and social links. Includes a contact form with email support, dark/light mode, and smooth, dynamic UI.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "React-three/fiber",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "yellow-text-gradient",
      },
    ],
    time: "Dec 2025",
    image: "/assets/projects/3d-portfolio-project.png",
    github_link: "https://github.com/Ujjawal-Gupta-Coder/3D-Portfolio",
    live_link: "https://ujjawalgupta.vercel.app/",
    youtube_link: "https://youtu.be/XjqKeCCGbAA",
  },
  // My Portfolio
  {
    name: "My Portfolio",
    description:
      "A personal portfolio showcasing my skills, projects, education, and achievements. Designed for simplicity and clarity, it highlights my expertise and provides easy ways to connect and collaborate.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    time: "Jan 2025",
    image: "/assets/projects/portfolio-project.png",
    github_link: "https://github.com/Ujjawal-Gupta-Coder/My-Portfolio",
    live_link: "https://ujjawal-gupta-coder.github.io/My-Portfolio/",
    // youtube_link: "",
  },
   // World Atlas Project 
  {
    name: "World Atlas",
    description:
      "A dynamic country info app with search, continent filters, dedicated routes, and dark/light mode. Users can view population, language, capital, flags, maps, and border countries. Features hover cards, Google Maps, shimmer loading, a not-found page, and full responsiveness.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "orange-text-gradient",
      },
    ],
    time: "Dec 2024",
    image: "/assets/projects/worldAtlas-project.png",
    github_link: "https://github.com/Ujjawal-Gupta-Coder/WorldAtlas",
    live_link: "https://world-atlas-nine.vercel.app/",
    youtube_link: "https://youtu.be/ScEMPGsTI4I?si=CW8QwQspASpn7NRE",
  },
  // Currency Convertor Project
  {
    name: "Currency Convertor",
    description:
      "A modern, responsive currency converter with real-time rates, country flags, and easy dropdown selection. Convert instantly and swap currencies with one click. Perfect for travelers and professionals, offering a fast, smooth, and intuitive experience on all devices.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "orange-text-gradient",
      },
    ],
    time: "Sep 2024",
    image: "/assets/projects/currencyConvertor-project.png",
    github_link: "https://github.com/Ujjawal-Gupta-Coder/Currency-Convertor",
    live_link: "https://currency-convertor-flax-sigma.vercel.app/",
    // youtube_link: "",
  },
  // Calculator Project
  {
    name: "Calculator",
    description:
      "A user-friendly calculator application that handles basic arithmetic operations, features error handling, and offers a responsive design.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Vite",
        color: "orange-text-gradient",
      },
    ],
    time: "Jul 2024",
    image: "/assets/projects/calculator-project.png",
    github_link: "https://github.com/Ujjawal-Gupta-Coder/My_Calculator",
    live_link: "https://my-calculator-beige.vercel.app/",
    // youtube_link: "",
  },
  // Todo Application Project
  {
    name: "Todo Application",
    description:
      "A simple and responsive to-do application that helps users manage tasks with ease, featuring CRUD operations, task completion tracking, and local storage support.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Local Storage",
        color: "orange-text-gradient",
      },
    ],
    time: "Jun 2024",
    image: "/assets/projects/todo-project.png",
    github_link: "https://github.com/Ujjawal-Gupta-Coder/ToDo-Application",
    live_link: "https://to-do-application-wine.vercel.app/",
    // youtube_link: "",
  },
]

const coding = [
  {
    platform: "LeetCode",
    link: "https://leetcode.com/u/Ujjawal-Gupta/",
    image: "/assets/coding/leetcode.webp",
    points: [
      "Top 40%",
      "Highest Rating: 1513",
      "350+ Problem Solved"
    ]
  },
  {
    platform: "GeeksForGeeks",
    link: "https://www.geeksforgeeks.org/user/ujjawaaale/",
    image: "/assets/coding/gfg.jpg",
    points: [
      "Institute Rank: Top 5",
      "Coding Score: 700+",
      "200+ Problem Solved"
    ]
  }
]

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Ujjawal-Gupta-Coder",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/ujjawal-gupta-dev/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/Ujjawal_Codes",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/ujjawal_62/",
  },
];

const heroTexts = [
  "Software Developer",
  "AI-powered Web Developer",
  "Full-Stack Engineer",
  "Problem Solver",
];

export {
  LIVE_LINK,
  navLinks,
  aboutPoints,
  RESUME_GOOGLE_DRIVE,
  services,
  technologies,
  experiences,
  education,
  topProjects,
  otherProjects,
  coding,
  socials,
  heroTexts,
};
