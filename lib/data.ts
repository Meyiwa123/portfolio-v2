import React from "react";
import aavImg from "@/public/aav.png";
import uavImg from "@/public/uav.png";
import cliImg from "@/public/cli.png";
import { CgWorkAlt } from "react-icons/cg";
import campusImg from "@/public/campus.png";
import rtosImg from "@/public/rtos.png";
import reyonImg from "@/public/reyon.png";
import mangaImg from "@/public/manga.png";
import lidarImg from "@/public/lidar.png";
import scrabbleImg from "@/public/scrabble.png";
import { LuGraduationCap } from "react-icons/lu";
import portfolioV1Img from "@/public/portfolio-v1.png";
import elevatorImg from "@/public/elevator_system.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Carleton University, Ottawa, Ontario, Canada",
    description: "Bachelor of Engineering in Software Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "September 2021 - June 2024",
  },
  {
    title: "Remote Software Developer Intern",
    location: "Lagos, Nigeria",
    description:
      "Resolve software bugs and issues reported by users, ensuring prompt and effective solutions. Collaborate with remote team members to develop and maintain software applications used in water production processes and participate in all stages of the software development life cycle, from requirements gathering to deployment. Additionally, I work closely with cross-functional teams, including production managers, quality control personnel, and IT staff, to ensure seamless integration of software systems.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - October 2023",
  },
  {
    title: "UAV Software Developer",
    location: "Ottawa, Ontario, Canada",
    description:
      "Develop algorithms for autonomous flight and navigation, implement computer vision techniques for object detection and recognition, and design and test software solutions for UAVs. Also, I am responsible for maintaining a repository of UAV software and documentation and conducting performance testing and analysis, including flight testing and data collection. Working closely with other team members, I ensure seamless integration of software with hardware components. Additionally, I collaborate with researchers and other teams, as I help design and implement UAV applications for a variety of fields, including security and environmental monitoring.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Accessible Autonomous Vehicle",
    description:
      "Developed an autonomous vehicle with enhanced perception and response capabilities, integrating computer vision models and communication protocols.",
    tags: ["Python", "Linux", "Git", "LiDAR", "GNSS", "CANBUS", "ROS2", "YOLO"],
    imageUrl: aavImg,
  },
  {
    title: "Task Management System",
    description:
      "Developed a centralized platform that organizes, tracks, and prioritizes activities to enhance efficiency and collaboration within Reyon Bottling.",
    tags: ["Java", "Spring", "MySQL", "Prometheus", "Grafana"],
    imageUrl: reyonImg,
  },
  {
    title: "On-Demand and Long-Range Passenger Transport UAV",
    description:
      "The project involves the design and automation of a Vertical Take-Off and Landing (VTOL) Unmanned Aerial Systems (UAS) aircraft.",
    tags: ["Python", "C++", "SITL", "MATLAB", "Gazebo"],
    imageUrl: uavImg,
  },
  {
    title: "MangaVerse",
    description:
      "Explore a cutting-edge manga website offering a diverse collection of captivating stories and stunning artwork for manga enthusiasts.",
    tags: ["Svelte", "Manga", "Web Development"],
    imageUrl: mangaImg,
  },
  {
    title: "Campus Guidance",
    description:
      "A web application that helps students find their campus based on their preferences.",
    tags: ["React", "Web Development"],
    imageUrl: campusImg,
  },
  {
    title: "Personal Portfolio V1",
    description: "A showcase of my projects and skills.",
    tags: ["Svelte", "Portfolio", "Web Development"],
    imageUrl: portfolioV1Img,
  },
  {
    title: "Homelan CLI",
    description:
      "A command-line interface tool for managing and monitoring your home lab environment.",
    tags: ["NodeJS", "CLI", "Home Lab"],
    imageUrl: cliImg,
  },
  {
    title: "LIDAR Grid Visualizer",
    description:
      "Effortlessly transform LIDAR measurements into an accurate occupancy grid map using our Python implementation.",
    tags: ["Python", "LiDAR", "Data Visualization"],
    imageUrl: lidarImg,
  },
  {
    title: "Building Elevator Control System",
    description:
      "An advanced elevator control system that efficiently manages vertical transportation, ensuring smooth, safe, and timely movements between floors.",
    tags: ["Java", "Control Systems"],
    imageUrl: elevatorImg,
  },
  {
    title: "MSP432P401R Timer & Interrupt",
    description:
      "Discover MSP432P401R's LED brilliance; witness precise timer and interrupt programming as LEDs blink and change colors with captivating precision.",
    tags: ["Embedded C", "Microcontroller"],
    imageUrl: rtosImg,
  },
  {
    title: "Scrabble Game",
    description:
      "Unleash your word power in the classic Scrabble game; strategically build words on the board, score big, and challenge friends or AI opponents; become a word champion now!",
    tags: ["Java", "Game Development"],
    imageUrl: scrabbleImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Svelte",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Java",
  "C/C++",
] as const;
