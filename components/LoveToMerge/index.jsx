import TextAnimation from "../Utils/TextAnimation";
import ContentScroller from "./ContentScroller";
import { useTranslation } from "next-i18next";

const StoreLinksExtras = () => {
  const { t } = useTranslation("lovefates");
  const title1 = t("title");
  const extras = t("data", { returnObjects: true });

  return (
    <section className="body-padding body-y-padding">
      <div className="mycontainer">
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
              delay: "0.40",
            },
          ]}
          className={
            "text-4xl md:text-5xl lg:text-6xl font-semibold text-[#262A56]"
          }
        />
      </div>
      <div className="anim-fade-up mt-20" style={{ "--delay": "0.8s" }}>
        <ContentScroller list={extras} />
      </div>
    </section>
  );
};

export default StoreLinksExtras;
