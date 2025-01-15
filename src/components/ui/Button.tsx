const Button = ({ text }: { text: string }) => {
  return (
    <div className="px-3 py-[6px] md:px-6 md:py-3 rounded-[32px] bg-primary text-white text-base cursor-pointer">
      {text}
    </div>
  );
};

export default Button;
