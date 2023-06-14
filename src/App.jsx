import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Factures from './Components/Factures';
import Mobiles from './Components/Mobiles';
import Contrats from './Components/Contrats';
import Infos from './Components/Infos';
import Options from './Components/Options';

function App() {
  return (
    <div className="App">
      <div className='d-flex flex-column justify-content-between h-100'>
        <Header />
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 ps-md-0 pe-md-3 pb-md-3">
              <Mobiles />
            </div>
            <div className="col-md-6 ps-md-3 pe-md-0 pb-md-3 mt-3 mt-md-0">
              <Factures />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ps-md-0 pe-md-3 pt-md-3 mt-3 mt-md-0">
              <Infos/>
            </div>
            <div className="col-md-6 ps-md-3 pe-md-0 pt-md-3 mt-3 mt-md-0">
              <Contrats />
            </div>
          </div>
          <div className="row mt-4">
            <Options/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
