import Button from "./ui/Button";

const Documentation = () => {
  return (
    <section className="py-10 px-5  lg:py-[120px] lg:px-14 xl:px-[100px] mb-10 lg:mb-[86px]">
      <div className="flex flex-col justify-center lg:items-center  lg:flex-row gap-10  xl:gap-[125px]">
        <div className="flexStart flex-col gap-8">
          <div className="flexStart flex-col gap-4">
            <div className="flexCenter gap-1">
              <p className="text-base font-normal text-primary">
                Documentation
              </p>
              <img src="icons/icon-park-solid_folder-code.svg" alt="" />
            </div>
            <h2 className="max-w-[505px] text-3xl md:text-[40px] font-medium md:leading-[48px] md:tracking-[-1%] text-black">
              Powerful payments APIs for product teams
            </h2>
            <p className="text-grey para max-w-[505px]">
              Our developer guide helps developers learn how to build amazing
              payment experiences with Pocketti's APIs. Pocketti provides
              generic, low-level, secure, and PCI-compliant RESTful APIs which
              allow you to accept and make payments.
            </p>
            <div className="mt-1">
              <Button text="See documentations" />
            </div>
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
