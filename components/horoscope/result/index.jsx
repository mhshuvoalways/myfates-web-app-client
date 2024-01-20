import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import HoroscopeImg1 from "@/public/horoscope/1.png";
import HoroscopeImg2 from "@/public/horoscope/2.png";
import HoroscopeImg3 from "@/public/horoscope/3.png";
import { horoGet } from "@/store/actions/horoscopeAction";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const horoReducer = useSelector((store) => store.horoscopeReducer);

  useEffect(() => {
    if (!horoReducer.horoscope?.horoscope) {
      dispatch(horoGet());
    }
  }, [dispatch, horoReducer.horoscope?.horoscope]);

  return (
    <div className="mycontainer mt-10 mb-20">
      <div className="space-y-5">
        {router.query.type === "2024" && (
          <Image src={HoroscopeImg3} alt="" className="rounded-3xl" />
        )}
        {router.query.type === "2024love" && (
          <Image src={HoroscopeImg2} alt="" className="rounded-3xl" />
        )}
        {router.query.type === "2024finance" && (
          <Image src={HoroscopeImg1} alt="" className="rounded-3xl" />
        )}
        <p className="text-gray-600 leading-relaxed tracking-wide text-justify text-lg">{horoReducer.horoscope?.horoscope}</p>
      </div>
    </div>
  );
};

export default Index;
