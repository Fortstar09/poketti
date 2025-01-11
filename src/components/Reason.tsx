const Reason = () => {
  return (
    <div className="relative">
      <div className="bg-reasonbgLine bg-cover center w-full h-[650px] absolute z-10 top-[23.5%]"></div>
      <section className="py-[115px] lg:px-[60px] xl:px-[100px] bg-[#FAFAFA]">
        <div className="flexStart gap-[47px] relative z-20 flex-col">
          <div className="flex w-full">
            <div className="flexStart gap-4 flex-col max-w-[505px]">
              <div className="flexCenter gap-1">
                <p className="text-base text-primary font-normal">
                  Why choose Pocketti
                </p>
                <img src="icons/thinkEmoji.svg" alt="" />
              </div>
              <h2 className="text-[40px] font-medium leading-[48px] tracking-[-1%] text-black">
                Manage all your financial services within a single app
              </h2>
              <p className="text-base font-normal tracking-[-1%] text-grey">
                With our app, you can seamlessly access banking, payments, and
                investments. Simplify your financial life and stay in control
                with just a few taps.
              </p>
            </div>
          </div>
          <div className="grid grid-cols gap-x-5 gap-y-[31px]">
            <div className="reason-box col-span-2 row-start-1">
              <div className="max-w-[484px]">
                <h2 className="para24 text-black mb-2">Global Payment</h2>
                <p className="para text-grey">
                  Spend cross-border with ease and send money to your loved ones
                  overseas. Paying for international services are swift and
                  secure.
                </p>
              </div>
              <div>
                <img src="images/global.svg" alt="global img" />
              </div>
            </div>
            <div className="bg-emerald-400 reason-box row-start-1">
              <div>
                <img src="images/notification.svg" alt="notification img" />
              </div>
              <div className="max-w-[377px]">
                <h2 className="para24 text-black mb-2">Bills Payment</h2>
                <p className="para text-grey">
                  Pay your bills with ease using the app, pay for Spotify,
                  Netflix, Apple music, Amazon and so much more.
                </p>
              </div>
            </div>
            <div className="!bg-primary reason-box row-start-2">
              <div className="flexCenter gap-[47px] flex-col">
                <div className="flexCenter gap-[14px] flex-col px-6">
                  <div className="bg-white border border-[#F0F0F0] rounded-[8px] px-4 pb-4">
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
                <div className="max-w-[398px]">
                  <h2 className="para24 text-white mb-2">Spend Tracking</h2>
                  <p className="para text-white">
                    Say goodbye to waiting periods and delays as you
                    effortlessly transfer funds to friends, family, or vendors
                    quickly in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className="reason-box col-span-2 row-start-2">
              <div className="max-w-[726px]">
                <h2 className="para24 text-black mb-2">Spend Tracking</h2>
                <p className="para text-grey">
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
