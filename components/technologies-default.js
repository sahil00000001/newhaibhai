import { useMemo } from "react";

const TechnologiesDefault = ({ technologiesDefaultPosition }) => {
  const technologiesDefaultStyle = useMemo(() => {
    return {
      position: technologiesDefaultPosition,
    };
  }, [technologiesDefaultPosition]);

  return (
    <div
      className="w-[1239px] h-[200px] text-left text-lg text-white font-dm-sans"
      style={technologiesDefaultStyle}
    >
      <div className="absolute h-[71%] w-[87.33%] top-[0%] right-[12.67%] bottom-[29%] left-[0%] flex flex-row items-end justify-start gap-[0px_174px]">
        <div className="w-[140px] relative h-[140px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[140px] h-[140px] opacity-[0.1]" />
          <img
            className="absolute top-[15px] left-[31px] w-[76px] h-[76px] object-cover"
            alt=""
            src="/image-267@2x.png"
          />
          <div className="absolute top-[95px] left-[43px] w-[50px] h-[23px]">
            <div className="absolute top-[0px] left-[0px] capitalize">
              Figma
            </div>
          </div>
        </div>
        <div className="w-[140px] relative h-[140px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[140px] h-[140px] opacity-[0.1]" />
          <img
            className="absolute top-[20px] left-[34px] w-[71px] h-[71px] object-cover"
            alt=""
            src="/image-269@2x.png"
          />
          <div className="absolute top-[95px] left-[28px] w-[82px] h-[23px]">
            <div className="absolute top-[0px] left-[0px] capitalize">
              Adobe Xd
            </div>
          </div>
        </div>
        <div className="w-[140px] relative h-[142px]">
          <div className="absolute top-[2px] left-[0px] rounded-2xl bg-white w-[140px] h-[140px] opacity-[0.1]" />
          <img
            className="absolute top-[0px] left-[13px] w-[114px] h-[114px] object-cover"
            alt=""
            src="/image-271@2x.png"
          />
          <div className="absolute top-[97px] left-[34px] w-[71px] h-[23px]">
            <div className="absolute top-[0px] left-[0px] capitalize">
              Protopie
            </div>
          </div>
        </div>
        <div className="w-[140px] relative h-[140px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[140px] h-[140px] opacity-[0.1]" />
          <img
            className="absolute top-[28px] left-[42px] w-[55px] h-[55px] object-cover"
            alt=""
            src="/image-273@2x.png"
          />
          <div className="absolute top-[95px] left-[31px] w-[76px] h-[23px]">
            <div className="absolute top-[0px] left-[0px] capitalize">
              Balsamiq
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[70%] w-[87.33%] top-[30%] right-[0%] bottom-[0%] left-[12.67%] flex flex-row items-start justify-start gap-[0px_174px]">
        <div className="w-[140px] relative h-[140px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[140px] h-[140px] opacity-[0.1]" />
          <img
            className="absolute top-[18px] left-[35px] w-[71px] h-[71px] object-cover"
            alt=""
            src="/image-268@2x.png"
          />
          <div className="absolute top-[95px] left-[24px] w-[90px] h-[23px]">
            <div className="absolute top-[0px] left-[0px] capitalize">
              Photoshop
            </div>
          </div>
        </div>
        <div className="w-[140px] relative h-[140px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[140px] h-[140px] opacity-[0.1]" />
          <img
            className="absolute top-[29px] left-[31px] w-[79px] h-[49px] object-cover"
            alt=""
            src="/image-270@2x.png"
          />
          <div className="absolute top-[95px] left-[29px] w-[78px] h-[23px]">
            <div className="absolute top-[0px] left-[0px] capitalize">
              Illustrator
            </div>
          </div>
        </div>
        <div className="w-[140px] relative h-[140px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[140px] h-[140px] opacity-[0.1]" />
          <img
            className="absolute top-[28px] left-[42px] w-14 h-[52px] object-cover"
            alt=""
            src="/image-272@2x.png"
          />
          <div className="absolute top-[95px] left-[41px] w-[57px] h-[23px]">
            <div className="absolute top-[0px] left-[0px] capitalize">
              Sketch
            </div>
          </div>
        </div>
        <div className="w-[140px] relative h-[140px]">
          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-white w-[140px] h-[140px] opacity-[0.1]" />
          <img
            className="absolute top-[21px] left-[36px] w-[67px] h-[67px] object-cover"
            alt=""
            src="/image-274@2x.png"
          />
          <div className="absolute top-[95px] left-[38px] w-[63px] h-[23px]">
            <div className="absolute top-[0px] left-[0px] capitalize">
              Invision
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesDefault;
