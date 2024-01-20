import { useState } from "react";
import Banner from "../Banner";
import Description from "./Description";
import Button from "../Button";

const Index = () => {
  const [selectedPics, setSelectedPics] = useState([]);

  const selectHandler = (itemNumber, imgNumber) => {
    const selectedPicIndex = selectedPics.findIndex(
      (pic) => pic.itemNumber === itemNumber
    );

    if (selectedPicIndex !== -1) {
      if (selectedPics[selectedPicIndex].imgNumber === imgNumber) {
        setSelectedPics((prevSelectedPics) =>
          prevSelectedPics.filter(
            (pic) => pic !== selectedPics[selectedPicIndex]
          )
        );
      } else {
        setSelectedPics((prevSelectedPics) => [
          ...prevSelectedPics.filter(
            (pic) => pic !== selectedPics[selectedPicIndex]
          ),
          { itemNumber, imgNumber },
        ]);
      }
    } else {
      setSelectedPics((prevSelectedPics) => [
        ...prevSelectedPics,
        { itemNumber, imgNumber },
      ]);
    }
  };

  return (
    <>
      <Banner />
      <div className="bg-black py-10">
        <Description
          selectedPics={selectedPics}
          selectHandler={selectHandler}
        />
        <Button
          value="Go to draw the past life card"
          seletGender={selectedPics.length}
          nextPath={selectedPics.length && "/past-life/what-happens"}
        />
      </div>
    </>
  );
};

export default Index;
