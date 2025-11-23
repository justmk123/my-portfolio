import React from 'react';
import { Brain, Code, Database, Terminal, Cpu } from 'lucide-react';
import { SKILLS_DATA, MARQUEE_TEXT } from '../constants';
import ShuffleText from './ShuffleText';

const Skills: React.FC = () => {
  // Helper to map string icon names to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brain': return <Brain className="w-8 h-8" />;
      case 'code': return <Code className="w-8 h-8" />;
      case 'database': return <Database className="w-8 h-8" />;
      case 'terminal': return <Terminal className="w-8 h-8" />;
      default: return <Cpu className="w-8 h-8" />;
    }
  };

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden flex flex-col justify-center">
      
      {/* Background Grid Effect - kept for tech aesthetics but background is transparent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Animated Marquee Strip */}
      <div className="w-full bg-brand-blue/5 border-y border-brand-blue/10 py-4 mb-20 overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
           {/* Duplicate text 4 times to ensure seamless loop on wide screens */}
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-futuristic font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-brand-blue/20 to-gray-800 mx-4 select-none opacity-50">
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="mb-16 text-center">
            <h2 className="shiny-text-blue font-futuristic text-lg tracking-[0.3em] uppercase mb-4 animate-pulse-slow">
                <ShuffleText content="System Capabilities" />
            </h2>
            <h3 className="text-4xl md:text-5xl font-futuristic font-bold uppercase tracking-tight">
                <span className="shiny-text"><ShuffleText content="Technical Arsenal" /></span>
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((skillGroup, index) => (
            <div 
                key={skillGroup.category}
                className="group relative p-6 bg-gray-900/40 backdrop-blur-sm border border-gray-800 hover:border-brand-blue/50 transition-all duration-500 hover:-translate-y-2 rounded-xl overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-gray-600 group-hover:border-brand-blue transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-gray-600 group-hover:border-brand-blue transition-colors duration-300" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 p-4 rounded-full bg-gray-800/50 text-brand-blue group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(77,181,255,0.3)] transition-all duration-300">
                    {getIcon(skillGroup.icon)}
                </div>
                
                <h4 className="font-futuristic font-bold text-xl shiny-text mb-6 tracking-wide group-hover:text-brand-blue transition-colors">
                    <ShuffleText content={skillGroup.category} />
                </h4>

                <div className="flex flex-wrap justify-center gap-2">
                    {skillGroup.items.map((item) => (
                        <span 
                            key={item} 
                            className="px-3 py-1 text-sm font-rajdhani font-semibold text-gray-300 bg-black/50 border border-gray-700 rounded hover:border-brand-blue hover:text-white transition-colors cursor-default"
                        >
                            {item}
                        </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;