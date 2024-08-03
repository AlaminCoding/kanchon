const Title = ({ title }) => {
  return (
    <h2 className="text-[24px] font-medium text-white/60 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1] scale-50 group-hover:scale-100 group-hover:top-[120%] transition-all duration-500">
      {title}
    </h2>
  );
};

export default Title;
