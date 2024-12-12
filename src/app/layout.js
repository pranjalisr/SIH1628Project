import localFont from "next/font/local";
import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";

import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'Punjab Government Employment Portal',
  description: 'Find your dream job in the Punjab Government sector',
}
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body
       className={`${inter.className}  transition-colors duration-300`}
      >
        {children}
        <div id="google_translate_element"></div>
        <script
          type="text/javascript"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        ></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
            }
          `,
        }} />
        <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
        <script src="https://files.bpcontent.cloud/2024/12/04/12/20241204121756-UPSYAMBU.js"></script>
        
    
      </body>
      
      </SessionWrapper>
      
    
    </html>
  );
}
