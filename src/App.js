import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Card from './components/Card';
import Main from './components/Main';
import Footer from './components/Footer';
import Hero from './components/Hero';
import { motion } from "framer-motion";
import ClickSpark from './ClickSpark';




function App() {
  return (

    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className='App'>

          <Navbar />
          <Hero />
          <Main />
          <Card />
          <Contact />
          <Footer />

          <a
            href="https://wa.me/6285624112024"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105"
            title="Hubungi via WhatsApp"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12.001 2.002c-5.523 0-10 4.477-10 10 0 1.762.467 3.451 1.349 4.938L2 22l5.196-1.326A9.937 9.937 0 0012.001 22c5.523 0 10-4.477 10-10s-4.477-9.998-10-9.998zm0 2c4.411 0 8 3.589 8 7.998s-3.589 8-8 8a7.95 7.95 0 01-4.144-1.203l-.296-.178-3.073.783.823-2.995-.192-.307A7.954 7.954 0 014 12.001c0-4.409 3.589-7.999 8-7.999zm4.2 11.248c-.233-.117-1.377-.681-1.591-.759-.213-.078-.369-.117-.524.117-.155.233-.602.759-.738.915-.136.155-.271.174-.504.058-.233-.117-.984-.362-1.873-1.153-.692-.616-1.159-1.378-1.296-1.611-.136-.233-.015-.359.102-.476.105-.105.233-.271.35-.407.117-.136.155-.233.233-.388.078-.155.039-.291-.02-.407-.058-.117-.524-1.267-.717-1.735-.188-.452-.379-.39-.524-.398-.136-.007-.291-.009-.446-.009s-.408.058-.621.291c-.213.233-.836.817-.836 1.993s.856 2.313.975 2.475c.117.155 1.682 2.571 4.08 3.605.57.246 1.015.393 1.362.504.572.182 1.092.156 1.503.094.458-.068 1.377-.562 1.57-1.107.194-.544.194-1.011.136-1.107-.058-.097-.213-.155-.446-.271z" />
            </svg>


            <span className="hidden sm:inline text-sm font-medium">Pesan Sekarang!</span>
          </a>


        </div>
      </motion.div>

    </ClickSpark>

  );
}

export default App