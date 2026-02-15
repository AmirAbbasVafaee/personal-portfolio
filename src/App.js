import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
//import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ContactUs } from './components/contact_email';
import { PricingPlans } from './components/PricingPlans';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills/>
      <Projects/>
      <PricingPlans/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
