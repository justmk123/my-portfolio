import React from 'react';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import ShuffleText from './ShuffleText';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Section Header */}
      <div className="container mx-auto px-6 md:px-12 mb-16 relative z-10">
        <div className="flex items-end gap-4 mb-4">
          <h2 className="text-4xl md:text-6xl font-futuristic font-bold uppercase tracking-tighter flex flex-wrap gap-x-4">
            <span className="shiny-text"><ShuffleText content="Deployed" /></span> 
            <span className="shiny-text-blue"><ShuffleText content="Protocols" /></span>
          </h2>
          <div className="hidden md:block h-4 flex-grow bg-gray-800/50 mb-4 rounded-sm relative overflow-hidden">
             <div className="absolute inset-0 bg-brand-blue/20 w-1/3 animate-marquee" />
          </div>
        </div>
        <p className="text-gray-400 font-rajdhani text-lg max-w-xl">
          A collection of high-performance systems and experimental algorithms deployed in the digital frontier.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {PROJECTS_DATA.map((project, index) => (
          <div 
            key={project.title}
            className="group relative bg-gray-900/20 border border-gray-800 hover:border-brand-blue/60 transition-colors duration-500 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
              {/* Overlay that fades out on hover */}
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              
              {/* Floating ID Tag */}
              <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur border border-brand-blue/30 px-3 py-1">
                <span className="font-futuristic text-xs text-brand-blue">
                   SYS_ID_0{index + 1}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 relative">
              {/* Decor Line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-2xl font-futuristic font-bold mb-3 shiny-text group-hover:text-brand-blue transition-colors">
                <ShuffleText content={project.title} />
              </h3>
              
              <p className="font-rajdhani text-gray-400 mb-6 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-xs font-futuristic text-brand-blue border border-brand-blue/20 bg-brand-blue/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-gray-800 group-hover:border-brand-blue/30 transition-colors">
                <a 
                  href={project.links.code} 
                  className="flex items-center gap-2 text-sm font-rajdhani font-bold text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  SOURCE_CODE
                </a>
                <a 
                  href={project.links.demo} 
                  className="flex items-center gap-2 text-sm font-rajdhani font-bold text-brand-blue hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  LIVE_DEMO
                </a>
              </div>
            </div>
            
            {/* Corner Markers */}
            <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] border-b-gray-800 group-hover:border-b-brand-blue transition-colors duration-300" />
          </div>
        ))}
      </div>
      
      {/* Background decoration - Now clipped by overflow-hidden */}
      <div className="absolute top-1/2 -left-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

    </section>
  );
};

export default Projects;