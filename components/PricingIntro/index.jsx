import { useEffect } from "react";
import PricingItem from "../Pricing/PricingItem";
import TextAnimation from "../Utils/TextAnimation";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import notiAction from "@/store/actions/notiAction";
import { useTranslation } from "next-i18next";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { t } = useTranslation("pricing");
  const title1 = t("title");
  const title2 = t("title2");
  const includes = t("includes");
  const pricingBtn = t("pricingBtn", { returnObjects: true });
  const pricingObj = t("pricingObj", { returnObjects: true });
  const moneysign = t("moneysign");

  useEffect(() => {
    if (router.query.suggest === "payment") {
      dispatch(notiAction("Please make a payment to connect to the future"));
    }
  }, [dispatch, router.query.suggest]);

  return (
    <div className="storeLinksIntro relative">
      <div className="mycontainer flex justify-center items-center py-24">
        <div>
          <TextAnimation
            letters={[
              {
                letter: title1.split(" ")[0],
                delay: "0",
              },
              {
                letter: title1.split(" ")[1],
                delay: "0.10",
              },
            ]}
            className="text-4xl md:text-5xl lg:text-7xl"
            textCenter
          />
          <TextAnimation
            letters={[
              {
                letter: title2.split(" ")[0],
                delay: "0.30",
              },
              {
                letter: title2.split(" ")[1],
                delay: "0.40",
              },
              {
                letter: title2.split(" ")[2],
                delay: "0.50",
              },
            ]}
            className="text-4xl md:text-5xl lg:text-7xl font-semibold text-my-blue"
            textCenter
          />
          <div className="flex gap-5 justify-center flex-wrap mt-10">
            {pricingObj.map((el) => (
              <PricingItem
                key={el.id}
                pricingObj={el}
                pricingBtn={pricingBtn}
                includes={includes}
                moneysign={moneysign}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
