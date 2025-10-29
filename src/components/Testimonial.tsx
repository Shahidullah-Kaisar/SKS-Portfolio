import { motion } from "framer-motion";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

const Testimonial = () => {
    const testimonials = [
        {
            name: "University Professor",
            role: "ICT Department, Jahangirnagar University",
            content:
                "Kaisar demonstrates exceptional problem-solving abilities and a deep understanding of software development principles. His projects showcase both technical skill and creative thinking.",
        },
        {
            name: "Team Member",
            role: "JU 3Bits Programming Team",
            content:
                "Working with Kaisar in competitive programming competitions has been inspiring. His dedication to solving complex problems and helping teammates improve is truly commendable.",
        },
        {
            name: "Hackathon Organizer",
            role: "JavaFeast Hackathon 2025",
            content:
                "The JU SilentThread team, led by Kaisar, presented an innovative project proposal that stood out among hundreds of submissions. Their technical execution was impressive.",
        },
    ];
    return (
        <section id="testimonial" className="py-20 page-gradient">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 gradient-text"
                >
                    Testimonials
                </motion.h2>

                <TestimonialCarousel testimonials={testimonials} />
            </div>
        </section>
    );
};

export default Testimonial;
