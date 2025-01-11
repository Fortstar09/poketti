import Action from "./components/Action";
import Documentation from "./components/Documentation";
import FAQ from "./components/FAQ";
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
    </>
  );
}

export default App;
