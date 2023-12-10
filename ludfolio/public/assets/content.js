"use client"
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss, SiNextdotjs, SiCplusplus, SiGitlab } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaReact, FaAngular, FaPython, FaJava } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";


const headlines = [
    'Fullstack Developer 2023-current',
    'Summer Internship 2023 (Full time)',
    'Programming Tutor 23/24'
]

const bigtext = [
    'WeKnowIt is a consultant company focused on hiring talented university student within the field of tech. They look for higly motivated and inovative students to offer services from upcomming talent. Their goal is to always deliver beyond expectations for customers in modernizing services, development, technology and design.',
    'CPAC offers products, functions and services that drive progress and bring value to a variety of commercial vehicles, off-highway and marine vessels. These products are seamlessly integrated into their partners products with specific adaptions to their costumers needs.',
    'LiTHehack is a student-driven group that helps students with programming. In LiTHehack, members guide students in labs and problems that they bring from personal projects. We also offer lectures on relevant topics, such as Git.'
]

const smalltext = [
    'At WeKnowIt I got my first experience doing a fullstack technical interview that was challenging and a great push to learn and perform under pressure. As a fullstack developer I have been on a website-project utilizing industry standard frameworks like NextJs, tailwind, Stripe, firebase and more. The project group was downsized to a group of two including me who handled the further development under a support contract. ',
    'During this internship, I primarily utilized Angular, TypeScript, and Python to develop a demo application based on one of their products. The demo was built upon an existing product designed to measure productivity on various types of work sites, including construction, excavation, mining, and more. This product is known as Rock2Road. Our demo version leveraged the existing functionality to create a similar application tailored for use in port terminals, and we named it Ship2Port.',
    'LiTHehack is a student-driven organization, hired by Linköping University. Our goal is to help and support the students, by helping them in their programming courses. This is done partly by holding lectures, but also by having a programming workshop two times a week. Through this opportunity I have had the pleasure of helping students in labs that I once did. It is a great way to both learn and teach at the same time. Some of the courses we have helped in include C++, object oriented programming and simple data structures im more advanced courses.  '
]

const icons = [
    [
        <IoLogoJavascript />, <IoLogoFirebase />, <SiTailwindcss />, <DiMongodb />, <FaReact />, <SiNextdotjs />
    ],
    [
        <BiLogoTypescript />, <FaAngular />, <FaPython />
    ],
    [
        <SiCplusplus />, <SiGitlab />, <FaJava />
    ]
]

const modules = { headlines, bigtext, smalltext, icons }

export default modules