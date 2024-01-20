import Image from "next/image";
import { motion } from "framer-motion";
import { Zoom } from "react-reveal";
import Img1 from "@/public/stayupdctlog/1.svg";
import Img2 from "@/public/stayupdctlog/2.svg";
import Img3 from "@/public/stayupdctlog/3.svg";
import ArrowRightBlue from "@/public/ownerSaysCatelog/arrowRightBlue.svg";
import ArrowRight from "@/public/storeLinks/arrowRight.svg";

const index = () => {
  return (
    <div className="mycontainer mt-32 py-10">
      <div className="flex justify-between gap-10 flex-wrap md:flex-nowrap">
        <div className="bg-my-bg-pastel p-7 md:p-14 rounded-3xl w-full md:w-6/12">
          <div className="bg-white w-24 h-24 flex justify-center items-center rounded-full">
            <Image src={Img1} alt="" />
          </div>
          <p className="text-4xl font-semibold mt-8">
            Stay updated <br /> with Catlog
          </p>
          <p className="text-2xl text-gray-600 mt-6">
            Read articles on business tips & <br /> updates to the catlog
            platform
          </p>
          <Zoom right>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="bg-gray-900 text-white py-3 font-semibold mybutton px-10 flex items-center gap-2 mt-10 md:mt-36"
            >
              <p className="text-white">Read Blog</p>
              <Image src={ArrowRight} alt="" />
            </motion.button>
          </Zoom>
        </div>
        <div className="w-full md:w-6/12 space-y-10">
          <div className="bg-my-bg-pastel p-7 md:p-14 rounded-3xl">
            <div className="bg-white w-16 h-16 flex justify-center items-center rounded-full">
              <Image src={Img2} alt="" />
            </div>
            <p className="text-2xl font-semibold mt-1">
              Got Questions? Find <br /> answers fast!
            </p>
            <Zoom right>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="font-gabarito text-lg font-semibold mt-8 flex items-center gap-2"
              >
                <p className="text-my-blue">Find Answers</p>
                <Image src={ArrowRightBlue} alt="" />
              </motion.button>
            </Zoom>
          </div>
          <div className="bg-my-bg-pastel p-7 md:p-14 rounded-3xl">
            <div className="bg-white w-16 h-16 flex justify-center items-center rounded-full">
              <Image src={Img3} alt="" />
            </div>
            <p className="text-2xl font-semibold mt-1">
              Got Questions? Find <br /> answers fast!
            </p>
            <Zoom right>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="font-gabarito text-lg font-semibold mt-8 flex items-center gap-2"
              >
                <p className="text-my-blue">Find Answers</p>
                <Image src={ArrowRightBlue} alt="" />
              </motion.button>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
