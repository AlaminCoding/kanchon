const ProjectButton = ({ bgColor, textColor, title, icon, className }) => {
  return (
    <button
      className={`flex uppercase text-white font-bold tracking-widest items-center gap-[10px] px-[35px] py-[16px] font-sourcesans ${className}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <span>{title}</span>
      {icon}
    </button>
  );
};

export default ProjectButton;
