const OtherProjectCard = ({ project }) => {
  return (
    <div className="bg-metal py-[40px] px-[18px] text-center">
      <h2 className="text-white font-rebond font-bold text-[18px]">
        {project.title}
      </h2>
      <p className="text-santa/60 font-sourcesans text-[16px] mt-[10px]">
        {project.description}
      </p>
      <div className="flex justify-center gap-[10px] mt-[20px]">
        {project.platforms.map((platform, index) => {
          return (
            <span
              key={index}
              className="text-santa font-sourcesans text-[12px] px-[12px] py-[5px] rounded-[40px] font-semibold border-[1.20px] border-santa"
            >
              {platform}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProjectCard;
