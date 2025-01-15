const moreInfo = [
  {
    title: "Super-fast",
    icon: "icons/bolt.svg",
    text: "We process transactions automatically in real-time, these transactions occur seamlessly and swiftly, transcending geographical boundaries and time zones",
  },
  {
    title: "Top-security",
    icon: "icons/lock-on.svg",
    text: "We use the highest standards of encryption to protect sensitive financial data. Your data is for you and you only. We will never sell your data.",
  },
  {
    title: "Budget control",
    icon: "icons/chart.svg",
    text: "We help you effectively manage your expenses and income, you can ensure that your financial resources are allocated wisely and in line with your priorities.",
  },
  {
    title: "24/7 customer care",
    icon: "icons/phone-call.svg",
    text: "Whether it's day or night, weekday or weekend, having access to round-the-clock customer support ensures that your needs are always met promptly and efficiently.",
  },
];

const MoreReason = () => {
  return (
    <section className=" bg-moreRbgLine bg-cover bg-center">
      <div className="py-20 px-5 md:py-[100px] lg:px-[60px] xl:px-[100px] flex flex-col lg:flex-row gap-8 xl:gap-[125px] ">
        <div className="flexStart gap-20 flex-col">
          <div className="flexStart gap-4 flex-col">
            <div className="flexCenter">
              <p className="text-base font-normal text-primary">
                More reasons to use Poketti
              </p>
              <img src="icons/smile.svg" alt="" />
            </div>
            <h2 className="w-full md:max-w-[505px] text-3xl md:text-[40px] font-medium md:leading-[48px] md:tracking-[-1%] text-black">
              Centralized and accessible hub for managing your finances with
              ease.
            </h2>
          </div>
          <div className="w-full lg:w-[610px] h-[380px] md:h-[470px] md:rounded-2xl lg:h-[570px] rounded bg-moreImg bg-center bg-cover relative lg:rounded-[32px]">
            <div className="absolute px-4 py-2 gap-1 w-fit bottom-5 left-2 flexCenter">
              <img src="icons/icon-park-solid_play.svg" alt="" />
              <p className="text-base font-medium leading-[19.2px] text-white">
                Play this video
                <span className="block">To see why we built Pocketti</span>
              </p>
            </div>
            <div className="absolute bg-[#FFFFFF33] px-4 py-2 gap-1 w-fit rounded-[32px] border border-white top-6 right-5 flexCenter">
              <img src="icons/ion_play.svg" alt="" />
              <p className="para18 text-white">Play video</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {moreInfo.map(({ title, icon, text }) => (
            <MoreItem key={title} title={title} icon={icon} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreReason;

const MoreItem = ({
  title,
  icon,
  text,
}: {
  text: string;
  icon: string;
  title: string;
}) => {
  return (
    <div className="flexStart flex-col gap-4">
      <img
        src={icon}
        alt=""
        className="p-2 bg-[#FCE6DD] ml-[10px] rounded-[8px]"
      />
      <div className="flex gap-2">
        <span className="w-[2px] h-[30px] rounded bg-primary"></span>
        <h2 className="text-[20px] font-normal leading-[30px] tracking-[-1%] text-black">
          {title}
        </h2>
      </div>
      <p className="para font-normal text-grey ml-[10px] max-w-[390px]">
        {text}
      </p>
    </div>
  );
};
