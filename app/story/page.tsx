import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StoryHero from "@/components/home/StoryHero";
import StorySection from "@/components/home/StorySection";
import FirstTimeNotice from "@/components/home/FirstTimeNotice";
import FeaturesShowcase from "@/components/home/FeaturesShowcase";

export const metadata = {
  title: "Our Story - SnapBoo",
  description:
    "A heartwarming story about a mother, a son, and a little companion that keeps them connected across 10,000 miles.",
};

export default function StoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <StoryHero />
        <StorySection />
        <FirstTimeNotice />
        <FeaturesShowcase />
      </main>
      <Footer />
    </div>
  );
}
