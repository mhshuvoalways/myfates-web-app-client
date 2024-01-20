import { useState } from "react";
import Banner from "../Banner";
import Description from "./Description";
import Button from "../Button";

const Index = () => {
  const [seletGender, setSelectGender] = useState("");

  return (
    <div>
      <Banner />
      <div className="bg-black pt-10 pb-28 mobile:py-10 px-5 h-full mobile:h-screen">
        <Description
          seletGender={seletGender}
          setSelectGender={setSelectGender}
        />
        <Button
          value="Go to draw the past life card"
          seletGender={seletGender}
          nextPath={seletGender && "/past-life/result"}
        />
      </div>
    </div>
  );
};

export default Index;
