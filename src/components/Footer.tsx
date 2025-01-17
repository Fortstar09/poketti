const socials = [
  {
    name: "Facebook",
    link: "#",
  },
  {
    name: "Instagram",
    link: "#",
  },
  {
    name: "LinkedIn",
    link: "#",
  },
  // {
  //   name: "X(Twitter)",
  //   link: "#",
  // },
];

const Footer = () => {
  return (
    <footer className="pt-20 px-5 xl:px-[100px] lg:px-14 pb-[100px]">
      <div className="flexCenter gap-10 lg:gap-20 flex-col">
        <div className="flex w-full justify-between lg:items-center items-start gap-4 lg:gap-0 flex-col lg:flex-row">
          <img src="icons/webLogo.svg" alt="logo" />
          <div className=" flex justify-center items-start gap-4 md:gap-0 flex-col md:flexBetween md:flex-row w-full lg:flexCenter  lg:gap-[120px]">
            <ul className="flexCenter gap-4 lg:gap-8">
              <li className="font-aeonik font-medium text-base text-[#5e6c84]">
                <a href="">Documentations</a>
              </li>
              <li className="font-aeonik font-medium text-base text-[#5e6c84]">
                <a href="">Features</a>
              </li>
              <li className="font-aeonik font-medium text-base text-[#5e6c84]">
                <a href="">Support</a>
              </li>
            </ul>
            <div className="flexCenter gap-5">
              {socials.map((social, index) => (
                <div key={index} className="flexCenter gap-1">
                  <img src="icons/star.svg" alt={social.name} />
                  <a href={social.link} className="para text-grey">
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-between gap-4 items-start md:items-center flex-col md:flex-row w-full">
          <div className="flexCenter gap-[13px]">
            <img src="icons/star.svg" alt="logo" />
            <p className="para text-grey">
              Copyright © 2024 Pocketti. All rights reserved.
            </p>
          </div>
          <div className="flexStart gap-8">
            <div className="bg-primary px-2 md:px-4 py-[6px] md:py-3 rounded-[8px] flexCenter gap-2">
              <img src="icons/android-fill.svg" alt="" />
              <p className="para text-white">Android</p>
            </div>
            <div className="bg-primary px-2 md:px-4 py-[6px] md:py-3 rounded-[8px] flexCenter gap-2">
              <img src="icons/round-apple.svg" alt="" />
              <p className="para text-white">IOS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
