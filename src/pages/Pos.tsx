import Hero from '../components/pos/Hero';
import PainPoints from '../components/pos/PainPoints';
import Features from '../components/pos/Features';
import MultiBranch from '../components/pos/MultiBranch';
import Hardware from '../components/pos/Hardware';
import Pricing from '../components/pos/Pricing';
import FAQ from '../components/pos/FAQ';
import CTA from '../components/pos/CTA';

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4';

export default function Pos() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-55"
          src={VIDEO_URL}
        />
      </div>
      <div className="fixed inset-0 z-[1] pointer-events-none bg-[#0c0c0c]/62" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      <div className="relative z-10">
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <filter id="c3-noise-pos">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0"
            />
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
          </filter>
        </svg>
      <Hero />
      <PainPoints />
      <Features />
      <MultiBranch />
      <Hardware />
      <Pricing />
      <FAQ />
      <CTA />
      </div>
    </div>
  );
}
