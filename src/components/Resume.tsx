import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Award, BookOpen, Briefcase } from "lucide-react";

const Resume = () => {
    const education = [
        {
            institution: "Jahangirnagar University",
            degree: "Bachelor of Science in ICT",
            period: "2022 – Present",
            location: "Savar, Dhaka",
            gpa: "CGPA: 3.49 (Up to 5th Semester)",
        },
        {
            institution: "Adarsha College, Dinajpur",
            degree: "Higher Secondary School Certificate (HSC)",
            period: "2018 – 2020",
            location: "Dinajpur",
            gpa: "GPA: 5.00",
        },
    ];

    const achievements = [
        {
            title: "JavaFeast Hackathon 2025",
            description:
                "Selected in Preliminary and Project Proposal Round [Team: JU SilentThread]",
        },
        {
            title: "IEEEXtreme 16.0 Programming Competition 2022",
            description:
                "Ranked 17th out of 100 Bangladeshi teams [Team: JU 3Bits]",
        },
        {
            title: "ICPC 2021 Preliminary Contest",
            description:
                "Participated in the national preliminary round [Team: JU 3Bits]",
        },
    ];

    const problemSolving = [
        {
            platform: "Codeforces",
            stats: "Highest Rating: 1113, Solved 600+ problems",
        },
        { platform: "Vjudge", stats: "Solved 175+ problems" },
        { platform: "LeetCode", stats: "Solved 60+ problems" },
        {
            platform: "CodeChef",
            stats: "Highest Rating: 1167, Solved 31+ problems",
        },
        { platform: "AtCoder", stats: "Solved 35+ problems" },
        {
            platform: "Total",
            stats: "Solved 900+ problems across all platforms",
        },
    ];

    const experiences = [
        {
            role: "Full Stack Developer",
            type: "Self-Learning & Projects",
            period: "2022 - Present",
            description:
                "Building full-stack applications using MERN stack, Java Spring Boot, and integrating AI technologies. Focused on creating scalable, user-friendly web applications with modern design principles.",
            highlights: [
                "Developed 3+ production-ready full-stack applications",
                "Integrated AI capabilities using Gemini AI and Hugging Face",
                "Implemented secure authentication and payment systems",
                "Maintained clean code architecture following MVC patterns",
            ],
        },
    ];

    return (
        <section id="resume" className="py-20 page-gradient">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 gradient-text"
                >
                    Resume
                </motion.h2>

                <div className="space-y-12 max-w-6xl mx-auto">
                    {/* Education and Work Experience Side by Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Education - Left Side */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg gradient-bg">
                                        <GraduationCap className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold">
                                        Education
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {education.map((edu, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                            }}
                                        >
                                            <Card className="card-gradient border-border/50">
                                                <CardHeader>
                                                    <CardTitle>
                                                        {edu.institution}
                                                    </CardTitle>
                                                    <CardDescription className="text-base">
                                                        {edu.degree} • {edu.gpa}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-sm text-muted-foreground">
                                                        {edu.period} •{" "}
                                                        {edu.location}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Work Experience - Right Side */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 rounded-lg gradient-bg">
                                        <Briefcase className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold">
                                        Work Experience
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {experiences.map((exp, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                            }}
                                        >
                                            <Card className="card-gradient border-border/50">
                                                <CardHeader>
                                                    <CardTitle>
                                                        {exp.role}
                                                    </CardTitle>
                                                    <CardDescription className="text-base">
                                                        {exp.type}
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent className="space-y-3">
                                                    <p className="text-sm text-muted-foreground">
                                                        {exp.period}
                                                    </p>
                                                    <p className="text-sm text-foreground/90">
                                                        {exp.description}
                                                    </p>
                                                    <div className="space-y-1">
                                                        {exp.highlights.map(
                                                            (
                                                                highlight,
                                                                hIndex
                                                            ) => (
                                                                <div
                                                                    key={hIndex}
                                                                    className="flex items-start gap-2"
                                                                >
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                                    <p className="text-sm text-foreground/80">
                                                                        {
                                                                            highlight
                                                                        }
                                                                    </p>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg gradient-bg">
                                <Award className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold">
                                Achievements & Rewards
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <Card className="h-full card-gradient border-border/50 hover:border-primary/50 transition-all">
                                        <CardHeader>
                                            <CardTitle className="text-lg">
                                                {achievement.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                {achievement.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg gradient-bg">
                                <BookOpen className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold">
                                Problem Solving Activities
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {problemSolving.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    <Card className="card-gradient border-border/50 hover:border-primary/50 hover:shadow-lg transition-all">
                                        <CardHeader>
                                            <CardTitle className="text-lg">
                                                {item.platform}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">
                                                {item.stats}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
