import Banner from "./Banner";
import Description from "./Description";
import Button from "./Button";

const index = () => {
  return (
    <div>
      <Banner />
      <div className="bg-black py-10 px-5 min-h-[110vh]">
        <Description />
        <Button seletGender nextPath="/past-life/fun-tests" />
      </div>
    </div>
  );
};

export default index;
