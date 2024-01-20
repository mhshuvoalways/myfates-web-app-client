import ArrowLeft from "@/public/ownerSaysCatelog/arrowLeft.svg";
import ArrowRight from "@/public/ownerSaysCatelog/arrowRight.svg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TextAnimation from "../Utils/TextAnimation";
import { useTranslation } from "next-i18next";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-white w-10 h-10 md:w-16 md:h-16 rounded-full shadow-2xl inline-flex justify-center items-center absolute right-12 md:right-20 -bottom-14 md:bottom-0 cursor-pointer z-10 prevarrow"
      onClick={onClick}
    >
      <Image src={ArrowLeft} alt="" />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-my-blue w-10 h-10 md:w-16 md:h-16 rounded-full shadow-2xl inline-flex justify-center items-center absolute right-0 -bottom-14 md:bottom-0 cursor-pointer z-10 nextarrow"
      onClick={onClick}
    >
      <Image src={ArrowRight} alt="" />
    </div>
  );
};

const Index = ({ home }) => {
  const { t } = useTranslation("ownersays");
  const ownersays = t("ownersays", { returnObjects: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div
      className={`ownersayscatelog ${home ? "bg-my-bg-pastel" : "bg-gray-50"}`}
    >
      <div className="mycontainer pt-16 sm:pt-28 pb-40">
        <div>
          <TextAnimation
            letters={[
              {
                letter: ownersays.title.split(" ")[0],
                delay: "0",
              },
              {
                letter: ownersays.title.split(" ")[1],
                delay: "0.10",
              },
            ]}
            className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
          />
          <TextAnimation
            letters={[
              {
                letter: ownersays.title2.split(" ")[0],
                delay: "0.20",
              },
              {
                letter: ownersays.title2.split(" ")[1],
                delay: "0.30",
              },
              {
                letter: ownersays.title2.split(" ")[2],
                delay: "0.40",
              },
            ]}
            className={
              "text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-4 font-semibold text-my-blue"
            }
          />
        </div>
        <div className="mt-20 relative">
          <Slider {...settings}>
            {ownersays.data.map((el, index) => (
              <div key={index}>
                <div className="flex gap-10 md:gap-20 justify-between px-1 flex-wrap md:flex-nowrap">
                  <Image
                    src={el.image}
                    alt=""
                    className="w-full md:w-6/12 rounded-3xl object-cover h-[500px]"
                    width={400}
                    height={500}
                  />
                  <div className="w-full md:w-6/12 space-y-7">
                    <Image
                      src={el.icon}
                      alt=""
                      className="w-16 h-16 rounded-full"
                      width={100}
                      height={100}
                    />
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide leading-snug text-gray-700 font-gabarito">
                      {el.des}
                    </p>
                    <div>
                      <p className="text-2xl font-semibold text-my-blue">
                        {el.name}
                      </p>
                      <p className="text-xl">{el.shortDes}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Index;
