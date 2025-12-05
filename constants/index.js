import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const LIVE_LINK = "https://example.com"
const RESUME_GOOGLE_DRIVE = "https://drive.google.com/file/d/1SNyiDDQjbJIA6ALp67s0_hwgArX7gtyn/view?usp=sharing"

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
    text: "Full-stack software developer skilled in MERN, Next.js, React, JavaScript, TypeScript, and AI integrations.",
  },
  {
    icon: "🚀",
    text: "Built IdeaLink — an AI-powered platform that connects innovators with investors; includes AI summaries, recommendations, pitch generation, email automation, and real-time updates.",
  },
  {
    icon: "🏢",
    text: "Completed a 6-month internship at TickYourList, working with React & Next.js to improve UI/UX and frontend performance.",
  },
  {
    icon: "🎓",
    text: "I am currently pursuing a BCA degree from Vikram University, where I am enhancing my technical skills and understanding of computer science.",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
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
      name: "C++",
      icon: "/assets/tech/cpp.svg",
      link: "https://devdocs.io/cpp/",
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
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/express.svg",
      link: "https://expressjs.com/",
    },
    {
      name: "Vite",
      icon: "/assets/tech/vite.svg",
      link: "https://vite.dev/",
    },
  ],
  libraries: [
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
      name: "Socket.io",
      icon: "/assets/tech/socket-io.svg",
      link: "https://socket.io/docs/v4/",
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
      name: "Cloudinary",
      icon: "/assets/tech/cloudinary.svg",
      link: "https://cloudinary.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
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
  ],
  databases: [
    {
      name: "Sanity",
      icon: "/assets/tech/sanity.svg",
      link: "https://www.sanity.io/",
    },
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
  ],
};

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "TickYourList",
    link: "https://www.tickyourlist.com/",
    icon: "/assets/company/tyl.png",
    // certificate: "https://example.com",
    iconBg: "#E6DEDD",
    date: "Jun 2025 – Present",
    points: [
      "Built and optimized a complete Admin Dashboard module (add/edit/view/delete cities) using React, Redux-Saga & Formik, reducing manual data handling time by 40%.",
      "Upgraded the static search bar to an interactive typing search, boosting user engagement by 30%, and added a map view for each tour product, increasing map interactions by 45%.",
      "Improved the product booking flow using Next.js, React, and Zustand, reducing page load time by 25% and making navigation significantly smoother for users.",
      "Collaborated in an Agile team of 5+, completing 95% of story-based tasks on time and improving Git/GitHub workflow efficiency by 30%.",
      "Leveraged AI tools for debugging, refactoring, and automation, increasing development productivity by 25–30%.",  
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
      "Learned core Python fundamentals including data types, loops, functions, and basic problem-solving.",
      "Built mini Python projects like Guess the Number and Rock–Paper–Scissors, applying logic and clean coding practices.",
      "Collaborated with mentors to improve debugging, code readability, and standard coding structure.",
    ],
  },
  
];

const education = [
  {
    course: "Bachelor of Computer Applications (BCA)",
    institute_name: "Government Madhav Science College, Vikram University, Ujjain (M.P.)",
    icon: "/assets/education/college.png",
    iconBg: "#E6DEDD",
    duration: "May 2023 – Apr 2026 (Expected)",
    points: [
      "Current CGPA : 8.5/10", 
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
    image: "/assets/projects/ideaLink-project.png",
    github_link: "https://github.com/Ujjawal-Gupta-Coder/Idea-Link",
    live_link: "https://idea-link-orpin.vercel.app/",
    // youtube_link: "",
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
];

const otherProjects = [
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
    // live_link: "",
    // youtube_link: "",
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
      "Highest Rating: 1503",
      "300+ Problem Solved"
    ]
  },
  {
    platform: "GeeksForGeeks",
    link: "https://www.geeksforgeeks.org/user/ujjawaaale/",
    image: "/assets/coding/gfg.jpg",
    points: [
      "Institute Rank: Top 6",
      "Coding Score: 650+",
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
  "Full-Stack Engineer",
  "AI-Driven Web Developer",
  "MERN / Next.js Developer",
  "Tech Enthusiast",
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
