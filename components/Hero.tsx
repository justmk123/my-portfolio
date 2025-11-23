import React from 'react';
import { FileText, Github, Linkedin } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../constants';
import Hologram3D from './Hologram3D';
import ShuffleText from './ShuffleText';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 lg:px-32 pt-20 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none z-0" />
      
      {/* Left Content: Text */}
      <div className="z-10 flex flex-col items-start space-y-2 md:w-1/2">
        {/* Intro Tag */}
        <span className="font-futuristic text-sm md:text-base tracking-[0.2em] uppercase mb-2 animate-fade-in-up">
          <ShuffleText content={PROFILE.intro} className="shiny-text-blue" delay={500} />
        </span>

        {/* Name - Blocky Font */}
        <h1 className="font-futuristic font-black text-5xl md:text-7xl lg:text-9xl leading-[0.85] tracking-tight uppercase select-none relative mb-6">
          <div className="block relative z-10">
             <ShuffleText content={PROFILE.firstName} className="shiny-text" delay={1000} />
          </div>
          <div className="block relative z-10">
             <ShuffleText content={PROFILE.lastName} className="shiny-text" delay={1200} />
          </div>
          
          {/* Glitch decoration */}
          <span className="absolute -top-1 -left-1 text-brand-blue opacity-20 hidden group-hover:block">{PROFILE.firstName}</span>
        </h1>

        {/* Subtitle */}
        <h2 className="font-futuristic text-lg md:text-2xl tracking-[0.15em] uppercase mt-2 mb-8 flex flex-wrap gap-3">
          <ShuffleText content={PROFILE.subtitle.split(' ')[0]} className="shiny-text-blue font-bold" delay={1500} />
          <ShuffleText content={PROFILE.subtitle.split(' ')[1]} className="shiny-text font-bold" delay={1700} />
        </h2>

        {/* Actions Section - Vertical Stack */}
        <div className="flex flex-col items-start gap-10 mt-6">
          
          {/* Resume Button - Reference Image Style - Scaled Down */}
          <button className="group bg-white rounded-full flex items-center p-1.5 pr-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] cursor-pointer active:scale-95">
            <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center mr-4 group-hover:bg-black group-hover:border-black transition-colors duration-300">
               <FileText className="w-5 h-5 text-black group-hover:text-white transition-colors duration-300" strokeWidth={2} />
            </div>
            <span className="text-black font-futuristic font-bold text-xl md:text-2xl tracking-[0.15em]">
                RESUME
            </span>
          </button>

          {/* Hire Me & Socials */}
          <div className="flex items-center gap-10 pl-2">
             <span className="font-futuristic font-bold text-2xl text-white tracking-widest shiny-text uppercase">
                <ShuffleText content="HIRE ME" />
             </span>
             
             <div className="flex gap-6">
                {SOCIAL_LINKS.map((link) => (
                    <a 
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-1 rounded-sm text-black hover:bg-brand-blue hover:text-white transition-all transform hover:scale-110 duration-300"
                    >
                        {link.icon === 'github' ? <Github className="w-6 h-6" /> : <Linkedin className="w-6 h-6" />}
                    </a>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Right Content: 3D Hologram */}
      <div className="relative z-10 mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
         <Hologram3D />
      </div>

    </section>
  );
};

export default Hero;