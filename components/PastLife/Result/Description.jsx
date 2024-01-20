import Image from "next/image";
import SecondMsg from "@/public/pastlife/2.png";
import StarIcon from "@/public/pastlife/star.svg";
import LinkIcon from "@/public/pastlife/link.svg";
import ChatIcon from "@/public/pastlife/chat.svg";

const Description = () => {
  return (
    <div className="w-full mobile:max-w-[340px] mx-auto space-y-8">
      <Image src={SecondMsg} alt="" className="w-full rounded-xl" />
      <div className="border border-gray-600 rounded relative">
        <div className="flex items-center gap-5 absolute -top-[14px] left-[25%] bg-black">
          <Image src={StarIcon} alt="" />
          <p className="text-white font-semibold text-lg">Your past life</p>
          <Image src={StarIcon} alt="" />
        </div>
        <p className="text-white text-xl font-semibold py-7 text-center px-3">
          Incompetent seamstress
        </p>
      </div>
      <p className="font-gabarito text-white nanum-font text-lg bg-gray-900 rounded-lg py-7 px-2 text-center">
        You were born in the Middle Ages. Your name was John, and your
        occupation was an incompetent seamstress. Your greatest sins were greed
        and lying. He exaggerated his abilities and took money from people, but
        he couldnt even make a single proper piece of clothing. Nevertheless,
        they cheated by taking the money. The reason you are having financial
        difficulties today is because of greed and unfulfilled promises from
        your past lives.
        <br /> The way to atone for your sins is honesty and sincerity. First,
        face yourself honestly and find a job that suits your skills. And do
        your best at it. Second, dont lie. Tell people the truth, and make sure
        you do what you promise. Things wont get better in an instant, but
        little by little things will start to change.
      </p>
      <div className="border border-gray-600 rounded relative">
        <div className="flex items-center gap-5 absolute -top-[14px] left-[20%] bg-black">
          <Image src={StarIcon} alt="" />
          <p className="text-white font-semibold text-lg">To gain indulgence</p>
          <Image src={StarIcon} alt="" />
        </div>
        <p className="text-white text-lg font-semibold py-7 px-3 text-center">
          <small className="text-[#6446ff] text-lg">
            Find the stubborn chef
          </small>{" "}
          and exchange images from your past life. That image will become your
          talisman.
        </p>
      </div>
      <p className="border border-gray-600 my-5"></p>
      <div>
        <p className="text-white text-center font-semibold">
          Share with friends
        </p>
        <div className="flex justify-center items-center gap-5 sm:gap-10 mt-5">
          <div className="cursor-pointer">
            <div className="bg-[#6446ff] w-12 h-12 flex justify-center items-center rounded-full">
              <Image src={LinkIcon} alt="" className="w-5" />
            </div>
            <p className="text-center text-gray-400 mt-2">Copy Link</p>
          </div>
          <div className="cursor-pointer">
            <div className="bg-[#FEE500] w-12 h-12 flex justify-center items-center rounded-full">
              <Image src={ChatIcon} alt="" className="w-5" />
            </div>
            <p className="text-center text-gray-400 mt-2">kakaotalk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
