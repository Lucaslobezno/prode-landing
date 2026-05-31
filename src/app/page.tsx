import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Screenshots from "@/components/Screenshots";
import Features from "@/components/Features";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Screenshots />
        <Features />
        <Download />
      </main>
      <Footer />
    </>
  );
}
