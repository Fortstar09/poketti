import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Pvariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const Reason = () => {
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
    <div className="relative">
      <div className="md:bg-reasonbgLine bg-cover center w-full h-[650px] absolute z-10 top-[23.5%]"></div>
      <section
        ref={ref}
        className="py-20 px-5 md:py-[115px] lg:px-14 xl:px-[100px] bg-[#FAFAFA]"
      >
        <div className="flexStart gap-[47px] relative z-20 flex-col">
          <div className="flex w-full relative overflow-hidden">
            <div className="flexStart gap-4 overflow-hidden flex-col max-w-[505px]">
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
                <p className="text-base text-primary font-normal">
                  Why choose Pocketti
                </p>
                <img src="icons/thinkEmoji.svg" alt="" />
              </motion.div>
              <motion.h2
                variants={Pvariants}
                initial="hidden"
                animate={mainControls}
                transition={{
                  duration: 0.9,
                  easing: [0.17, 0.55, 0.55, 1],
                  delay: 0.8,
                }}
                className=" text-3xl md:text-[40px] font-medium md:leading-[48px] md:tracking-[-1%] text-black"
              >
                Manage all your financial services within a single app
              </motion.h2>
              <motion.p
                variants={Pvariants}
                initial="hidden"
                animate={mainControls}
                // whileInView={{ x: 75 }}
                transition={{
                  duration: 0.9,
                  easing: [0.17, 0.55, 0.55, 1],
                  delay: 0.8,
                }}
                className="text-base font-normal tracking-[-1%] text-grey"
              >
                With our app, you can seamlessly access banking, payments, and
                investments. Simplify your financial life and stay in control
                with just a few taps.
              </motion.p>
            </div>
          </div>
          <div className="grid grid-cols gap-x-0 md:gap-x-5 gap-y-8 md:gap-y-[31px]">
            <div className="reason-box col-span md:col-span-2 row-start-1">
              <div className=" w-[90%] md:max-w-[484px]">
                <h2 className="para18 lg:para24 text-black mb-2">
                  Global Payment
                </h2>
                <p className="para text-grey max-w[500px] mb:max-w-full">
                  Spend cross-border with ease and send money to your loved ones
                  overseas. Paying for international services are swift and
                  secure.
                </p>
              </div>
              <div>
                <img src="images/global.svg" alt="global img" />
              </div>
            </div>
            <div className="reason-box row-start-2 lg:row-start-2 xl:row-start-1">
              <div>
                <img src="images/notification.svg" alt="notification img" />
              </div>
              <div className="w-full md:max-w-[377px]">
                <h2 className="para18 lg:para24 text-black mb-2">
                  Bills Payment
                </h2>
                <p className="para text-grey max-w[500px] mb:max-w-full">
                  Pay your bills with ease using the app, pay for Spotify,
                  Netflix, Apple music, Amazon and so much more.
                </p>
              </div>
            </div>
            <div className="!bg-primary reason-box row-start-3 lg:row-start-2 xl:row-start-2">
              <div className="flexCenter gap-5 md:gap-[47px] flex-col">
                <div className="flexCenter gap-[14px] flex-col px-0  xl:px-6">
                  <div className="bg-white border border-[#F0F0F0] rounded-[8px] px-2 md:px-4 pb-4">
                    <h2 className="text-[14px] font-bold text-[#4F4F4F] pt-1 leading-6 tracking-[-1%]">
                      Payment link
                    </h2>
                    <div className="flex justify-center items-center p-2 rounded-[4px] bg-[#FFF2ED] gap-4">
                      <p className="text-[14px] text-clip overflow-hidden leading-[14px] max-w-[265px] tracking-[-1%] text-[#000000]">
                        0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE
                      </p>
                      <img
                        src="icons/copy_icon.svg"
                        alt=""
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flexCenter flex-col">
                    <img src="icons/qrcode_2.svg" alt="" className="p-[15px]" />
                    <p className="text-xs font-bold text-[#FFFFFFAB]">
                      Scan the Qr code to pay
                    </p>
                  </div>
                </div>
                <div className="w-full md:max-w-[398px]">
                  <h2 className="para18 lg:para24 text-white mb-2">
                    Spend Tracking
                  </h2>
                  <p className="text-sm md:para text-white max-w[500px] mb:max-w-full">
                    Say goodbye to waiting periods and delays as you
                    effortlessly transfer funds to friends, family, or vendors
                    quickly in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className="reason-box col-span-2 row-start-4 lg:row-start-3 xl:row-start-2">
              <div className="w-full md:max-w-[726px]">
                <h2 className="para18 lg:para24 text-black mb-2">
                  Spend Tracking
                </h2>
                <p className="text-sm md:para text-grey max-w[500px] mb:max-w-full">
                  Gain insights into your spending habits with our Spend
                  Tracking feature. Monitor your expenses, categorize
                  transactions, and set budget goals all within our
                  user-friendly platform.
                </p>
              </div>
              <div>
                <img src="images/chart.svg" alt="chart img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reason;
