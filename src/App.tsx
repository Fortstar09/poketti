import Action from "./components/Action";
import Documentation from "./components/Documentation";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoChat from "./components/InfoChat";
import MoreReason from "./components/MoreReason";
import Navbar from "./components/Navbar";
import Reason from "./components/Reason";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoChat />
      <Reason />
      <MoreReason />
      <Documentation />
      <Testimonials />
      <FAQ />
      <Action />
      <span className="block m-auto border border-[#EDEDED] w-full lg:w-[1000px]"></span>
      <Footer />
    </>
  );
}

export default App;
