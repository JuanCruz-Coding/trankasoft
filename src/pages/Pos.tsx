import Hero from '../components/pos/Hero';
import PainPoints from '../components/pos/PainPoints';
import Features from '../components/pos/Features';
import Installments from '../components/pos/Installments';
import MultiBranch from '../components/pos/MultiBranch';
import Hardware from '../components/pos/Hardware';
import Pricing from '../components/pos/Pricing';
import FAQ from '../components/pos/FAQ';
import CTA from '../components/pos/CTA';

export default function Pos() {
  return (
    <div className="bg-white text-navy">
      <Hero />
      <PainPoints />
      <Features />
      <Installments />
      <MultiBranch />
      <Hardware />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
