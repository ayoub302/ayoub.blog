import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  mongo,
  git,
  docker,
  entregarapida,
  sturbucks,
  apple,
  mercedes,
  bosch,
  powerhouse,
  limpieza
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Tech Innovators",
    icon: sturbucks,
    iconBg: "#383E56",
    date: "March 2021 - September 2021",
    points: [
      "Developed and maintained web applications using React.js and related technologies.",
      "Collaborated with cross-functional teams, including designers and product managers, to deliver high-quality products.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to peers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Mobile Solutions",
    icon: apple,
    iconBg: "#E6DEDD",
    date: "January 2021 - February 2022",
    points: [
      "Built and maintained mobile applications using React Native for both iOS and Android platforms.",
      "Integrated RESTful APIs and managed state using Redux.",
      "Optimized app performance and resolved bugs to improve user experience.",
      "Worked in an Agile environment with regular sprints and stand-ups.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Digital Creations",
    icon: mercedes,
    iconBg: "#383E56",
    date: "January 2022 - January 2023",
    points: [
      "Developed custom websites for clients using modern web technologies like HTML, CSS, JavaScript, and React.",
      "Implemented e-commerce solutions with integrated payment gateways.",
      "Optimized websites for SEO and performance.",
      "Maintained and updated existing websites to ensure functionality and security.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Global Tech",
    icon: bosch,
    iconBg: "#E6DEDD",
    date: "January 2023 - Present",
    points: [
      "Developed full-stack web applications using technologies like Node.js, Express, and MongoDB.",
      "Implemented authentication and authorization using JWT and OAuth.",
      "Deployed applications to cloud platforms like AWS and used Docker for containerization.",
      "Collaborated with teams to design and implement scalable solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working with him was an incredible experience. He always delivers high-quality results on time.",
    name: "Carlos Martinez",
    designation: "CEO",
    company: "Innovatech",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "His ability to solve complex problems is impressive. I would highly recommend him.",
    name: "Laura Gomez",
    designation: "CTO",
    company: "TechSolutions",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Thanks to his work, our platform has significantly improved in performance and usability.",
    name: "Juan Perez",
    designation: "Project Manager",
    company: "DigitalMind",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const projects = [
  {
    name: "Delivery page",
    description:
    "A web-based platform for managing delivery services, including customer orders, real-time tracking, and seamless communication between clients and drivers.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },

    ],
    image: entregarapida,
    source_code_link: "https://github.com/ayoub302/entregarapida",
  },
  {
    name: "Clean page",
    description:
    "A web application for managing cleaning services, offering client scheduling, service tracking, and feedback collection to ensure top-quality results.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: limpieza,
    source_code_link: "https://github.com/ayoub810/ayoub810.github.io.git",
  },
  {
    name: "GYM page",
    description:
    "A web application for gym management, offering membership tracking, workout plans, and class scheduling for a seamless fitness experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
    ],
    image: powerhouse,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };