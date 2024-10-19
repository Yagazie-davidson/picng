"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import { Menu, X } from "lucide-react";
const page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <section className="min-h-screen bg-[url('https://es2.yourwebsite.life/res/66fa67e4ac2477eb40ae9617/66fd12aa36ee6ab12d39f8f9_optimized_1920.webp')] bg-cover bg-center">
        <nav className="flex justify-between items-center px-4 md:px-24 pt-7 relative">
          <Image
            alt="logo"
            src="https://res2.yourwebsite.life/res/66fa67e4ac2477eb40ae9617/66fa6a747bd271e6ca1a5128_optimized_380.webp"
            width={180}
            height={180}
          />
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:relative top-full left-0 right-0 bg-black/90 md:bg-transparent p-4 md:p-0`}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 text-white text-lg font-normal w-full md:w-auto">
              <li>
                <a href="" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="" onClick={() => setIsMenuOpen(false)}>
                  Objectives
                </a>
              </li>
              <li>
                <a href="" onClick={() => setIsMenuOpen(false)}>
                  Pi-CNG
                </a>
              </li>
            </ul>
            <Button className="md:hidden w-full bg-[#E0DB00] font-normal text-sm hover:bg-[#05AA4E] hover:text-white text-black py-5 px-5">
              Apply Now
            </Button>
          </div>
          <Button className="hidden md:flex bg-[#E0DB00] font-normal text-sm hover:bg-[#05AA4E] hover:text-white text-black py-5 px-5">
            Apply Now
          </Button>
        </nav>
        <div className="flex justify-center items-center w-full h-[calc(100vh-12rem)]">
          <LazyMotion features={domAnimation}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <div className="flex flex-col items-center px-4 text-center">
                <p className="text-4xl md:text-[79px] font-bold text-white font-neue-montreal leading-tight md:leading-[4rem]">
                  Distribution Of{" "}
                  <span className="text-[#E0DB00]">
                    2,000 <br /> CNG Powered{" "}
                  </span>{" "}
                  Tricycles
                </p>
                <p className="text-white font-normal text-base md:text-[19px] mt-4">
                  Youth Empowerment through Clean Energy
                </p>
                <Button className="bg-[#05AA4E] font-normal text-sm hover:text-black mt-5 hover:bg-white text-white py-6 px-7">
                  Apply Now
                </Button>
              </div>
            </motion.div>
          </LazyMotion>
        </div>
      </section>
      <section className="flex my-10 md:my-20 justify-center items-center w-full px-4">
        <div className="w-full max-w-7xl bg-[#02582A] flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 lg:space-x-9 py-6 md:py-2 px-4 md:px-8 lg:px-28 rounded-3xl">
          <Image
            src="https://res2.yourwebsite.life/res/66fa67e4ac2477eb40ae9617/66fa8865ac6631f921d96626_optimized.webp"
            alt="First partner logo"
            width={200}
            height={200}
            className="w-full max-w-[200px] h-auto mx-auto"
          />
          <Image
            src="https://res2.yourwebsite.life/res/66fa67e4ac2477eb40ae9617/66fa9a21bc77a02c651a3187_optimized.webp"
            alt="Second partner logo"
            width={200}
            height={200}
            className="w-full max-w-[200px] h-auto mx-auto"
          />
          <Image
            src="https://res2.yourwebsite.life/res/66fa67e4ac2477eb40ae9617/66fa99e8a97cfa7da34e98d0_optimized.webp"
            alt="Third partner logo"
            width={200}
            height={200}
            className="w-full max-w-[200px] h-auto mx-auto"
          />
        </div>
      </section>
      <section
        id="#about"
        className="flex items-center justify-center px-10 md:px-24"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col  md:flex-row md:justify-center space-x-10 items-center">
            <div className="bg-black p-2 w-fit rounded-xl">
              <LazyMotion features={domAnimation}>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 1.3 }}
                >
                  <Image
                    alt=""
                    src={
                      "https://res2.yourwebsite.life/res/66fa67e4ac2477eb40ae9617/66fa7b86ac6631f921d93e9e_optimized_819_c819x1024-0x0.webp"
                    }
                    height={450}
                    width={450}
                  />
                </motion.div>
              </LazyMotion>
            </div>

            <article className="w-full md:w-1/2">
              <LazyMotion features={domAnimation}>
                <AnimatePresence initial={true}>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 1.3 }}
                  >
                    <h2 className="font-bold text-[42px] leading-10">
                      Driving Sustainable Growth <br /> and Youth Empowerment{" "}
                    </h2>
                    <div className="border-t-2 border-[#05AA4E] my-5 w-24"></div>
                    <p className="text-base font-normal leading-4">
                      <strong>
                        In line with the President’s Renewed Hope Agenda
                      </strong>
                      , this initiative reflects President Bola Ahmed Tinubu’s
                      unwavering commitment to empowering Nigerians,
                      particularly the youth. Through innovative programs like
                      the Presidential CNG Initiative, we are laying the
                      foundation for a{" "}
                      <strong>sustainable, self-reliant future</strong> by
                      lowering transportation costs, creating jobs, and
                      promoting clean energy solutions. The distribution of
                      2,000 CNG-powered tricycles is a significant step toward
                      achieving economic growth and environmental
                      responsibility, as envisioned in the Renewed Hope Agenda.
                    </p>
                    <br />
                    <p className="text-base font-normal leading-4">
                      This initiative also underscores the government’s
                      dedication to reducing the cost of living for everyday
                      Nigerians while simultaneously fostering entrepreneurship.
                      By transitioning the transport sector to Compressed
                      Natural Gas (CNG), we aim to create a greener, more
                      affordable public transportation system. This program is a
                      testament to the administration’s focus on job creation,
                      sustainable development, and youth empowerment, ensuring
                      that Nigeria’s future is built on resilience, innovation,
                      and shared prosperity.
                    </p>
                    <Button className="hover:bg-black font-normal text-sm bg-[#05AA4E] text-white py-6 mt-10 px-5">
                      Apply Now
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </LazyMotion>
            </article>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center px-24 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center space-y-10 md:space-y-0  md:flex-row md:justify-center md:space-x-10 items-center">
            <div className="bg-[#02582A] w-[450px] px-5 pt-5 pb-9 rounded-xl">
              <Image
                alt=""
                src={
                  "https://res2.yourwebsite.life/res/66fa67e4ac2477eb40ae9617/66fa8a7bd033158874ea0c88_optimized_1022_c1022x1270-0x0.webp"
                }
                height={450}
                width={450}
              />
              <div>
                <h1 className="text-center text-2xl font-bold text-white mt-5">
                  Ayodele Olawande
                </h1>
                <p className="text-center text-base font-normal text-[#E0DB00] leading-none">
                  Honourable Minister of State For Youth Development Federal
                  Republic of Nigeria
                </p>
              </div>
            </div>
            <div className="bg-[#02582A] w-[450px] px-5 pt-5 pb-9 rounded-xl">
              <Image
                alt=""
                src={
                  "https://res2.yourwebsite.life/res/66fa67e4ac2477eb40ae9617/66fa8cafd033158874ea138d_optimized_818_c818x1024-0x0.webp"
                }
                height={450}
                width={450}
              />
              <div>
                <h1 className="text-center text-2xl font-bold text-white mt-5">
                  Engr. Michael Oluwagbemi
                </h1>
                <p className="text-center text-base font-normal text-[#E0DB00] leading-none">
                  Programme Director/Chief <br />
                  Executive PI-CNG
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center px-24 mt-20">
        <h2 className="text-black font-bold text-[42px]">Gallery</h2>
        <div>{/* <Slides /> */}</div>
      </section>
      <section id="#" className="flex items-center justify-center h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col  md:flex-row md:justify-center space-x-10 items-center">
            <div className="bg-black p-2 w-fit rounded-xl">
              <Image
                alt=""
                src={
                  "https://res2.yourwebsite.life/res/66fa67e4ac2477eb40ae9617/66fa7b86ac6631f921d93e9e_optimized_819_c819x1024-0x0.webp"
                }
                height={450}
                width={450}
              />
            </div>
            <article className="w-full md:w-1/2">
              <p className="text-[#0DAD59] text-base font-bold my-2">
                Cleaner, Greener, Cheaper
              </p>
              <h2 className="font-bold text-[42px] leading-10">
                The Future of Nigerian Transport
              </h2>
              <div className="border-t-2 border-[#E0DB00] my-5 w-24"></div>
              <p className="text-base font-normal leading-4">
                Beneficiaries of the Presidential CNG Initiative must complete
                sensitization training on operating and maintaining CNG
                tricycles. They will also have the opportunity to engage with
                aggregators, who coordinate with associations and Pi-CNG to
                facilitate the tricycles&apos; ownership process. Participants
                can earn income immediately, with the potential to own their
                tricycles over time, depending on the terms set by their
                aggregators.
              </p>
              <br />
              <h2 className="text-[#FC0001] font-bold text-2xl">
                Key Objectives
              </h2>
              <ul className="list-image-[url()]">
                <li>
                  <strong>Cheaper Gas:</strong> Providing affordable fuel
                  alternatives.
                </li>
                <li>
                  {" "}
                  <strong>Deployments:</strong> Increased deployment of
                  CNG-powered tricycles.
                </li>
                <li>
                  {" "}
                  <strong>Investments:</strong> Attracting investments into CNG
                  infrastructure and transportation
                </li>
                <li>
                  {" "}
                  <strong>Job Creation:</strong> Boosting employment
                  opportunities in the transportation sector.
                </li>
                <li>
                  {" "}
                  <strong>Cleaner Emission:</strong> Environmentally friendly
                  transport with reduced emissions.
                </li>
              </ul>
              <Button className="hover:bg-black font-normal text-sm bg-[#05AA4E] text-white py-6 mt-10 px-5">
                Apply Now
              </Button>
            </article>
          </div>
        </div>
      </section>
      <footer className="bg-black ">
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="logo"
            src={
              "https://res2.yourwebsite.life/res/66fa67e4ac2477eb40ae9617/66fa6a747bd271e6ca1a5128_optimized_380.webp"
            }
            width={250}
            height={250}
          />
          <p className="text-white text-[15px] font-normal text-center px-10 sm:px-20 md:px-60">
            The Presidential CNG Initiative (Pi-CNG) is a component of the
            palliative intervention of the President Bola Ahmed Tinubu
            administration directed at lowering transportation cost for the
            populace.
          </p>
          <ul className="flex items-center space-x-3 text-white text-base font-normal my-5">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Objectives</a>
            </li>
            <li>
              <a href="">Pi-CNG</a>
            </li>
          </ul>
        </div>
      </footer>
      <section className="bg-[#05AA4E] flex justify-center text-base text-white py-4 space-x-4">
        <p>This portal is built and managed by Sapphital</p>
        <p>@ {new Date().getFullYear()} | All rights reserved</p>
      </section>
    </div>
  );
};

export default page;
