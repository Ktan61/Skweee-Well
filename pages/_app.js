import "@/styles/globals.css";
import { KoHo, Nunito } from "next/font/google";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from '../i18n/en.json';
import fr from '../i18n/fr.json';

const messages = {
  en,
  fr
}

function getDirection(locale) {
  return "1tr";
}

const fontKoHo = KoHo({
  weight: [ '200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

const fontNunito = Nunito({
  style: ['normal'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {

const { locale } = useRouter();

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fontKoHo.style.fontFamily}, Helvetica, Arial, sans-serif; 
        }
        
      `}</style>
      <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirection(locale)}/>
      </IntlProvider>
    </>
  );
}
