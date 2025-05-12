import Button from "./ui/Button";

const Action = () => {
  return (
    <section className="px-5 py-10 lg:px-14 lg:py-[100px] xl:p-[100px]">
      <div className="bg-actionBg bg-center bg-cover rounded-2xl md:rounded-[32px] px-5 py-10 md:px-10 md: xl:py-[85px] xl:px-[182px]">
        <div className="flexCenter flex-col gap-5 md:gap-[50px]">
          <div className="flexCenter flex-col gap-10">
            <div className="flexCenter flex-col gap-4">
              <h2 className="text-4xl md:text-[64px] w-full md:leading-[76.8px] md:tracking-[-1%] text-center text-white font-medium">
                Ready to enjoy a stress-free life
              </h2>
              <p className="max-w-[707px] para text-white text-center">
                Get a download link to download pocketti app on your Phone
                number or scan the Qr code to enjoy peace of mind and
                convenience like never before.
              </p>
            </div>
            <div className="relative w-full lg:w-[603px]">
              <input
                type="text"
                placeholder="Enter phone number"
                className="p-4 md:p-8 rounded-[72px] w-full bg-[#B1826F] text-white placeholder:text-white focus:outline-none focus:border-none focus:ring-0 text-sm md:text-base font-medium leading-6 tracking-[-2%]"
              />
              <div className="absolute top-2 md:top-1/4 right-2 md:right-5">
                <Button text="Send download link" />
              </div>
            </div>
          </div>
          <div className="flexCenter flex-row md:flex-row w-full lg:w-[876px] border-t border-[#EDEDED1F] pt-8 gap-5 md:gap-[100px]">
            <h2 className="text-white font-bold text-[20px] leading-[30px] tracking-[-1%]">
              Get Pocketti
            </h2>
            <div className="flexCenter gap-4 md:gap-8">
              <div className="p-[5px] md:p-[10px] rounded-[10px] cursor-pointer bg-[#FFAA85] flexCenter">
                <img src="icons/wallet.svg" alt="" />
              </div>
              <div className="p-[5px] md:p-[10px] rounded-[10px] cursor-pointer bg-[#FFAA85] flexCenter">
                <img src="icons/action-qr-code.svg" alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
