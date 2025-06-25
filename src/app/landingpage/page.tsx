import { inter } from '@/lib/fonts';
import Header from '../../components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import WorkOpportunities from './components/WorkOpportunities';
import FAQs from './components/FAQs';
import HowItWorks from './components/HowItWorks';
import Statics from './components/Statics';
import FeatureList from './components/FeatureList';
import HowWeDifferent from './components/HowWeDifferent';

function LandingPage() {
  return (
    <main className={`bg-[#111111] text-white w-full min-h-screen font-sans overflow-x-hidden ${inter.className}`}>
      <Header />
      <HeroSection />
      <WorkOpportunities />
      <HowItWorks />
      <Statics />
      <FeatureList />
      <HowWeDifferent />
      <FAQs />
      <Footer />
    </main>
  );
}

export default LandingPage;
