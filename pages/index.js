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

import GeometricShapeScroller from "../components/Design/GeometricShapeScroller";

function yearsSince (birthDate) {
  const today = new Date();
  // Calculate a decimal number of years (can be 15.91293192391293)
  const years = (today - birthDate) / (365.25 * 24 * 60 * 60 * 1000);
  return Math.floor(years);
}

function distanceFromTopOfPage(element) {
  return element.getBoundingClientRect().top;
}
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

    // Calculate age
    const birthDate = new Date("2007-03-04");
    setInterval(() => {
      document.getElementById("age").innerHTML = yearsSince(birthDate).toString();
    },1);
  }, []);

  return (
    <div className={styles.container}>
      <Meta title="Home" />
      <main className={styles.main}>
        <GeometricShapeScroller />

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
            class={"text mb-4"}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm William Vongphanith, and I'm a <span id={"age"} style={{fontFamily: "--var(--font-mono)"}}></span>-year-old AI and web developer based in New York City.
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            &nbsp;I'm currently a high school senior at <Link href={"https://stuy.enschool.org/"}>Stuyvesant High School</Link>, and will be attending college in the fall of 2023.
          </Text>
          <Text
            p
            class={"text mb-4"}
          >
            My main areas of interest in computer science span <b>machine learning and artificial intelligence</b>, <b>web development</b>, and <b>software engineering</b>.
            My research covers a wide range of topics, including <b>recurrent neural networks</b>, <b>computer vision</b>, <b>natural language processing</b>, and <b>application development</b>.
            I&apos;ve worked with <Link href={"https://rajrao.engin.umich.edu/"}>Professor Raj Rao</Link> at the University of Michigan, <Link href={"http://micromind.com"}>Mr. Peter Brooks</Link> from Stuyvesant High School and Micromind, and <Link href={"https://directory.weill.cornell.edu/person/profile/slvuong"}>Ms. Susan Vuong</Link> at Weill Cornell Medicine.
          </Text>
          <Text
            p
            class={"text mb-4"}
          >
            On the side, I really love producing music on <Link href={"https://wikipedia.com/wiki/FastTracker_II"}>FastTracker II</Link>, and I heartily enjoy developing websites, Discord bots, and other pieces of software for myself, friends, and strangers alike. Please look at my <Link href={"#when"}>projects</Link> section to see some of my work!
            Please feel free to use any of the methods listed in the <Link href={"#where"}>contact</Link> section below, if you&apos;d like to get in touch with me or commission/contract me for a project.
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
            I'm happy to show you! Please click on any of the below project dropdowns to learn more about them, how they were built, and view their live deployments.
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
