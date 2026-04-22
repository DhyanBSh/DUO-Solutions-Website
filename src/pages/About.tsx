import { motion } from 'motion/react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export const About = () => {
  return (
    <main className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#fcfcfc] min-h-screen text-[#111] overflow-hidden relative">
      
      {/* Background Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-6 md:px-12 max-w-7xl mx-auto">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-black/[0.04]" />
        ))}
      </div>

      <motion.section 
        initial="hidden" animate="visible" variants={sectionVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex justify-between items-start text-[10px] uppercase tracking-widest font-bold text-black/50 mb-20 md:mb-32">
          <motion.div variants={itemVariants}>Brand Direction</motion.div>
          <motion.div variants={itemVariants} className="hidden md:block">Performance Marketing</motion.div>
          <motion.div variants={itemVariants}>Advanced Tech</motion.div>
        </div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight font-medium mb-32 md:mb-48"
        >
          {"DUO is born from a true ambition. Not a theoretical ambition, not a manifesto-style ambition: a concrete, tangible drive that pushes you to build, to stand out, to rise. The will to make it, to leave a mark. To prove that things can be done better. Differently. Truly. Everything begins from this initial spark."
            .split(" ")
            .map((word, i) => (
              <span key={i} className="hover:text-black/30 transition-colors duration-300 cursor-default">
                {word}{" "}
              </span>
            ))}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <motion.div variants={itemVariants} className="md:col-span-6 flex items-start md:justify-center">
            {/* Overview text removed as requested */}
          </motion.div>
          <motion.div variants={itemVariants} className="md:col-span-6 flex flex-col gap-8 text-xl md:text-2xl font-medium tracking-tight text-[#111] leading-[1.4]">
            <p>
              And it takes shape within a team built not on similarity, but on tension. Designers, creatives, developers, strategists. People who come from opposite worlds yet coexist in balance. Because it is there at the intersection between vision and structure that the difference is made.
            </p>
            <p>
              The true strength of DUO lies precisely in this: a harmony of diverse tensions. Between those who imagine and those who bring ideas to life. Between those who break the rules and those who rebuild them better.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};
