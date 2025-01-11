const FAQ = () => {
  return (
    <section className="px-[100px] py-[100px]">
      <div className="flex flex-col gap-20">
        <div className="flexStart gap-2 flex-col">
          <div className="flexCenter gap-1">
            <p className="text-base font-normal text-primary">
              Frequently Asked Questions
            </p>
            <img src="icons/question-mark.svg" alt="" />
          </div>
          <h2 className="max-w-[505px] text-[40px] font-medium leading-[48px] tracking-[-1%] text-black">
            Discover answers to common questions about Pocketti
          </h2>
        </div>
        <div>
          <img src="images/convers.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
