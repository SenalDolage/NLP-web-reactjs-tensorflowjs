import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { NLPForm } from './components/NLPForm/NLPForm'

function App() {
  return (
    <div className="App">
      <Header />
      <NLPForm />
      <Footer />
    </div>
  );
}

export default App;
