import { useMemo } from "react";

const Property1Default = ({ property1DefaultPosition }) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  return (
    <div
      className="w-[1238px] h-[359px] text-left text-37xl text-color-1 font-dm-sans"
      style={property1DefaultStyle}
    >
      <div className="absolute h-[91.64%] w-[23.42%] top-[0%] right-[76.58%] bottom-[8.36%] left-[0%] rounded-11xl bg-gray-200 flex flex-col items-start justify-start p-[30px] box-border gap-[20px_0px]">
        <div className="w-[230px] flex flex-row items-center justify-between">
          <div className="relative capitalize font-medium">1</div>
          <img
            className="w-[70px] relative h-[70px] overflow-hidden shrink-0"
            alt=""
            src="/researchsvgrepocom-1-1.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px_0px] text-5xl text-white">
          <div className="relative leading-[140%] capitalize font-medium">
            Research
          </div>
          <div className="w-[230px] relative text-lg leading-[140%] inline-block opacity-[0.7]">
            We dive deep into your business goals and target users to uncover
            key insights that guide strategic design.
          </div>
        </div>
      </div>
      <div className="absolute h-[91.64%] w-[23.42%] top-[16.71%] right-[51.05%] bottom-[-8.36%] left-[25.53%] rounded-11xl bg-gray-200 flex flex-col items-start justify-start p-[30px] box-border gap-[20px_0px]">
        <div className="w-[230px] flex flex-row items-center justify-between">
          <div className="relative capitalize font-medium">2</div>
          <img
            className="w-[70px] relative h-[70px]"
            alt=""
            src="/group-143726396.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px_0px] text-5xl text-white">
          <div className="relative leading-[140%] capitalize font-medium">
            Wireframe
          </div>
          <div className="w-[230px] relative text-lg leading-[140%] inline-block opacity-[0.7]">
            Map out page layouts and user flows, prototyping critical
            touchpoints to refine and enhance the user journey. 
          </div>
        </div>
      </div>
      <div className="absolute h-[91.64%] w-[23.42%] top-[0%] right-[25.53%] bottom-[8.36%] left-[51.05%] rounded-11xl bg-gray-200 flex flex-col items-start justify-start p-[30px] box-border gap-[20px_0px]">
        <div className="w-[230px] flex flex-row items-center justify-between">
          <div className="relative capitalize font-medium whitespace-pre-wrap">{`3   `}</div>
          <img
            className="w-[70px] relative h-[56.9px]"
            alt=""
            src="/group-143726397.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px_0px] text-5xl text-white">
          <div className="relative leading-[140%] capitalize font-medium">
            Design
          </div>
          <div className="w-[230px] relative text-lg leading-[140%] inline-block opacity-[0.7]">
            Crafting aesthetically delightful and brand-aligned visual
            interfaces by breathing life into wireframes. 
          </div>
        </div>
      </div>
      <div className="absolute h-[91.64%] w-[23.42%] top-[16.71%] right-[0%] bottom-[-8.36%] left-[76.58%] rounded-11xl bg-gray-200 flex flex-col items-start justify-start p-[30px] box-border gap-[20px_0px]">
        <div className="w-[230px] flex flex-row items-center justify-between">
          <div className="relative capitalize font-medium">4</div>
          <img
            className="w-[70px] relative h-[62.9px]"
            alt=""
            src="/group-143726398.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[12px_0px] text-5xl text-white">
          <div className="relative leading-[140%] capitalize font-medium">
            Usability Testing
          </div>
          <div className="w-[230px] relative text-lg leading-[140%] inline-block opacity-[0.7]">
            Rigorously test designs with real users to identify friction points
            and iterate to create seamless, intuitive experiences.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
