import Image from "next/image";
import FirstMsg from "@/public/pastlife/1.png";

const Description = () => {
  return (
    <div className="w-full mobile:max-w-[340px] mx-auto space-y-5">
      <Image src={FirstMsg} alt="" className="w-full" />
      <p className="font-gabarito text-white nanum-font text-lg bg-gray-900 rounded-lg py-7 px-2 text-center">
        “Did you have a hard time today? What you are experiencing today is due
        to karma from your past life. “Hear about your past life and receive an
        amulet that will forgive your sins.”
      </p>
      <p className="text-gray-500 text-center text-xs">
        The information you enter will not be shared without your consent
        outside of using the Rutton service, and is protected by the privacy
        policy.
      </p>
    </div>
  );
};

export default Description;
