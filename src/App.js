import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from "./Components/Hero/Hero"
import Signup from './Components/Signup/Signup';
import Statistics from './Components/Statistics/Statistics';
import Clients from './Components/Clients/Clients';
import About from './Components/About/About';
import Testimonial from './Components/Testimonials/Testimonial';
import Benefits from './Components/Benefits/Benefits';
import Laurel from './Components/Laurel/Laurel';
import Blog from './Components/Blog/Blog';
import Filters from './Components/Filters/Filters';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Signup />
      <Statistics />
      <Clients />
      <About />
      <Testimonial />
      <Benefits />
      <Laurel />
      <Blog />
      <Filters />
      <Footer />
    </>
  );
}

export default App;
