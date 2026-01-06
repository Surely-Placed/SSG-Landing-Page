import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import GlobalPresence from "@/components/sections/GlobalPresence";
import SuccessStories from "@/components/sections/SuccessStories";
import Resources from "@/components/sections/Resources";
import Collaborations from "@/components/sections/Collaborations";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <GlobalPresence />
        <SuccessStories />
        <Resources />
        <Collaborations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
