import React from "react";
import Image from "next/image";
import aboutimage from "@/public/images/aboutimage.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaGraduationCap } from "react-icons/fa";


export default function About() {
  return (
    <div className="about-container">
    

      <section className="about-section">
          <div className="image-container">
            <Image
              src={aboutimage}
              alt="image"
              quality={100}
              width={300}
              height={300}
              className="about-image"
            />
          </div>

          <div className="text-content">
            <h1 className="about-title">About Me</h1>
            <p className="about-description">
              I`m on my way to becoming a Full-Stack Developer with a passion
              for creating interactive and responsive web applications. I have
              learned JavaScript, HTML, CSS, and TypeScript, and I am
              currently learning Next.js. I am a quick learner, always looking
              to expand my knowledge and skills. I`m a team player and excited
              to work with others to create amazing applications.
            </p>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="accordion-trigger">
                  Education:
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="education-list">
                    <li>
                      <FaGraduationCap size={30} color="#22d3ee" /> 2003 - 2016
                      <br /> Matriculation
                    </li>
                    <li>
                      <FaGraduationCap size={30} color="#22d3ee" /> 2018 - 2020
                      <br /> Intermediate
                    </li>
                    <li>
                      <FaGraduationCap size={30} color="#22d3ee" /> 2024 - On
                      Going
                      <br /> Developer
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="accordion-trigger">
                  Skills:
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TypeScript</li>
                    <li>JavaScript</li>
                    <li>Next.js (On-going)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
      </section>
    </div>
  );
}
