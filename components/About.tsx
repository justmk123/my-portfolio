import React from 'react';
import { Linkedin, Mail, Instagram, MessageCircle, Music } from 'lucide-react'; 
import { ABOUT_CONTENT, EDUCATION_DATA, EXPERIENCE_DATA } from '../constants';
import ShuffleText from './ShuffleText';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Ambience (Particles are now global in App.tsx) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Vignette Mask to fade edges and focus attention */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]"></div>

        {/* Ambient Glowing Orbs for Atmosphere */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16">
            <div className="flex items-end gap-6 mb-4">
              <h2 className="text-4xl md:text-6xl font-futuristic font-bold uppercase tracking-tighter whitespace-nowrap flex gap-4">
                <span className="shiny-text"><ShuffleText content="ABOUT" /></span> 
                <span className="shiny-text-blue"><ShuffleText content="ME" /></span>
              </h2>
               {/* Cyberpunk Progress Bar Graphic */}
              <div className="hidden md:flex h-6 flex-grow items-center gap-0 opacity-80 mb-2">
                 {/* Active segment */}
                 <div className="h-full w-32 bg-brand-blue/20 border-l-2 border-brand-blue relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-blue/10 animate-pulse" />
                 </div>
                 {/* Track */}
                 <div className="h-[2px] flex-grow bg-gray-800/50" />
              </div>
            </div>
            <p className="text-gray-400 font-rajdhani text-lg max-w-xl leading-relaxed">
               A creative technologist bridging the gap between visual design and artificial intelligence to build immersive digital experiences.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Image Card */}
          <div className="w-full lg:w-[40%]">
             <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 group shadow-2xl shadow-brand-blue/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                
                {/* Image */}
                <img 
                    src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1000&auto=format&fit=crop" 
                    alt="Profile" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Cyberpunk Overlay Elements */}
                <div className="absolute top-6 left-6 z-20">
                    <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse shadow-[0_0_10px_#4db5ff]" />
                </div>
                
                <div className="absolute bottom-6 left-6 z-20">
                    <p className="font-futuristic text-xs text-brand-blue tracking-widest">SYSTEM_STATUS: ONLINE</p>
                </div>
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            
            {/* Bio */}
            <div className="mb-16">
                <p className="font-rajdhani text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                    {ABOUT_CONTENT.description} {ABOUT_CONTENT.description2}
                </p>
            </div>

            {/* Timelines Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                
                {/* Education */}
                <div>
                    <h3 className="font-futuristic font-bold text-2xl mb-8 flex items-center gap-3 shiny-text">
                        <ShuffleText content="Education" />
                    </h3>
                    {/* Consistent pl-6 (24px) + dot offset calculation for alignment */}
                    <div className="space-y-8 border-l border-gray-800 ml-2 pl-6 relative">
                        {EDUCATION_DATA.map((edu, idx) => (
                            <div key={idx} className="relative group">
                                {/* Dot w-3 (12px). Offset: -24.5 - 6 = -30.5px */}
                                <div className="absolute -left-[30.5px] top-1.5 w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_10px_rgba(77,181,255,0.5)] border border-black" />
                                <span className="block font-rajdhani text-sm text-gray-500 mb-1">{edu.period}</span>
                                <h4 className="font-futuristic font-bold text-lg shiny-text group-hover:text-brand-blue transition-colors">
                                    <ShuffleText content={edu.institution} />
                                </h4>
                                <p className="font-rajdhani text-gray-400">{edu.location}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Work Experience */}
                <div>
                    <h3 className="font-futuristic font-bold text-2xl mb-8 shiny-text">
                        <ShuffleText content="Work Experience" />
                    </h3>
                    <div className="space-y-8 border-l border-gray-800 ml-2 pl-6 relative">
                         {/* Connecting line overlay - strictly on the border */}
                         <div className="absolute top-0 bottom-0 left-[-1px] w-[1px] bg-gradient-to-b from-brand-blue/50 to-transparent" />

                        {EXPERIENCE_DATA.map((exp, idx) => (
                            <div key={idx} className="relative group">
                                {/* Dot w-2.5 (10px). Offset: -24.5 - 5 = -29.5px */}
                                <div className={`absolute -left-[29.5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 box-border z-10 ${exp.current ? 'bg-brand-blue border-brand-blue shadow-[0_0_8px_#4db5ff]' : 'bg-black border-brand-blue'}`} />
                                
                                <span className="block font-rajdhani text-sm text-gray-500 mb-1">{exp.period}</span>
                                <h4 className="font-futuristic font-bold text-lg shiny-text group-hover:text-brand-blue transition-colors">
                                    <ShuffleText content={exp.company} />
                                </h4>
                                <p className="font-rajdhani text-gray-400">{exp.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
                {[
                    { Icon: Linkedin, href: "#" },
                    { Icon: Mail, href: "#" },
                    { Icon: MessageCircle, href: "#" }, // WhatsApp
                    { Icon: Instagram, href: "#" },
                    { Icon: Music, href: "#" } // TikTok
                ].map((item, idx) => (
                    <a 
                        key={idx} 
                        href={item.href} 
                        className="w-12 h-12 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-black hover:bg-brand-blue hover:border-brand-blue transition-all duration-300 transform hover:scale-110"
                    >
                        <item.Icon className="w-5 h-5" />
                    </a>
                ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;