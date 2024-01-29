import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = ({ paymentHandler, plan, price }) => {
  return (
    <div className="mt-8">
      <PayPalScriptProvider
        options={{
          "client-id": process.env.PAYPAL_CLIENT_ID,
          vault: true,
          intent: "subscription",
        }}
      >
        <PayPalButtons
          createSubscription={(_data, actions) => {
            return actions.subscription.create({
              plan_id:
                (plan.toString() === "pro" &&
                  price === "2" &&
                  process.env.PAYPAL_PLAN_FIRST_ID) ||
                (plan.toString() === "premium" &&
                  price === "50" &&
                  process.env.PAYPAL_PLAN_SECOND_ID) ||
                (plan.toString() === "premium max" &&
                  price === "80" &&
                  process.env.PAYPAL_PLAN_THIRD_ID),
            });
          }}
          onApprove={(_data, _actions) => {
            return paymentHandler();
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypal;
