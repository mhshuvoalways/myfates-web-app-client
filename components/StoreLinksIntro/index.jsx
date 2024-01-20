import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TextAnimation from "../Utils/TextAnimation";
import StoreFrontWhatsApp from "@/public/storeLinks/storeFrontWhatsapp.png";
import ArrowRight from "@/public/storeLinks/arrowRightBlack.svg";

const Index = ({ titleText }) => {
  return (
    <div className="storeLinksIntro relative">
      <div className="mycontainer flex justify-center items-center text-center">
        <div>
          <div className="space-y-8 py-10 sm:py-20">
            {!titleText ? (
              <>
                <TextAnimation
                  letters={[
                    { letter: "Take", delay: "0" },
                    { letter: "Orders", delay: "0.20" },
                    { letter: "Via", delay: "0.40" },
                    { letter: "Chat", delay: "0.60" },
                  ]}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                />
                <TextAnimation
                  letters={[
                    { letter: "With", delay: "0.80" },
                    { letter: "One", delay: "1" },
                    { letter: "Link", delay: "1.20" },
                  ]}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-my-blue font-semibold"
                />
              </>
            ) : (
              <TextAnimation
                letters={[
                  { letter: titleText.split(" ")[0], delay: "0" },
                  { letter: titleText.split(" ")[1], delay: "0.20" },
                  { letter: titleText.split(" ")[2], delay: "0.30" },
                ]}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              />
            )}
            <div className="mt-10 flex gap-2 sm:gap-0 justify-center items-center flex-wrap">
              <Link href={"/pricing"}>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="border-gray-200 border-2 text-gray-200 py-2.5 font-semibold mybutton px-10 capitalize bg-black"
                >
                  Start your journey
                </motion.button>
              </Link>
              <div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="py-2.5 font-semibold hover:rounded-full transition-all rounded px-10 flex items-center gap-1 capitalize"
                >
                  <p className="text-gray-800">See our Reports</p>
                  <motion.div initial={{ rotate: -90 }}>
                    <Image src={ArrowRight} alt="" />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
          <Image src={StoreFrontWhatsApp} alt="" className="w-full pb-5" />
        </div>
      </div>
    </div>
  );
};

export default Index;
