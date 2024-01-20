import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import TextAnimation from "../Utils/TextAnimation";
const ContentScroller = dynamic(() => import("./ContentScroller"), {
  ssr: true,
});

const StoreLinksExtras = () => {
  const { t } = useTranslation("convince");
  const titleConvince = t("title");
  const titleConvince2 = t("title2");
  const extrasData = t("extras", { returnObjects: true });

  return (
    <section className="body-padding body-y-padding">
      <div className="mycontainer">
        <TextAnimation
          letters={[
            {
              letter: titleConvince.split(" ")[0],
              delay: "0",
            },
            {
              letter: titleConvince.split(" ")[1],
              delay: "0.20",
            },
            {
              letter: titleConvince.split(" ")[2],
              delay: "0.40",
            },
          ]}
          className={"text-4xl md:text-5xl lg:text-6xl font-semibold"}
        />
        <TextAnimation
          letters={[
            {
              letter: titleConvince2,
              delay: "0.60",
            },
          ]}
          className={
            "text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-4 font-semibold text-my-blue"
          }
        />
      </div>
      <div className="mt-20" style={{ "--delay": "0.8s" }}>
        <ContentScroller list={extrasData} />
      </div>
    </section>
  );
};

export default StoreLinksExtras;
