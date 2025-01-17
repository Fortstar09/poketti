import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Pvariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const FAQ = () => {
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
    <section className="px-5 xl:px-[100px] lg:px-14 py-16 lg:py-[100px]">
      <div ref={ref} className="flex flex-col gap-10 md:gap-20">
        <div className="flexStart relative overflow-hidden gap-2 flex-col">
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
            <p className="text-base font-normal text-primary">
              Frequently Asked Questions
            </p>
            <img src="icons/question-mark.svg" alt="" />
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
            className="max-w-[505px] text-3xl md:text-[40px] font-medium md:leading-[48px] md:tracking-[-1%] text-black"
          >
            Discover answers to common questions about Pocketti
          </motion.h2>
        </div>
        <div>
          <img src="images/convers.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
