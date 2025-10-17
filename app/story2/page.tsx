import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HermesStoryHero from "@/components/hermes/HermesStoryHero";
import HermesStorySection from "@/components/hermes/HermesStorySection";
import HermesFirstTimeNotice from "@/components/hermes/HermesFirstTimeNotice";
import HermesFeaturesShowcase from "@/components/hermes/HermesFeaturesShowcase";

export const metadata = {
  title: "SnapBoo Story",
  description:
    "A heartwarming story about a mother, a son, and a little companion that keeps them connected across 10,000 miles.",
};

export default function Story2Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HermesStoryHero />
        <HermesStorySection />
        <HermesFirstTimeNotice />
        <HermesFeaturesShowcase />
      </main>
      <Footer />
    </div>
  );
}
