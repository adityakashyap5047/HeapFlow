import Footer from "./components/Footer";
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
      <LatestQuestions/>
      <TopContributers/>
      <HeroSection />
      <Footer/>
    </>
  );
}