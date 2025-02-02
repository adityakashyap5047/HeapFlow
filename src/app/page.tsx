import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HeroSectionHeader from "./components/HeroSectionHeader";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";

export default function Home() {
  return (
    <>
      <Header/>
      <HeroSectionHeader/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-8">
  <div className="col-span-1 lg:col-span-2">
    <p className="text-2xl py-4">Questions</p>
    <LatestQuestions />
  </div>
  <div className="col-span-2 lg:col-span-1">
    <p className="text-2xl py-4">Contributers</p>
    <TopContributers />
  </div>
</div>
      <HeroSection />
    </>
  );
}