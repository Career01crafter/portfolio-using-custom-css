import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import htmlcss from "@/public/images/htmlcss.jpg";
import typescript from "@/public/images/typescript.jpg";
import nextjs from "@/public/images/nextjs.jpg";


export default function Projects() {
  return (
    <section className="projects-container">
      
      <h1 className="projects-title">Projects</h1>
      <div className="projects">
        {/* Project Card 1 */}
        <div className="project-card">
          <div className="project-image">
            <Image
              src={htmlcss}
              alt="Project 1"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="project-title">Project 1</h2>
          <p className="project-description">Countdown Application</p>
          <div className="project-links">
            <Button className="project-button">
              <Link href="https://vercel.com/careercrafters-projects/nextjs-countdown-app">
                Live Demo
              </Link>
            </Button>
            <Button className="project-button">
              <Link href="https://github.com/Career01crafter/Nextjs-Countdown-app.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="project-card">
          <div className="project-image">
            <Image
              src={typescript}
              alt="Project 2"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="project-title">Project 2</h2>
          <p className="project-description">Portfolio</p>
          <div className="project-links">
            <Button className="project-button">
              <Link href="https://vercel.com/careercrafters-projects/portfolio">
                Live Demo
              </Link>
            </Button>
            <Button className="project-button">
              <Link href="https://github.com/Career01crafter/portfolio.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="project-card">
          <div className="project-image">
            <Image
              src={nextjs}
              alt="Project 3"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="project-title">Project 3</h2>
          <p className="project-description">Birthday Wish Application</p>
          <div className="project-links">
            <Button className="project-button">
              <Link href="https://vercel.com/careercrafters-projects/nextjs-birthday-wish-app">
                Live Demo
              </Link>
            </Button>
            <Button className="project-button">
              <Link href="https://github.com/Career01crafter/Nextjs-BirthdayWish-app.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 4 */}
        <div className="project-card">
          <div className="project-image">
            <Image
              src={htmlcss}
              alt="Project 4"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="project-title">Project 4</h2>
          <p className="project-description">Number Guessing Game App</p>
          <div className="project-links">
            <Button className="project-button">
              <Link href="https://vercel.com/careercrafters-projects/nextjs-number-guessing-game">
                Live Demo
              </Link>
            </Button>
            <Button className="project-button">
              <Link href="https://github.com/Career01crafter/Nextjs-Number-Guessing-Game.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 5 */}
        <div className="project-card">
          <div className="project-image">
            <Image
              src={typescript}
              alt="Project 5"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="project-title">Project 5</h2>
          <p className="project-description">Article On Diabetic Diseases</p>
          <div className="project-links">
            <Button className="project-button">
              <Link href="https://vercel.com/careercrafters-projects/article-diabetes-html">
                Live Demo
              </Link>
            </Button>
            <Button className="project-button">
              <Link href="https://github.com/Career01crafter/Article-Diabetes-HTML.git">
                Source Code
              </Link>
            </Button>
          </div>
        </div>

        {/* Project Card 6 */}
        <div className="project-card">
          <div className="project-image">
            <Image
              src={nextjs}
              alt="Project 6"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="project-title">Visit My Accounts</h2>
          <p className="project-description">Visit my accounts for more projects</p>
          <div className="project-links">
            <Button className="project-button">
              <Link href="https://vercel.com/careercrafters-projects">
                Vercel
              </Link>
            </Button>
            <Button className="project-button">
              <Link href="https://github.com/Career01crafter">
                Github
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
