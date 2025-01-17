import { MarqueeDemo } from "./MarqueeDemo";

const Testimonials = () => {
  return (
    <section className="bg-[#fafafa]">
      <div className="flexStart gap-2 flex-col pt-[70px] pb-[33px] lg:px-14 px-5 xl:px-[100px]">
        <div className="flexCenter gap-1">
          <p className="text-base font-normal text-primary">Testimonials</p>
          <img src="icons/mingcute_chat-2-fill.svg" alt="" />
        </div>
        <h2 className="max-w-[505px] text-3xl lg:text-[40px] font-medium lg:leading-[48px] lg:tracking-[-1%] text-black">
          Words on the street says we are the best out there
        </h2>
      </div>
      <div className="bg-reasonbgLine bg-center bg-cover pt-[99px] pb-[67px]">
        <MarqueeDemo />
      </div>
    </section>
  );
};

export default Testimonials;
