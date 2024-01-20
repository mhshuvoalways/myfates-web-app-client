import Efficient from "@/public/catelog/efficient.webp";
import Money from "@/public/catelog/money.webp";
import Standout from "@/public/catelog/standout.webp";
import Visible from "@/public/catelog/visible.webp";
import Image from "next/image";
import { Fade, Zoom } from "react-reveal";
import AnimationText from "../Utils/TextAnimation";
import { Element } from "react-scroll";

const index = () => {
  return (
    <div className="mycontainer mt-32">
      <div>
        <AnimationText
          letters={[
            { letter: "Catlog", delay: "0" },
            { letter: "supports", delay: "0.20" },
            { letter: "you", delay: "0.40" },
          ]}
          className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
        />
        <AnimationText
          letters={[
            { letter: "with", delay: "0.60" },
            { letter: "the", delay: "0.80" },
            { letter: "tools", delay: "1" },
            { letter: "to", delay: "1.20" },
          ]}
          className={
            "text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-4 font-semibold text-my-blue"
          }
        />
      </div>
      <Zoom top>
        <Element name="reports" className="mt-20 flex gap-6 justify-center flex-wrap">
          <div className="bg-my-cream rounded-xl px-10 lg:py-20 py-10 w-full lg:w-[48%] space-y-5">
            <Image src={Money} alt="" className="w-36" />
            <Fade bottom>
              <p className="text-2xl md:text-4xl font-semibold">Full Report</p>
              <p className="text-xl md:text-2xl mt-5">
                {`A complete overview of your life, offering insights into career, relationships, and personal growth`}
              </p>
            </Fade>
          </div>
          <div className="bg-my-cream rounded-xl px-10 lg:py-20 py-10 w-full lg:w-[48%] space-y-5">
            <Image src={Efficient} alt="" className="w-36" />
            <Fade bottom>
              <p className="text-2xl md:text-4xl font-semibold">Daily Report</p>
              <p className="text-xl md:text-2xl mt-5">
                {`Daily updates providing guidance and advice to align daily actions with your long-term goals`}
              </p>
            </Fade>
          </div>
          <div className="bg-my-cream rounded-xl px-10 lg:py-20 py-10 w-full lg:w-[48%] space-y-5">
            <Image src={Visible} alt="" className="w-36" />
            <Fade bottom>
              <p className="text-2xl md:text-4xl font-semibold">Love</p>
              <p className="text-xl md:text-2xl mt-5">
                {`Detailed analysis of your romantic relationships, focusing on compatibility and deeper connections.`}
              </p>
            </Fade>
          </div>
          <div className="bg-my-cream rounded-xl px-10 lg:py-20 py-10 w-full lg:w-[48%] space-y-5">
            <Image src={Standout} alt="" className="w-36" />
            <Fade bottom>
              <p className="text-2xl md:text-4xl font-semibold">Finance</p>
              <p className="text-xl md:text-2xl mt-5">
                {`Strategic financial advice for wealth management, investment, and long-term financial security.`}
              </p>
            </Fade>
          </div>
        </Element>
      </Zoom>
    </div>
  );
};

export default index;
