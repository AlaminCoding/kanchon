const ProjectButton = ({ bgColor, textColor, title, icon, className }) => {
  return (
    <button
      className={`inline-flex uppercase text-white font-medium tracking-widest items-center gap-[10px] px-[35px] py-[16px] font-jakarta rounded-[6px] ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span>{title}</span>
      {icon}
    </button>
  );
};

export default ProjectButton;
