import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import setAuthToken from "../utils/setAuthToken";
import { Provider } from "react-redux";
import store from "../store";
import Loading from "@/components/Loading/ClickedLoading";
import Notify from "@/components/Notify";
import "@/styles/external.css";
import "@/styles/globals.css";
import "@/styles/responsive.css";

function App({ Component, pageProps }) {
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <Provider store={store}>
      <Head>
        <title>MyFates Future Connection</title>
      </Head>
      <div>
        <Loading />
        <Notify />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default appWithTranslation(App);
