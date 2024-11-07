"use client";

import React from "react";
import Header from "@/components/Header";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import logo from "@/public/images/logo.jpg";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div>
      <Header />

      <section id="home">
        <div className="home-container">
          <div className="home-content">
            <span className="span-1">
              <b>H</b>i!...I`m
            </span>
            <h1>
              Narmeen Asghar <br />
              <span className="span-2">
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer",
                    2000,
                    "Designer",
                    2000,
                    "Programmer",
                    2000,
                  ]}
                  speed={50}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p>
              As a passionate aspiring Full-Stack Developer, I am eager to
              <br />
              expand my skills and embark on a journey in web development.
            </p>

            <div className="view-cv">
              <Button>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white"
                >
                  View CV
                </a>
              </Button>

              <div className="icons-container">
                <a
                  href="https://github.com/Career01crafter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/narmeen-asghar-9582282ba"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" />
                </a>
                <a href="mailto:pakistani47log@gmail.com">
                  <MdEmail className="icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="image-main">
            <div className="absolute-cover gradient-background" />

            <div className="absolute-cover pulse-border" />

            <div className="relative z-10 scale-hover slow-pulse">
              <Image
                src={logo}
                alt="Logo"
                quality={100}
                width={350}
                height={450}
                className="rounded-image"
              />
            </div>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Contact />
    </div>
  );
}
