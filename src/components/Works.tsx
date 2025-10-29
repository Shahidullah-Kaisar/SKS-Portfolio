import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

import projectContentSummarizer from "@/assets/project-content-summarizer.jpg";
import projectTourManagement from "@/assets/project-tour-management.jpg";
import projectKaporbazaar from "@/assets/project-kaporbazaar.jpg";

const Works = () => {
    const projects = [
        {
            title: "Content Summarizer",
            type: "Full Stack",
            description:
                "A full-stack content summarization app that uses Gemini-2.0-Flash AI to generate concise summaries from text and PDF documents. The React frontend delivers a smooth user experience with PDF preview functionality and toast notifications.",
            technologies: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Express.js",
                "Gemini AI",
            ],
            liveUrl: "https://content-summarizer-kappa.vercel.app",
            githubUrl: "https://github.com/Shahidullah-Kaisar/Content-Summarizer",
            image: projectContentSummarizer,
        },
        {
            title: "Tour Management System",
            type: "Backend",
            description:
                "Developed a role-based backend for a Tour Management System using Express.js, TypeScript, and MVC architecture. Implemented JWT auth, Zod validation, Passport-based access control, and integrated SSLCommerz for payments.",
            technologies: [
                "Express.js",
                "TypeScript",
                "MongoDB",
                "JWT",
                "SSLCommerz",
            ],
            githubUrl: "https://github.com/Shahidullah-Kaisar/PH-Tour-Management-System-Server",
            image: projectTourManagement,
        },
        {
            title: "KaporBazaar",
            type: "Full Stack",
            description:
                "Built a full-stack MERN e-commerce website for buying clothes with secure Stripe payments and a responsive UI. Implemented JWT authentication for secure user login.",
            technologies: [
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "Stripe",
            ],
            liveUrl: "https://kaporbazaar.vercel.app",
            githubUrl: "https://github.com/shkaisar/kaporbazaar",
            image: projectKaporbazaar,
        },
    ];

    return (
        <section id="works" className="py-20 page-gradient">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 gradient-text"
                >
                    My Works
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: 0.6 },
                                },
                            }}
                        >
                            <Card className="group relative h-full overflow-hidden card-gradient border-border/50 hover:border-primary/50 transition-all">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <motion.div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                        {project.githubUrl && (
                                            <Button
                                                asChild
                                                variant="outline"
                                                size="sm"
                                                className="gap-2"
                                            >
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Github className="h-4 w-4" />
                                                    GitHub
                                                </a>
                                            </Button>
                                        )}
                                        {project.liveUrl && (
                                            <Button
                                                asChild
                                                size="sm"
                                                className="gap-2"
                                            >
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                        )}
                                    </motion.div>
                                </div>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between gap-2">
                                            <motion.h3
                                                className="text-2xl font-bold gradient-text"
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                {project.title}
                                            </motion.h3>
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary whitespace-nowrap">
                                                {project.type}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(
                                                (tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Works;
