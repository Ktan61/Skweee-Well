import "@/styles/globals.css";
import { KoHo, Nunito } from "next/font/google";

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
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fontKoHo.style.fontFamily};
        }
        
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
