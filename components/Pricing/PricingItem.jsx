import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import TickPhoto from "@/public/pricing/tick.svg";
import ArrowDownBlue from "@/public/pricing/arrowDownBlue.svg";

const PricingItem = ({ pricingObj, pricingBtn, includes, moneysign }) => {
  const [itemExpand, setItemExpand] = useState(false);
  const { id, title, description, planTitle, inclueds, timeline } = pricingObj;

  const router = useRouter();
  const userReducer = useSelector((store) => store.userReducer);

  const clickHandler = (plan, price) => {
    router.push(`/payment?plan=${plan}&price=${price}`);
  };

  const planType = userReducer.user?.subscriptionPlan?.planType;

  return (
    <Fade key={id}>
      <div className="space-y-5 bg-white rounded-xl shadow p-5 min-w-full sm:min-w-[280px] max-w-[320px]">
        <div>
          {title === "Premium" || title === "プレミアム" ? (
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-1">
                <p className="text-3xl font-semibold">{title}</p>
                {planType === title && <p className="text-sm">(current)</p>}
              </div>
              <div className="flex gap-1 bg-green-100 p-1 rounded-full mt-1.5 w-8/12 justify-center">
                <Image src={TickPhoto} alt="" className="" />
                <small className="text-green-700 font-semibold">
                  Recommended
                </small>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <p className="text-3xl font-semibold">{title}</p>
              {planType === title && <p className="text-sm">(current)</p>}
            </div>
          )}
          <p className="text-lg text-gray-500 mt-2">{description}</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-2xl font-semibold">{`${moneysign}${planTitle}`}</p>
          <p>{timeline}</p>
        </div>
        {title === "Premium Max" || title === "プレミアムMax" ? (
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`border border-gray-400 py-2 rounded font-semibold text-center w-full bg-gray-500 cursor-not-allowed text-white capitalize`}
            disabled
          >
            {pricingBtn.soldout}
          </motion.button>
        ) : (
          <motion.button
            onClick={() => clickHandler(title.toLowerCase(), planTitle)}
            whileTap={{ scale: 0.9 }}
            className={`border border-gray-400 py-2 rounded font-semibold text-center w-full bg-my-blue text-white capitalize`}
          >
            {pricingBtn.normal}
          </motion.button>
        )}
        <div className="bg-gray-50 rounded-b-xl py-2 block md:hidden">
          <div
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => setItemExpand(!itemExpand)}
          >
            <p className="text-my-blue text-lg font-semibold">
              {itemExpand ? pricingBtn.less : pricingBtn.view}
            </p>
            <motion.div
              animate={{ rotate: itemExpand ? 180 : 0 }}
              clclassName="mt-1"
            >
              <Image src={ArrowDownBlue} alt="" />
            </motion.div>
          </div>
        </div>
        <div className={`block ${itemExpand ? "block" : "hidden md:block"}`}>
          <hr />
          <div className="mt-5">
            <p className="font-semibold text-gray-600 text-xl">{includes}:</p>
            <div className="space-y-2 mt-2">
              {inclueds.map((item) => (
                <div className="flex gap-2" key={item}>
                  <Image src={TickPhoto} alt="" />
                  <p
                    className={
                      item === "Doctor’s Full Analysis once a month" ||
                      item === `Doctor’s Full Analysis twice a month` ||
                      item === `Doctor’s Q&A` ||
                      item === `Maximum Details` ||
                      item === "ドクターによる月2回の完全分析" ||
                      item === "医師によるQ&A" ||
                      item === "最大限の詳細" ||
                      item === "ドクターによる月1回の完全分析"
                        ? "text-[#B8621B]"
                        : "text-gray-600"
                    }
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PricingItem;
