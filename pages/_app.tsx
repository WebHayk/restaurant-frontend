import type { AppProps } from 'next/app';
import "@styles/main.scss";
import "@fontsource/poppins";
import {wrapper} from "@store/index";
import {useMainSelector} from "@store/selectors";
import {useEffect} from "react";
import staticArmenian from "@common/database/hy/static.json";
import staticRussian from "@common/database/ru/static.json";
import staticEnglish from "@common/database/en/static.json";
import useActions from "@hooks/useActions";

function App({ Component, pageProps }: AppProps) {

  let state = useMainSelector();
  let {setStaticDataAction, setLanguageAction} = useActions();

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      setLanguageAction("en");
    }
  }, [])

  useEffect(() => {
    switch (state.language) {
      case "hy":
        setStaticDataAction(staticArmenian);
        break;
      case "ru":
        setStaticDataAction(staticRussian);
        break;
      case "en":
        setStaticDataAction(staticEnglish);
        break;
      default:
        setStaticDataAction(staticEnglish);
    }
  }, [state.language])

  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
