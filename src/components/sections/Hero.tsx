import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import { MonitorOverlay } from "../canvas/MonitorOverlay";
import profilePic from "../../assets/Haaziqprofilepic.png";

const Hero = () => {
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);

  const handleOpenDesktop = () => {
    setIsDesktopOpen(true);
  };

  const handleCloseDesktop = () => {
    setIsDesktopOpen(false);
  };

  return (
    <section className={`relative mx-auto h-screen w-full hero-section`}>
      {/* Enhanced lighting for 3D model */}
      <div className="absolute inset-0 hero-lighting pointer-events-none"></div>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="flex items-start gap-8">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className={`${styles.heroHeadText} text-white whitespace-nowrap`}>
              Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 mt-2`}>
              {config.hero.p[0]} <br className="hidden sm:block" />
              {config.hero.p[1]}
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/in/Haaziq-aamir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:Haaziq.aamir8@gmail.com"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
              <a
                href="https://github.com/Haaziq-code"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="hidden sm:block">
            <div className="relative">
              <div className="w-48 h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                  {/* Replace this with your actual image */}
                  <img 
                    src={profilePic} 
                    alt="Haaziq Aamir" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Show placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center" style={{display: 'none'}}>
                    <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Computer Model positioned below text content */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 z-10">
        <ComputersCanvas />
      </div>

      {/* Desktop Access Button */}
      {!isDesktopOpen && (
        <div className="absolute bottom-40 right-20 z-20">
          <button
            onClick={handleOpenDesktop}
            className="group relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Access Desktop</span>
            
            {/* Pulse animation */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 animate-pulse"></div>
          </button>
        </div>
      )}

      {/* Desktop Overlay */}
      <MonitorOverlay
        isVisible={isDesktopOpen}
        onClose={handleCloseDesktop}
      />

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
