import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatisticsSection from './components/StatisticsSection';
import MapSection from './components/MapSection';
import ChallengesSection from './components/ChallengesSection';
import RealHeroSection from './components/RealHeroSection';
import ClimateSection from './components/ClimateSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatisticsSection />
        <MapSection />
        <ChallengesSection />
        <RealHeroSection />
        <ClimateSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;