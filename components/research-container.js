import { useMemo, useEffect } from "react";

const ResearchContainer = ({
  prop,
  researchSvgrepoCom11,
  research,
  weDiveDeepIntoYourBusines,
  propRight,
  propLeft,
  propHeight,
  propOverflow,
  frameDivTop,
  frameDivBottom,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
      top: frameDivTop,
      bottom: frameDivBottom,
    };
  }, [propRight, propLeft, frameDivTop, frameDivBottom]);

  const researchSvgrepoCom11Style = useMemo(() => {
    return {
      height: propHeight,
      overflow: propOverflow,
    };
  }, [propHeight, propOverflow]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="absolute h-[91.64%] w-[23.42%] top-[0%] right-[76.58%] bottom-[8.36%] left-[0%] rounded-11xl bg-gray-200 flex flex-col items-start justify-start p-[30px] box-border gap-[20px_0px] [&.animate]:animate-[4s_ease_0s_infinite_normal_forwards_bounce-top] opacity-[1] text-left text-37xl text-color-1 font-dm-sans"
      data-animate-on-scroll
      style={frameDivStyle}
    >
      <div className="w-[230px] flex flex-row items-center justify-between">
        <div className="relative capitalize font-medium">{prop}</div>
        <img
          className="w-[70px] relative h-[70px] overflow-hidden shrink-0"
          alt=""
          src={researchSvgrepoCom11}
          style={researchSvgrepoCom11Style}
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-[12px_0px] text-5xl text-white">
        <div className="relative leading-[140%] capitalize font-medium">
          {research}
        </div>
        <div className="w-[230px] relative text-lg leading-[140%] inline-block opacity-[0.7]">
          {weDiveDeepIntoYourBusines}
        </div>
      </div>
    </div>
  );
};

export default ResearchContainer;
