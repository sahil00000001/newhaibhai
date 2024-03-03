const ProjectStatsContainer = ({ projectStats, engagementStatsText }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[20px_0px] text-left text-5xl text-white font-dm-sans">
      <div className="flex flex-row items-center justify-center gap-[0px_14px]">
        <img className="w-5 relative max-h-full" alt="" src="/arrow-1.svg" />
        <div className="relative leading-[140%] font-medium opacity-[0.8]">
          {projectStats}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_14px]">
        <img className="w-5 relative max-h-full" alt="" src="/arrow-1.svg" />
        <div className="relative leading-[140%] font-medium opacity-[0.8]">
          {engagementStatsText}
        </div>
      </div>
    </div>
  );
};

export default ProjectStatsContainer;
