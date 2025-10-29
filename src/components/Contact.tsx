import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "shkaisar2002@gmail.com",
            href: "mailto:shkaisar2002@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+880 1788109909",
            href: "tel:+8801788109909",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Jahangirnagar University, Savar, Dhaka",
        },
    ];
    return (
        <div>
            <section id="contact" className="py-20 page-gradient">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 gradient-text"
                    >
                        Contact Me
                    </motion.h2>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">
                                    Get in Touch
                                </h3>
                                <p className="text-muted-foreground">
                                    Feel free to reach out for collaborations,
                                    opportunities, or just a friendly chat!
                                </p>
                            </div>

                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{ x: 5 }}
                                >
                                    <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all">
                                        <CardContent className="p-4 flex items-center gap-4">
                                            <div className="p-3 rounded-lg gradient-bg shrink-0">
                                                <info.icon className="h-5 w-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">
                                                    {info.label}
                                                </p>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        className="font-medium hover:text-primary transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="font-medium">
                                                        {info.value}
                                                    </p>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}

                            <div className="flex gap-4 pt-4">
                                <motion.a
                                    href="https://github.com/shkaisar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-4 rounded-lg gradient-bg text-white hover:shadow-lg transition-shadow"
                                >
                                    <Github className="h-6 w-6" />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/md-shahidullah-kaisar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-4 rounded-lg gradient-bg text-white hover:shadow-lg transition-shadow"
                                >
                                    <Linkedin className="h-6 w-6" />
                                </motion.a>
                                <motion.a
                                    href="mailto:shkaisar2002@gmail.com"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-4 rounded-lg gradient-bg text-white hover:shadow-lg transition-shadow"
                                >
                                    <Mail className="h-6 w-6" />
                                </motion.a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="card-gradient border-border/50">
                                <CardContent className="p-6">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium mb-2 block"
                                            >
                                                Name
                                            </label>
                                            <Input
                                                id="name"
                                                placeholder="Your name"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        name: e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium mb-2 block"
                                            >
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="your.email@example.com"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        email: e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="text-sm font-medium mb-2 block"
                                            >
                                                Message
                                            </label>
                                            <Textarea
                                                id="message"
                                                placeholder="Your message..."
                                                rows={6}
                                                value={formData.message}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        message: e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full gap-2"
                                        >
                                            <Send className="h-4 w-4" />
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
