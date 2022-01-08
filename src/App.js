import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { NLPForm } from './components/NLPForm/NLPForm'

function App() {
  return (
    <div className="App">
      <Header />
      <NLPForm />
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
