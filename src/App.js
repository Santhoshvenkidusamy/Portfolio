import { useState, useEffect } from 'react';
import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Proficient from './Proficient';
import Portfolio from './Portfolio';
import TemplateDemo from './Timeline';
import Toogle from './Toogle';
import 'primeicons/primeicons.css';
import Recommendation from './Recommendation';
import { ScrollTop } from 'primereact/scrolltop';

function App() {
const [dark, setDark] = useState(false)
const toogle = () =>{
  document.documentElement.classList.toggle('dark');
  setDark(!dark)
}
  return (
    
    <div className={'dark:bg-gray-900'}>
      <div class="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[100rem] flex-none flex justify-end">
          <picture className="w-full">
            <source srcSet="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif" type="image/avif" />
            <img src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png" alt="" className={`w-[120rem] flex-none max-w-none dark:block hidden`} decoding="async" />
          </picture>
          </div>
          </div>
        <Header toogle={toogle} dark={dark}/>
        <div className="md:mx-20">
        <About />
        <Proficient />
        <Toogle />
        <Portfolio />
      </div>
      <Recommendation />
      <Footer />
    </div>
  );
}

export default App;
