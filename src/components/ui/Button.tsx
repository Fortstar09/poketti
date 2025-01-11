const Button = ({ text }: { text: string }) => {
  return (
    <div className="px-6 py-3 rounded-[32px] bg-primary text-white text-base cursor-pointer">
      {text}
    </div>
  );
};

export default Button;
