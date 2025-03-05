// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import Tailwind from "./assets/images/Skills/tailwindcss.png";
import TypeScript from "./assets/images/Skills/typescript.png";
import Nextjs from "./assets/images/Skills/nextjs.png";
import Javascript from "./assets/images/Skills/javascript.png";
import css3 from "./assets/images/Skills/css3.png";
import HTML5 from "./assets/images/Skills/html5.png";
import Bootstrap5 from "./assets/images/Skills/bootstrap.svg";
import GitHub from "./assets/images/Skills/github.png";
import MaterialUI from "./assets/images/Skills/materialUI.png";
import Vercel from "./assets/images/Skills/vercel.png";
import AntDesign from "./assets/images/Skills/ant-design.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Engineer",
    firstName: "Muhammad Hashir",
    LastName: "Waheed",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experience as an Software Engineer",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Javascript(ES6+)",
        // para: "Lorem ipsum text  dummy",
        logo: Javascript,
      },
      {
        name: "React js",
        // para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Next js",
        // para: "Lorem ipsum text  dummy",
        logo: Nextjs,
      },
      {
        name: "TypeScript",
        // para: "Lorem ipsum text  dummy",
        logo: TypeScript,
      },
      {
        name: "HTML5",
        // para: "Lorem ipsum text  dummy",
        logo: HTML5,
      },
      {
        name: "Tailwind CSS",
        // para: "Lorem ipsum text  dummy",
        logo: Tailwind,
      },
      {
        name: "CSS3",
        // para: "Lorem ipsum text  dummy",
        logo: css3,
      },
      {
        name: "Bootstrap5",
        // para: "Lorem ipsum text  dummy",
        logo: Bootstrap5,
      },
      {
        name: "Github",
        // para: "Lorem ipsum text  dummy",
        logo: GitHub,
      },
      {
        name: "Material UI",
        // para: "Lorem ipsum text  dummy",
        logo: MaterialUI,
      },
      {
        name: "Ant-Design",
        // para: "Lorem ipsum text  dummy",
        logo: AntDesign,
      },
      {
        name: "Vercel",
        // para: "Lorem ipsum text  dummy",
        logo: Vercel,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Crafting modern, responsive, and high-performance websites with clean code and seamless user experiences. Specializing in front-end development, API integrations, and optimized web solutions.",
        logo: services_logo1,
      },
      {
        title: "App Development",
        para: "Providing high-quality app development services with a focus on performance, scalability, and user experience. Specializing in building modern, responsive, and feature-rich applications tailored to your need.",
        logo: services_logo2,
      },
      {
        title: "Network Engineering",
        para: "Providing expert network engineering solutions, including design, implementation, and troubleshooting of secure and scalable network infrastructures. Ensuring optimal performance, reliability, and security for businesses of all sizes.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with Muhammad Hashir was an absolute pleasure! They delivered a high-quality, responsive website that exceeded my expectations. Their attention to detail, problem-solving skills, and commitment to deadlines made the entire process smooth and stress-free. Highly recommended for anyone looking for a skilled and reliable web developer!”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“He is a exceptional web developer with a keen eye for detail and a deep understanding of modern web technologies. They transformed my vision into a sleek, high-performing website with flawless functionality. Their professionalism, efficiency, and dedication to excellence made the entire experience seamless. I highly recommend them to anyone seeking top-tier web development services!”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“Muhammad Hashir Waheed delivered a stunning, high-performance website with precision and expertise. Their professionalism, attention to detail, and commitment to quality made the project a success. Highly recommended!”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“Hashir is a highly skilled app developer who brought my idea to life with precision and innovation. Their expertise in design, functionality, and user experience resulted in a seamless, high-performing app. Professional, efficient, and detail-oriented—I highly recommend their services!”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Looking for a high-performing, visually stunning, and user-friendly website? I specialize in crafting modern, responsive websites tailored to your business needs. Let’s build something amazing that drives results—hire me today!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "hashirwaheed07@gmail.com",
        icon: GrMail,
        link: "mailto:hashirwaheed07@gmail.com",
      },
      {
        text: "+92 337 0741355",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Muhammad Hashir Waheed",
        icon: BsInstagram,
        link: "https://www.instagram.com/muhammad_hashir10/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
