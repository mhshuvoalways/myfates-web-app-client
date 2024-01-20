import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = ({ paymentHandler }) => {
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
              plan_id: "P-4233795683088472FMVDGYMA",
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
