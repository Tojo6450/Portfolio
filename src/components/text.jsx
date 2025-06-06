import React, { useState, useEffect } from "react";
import { FaGithub,  FaLinkedin, FaCode } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import Portfolio from "./Portfolio";
import PortfolioSection from "./Portfolio-Section";
import ScrollReveal from "./ScrollReveal";

const Home = () => {
  const [imageLoad, setImageLoad] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Check if screen is mobile or desktop
  useEffect(() => {
    window.scrollTo(0, 0);
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="mt-24 font-space-grotesk sm:mt-28 md:mt-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Grid layout for desktop, stack for mobile */}
      <div
        className={`${
          isMobile
            ? "space-y-5"
            : "grid grid-cols-6 gap-5 min-h-[calc(100vh-200px)]"
        }`}
      >
        {/* Profile Card - Left column on desktop, full width on mobile */}
        <ScrollReveal
          direction={isMobile ? "up" : "left"}
          delay={0.1}
          distance={30}
          className={`
            ${isMobile ? "" : "col-span-2 row-span-5"}
          `}
        >
          <div
            className={`
            text-center flex flex-col gap-4 sm:gap-5 
            items-center justify-center 
            border border-card-background bg-card-background 
            p-6 sm:p-8 lg:p-6 xl:p-8
            rounded-[15px] sm:rounded-[20px]
            h-full
          `}
          >
            <ScrollReveal direction="up" delay={0.2} distance={20}>
              <div
                className="flex justify-center items-center 
                  w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] 
                  lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] 2xl:w-[220px] 2xl:h-[220px]
                  p-2 bg-[#9e9b96] rounded-full overflow-hidden relative
                  mx-auto"
              >
                {!imageLoad && (
                  <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-full"></div>
                )}
                <img
                  className="object-cover rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3
                    w-[90%] h-auto"
                  src="/avator.png"
                  alt="Godfred"
                  loading="lazy"
                  onLoad={() => setImageLoad(true)}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} distance={20}>
              <h1 className="text-heading-color text-[24px] sm:text-[28px] md:text-[32px] lg:text-[26px] xl:text-[30px] font-medium leading-tight">
                Godfred Entsie
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} distance={20}>
              <p
                className="leading-[24px] sm:leading-[28px] mt-0 mb-2 sm:mb-3 
                          w-full max-w-[300px] lg:max-w-full 
                          text-[14px] sm:text-[16px] lg:text-[15px] xl:text-[16px]"
              >
                I am a Full Stack Developer based in Accra, Ghana
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5} distance={20}>
              <div
                className="socials flex items-center justify-between 
                            w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[280px] xl:max-w-[320px] 
                            mx-auto gap-4"
              >
                {[
                  {
                    icon: faFacebook,
                    href: "http://facebook.com/godentsie",
                    label: "Facebook",
                  },
                  {
                    icon: faXTwitter,
                    href: "https://x.com/jaywebs_",
                    label: "Twitter",
                  },
                  {
                    icon: faLinkedinIn,
                    href: "https://www.linkedin.com/in/godfred-entsie-952a69223/",
                    label: "LinkedIn",
                  },
                  {
                    icon: faGithub,
                    href: "https://github.com/jayfaculty-design",
                    label: "GitHub",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    className="text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[18px] 
                            border border-border-color 
                            p-2 sm:p-3 lg:p-2.5 xl:p-3
                            rounded-[8px] sm:rounded-[10px]
                            hover:bg-border-color hover:text-background-color 
                            transition-colors duration-300
                            flex-1"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Contact information for desktop version */}
            <ScrollReveal
              direction="up"
              delay={0.6}
              distance={20}
              className="w-full"
            >
              <div className="hidden lg:flex flex-col gap-4 mt-6 w-full">
                <div className="flex flex-col gap-1 text-left">
                  <p className="text-[12px] xl:text-[13px] text-gray-400">
                    PHONE:
                  </p>
                  <p className="text-[14px] xl:text-[15px] text-white font-medium">
                    +(233) 240-536-268
                  </p>
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <p className="text-[12px] xl:text-[13px] text-gray-400">
                    EMAIL:
                  </p>
                  <p className="text-[14px] xl:text-[15px] text-white font-medium">
                    hello@gentsie.com
                  </p>
                </div>

                <div className="flex flex-col gap-1 text-left">
                  <p className="text-[12px] xl:text-[13px] text-gray-400">
                    LOCATION:
                  </p>
                  <p className="text-[14px] xl:text-[15px] text-white font-medium">
                    Accra, Ghana
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        {/* About Me Section - Top right on desktop, second on mobile */}
        <ScrollReveal
          direction={isMobile ? "up" : "right"}
          delay={isMobile ? 0.2 : 0.1}
          distance={30}
          className={`
            ${isMobile ? "" : "col-span-4 row-span-3"}
          `}
        >
          <div
            className={`
            flex flex-col gap-3 sm:gap-4 md:gap-5 
            border border-card-background bg-card-background 
            p-5 sm:p-6 md:p-8 lg:p-10 
            rounded-[15px] md:rounded-[20px]
            h-full
          `}
          >
            <div className="flex flex-col h-full">
              <ScrollReveal direction="up" delay={0.2} distance={20}>
                <p className="leading-[24px] sm:leading-[28px] mt-0 mb-[0.5rem] sm:mb-[1rem] text-[14px] sm:text-[16px]">
                  Hi There!
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3} distance={20}>
                <h2
                  className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] 
                            leading-[26px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] 
                            mb-[10px] sm:mb-[15px] md:mb-[20px] 
                            font-normal text-heading-color"
                >
                  I'm Godfred Entsie, a Full Stack Developer building seamless,
                  user-focused web applications with clean, efficient code.
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4} distance={20}>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] md:leading-[26px] mb-4 sm:mb-6">
                  With over 2 years of experience in web development, I
                  specialize in creating responsive, high-performance
                  applications using modern technologies like React, Next.js,
                  Node.js, and TypeScript. My approach combines technical
                  excellence with a deep understanding of user experience
                  design.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.5} distance={20}>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] md:leading-[26px] mb-4 sm:mb-6">
                  I'm passionate about building solutions that solve real
                  problems and deliver measurable results for businesses and
                  users alike. Whether it's optimizing performance, implementing
                  complex features, or creating intuitive interfaces, I'm
                  committed to delivering exceptional quality.
                </p>
              </ScrollReveal>

              <ScrollReveal
                direction="up"
                delay={0.6}
                distance={20}
                className="mt-auto"
              >
                <div className="flex  flex-col items-start gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-light-green animate-pulse"></div>
                    <p className="text-[13px] sm:text-[14px] md:text-[16px]">
                      Available for Freelancing
                    </p>
                  </div>

                  <a
                    href="/resume.pdf"
                    download
                    className="bg-primary-color 
                            border-t-2 border-b-3 sm:border-b-4 border-r-3 sm:border-r-4 border-l-2 border-heading-color 
                            flex items-center gap-1 sm:gap-2 ml-0 md:ml-auto lg:ml-auto 
                            justify-center w-fit text-white cursor-pointer 
                            text-[12px] sm:text-[13px] md:text-[14px] 
                            font-bold leading-[18px] sm:leading-[20px] 
                            overflow-visible rounded-[10px] sm:rounded-[12px] md:rounded-[15px] 
                            text-center transition-all duration-300 
                            px-[20px] sm:px-[26px] md:px-[32px] 
                            py-2 sm:py-2.5 md:py-3
                            hover:translate-y-[-2px] active:translate-y-[1px]"
                  >
                    Download CV
                    <FontAwesomeIcon icon={faDownload} />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>    
      </div>
    </div>
  );
};

export default Home;