import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const numberedServices = [
  { title: "Digital Strategy", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
  { title: "Custom Web Development", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" },
  { title: "UI/UX & Experience Design", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" },
  { title: "Platform Migration & Replatforming", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" },
  { title: "Conversion Rate Optimization (CRO)", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
  { title: "Performance Marketing", img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop" },
  { title: "Brand Positioning & Identity", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" },
  { title: "Systems Integration", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" },
  { title: "Data Intelligence & Analytics", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { title: "Advanced SEO & Search Strategy", img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop" },
  { title: "Visual Production & 3D", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" },
  { title: "Creative Copywriting", img: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=1973&auto=format&fit=crop" }
];

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="bg-[#fcfcfc] text-[#111] overflow-hidden">
      {/* Page 1: Hero Image & Abstract Introduction */}
      <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="pt-24 md:pt-32">
        <div className="px-6 md:px-12 mb-16 md:mb-24">
          <motion.div variants={itemVariants} className="w-full h-[50vh] md:h-[75vh] overflow-hidden bg-black/5 relative group">
            <motion.img 
              animate={{ scale: [1, 1.05, 1] }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Interior Office Landscape" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        
        <div className="px-6 md:px-12 text-center mb-24 md:mb-32">
          <motion.h2 variants={itemVariants} className="text-[28px] md:text-[40px] lg:text-[48px] font-medium tracking-tight">
            Design. Technology. Marketing. Real digital presence connects them all.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 px-6 md:px-12 mb-32 md:mb-48">
          <motion.div variants={itemVariants} className="md:col-span-5 aspect-[3/4] bg-black/5 overflow-hidden group">
            <motion.img 
              animate={{ scale: [1, 1.05, 1] }} 
              transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 1 }}
              src="https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=1974&auto=format&fit=crop" 
              alt="Abstract Art Poster" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="md:col-span-7 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 md:gap-8 pb-12">
            <motion.div variants={itemVariants} className="max-w-[340px] text-[13px] font-medium leading-relaxed text-[#111]">
              In the digital ecosystem, strategy, design, technology, and marketing often operate separately. The result is fragmentation and inefficiency. DUO was created to change that. We design digital ecosystems where strategy, design, and performance work as one integrated system. We build structures that make scaling simpler, more efficient, and truly seamless.
            </motion.div>
            <motion.div variants={itemVariants} className="w-32 h-32 lg:w-48 lg:h-48 bg-black/5 overflow-hidden shrink-0 hidden md:block group">
              <motion.img 
                animate={{ scale: [1, 1.08, 1] }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2076&auto=format&fit=crop" 
                alt="Detail Texture" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Page 1 Bottom / Page 2 Top: Massive Typography Ecosystem block */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
        className="px-6 md:px-12 mb-24 md:mb-32"
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-[48px] sm:text-[64px] md:text-[8vw] lg:text-[7vw] xl:text-[110px] leading-[0.85] tracking-tighter uppercase font-bold text-[#111]"
        >
          AN END-TO-END ECOSYSTEM<br/>
          DESIGNED TO SCALE, PERFORM AND<br/>
          <span className="text-black/30">INTEGRATE SEAMLESSLY.</span>
        </motion.h2>
      </motion.section>

      {/* Page 2 Middle: 3-column services breakdown WITH INTERACTIVE HOVER  */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
        className="px-6 md:px-12 mb-32 md:mb-48"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Sub-column 1: Small meta list */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-black/50">( a. ) APPROACH</h3>
            <ul className="text-[9px] uppercase font-bold tracking-widest space-y-3 text-black/80">
              <li>- DIGITAL BUSINESS MODEL</li>
              <li>- GROWTH ROADMAP DEFINITION</li>
              <li>- BRAND POSITIONING IN MARKETS</li>
              <li>- OMNICHANNEL COMMERCE STRATEGY</li>
            </ul>
          </motion.div>
          
          {/* Sub-column 2: Interactive Vertical UI/Image */}
          <motion.div variants={itemVariants} className="lg:col-span-4 h-[50vh] lg:h-[70vh] bg-black/5 overflow-hidden group relative">
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                src={numberedServices[activeIndex].img} 
                alt={numberedServices[activeIndex].title} 
                className="w-full h-full object-cover absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
          </motion.div>
          
          {/* Sub-column 3: Numbered Services List */}
          <motion.div variants={itemVariants} className="lg:col-span-5 lg:pl-16 pt-8 lg:pt-0">
            <ul className="space-y-4 md:space-y-5" onMouseLeave={() => setActiveIndex(0)}>
              {numberedServices.map((service, idx) => (
                <li 
                  key={idx} 
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`flex items-start text-lg sm:text-xl md:text-2xl font-medium tracking-tight hover:text-[#111] transition-colors cursor-pointer ${
                    activeIndex === idx ? 'text-[#111]' : 'text-black/30'
                  }`}
                >
                  <span className={`text-[11px] font-bold mr-6 mt-[6px] sm:mt-2 shrink-0 transition-colors ${
                    activeIndex === idx ? 'text-black/60' : 'text-black/30'
                  }`}>
                    {String(idx + 1).padStart(2, '0')}.
                  </span> 
                  {service.title}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Page 2 Bottom: Two Column Image Break */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
        className="mb-32 md:mb-48"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 px-6 md:px-0">
          <motion.div variants={itemVariants} className="aspect-[4/5] bg-black/5 overflow-hidden relative group">
            <motion.img 
              animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              src="https://images.unsplash.com/photo-1602498456745-e9503b30470b?q=80&w=1974&auto=format&fit=crop" 
              alt="Abstract Floral Blur" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="aspect-[4/5] bg-black/5 overflow-hidden relative group">
            <motion.img 
              animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 26, repeat: Infinity, ease: "linear", delay: 2 }}
              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop" 
              alt="Abstract Fashion Blur" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
        <div className="px-6 md:px-12 mt-8 md:mt-12">
          <motion.div variants={itemVariants} className="max-w-md text-xs font-semibold leading-relaxed text-[#111]">
            DUO works with brands that refuse to treat digital platforms as simple landing pages. Brands that see it as infrastructure, as strategy, as a system to build and scale over time. From established companies to emerging brands, we collaborate with teams that want clarity, structure, and real performance. Fashion, lifestyle, and consumer brands that understand that growth doesn't come from noise, but from strong foundations. Together we design digital ecosystems built to perform, evolve, and grow continuously.
          </motion.div>
        </div>
      </motion.section>

      {/* Page 3 Top & Bottom: Manifesto & Featured Clients */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}
        className="px-6 md:px-12 pb-32"
      >
        {/* Manifesto */}
        <motion.h2 
          variants={itemVariants} 
          className="text-[28px] md:text-[40px] lg:text-[56px] font-medium tracking-tight leading-[1.05] max-w-[1400px] mb-32 md:mb-48"
        >
          Every project begins with a close dialogue with the brands we work with. We study their business models, their growth ambitions and the dynamics of the markets they operate in. From there we design digital structures built to perform over time, able to adapt and evolve together with the company. Our work is not simply about building websites, but about creating systems that improve efficiency, support operations and allow brands to grow in a solid and sustainable way within the digital landscape.
        </motion.h2>

        {/* Featured Clients */}
        <motion.div variants={itemVariants} className="border-t border-black/10 pt-16">
          <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2">Featured Clients</h3>
          <div className="text-[10px] text-black/40 font-bold uppercase tracking-widest mb-16">2024—2026</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-24">
            {[
              { label: 'a', name: "AURA STUDIOS", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" },
              { label: 'b', name: "DOCKERS", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop" },
              { label: 'c', name: "NVC APPAREL", img: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1964&auto=format&fit=crop" }
            ].map((client, i) => (
              <div key={i} className="flex flex-col group">
                <div className="flex justify-between items-end text-[10px] uppercase font-bold tracking-widest mb-6">
                  <span className="text-black/40 font-serif lowercase italic text-xs">( {client.label}. )</span>
                  <span className="text-[#111]">{client.name}</span>
                </div>
                <div className="w-full aspect-square bg-black/5 overflow-hidden relative">
                  <motion.img 
                    animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: i * 2 }}
                    src={client.img} 
                    alt={client.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};
