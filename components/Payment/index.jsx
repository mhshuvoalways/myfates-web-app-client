import { useDispatch } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";
import Paypal from "./Paypal";
import { userUpdate } from "@/store/actions/userAction";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { plan, price } = router.query;

  const paymentHandler = () => {
    const newObj = {};
    newObj.planType = plan.charAt(0).toUpperCase() + plan.slice(1);
    dispatch(userUpdate(newObj, router));
  };

  return (
    <div className="mycontainer my-20 flex justify-center gap-20 md:gap-10 flex-wrap md:flex-nowrap items-center">
      <div className="w-10/12 md:w-6/12">
        <Image src="/payment/payment.avif" alt="" width={500} height={500} />
      </div>
      <div className="w-10/12 md:w-6/12">
        <Paypal paymentHandler={paymentHandler} plan={plan} price={price} />
      </div>
    </div>
  );
};

export default Index;
