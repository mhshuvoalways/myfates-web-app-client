import Image from "next/image";
import FormImg from "@/public/buildgrowth/form.png";
import PaymentIcon from "@/public/buildgrowth/payment.svg";
import AtlasIcon from "@/public/buildgrowth/atlas.svg";
import IncomingIcon from "@/public/buildgrowth/incoming.svg";
import ArrowRight from "@/public/buildgrowth/arrowRight.svg";

const index = () => {
  return (
    <div className="bg-[#FFFAF3] buildgrowth">
      <div className="border-l border-r px-5 py-32">
        <div className="mycontainer space-y-6 w-full">
          <p className="text-my-blue font-semibold text-xl">
            All you want to know
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            What about celebrities?
          </p>
          <p className="text-xl">
            {`For celebrities, our reports are particularly intriguing as they offer insights into their destinies, career paths, personal relationship, and potential future successes or challenges.`}
          </p>
        </div>
        <div className="flex md:justify-between justify-center mt-0 md:mt-20 gap-5 flex-wrap mycontainer">
          <div className="mt-10 md:mt-36 space-y-7 w-full md:w-[48%]">
            <div className="parent">
              <div className="relative pt-16 px-5 md:px-20 border-white border-4 rounded-t-xl buildforgrowth-img-bg">
                <Image src={FormImg} alt="" className="rounded-t-xl" />
                <p className="bg-gray-200 opacity-10 absolute inset-0"></p>
              </div>
              <div className="bg-white px-10 pt-10 space-y-3 shadow-xl rounded-b-xl buildforgrowth">
                <div className="bg-blue-50 flex items-center gap-2 w-32 text-center py-2 px-4 rounded">
                  <Image src={AtlasIcon} alt="" />
                  <p className="font-semibold">Atlas</p>
                </div>
                <p className="text-3xl font-semibold">Kylie Jenner</p>
                <p className="text-xl text-gray-600">
                  Entrepreneurial success and personal growth
                </p>
                <div className="last-element pt-8 cursor-pointer">
                  <p className="text-my-blue text-xl font-semibold pb-1">
                    Learn about atlas
                  </p>
                  <Image src={ArrowRight} alt="" />
                </div>
              </div>
            </div>
            <div className="parent">
              <div className="relative pt-16 px-5 md:px-20 border-white border-4 rounded-t-xl buildforgrowth-img-bg">
                <Image src={FormImg} alt="" className="rounded-t-xl" />
                <p className="bg-gray-200 opacity-10 absolute inset-0"></p>
              </div>
              <div className="bg-white px-10 pt-10 space-y-3 shadow-xl rounded-b-xl buildforgrowth">
                <div className="bg-blue-50 flex items-center gap-2 w-32 text-center py-2 px-4 rounded">
                  <Image src={PaymentIcon} alt="" />
                  <p className="font-semibold">Checkout</p>
                </div>
                <p className="text-3xl font-semibold">Taylor Swift</p>
                <p className="text-xl text-gray-600">
                  Artistic evolution and relational dynamics.
                </p>
                <div className="last-element pt-8 cursor-pointer">
                  <p className="text-my-blue text-xl font-semibold pb-1">{`Start with checkout`}</p>
                  <Image src={ArrowRight} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-7 w-full md:w-[48%]">
            <div className="parent">
              <div className="relative pt-16 px-5 md:px-20 border-white border-4 rounded-t-xl buildforgrowth-img-bg">
                <Image src={FormImg} alt="" className="rounded-t-xl" />
                <p className="bg-gray-200 opacity-10 absolute inset-0"></p>
              </div>
              <div className="bg-white px-10 pt-10 space-y-3 shadow-xl rounded-b-xl buildforgrowth">
                <div className="bg-blue-50 flex items-center gap-2 w-32 text-center py-2 px-4 rounded">
                  <Image src={PaymentIcon} alt="" />
                  <p className="font-semibold">Checkout</p>
                </div>
                <p className="text-3xl font-semibold">Harry Styles</p>
                <p className="text-xl text-gray-600">
                  Musical versatility and personal balance.
                </p>
                <div className="last-element pt-8 cursor-pointer">
                  <p className="text-my-blue text-xl font-semibold pb-1">
                    Try Payment Links
                  </p>
                  <Image src={ArrowRight} alt="" />
                </div>
              </div>
            </div>
            <div className="parent">
              <div className="relative pt-16 px-5 md:px-20 border-white border-4 rounded-t-xl buildforgrowth-img-bg">
                <Image src={FormImg} alt="" className="rounded-t-xl" />
                <p className="bg-gray-200 opacity-10 absolute inset-0"></p>
              </div>
              <div className="bg-white px-10 pt-10 space-y-3 shadow-xl rounded-b-xl buildforgrowth">
                <div className="bg-blue-50 flex items-center gap-2 w-32 text-center py-2 px-4 rounded">
                  <Image src={IncomingIcon} alt="" />
                  <p className="font-semibold">Checkout</p>
                </div>
                <p className="text-3xl font-semibold">Timothee Chalamet</p>
                <p className="text-xl text-gray-600">
                  Rising acting career and future potentials
                </p>
                <div className="last-element pt-8 cursor-pointer">
                  <p className="text-my-blue text-xl font-semibold pb-1">
                    Explore Invoicing
                  </p>
                  <Image src={ArrowRight} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
