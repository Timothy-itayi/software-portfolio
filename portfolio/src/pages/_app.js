import '../styles/index.css'
import '../styles/fonts.css'

export default function App({ Component, pageProps }) {

  return (

    <div className="bg-black">
    <Component {...pageProps} />;
     </div>
    
  );
 
}
