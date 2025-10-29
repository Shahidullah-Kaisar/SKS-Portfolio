import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Smartphone, Zap, Cloud, Cpu} from "lucide-react";


const Services = () => {
    const services = [
    { icon: Code, title: "Full Stack Development", description: "Building scalable web applications using MERN stack, Next.js, and Spring Boot with modern best practices." },
    { icon: Database, title: "Database Design", description: "Expertise in MongoDB, MySQL, and PostgreSQL for efficient data modeling and optimization." },
    { icon: Smartphone, title: "Responsive UI/UX", description: "Creating beautiful, responsive interfaces with React, Tailwind CSS, and modern design principles." },
    { icon: Zap, title: "REST API Development", description: "Designing and implementing robust RESTful APIs with Express.js and Spring Boot." },
    { icon: Cloud, title: "Cloud Integration", description: "Deploying and managing applications on Firebase, Vercel, and other cloud platforms." },
    { icon: Cpu, title: "AI Integration", description: "Integrating AI capabilities using Gemini AI, Hugging Face, and other modern AI tools." },
  ];

    return (
        <section id="services" className="py-20 page-gradient">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 gradient-text"
                >
                    Services
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
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={{
                                hidden: { y: 50, opacity: 0 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: 0.5 },
                                },
                            }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.2 },
                            }}
                        >
                            <Card className="h-full card-gradient border-border/50 hover:border-primary/50 transition-all">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                                        <service.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
