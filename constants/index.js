import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const LIVE_LINK = "https://example.com"
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

const RESUME_GOOGLE_DRIVE = "https://drive.google.com/file/d/1SNyiDDQjbJIA6ALp67s0_hwgArX7gtyn/view?usp=sharing"

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
    date: "Jun 2025 – Dec 2025",
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


const projects = [
  {
    name: "QuickEdit: AI-Powered Image & Video Editor",
    description:
      "QuickEdit is an AI-powered online image and video editor built using the Cloudinary AI API. It offers robust features for both images and videos, with user-friendly authentication and a tiered credit system. Enhance your media editing experience with cutting-edge AI tools!",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "orange-text-gradient",
      },
      {
        name: "cloudinary",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "https://res.cloudinary.com/dqiqi75hm/image/upload/v1734187202/quickedit/dp6y8s8dstqfpq7svmj5.png",
    source_code_link: "https://github.com/Shivam-Sharma-1/QuickEdit",
    deployed_link: "https://quick-edit-app.vercel.app",
  },
  {
    name: "FigPro",
    description:
      "FigPro is a web-based collaborative design tool similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API, Fabric.js. With FigPro, teams can seamlessly collaborate on designing interfaces in real-time with a plethora of features.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "fabricjs",
        color: "orange-text-gradient",
      },
      {
        name: "liveblocks",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/fig-pro.png",
    source_code_link: "https://github.com/Shivam-Sharma-1/FigPro",
    deployed_link: "https://fig-pro-github.vercel.app",
  },
  // {
  //   name: "GDSC Website",
  //   description:
  //     "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "styled-components",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "three.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "prisma",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "framer-motion",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/gdsc-website.png",
  //   source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
  //   deployed_link: "https://gdscmvjce.vercel.app/",
  // },
  {
    name: "Facility Management System",
    description:
      "The Facility Management System is a comprehensive management solution developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to book time slots in facilities and provides role-based access control for various functionalities.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/facility-manager.png",
    source_code_link:
      "https://github.com/Shivam-Sharma-1/Facility-Management-System",
    deployed_link:
      "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

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
  projects,
  socials,
  heroTexts,
};
