import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Pvariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};
const InfoChat = () => {
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
    <section className="relative bg-white bg-chatBg bg-cover bg-center px-5 py-2 md:py-0 lg:px-14 xl:p-[100px]">
      <div ref={ref} className="flexCenter flex-col gap-y-12">
        <div className="relative overflow-hidden">
          <img src="icons/userchat_1.svg" className="w-8 mb-2" alt="pic" />
          <motion.p
            variants={Pvariants}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="italic font-light text-grey text-xl md:text-[64px] w-full md:max-w-[1100px] md:leading-[96px] md:tracking-[-2%]"
          >
            “I need a banking app that can support and handle all my needs
            seamlessly”
          </motion.p>
        </div>
        <div className="flex justify-center items-end flex-col relative overflow-hidden">
          <img src="icons/pocket_1.svg" className="w-8 mb-2" alt="pic" />
          <motion.p
            variants={Pvariants}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="italic font-light text-black text-2xl md:text-[64px] md:max-w-[1135px] md:leading-[96px] md:tracking-[-2%]"
          >
            “Worry no more, we&apos;ve got you!”
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default InfoChat;
