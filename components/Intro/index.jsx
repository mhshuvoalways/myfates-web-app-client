import { motion } from "framer-motion";
import Homebg from "@/public/intro/homebg.png";
import Image from "next/image";
import { Link as ScrollList } from "react-scroll";
import Link from "next/link";
import AnimationText from "../Utils/TextAnimation";
import ArrowRight from "@/public/storeLinks/arrowRight.svg";
import { useTranslation } from "next-i18next";

const Index = () => {
  const { t } = useTranslation("homeintro");
  const title1 = t("title");
  const description = t("description");
  const firstButton = t("firstButton");
  const secondButton = t("secondButton");

  return (
    <div className="pt-20 firstintro bg-cover">
      <div className="flex justify-center items-center mycontainer">
        <div className="space-y-8">
          <AnimationText
            className="text-[48px] leading-[56px] lg:text-[96px] lg:leading-[112px] font-semibold break-words text-white font-zilla-slab"
            textCenter
            letters={[
              {
                letter: title1.split(" ")[0],
                delay: "0.5",
              },
              {
                letter: title1.split(" ")[1],
                delay: "0.25",
              },
              {
                letter: title1.split(" ")[2],
                delay: "0.35",
              },
            ]}
          />
          <AnimationText
            className="text-[18px] lg:text-[20px] text-gray-200 font-semibold mr-[0.5rem] font-nanum-myeongjo"
            textCenter
            letters={[
              {
                letter: description.split(" ")[0],
                delay: "0.55",
              },
              {
                letter: description.split(" ")[1],
                delay: "0.65",
              },
              {
                letter: description.split(" ")[2],
                delay: "0.75",
              },
              {
                letter: description.split(" ")[3],
                delay: "0.75",
              },
              {
                letter: description.split(" ")[4],
                delay: "0.85",
              },
              {
                letter: description.split(" ")[5],
                delay: "0.95",
              },
            ]}
          />
          <div className="mt-10 flex gap-2 sm:gap-0 justify-center items-center flex-wrap">
            <Link href={"/pricing"}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="border-gray-200 border-2 text-gray-200 py-2.5 font-semibold mybutton px-10 capitalize"
              >
                {firstButton}
              </motion.button>
            </Link>
            <ScrollList to={"reports"} smooth spy>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="py-2.5 font-semibold hover:rounded-full transition-all rounded px-10 flex items-center gap-1 capitalize"
              >
                <p className="text-gray-200">{secondButton}</p>
                <motion.div initial={{ rotate: -90 }}>
                  <Image src={ArrowRight} alt="" />
                </motion.div>
              </motion.button>
            </ScrollList>
          </div>
          <Image src={Homebg} alt="" className="pt-20" />
        </div>
      </div>
    </div>
  );
};

export default Index;
