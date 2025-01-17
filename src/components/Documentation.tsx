import { motion, useAnimation, useInView } from "framer-motion";
import Button from "./ui/Button";
import { useEffect, useRef } from "react";

const Pvariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const Documentation = () => {
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
    <section className="py-10 px-5  lg:py-[120px] lg:px-14 xl:px-[100px] mb-10 lg:mb-[86px]">
      <div
        ref={ref}
        className="flex flex-col justify-center lg:justify-between lg:items-center  lg:flex-row gap-10  xl:gap-[125px]"
      >
        <div className="flexStart flex-col gap-8">
          <div className="flexStart relative overflow-hidden flex-col gap-4">
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
                Documentation
              </p>
              <img src="icons/icon-park-solid_folder-code.svg" alt="" />
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
              Powerful payments APIs for product teams
            </motion.h2>
            <motion.p
              variants={Pvariants}
              initial="hidden"
              animate={mainControls}
              transition={{
                delay: 0.8,
                duration: 0.9,
                easing: [0.17, 0.55, 0.55, 1],
              }}
              className="text-grey para max-w-[505px]"
            >
              Our developer guide helps developers learn how to build amazing
              payment experiences with Pocketti's APIs. Pocketti provides
              generic, low-level, secure, and PCI-compliant RESTful APIs which
              allow you to accept and make payments.
            </motion.p>
            <motion.div>
              <Button text="See documentations" />
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <Mark>
              <EachMark text="Register users in seconds" />
              <EachMark text="Collect authorization via SDK" />
            </Mark>
            <Mark>
              <EachMark text="Register users in seconds" />
              <EachMark text="Collect authorization via SDK" />
            </Mark>
          </div>
        </div>
        <img
          src="images/apiImg.svg"
          alt=""
          className="w-[500px] px-3 py-3 md:px-6 md:pt-6 bg-[#f1f1f1] rounded rounded-t-[32px]"
        />
      </div>
    </section>
  );
};

export default Documentation;

const Mark = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

const EachMark = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-2">
      <img src="icons/tick-circle.svg" alt="" />
      <p className="text-sm md:para text-grey">{text}</p>
    </div>
  );
};
