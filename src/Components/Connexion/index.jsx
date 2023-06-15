import { useState } from 'react';

import dataJson from '../../Data/userdata.json';

function Connexion({ setConnected, setUser, user, setUserData, setLoading }) {

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault()
    if (dataJson.user.find(userArray => userArray.infos.email === user)) {
      setUserData(dataJson.user.find(userArray => userArray.infos.email === user))
      setConnected(true);
      setLoading(true);
    } else {
      setMessage("Utilisateur Introuvable");
    }
  }

  const handleUserEmail = (e) => {
    e.preventDefault();
    setUser(e.target.value)
  }

  return (
    <div className="form-signin w-100 m-auto animate__animated animate__flip">
      <p class="animate__animated animate__hinge ">MDR</p>
      <form onSubmit={handleSubmit}>
        <h1 class=" mb-3 fw-normal text-center">Connecte toi à la Sosh!</h1>
        <p class="animate__animated animate__hinge">Lol</p>
        <div class="form-floating">
          <input type="email" class="form-control" name="email" id="email" onChange={handleUserEmail} required />
          <label for="email">Email</label>
        </div>

        <p>{message ? message : ''}</p>

        <div class="form-floating">
          <input type="password" class="form-control" id="password" name="password" required />
          <label for="password">Mot de passe</label>
        </div>

        <div class="form-check text-start my-3">
          <input class="form-check-input" type="checkbox" value="se-souvenir" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            Se souvenir
          </label>
        </div>
        
        <button class="btn btn-dark w-100 py-2" type="submit">Se connecter</button>
      </form>

    </div>


  );
}

export default Connexion;
