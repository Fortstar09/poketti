import BoxReveal from "./ui/box-reveal";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-herobgLine bg-white mb-4 lg:mb-16 bg-cover bg-center">
      <div className="flexBetween flex-col lg:flex-row gap-y-10 px-5 py-20 lg:px-[100px] lg:py-[120px]">
        <div className="flexStart flex-col gap-8">
          <div className="flexCenter flex-col gap-4 w-full lg:max-w-[600px]">
            <BoxReveal boxColor={"#301A11"} duration={1.5}>
              <h1 className="text-4xl lg:text-[64px] text-black font-bold lg:leading-[76.8px]">
                Simplify digital payments and send money effortlessly
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#301A11"} duration={1.5}>
              <p className="para text-grey">
                Streamline financial transactions with our user-friendly
                platform, making payments a breeze and show love by sending
                funds securely and swiftly to your cherished ones.
              </p>
            </BoxReveal>
          </div>
          <BoxReveal boxColor={"#301A11"} duration={1.5}>
            <div className="flexCenter py-3 px-4 gap-4 bg-[#FFECE7] border border-stroke rounded md:rounded-2xl">
              <motion.img
                whileHover={{ scale: 1.8 }}
                src="icons/hero-qr.svg"
                alt="qr-code"
                className="p-[5px] border border-white bg-[#FFAA85] rounded"
              />
              <div className="flexCenter flex-col gap-2">
                <p className="para md:para18 text-grey">
                  Scan to Download Pocketti App
                </p>
                <div className="md:flexCenter hidden gap-3">
                  <img src="icons/play-store.svg" alt="" />
                  <img src="icons/apple-store.svg" alt="" />
                </div>
              </div>
            </div>
          </BoxReveal>
        </div>
        <div className="relative">
          <div className="heroImg bg-heroBg bg-cover bg-center rounded-[20px] border border-[#EFD654] w-full lg:w-[457px]">
            <img
              src="images/hero-img.png"
              alt="hero-image"
              className="md:px-4 md:pb-6 rounded"
            />
          </div>
          <Alert name="slime" className="bottom-16 -right-10" />
          <Alert name="jade" className="top-36 -left-40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const alertVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
  animateOne: {
    y: [0, 30],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
};

interface AlertProps {
  name: string;
  className: string;
}

const Alert = ({ name, className }: AlertProps) => {
  return (
    <motion.div
      variants={alertVariant}
      initial="hidden"
      animate="visible"
      // animate="animateOne"
      className={`md:flexCenter gap-2 absolute ${className} hidden py-2 px-4 bg-white border cursor-pointer border-[#DDDDDDDD] rounded-[8px]`}
    >
      <img src="icons/check-circle.svg" alt="" />
      <div className="flexStart flex-col w-[150px]">
        <p className="text-grey1 text-[15px] font-medium leading-[22.5px] tracking-[-2%]">
          Money received
        </p>
        <p className="text-grey text-[13px] font-medium leading-[19.5px] tracking-[-2%]">
          <span className="text-[#00E484]">@{name}</span> sent you $1000
        </p>
      </div>
    </motion.div>
  );
};
