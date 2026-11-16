import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AudioVault from './components/AudioVault';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AudioVault />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
