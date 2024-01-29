import Link from "next/link";
import { Fade } from "react-reveal";
import TextAnimation from "../Utils/TextAnimation";
import Button from "../common/Button";
import { useTranslation } from "next-i18next";

const Index = () => {
  const { t } = useTranslation("gswsl");
  const title1 = t("title");
  const title2 = t("title2");
  const secTitle = t("secTitle");
  const secTitle2 = t("secTitle2");
  const btn = t("btn");

  return (
    <div className={`py-16 bg-center bg-no-repeat gswsl flex items-center`}>
      <div className="mycontainer">
        <div className="w-full md:w-7/12 space-y-10">
          <div>
            <TextAnimation
              letters={[
                {
                  letter: title1.split(" ")[0],
                  delay: "0",
                },
                {
                  letter: title1.split(" ")[1],
                  delay: "0.20",
                },
                {
                  letter: title1.split(" ")[2],
                  delay: "0.30",
                },
                {
                  letter: title1.split(" ")[3],
                  delay: "0.40",
                },
              ]}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold"
            />
            <TextAnimation
              letters={[
                {
                  letter: title2.split(" ")[0],
                  delay: "0.50",
                },
                {
                  letter: title2.split(" ")[1],
                  delay: "0.60",
                },
                {
                  letter: title2.split(" ")[2],
                  delay: "0.70",
                },
              ]}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-my-blue"
            />
          </div>
          <Fade bottom>
            <div>
              <p className="text-2xl">{secTitle}</p>
              <p className="text-xl text-my-blue">{secTitle2}</p>
            </div>
            <Link href={"/pricing"}>
              <Button value={btn} className={"!bg-[#262A56]"} />
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Index;
