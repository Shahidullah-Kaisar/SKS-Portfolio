import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile.png";
import { ParticlesBackground } from "./ParticlesBackground";
import Typewriter from "typewriter-effect";


const Hero = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };
    return (
        <section id="home" className="min-h-screen page-gradient relative overflow-hidden">
                <ParticlesBackground />
                <motion.div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} />
                <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }} transition={{ duration: 10, repeat: Infinity }} />
                <div className="container mx-auto px-4 relative z-10">  
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.2, delayChildren: 0.3 }} className="flex flex-col items-center justify-center min-h-screen text-center">
                    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, type: "spring" }} className="mb-8 mt-8">
                      <img src={profileImage} alt="Shahidullah Kaisar" className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-2xl" />
                    </motion.div>
        
                    <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                      Hi, I'm <span className="gradient-text">Shahidullah Kaisar</span>
                    </motion.h1>
        
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl">
                      <Typewriter
                        options={{
                          strings: [
                            'Full Stack Developer',
                            'Frontend Developer',
                            'Backend Developer',
                            'Problem Solver',
                            'Web Developer'
                          ],
                          autoStart: true,
                          loop: true,
                          deleteSpeed: 50,
                          delay: 80,
                        }}
                      />
                    </motion.div>
        
                    <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="text-lg text-muted-foreground mb-8 max-w-2xl">
                      Passionate about building innovative web applications with the MERN stack, Spring Boot, and integrating AI technologies. Solved 900+ competitive programming problems.
                    </motion.p>
        
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }} className="flex flex-wrap gap-4 justify-center mb-12">
                      <Button size="lg" className="group" onClick={() => scrollToSection("works")}>
                        View My Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>Contact Me</Button>
                    </motion.div>
        
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} className="flex gap-4">
                      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://github.com/shkaisar" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card hover:bg-muted transition-colors">
                        <Github className="h-6 w-6" />
                      </motion.a>
                      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/md-shahidullah-kaisar/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card hover:bg-muted transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </motion.a>
                      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href="mailto:shkaisar2002@gmail.com" className="p-3 rounded-full bg-card hover:bg-muted transition-colors">
                        <Mail className="h-6 w-6" />
                      </motion.a>
                    </motion.div>
        
                    <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity }} className="mt-16 text-muted-foreground">
                      <p className="text-sm">Scroll to explore</p>
                      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex justify-center mt-2">
                        <div className="w-6 h-10 border-2 border-current rounded-full p-1">
                          <div className="w-1 h-3 bg-current rounded-full mx-auto" />
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </section>
    );
};

export default Hero;