import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";

const Landing = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Services />
            <Resume />
            <Works />
            <Skills />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Landing;
