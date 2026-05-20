import HeroBrand from '../components/home/HeroBrand';
import ProductGrid from '../components/home/ProductGrid';
import Differentiators from '../components/home/Differentiators';
import Portfolio from '../components/home/Portfolio';
import About from '../components/home/About';
import Contact from '../components/home/Contact';
import BrandCTA from '../components/home/BrandCTA';

export default function Home() {
  return (
    <>
      <HeroBrand />
      <ProductGrid />
      <Differentiators />
      <Portfolio />
      <About />
      <Contact />
      <BrandCTA />
    </>
  );
}
