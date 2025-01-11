import { motion } from "framer-motion";
import Button from "./ui/Button";

const navVariants = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  return (
    <motion.nav
      className="px-20 py-5 flexBetween"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <img src="icons/webLogo.svg" alt="logo" />
      <div className="flexCenter gap-20">
        <ul className="flexCenter gap-8 ">
          <li className="font-aeonik font-medium text-base text-grey">
            <a href="">Documentations</a>
          </li>
          <li className="font-aeonik font-medium text-base text-grey">
            <a href="">Features</a>
          </li>
          <li className="font-aeonik font-medium text-base text-grey">
            <a href="">Support</a>
          </li>
        </ul>
        <Button text="Download App" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
