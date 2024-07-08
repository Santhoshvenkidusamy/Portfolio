
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
function App() {
  return (
    <div className='md:mx-20'>
      <Header />
      <About />
      <Proficient />
      <Toogle />
      <Portfolio/>
      {/* <Recommendation /> */}
      <Footer />
    </div>
  );
}

export default App;
