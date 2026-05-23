import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Reel from "@/components/Reel";
import Clients from "@/components/Clients";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-grow">
        <Hero />
        <Capabilities />
        <Reel />
        <Clients />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
