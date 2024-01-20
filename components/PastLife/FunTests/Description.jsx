import Image from "next/image";
import Img1 from "@/public/funtests/img1.png";
import Img2 from "@/public/funtests/img2.png";
import Img3 from "@/public/funtests/img3.png";
import Img4 from "@/public/funtests/img4.png";

const Description = ({ selectedPics, selectHandler }) => {
  const items = [
    {
      itemNumber: 1,
      firstImg: {
        imgNumber: 1,
        img: Img1,
      },
      secImg: {
        imgNumber: 2,
        img: Img2,
      },
    },
    {
      itemNumber: 2,
      firstImg: {
        imgNumber: 1,
        img: Img3,
      },
      secImg: {
        imgNumber: 2,
        img: Img4,
      },
    },
    {
      itemNumber: 3,
      firstImg: {
        imgNumber: 1,
        img: Img1,
      },
      secImg: {
        imgNumber: 2,
        img: Img2,
      },
    },
    {
      itemNumber: 4,
      firstImg: {
        imgNumber: 1,
        img: Img3,
      },
      secImg: {
        imgNumber: 2,
        img: Img4,
      },
    },
    {
      itemNumber: 5,
      firstImg: {
        imgNumber: 1,
        img: Img1,
      },
      secImg: {
        imgNumber: 2,
        img: Img2,
      },
    },
    {
      itemNumber: 6,
      firstImg: {
        imgNumber: 1,
        img: Img3,
      },
      secImg: {
        imgNumber: 2,
        img: Img4,
      },
    },
    {
      itemNumber: 7,
      firstImg: {
        imgNumber: 1,
        img: Img1,
      },
      secImg: {
        imgNumber: 2,
        img: Img2,
      },
    },
    {
      itemNumber: 8,
      firstImg: {
        imgNumber: 1,
        img: Img3,
      },
      secImg: {
        imgNumber: 2,
        img: Img4,
      },
    },
  ];

  return (
    <div className="mycontainer">
      <p className="text-white text-2xl text-center">
        Choose your picture you feel most comfortable
      </p>
      <div className="mt-10 mb-20 space-y-5">
        {items.map((item) => (
          <div key={item.itemNumber}>
            <p className="text-white font-bold text-3xl">{item.itemNumber}</p>
            <div className="flex justify-center gap-10 flex-wrap">
              <Image
                src={item.firstImg.img}
                alt=""
                className={`rounded cursor-pointer ${selectedPics.map(
                  (el) =>
                    el.itemNumber === item.itemNumber &&
                    el.imgNumber === item.firstImg.imgNumber &&
                    "shadow-2xl border-2 border-gray-200"
                )}`}
                onClick={() =>
                  selectHandler(item.itemNumber, item.firstImg.imgNumber)
                }
              />
              <Image
                src={item.secImg.img}
                alt=""
                className={`rounded cursor-pointer ${selectedPics.map(
                  (el) =>
                    el.itemNumber === item.itemNumber &&
                    el.imgNumber === item.secImg.imgNumber &&
                    "shadow-2xl border-2 border-gray-200"
                )}`}
                onClick={() =>
                  selectHandler(item.itemNumber, item.secImg.imgNumber)
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
