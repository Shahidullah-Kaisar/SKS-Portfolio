import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Database,
    Cloud,
    Cpu,
    Code2,
    Layout,
    Server,
    Palette,
    Wrench,
    FileCode,
    Boxes,
    GitBranch,
    Package,
} from "lucide-react";


const Skills = () => {
    const skillsData = {
        "Core CS Concepts": {
            icon: Cpu,
            skills: [
                { name: "Object-Oriented Programming (OOP)", icon: Code2 },
                { name: "Data Structures & Algorithms", icon: Boxes },
            ],
        },
        "Programming Languages": {
            icon: FileCode,
            skills: [
                { name: "C", icon: Code2 },
                { name: "C++", icon: Code2 },
                { name: "Java", icon: Code2 },
                { name: "JavaScript", icon: Code2 },
                { name: "TypeScript", icon: Code2 },
            ],
        },
        Frontend: {
            icon: Layout,
            skills: [
                { name: "React.js", icon: Code2 },
                { name: "Next.js", icon: Code2 },
                { name: "Redux", icon: Package },
                { name: "Tailwind CSS", icon: Palette },
                { name: "Bootstrap", icon: Palette },
                { name: "HTML", icon: FileCode },
                { name: "CSS", icon: Palette },
            ],
        },
        Backend: {
            icon: Server,
            skills: [
                { name: "Node.js", icon: Server },
                { name: "Express.js", icon: Server },
                { name: "Spring Boot", icon: Server },
                { name: "REST APIs", icon: Code2 },
            ],
        },
        Databases: {
            icon: Database,
            skills: [
                { name: "MongoDB", icon: Database },
                { name: "MySQL", icon: Database },
                { name: "PostgreSQL", icon: Database },
            ],
        },
        "UI Libraries": {
            icon: Palette,
            skills: [
                { name: "ShadCN", icon: Layout },
                { name: "Ant Design", icon: Layout },
                { name: "Material UI", icon: Layout },
            ],
        },
        Tools: {
            icon: Wrench,
            skills: [
                { name: "Git", icon: GitBranch },
                { name: "GitHub", icon: GitBranch },
                { name: "Postman", icon: Server },
                { name: "Firebase", icon: Cloud },
                { name: "Vercel", icon: Cloud },
                { name: "VS Code", icon: FileCode },
                { name: "IntelliJ IDEA", icon: FileCode },
            ],
        },
        "AI Tools": {
            icon: Cpu,
            skills: [
                { name: "Hugging Face", icon: Cpu },
                { name: "Gemini AI", icon: Cpu },
                { name: "Lovable", icon: Cpu },
            ],
        },
    };
    return (
        <section id="skills" className="py-20 page-gradient">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 gradient-text"
                >
                    Skills
                </motion.h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {Object.entries(skillsData).map(
                        (
                            [category, { icon: CategoryIcon, skills }],
                            categoryIndex
                        ) => (
                            <motion.div
                                key={category}
                                variants={{
                                    hidden: { y: 50, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { duration: 0.5 },
                                    },
                                }}
                                whileHover={{ y: -5 }}
                            >
                                <Card className="h-full card-gradient border-border/50 hover:border-primary/50 transition-all">
                                    <CardHeader>
                                        <CardTitle className="gradient-text flex items-center gap-2">
                                            <CategoryIcon className="w-6 h-6" />
                                            {category}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {skills.map((skill, skillIndex) => {
                                                const SkillIcon = skill.icon;
                                                return (
                                                    <motion.div
                                                        key={skill.name}
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{
                                                            duration: 0.3,
                                                            delay:
                                                                categoryIndex *
                                                                    0.1 +
                                                                skillIndex *
                                                                    0.05,
                                                        }}
                                                        whileHover={{
                                                            scale: 1.05,
                                                        }}
                                                    >
                                                        <Card className="bg-background/50 border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default">
                                                            <CardContent className="p-3 flex items-center gap-3">
                                                                <div className="p-2 rounded-lg bg-primary/10">
                                                                    <SkillIcon className="w-5 h-5 text-primary" />
                                                                </div>
                                                                <span className="text-sm font-medium text-foreground">
                                                                    {skill.name}
                                                                </span>
                                                            </CardContent>
                                                        </Card>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
