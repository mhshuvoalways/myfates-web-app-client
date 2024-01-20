import { AnimatePresence, motion } from "framer-motion";
import parse from "html-react-parser";
import { useState } from "react";
import TextAnimation from "../Utils/TextAnimation";
import { useTranslation } from "next-i18next";

const Index = () => {
  const { t } = useTranslation("faq");
  const title = t("title");
  const faqItems = t("faqItems", { returnObjects: true });

  const [faqObj, setFaqObj] = useState(null);

  const clickHandler = (value) => {
    if (faqObj?.id !== value.id) {
      setFaqObj(value);
    } else {
      setFaqObj(null);
    }
  };

  return (
    <div className="mycontainer py-32">
      <TextAnimation
        letters={[
          {
            letter: title.split(" ")[0],
            delay: "0.25",
          },
          {
            letter: title.split(" ")[1],
            delay: "0.45",
          },
        ]}
        className={
          "text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-4 font-semibold text-my-blue text-center"
        }
        textCenter
      />
      <div className="mt-20">
        {faqItems.map((faq) => (
          <div key={faq.id} className="border-b py-10">
            <div
              className="flex justify-between gap-2 cursor-pointer items-center"
              onClick={() => clickHandler(faq)}
            >
              <p className="text-2xl font-semibold">{faq.faqTitle}</p>
              <div>
                {faqObj && faqObj.id === faq.id ? (
                  <motion.p
                    animate={{
                      rotate: 45,
                    }}
                    className="text-2xl font-semibold bg-gray-100 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
                  >
                    ＋
                  </motion.p>
                ) : (
                  <motion.p
                    initial={{ rotate: 90 }}
                    className="text-2xl font-semibold bg-gray-100 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
                  >
                    ＋
                  </motion.p>
                )}
              </div>
            </div>
            <AnimatePresence>
              {faqObj && faqObj.id === faq.id && (
                <motion.p
                  className="text-[21px] text-gray-600 pr-5"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 20 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  {parse(faqObj.faqDes)}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
