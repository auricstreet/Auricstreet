import { SessionMatrix } from "./components/SessionMatrix";
import IlluminatiIntro from "./components/IlluminatiIntro";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
import ValueSection from "./components/sections/ValueSection";
import ComparisonSection from "./components/sections/ComparisonSection";
import CurriculumSection from "./components/sections/CurriculumSection";
import CtaSection from "./components/sections/CtaSection";
import FaqSection from "./components/sections/FaqSection";


export default function Home() {
  return (
    <>
     
      <IlluminatiIntro />
      <Preloader />


<Hero />
<SessionMatrix />
<ValueSection />
<ComparisonSection />
<CurriculumSection  />
<CtaSection />

<FaqSection />


    </>
  );
}
