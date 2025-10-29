import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export const FixedLinkedInIcon = () => {
  return (
    <motion.a
      href="https://www.linkedin.com/in/shkaisar/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Linkedin className="h-6 w-6" />
    </motion.a>
  );
};
