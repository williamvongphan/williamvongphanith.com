import styles from '../styles/Home.module.css'
import Meta from "../components/Header/Meta";
import UnderlinedHeader from "../components/Design/UnderlinedHeader";
import {Link, Text} from "@nextui-org/react";
import Section from "../components/Design/Section";
import LanguageItemGroup from "../components/Programming/LanguageItemGroup";
import ProjectGroup from "../components/Programming/ProjectGroup";

import programmingSkills from "../config/programming.json";
import projects from "../config/projects.json";
import IntroductionHero from "../components/Design/IntroductionHero";
import ThemeSwitcher from "../components/Theme/ThemeSwitcher";
import React from "react";
import Image from "next/image";

export default function Home() {
  React.useEffect(() => {
    let a = "wvongphan";
    let b = "gmai";
    let c = "l🔹co";
    let d = "m";
    let e = " 📧 ";
    let f = "ith3";
    let g = "0";

    let email = a + f + g + e + b + c + d;
    document.getElementById("email").innerHTML = email;
  }, []);

  return (
    <div className={styles.container}>
      <Meta title="Home" />
      <main className={styles.main}>
        <ThemeSwitcher />
        <Section
        >
          <IntroductionHero/>
        </Section>
        <Section
          name="About Me"
        >
          <UnderlinedHeader anchor={"who"}>
            Who am I?
          </UnderlinedHeader>
          <Text
            p
            class={"text"}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm William Vongphanith, and I'm a 15-year-old AI and web developer. I'm currently a senior at Stuyvesant High School, and have done work with professors at the University of Michigan and executives from Weill-Cornell Medicine. I'm really passionate about technology, and in my free time, I work on miscellaneous interesting AI projects and open-source projects. I also love to produce music on Fast Tracker II.
          </Text>
        </Section>
        <Section
          name="Skills"
        >
          <UnderlinedHeader anchor={"what"}>
            What do I know?
          </UnderlinedHeader>
          <Text
            p
            class={"text"}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I have experience in a multitude of programming languages and frameworks, and I'm always looking to learn more. I'm especially proficient in machine learning frameworks, like Tensorflow and Flux, and web frameworks, like Next.js and React.
            Below, you can find a comprehensive list of my programming skills and skill levels.
          </Text>
          <LanguageItemGroup
            title="Languages"
            languages={programmingSkills.languages}
          />
          <LanguageItemGroup
            title="Frameworks"
            languages={programmingSkills.frameworks}
          />
          <LanguageItemGroup
            title="Tools"
            languages={programmingSkills.tools}
          />
        </Section>
        <Section
          name="Projects"
        >
          <UnderlinedHeader anchor={"when"}>
            When have I done it?
          </UnderlinedHeader>
          <Text
            p
            class={"text"}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm happy to show you! Please click on any of the below projects to learn more about them, how they were built, and view their live deployments.
          </Text>
          <ProjectGroup
            projects={projects}
          />
        </Section>
        <Section
          name="Contact"
        >
          <UnderlinedHeader anchor={"where"}>
            Where can you reach me?
          </UnderlinedHeader>
          <Text
            p
            class={"text"}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            There are many ways to reach me. I've listed them below:
            <span class={"block"}>
              <b>Email:</b> <span id={"email"}></span>
            </span>
            <span class={"block text-sm"}
            >
              Sorry for the formatting! This is to prevent the majority of spam bots from scraping my email.
            </span>
            <span class={"block"}>
              <b>GitHub:</b> <Link href={"https://github.com/williamvongphan"}>williamvongphan</Link>
            </span>
            <span class={"block"}>
              <b>LinkedIn:</b> <Link href={"https://www.linkedin.com/in/william-vongphanith/"}>William Vongphanith</Link>
            </span>
          </Text>
          <Text
            p
            class={"text mt-4"}
          >
            This website is open-source, and you can find the source code <Link href={"https://github.com/williamvongphan/williamvongphanith.com"}>here</Link>.
          </Text>
        </Section>
      </main>
    </div>
  )
}
