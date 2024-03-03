import { Button } from "@mui/material";
import ProjectStatsContainer from "../components/project-stats-container";
import Property1Default from "../components/property1-default";
import TechnologiesDefault from "../components/technologies-default";

const Desktop = () => {
  return (
    <div className="w-full relative bg-black h-[6051px] overflow-hidden text-left text-37xl text-white font-dm-sans">
      <div className="absolute top-[0px] left-[0px] w-[1440px] flex flex-row items-center justify-between py-[30px] px-[100px] box-border text-[12px] font-inter">
        <div className="w-[211.7px] relative h-[58px]">
          <img
            className="absolute top-[0px] left-[0px] w-[58px] h-[58px]"
            alt=""
            src="/group-9.svg"
          />
          <div className="absolute h-[78.1%] w-[66.23%] top-[10.86%] right-[0%] bottom-[11.03%] left-[33.77%]">
            <img
              className="absolute h-[31.35%] w-[97.72%] top-[68.43%] right-[1.5%] bottom-[0.22%] left-[0.78%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/techworks.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[140.2px] h-[25.6px]"
              alt=""
              src="/digital.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0px_32px]">
          <Button
            className="relative"
            disableElevation={true}
            color="primary"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            Services
          </Button>
          <Button
            className="relative opacity-[0.8]"
            disableElevation={true}
            color="primary"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            Niche Technologies
          </Button>
          <Button
            className="relative opacity-[0.8]"
            disableElevation={true}
            color="primary"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            Industries
          </Button>
          <Button
            className="relative opacity-[0.8]"
            disableElevation={true}
            color="primary"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            portfolio
          </Button>
          <Button
            className="relative opacity-[0.8]"
            disableElevation={true}
            color="primary"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px" }}
          >
            Company
          </Button>
        </div>
        <Button
          className="w-[147px]"
          disableElevation={true}
          color="primary"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px", width: 147 }}
        >
          Talk to us
        </Button>
        <div className="hidden flex-row items-center justify-start gap-[0px_10px]">
          <div className="w-[30px] relative h-[30px]">
            <img
              className="absolute h-[66.67%] w-[66.67%] top-[33.33%] right-[33.33%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/shoppingcart.svg"
            />
            <div className="absolute top-[0px] left-[10px] rounded-xl bg-dashboard-text overflow-hidden flex flex-col items-start justify-start py-0.5 px-1.5">
              <div className="relative leading-[16px] font-semibold">2</div>
            </div>
          </div>
          <div className="w-[31px] relative text-[16px] leading-[16px] font-semibold font-roboto text-black hidden">
            Cart
          </div>
        </div>
      </div>
      <div className="absolute top-[216px] left-[calc(50%_-_635px)] rounded-11xl bg-gray-100 w-[1240px] flex flex-col items-center justify-center py-20 px-[246px] box-border gap-[30px_0px] text-center">
        <div className="w-[782px] relative leading-[120%] capitalize font-medium inline-block z-[0]">
          Ready to Build Something Amazing Together?
        </div>
        <div className="w-[180px] rounded-177xl bg-primary flex flex-row items-center justify-center py-[18px] px-0 box-border z-[1] text-left text-lg">
          <div className="relative leading-[16px] font-medium">Contact Us</div>
        </div>
        <div className="w-[654px] absolute !m-[0] bottom-[-91px] left-[263px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#2575fc_11.38%,_rgba(37,_117,_252,_0))] [filter:blur(234px)] h-[534px] opacity-[0.2] z-[2]" />
      </div>
      <header className="absolute top-[1475px] left-[-15px] w-[1440px] flex flex-row items-center justify-between py-[120px] px-[100px] box-border text-left text-37xl text-white font-dm-sans">
        <div className="flex flex-col items-start justify-start gap-[40px_0px]">
          <div className="flex flex-col items-start justify-start relative gap-[24px_0px]">
            <div className="w-[688px] relative leading-[140%] font-medium inline-block z-[0]">
              <p className="m-0">{`Get a Complete `}</p>
              <p className="m-0">Strategy of UI/UX Design</p>
            </div>
            <div className="w-[688px] relative text-xl leading-[140%] inline-block opacity-[0.8] z-[1]">
              Crafting digital experiences people love through strategic
              human-centered design. We blend art, science and technology to
              create products users connect with. 
            </div>
            <div className="w-[402px] absolute !m-[0] top-[201px] left-[510px] rounded-[50%] bg-color-1 [filter:blur(234px)] h-[330px] opacity-[0.2] z-[2]" />
          </div>
          <div className="flex flex-row items-start justify-start gap-[0px_30px]">
            <ProjectStatsContainer
              projectStats="100+ Projects Completed "
              engagementStatsText="50% Increase in User Engagement"
            />
            <ProjectStatsContainer
              projectStats="Fast Turnaround Time "
              engagementStatsText="Value on Investment "
            />
          </div>
          <div className="w-[200px] rounded-177xl bg-primary flex flex-row items-center justify-center py-[18px] px-0 box-border">
            <Button
              className="relative"
              disableElevation={true}
              color="primary"
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              Let’s work together
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px_0px] text-[32px]">
          <div className="relative leading-[140%] font-medium">
            Advantages of UI/UX Design
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px_0px] text-3xl">
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[140%] opacity-[0.8]">
                <ul className="m-0 font-inherit text-inherit pl-[29px]">
                  <li>Increased conversions </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[140%] opacity-[0.8]">
                <ul className="m-0 font-inherit text-inherit pl-[29px]">
                  <li>Heightened user engagement </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[140%] opacity-[0.8]">
                <ul className="m-0 font-inherit text-inherit pl-[29px]">
                  <li>Reduced churn </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[140%] opacity-[0.8]">
                <ul className="m-0 font-inherit text-inherit pl-[29px]">
                  <li>Stronger brand image </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[140%] opacity-[0.8]">
                <ul className="m-0 font-inherit text-inherit pl-[29px]">
                  <li>Lower development costs </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[140%] opacity-[0.8]">
                <ul className="m-0 font-inherit text-inherit pl-[29px]">
                  <li>Faster product iterations </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[140%] opacity-[0.8]">
                <ul className="m-0 font-inherit text-inherit pl-[29px]">
                  <li>Useful customer insights </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[140%] opacity-[0.8]">
                <ul className="m-0 font-inherit text-inherit pl-[29px]">
                  <li>Competitive differentiation </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="absolute top-[738px] left-[-15px] flex flex-col items-start justify-start py-[120px] px-[100px] gap-[60px_0px]">
        <div className="relative leading-[140%] font-medium">
          Our Process of UI/UX Design
        </div>
        <Property1Default property1DefaultPosition="relative" />
      </div>
      <div className="absolute top-[2199px] left-[0px] flex flex-col items-start justify-start py-[120px] px-[100px] gap-[80px_0px]">
        <div className="w-[1240px] flex flex-row items-center justify-between relative">
          <div className="relative leading-[140%] font-medium z-[0]">
            Tools we use
          </div>
          <div className="w-[703px] relative text-xl leading-[150%] inline-block shrink-0 opacity-[0.8] z-[1]">
            Empowered by a cutting-edge tech stack, our solutions are crafted
            with precision and innovation. From robust backend frameworks to
            seamless frontend experiences, we leverage the latest technologies
            for unparalleled digital excellence.
          </div>
          <div className="w-[402px] absolute !m-[0] top-[-53px] left-[218px] rounded-[50%] bg-color-1 [filter:blur(234px)] h-[330px] opacity-[0.2] z-[2]" />
        </div>
        <TechnologiesDefault technologiesDefaultPosition="relative" />
      </div>
    </div>
  );
};

export default Desktop;
