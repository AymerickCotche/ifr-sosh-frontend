import { useState, useEffect } from 'react';

import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Factures from './Components/Factures';
import Mobiles from './Components/Mobiles';
import Contrats from './Components/Contrats';
import Infos from './Components/Infos';
import Options from './Components/Options';
import Connexion from './Components/Connexion';
import Loader from './Components/Loader';

function App() {

  

  const [connected, setConnected] = useState(false);
  const [user, setUser] = useState('aucun');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let timerId;
    if (loading) {
      timerId = setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading])

  return (
    <div className="App">
      <div className='d-flex flex-column justify-content-between h-100'>
        <Header userData={userData} setConnected={setConnected} setUser={setUser} connected={connected} setUserData={setUserData} loading={loading}/>
        {!connected && 
          <Connexion setConnected={setConnected} setUser={setUser} user={user} setUserData={setUserData} setLoading={setLoading}/>
        }
        {connected && loading &&
          <Loader/>
        }

        {connected && !loading &&
           <div className="container my-5">
           <div className="row">
             <div className="col-md-6 ps-md-0 pe-md-3 pb-md-3 animate__animated animate__fadeInTopLeft">
               <Mobiles userData={userData}/>
             </div>
             <div className="col-md-6 ps-md-3 pe-md-0 pb-md-3 mt-3 mt-md-0 animate__animated animate__fadeInTopRight">
               <Factures userData={userData}/>
             </div>
           </div>
           <div className="row">
             <div className="col-md-6 ps-md-0 pe-md-3 pt-md-3 mt-3 mt-md-0 animate__animated animate__fadeInBottomLeft">
               <Infos userData={userData}/>
             </div>
             <div className="col-md-6 ps-md-3 pe-md-0 pt-md-3 mt-3 mt-md-0 animate__animated animate__fadeInBottomRight">
               <Contrats userData={userData}/>
             </div>
           </div>
           <div className="row mt-4">
             <Options userData={userData}/>
           </div>
         </div>
        }
        
       
        <Footer />
      </div>
    </div>
  );
}

export default App;
