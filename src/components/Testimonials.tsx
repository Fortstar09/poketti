import { motion, useAnimation, useInView } from "framer-motion";
import { MarqueeDemo } from "./MarqueeDemo";
import { useEffect, useRef } from "react";

const Pvariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  const mainControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <section className="bg-[#fafafa]">
      <div
        ref={ref}
        className="flexStart gap-2 relative overflow-hidden flex-col pt-[70px] pb-[33px] lg:px-14 px-5 xl:px-[100px]"
      >
        <motion.div
          variants={Pvariants}
          initial="hidden"
          animate={mainControls}
          transition={{
            delay: 0.8,
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
          }}
          className="flexCenter gap-1"
        >
          <p className="text-base font-normal text-primary">Testimonials</p>
          <img src="icons/mingcute_chat-2-fill.svg" alt="" />
        </motion.div>
        <motion.h2
          variants={Pvariants}
          initial="hidden"
          animate={mainControls}
          transition={{
            delay: 0.8,
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
          }}
          className="max-w-[505px] text-3xl lg:text-[40px] font-medium lg:leading-[48px] lg:tracking-[-1%] text-black"
        >
          Words on the street says we are the best out there
        </motion.h2>
      </div>
      <div className="bg-reasonbgLine bg-center bg-cover pt-[99px] pb-[67px]">
        <MarqueeDemo />
      </div>
    </section>
  );
};

export default Testimonials;
