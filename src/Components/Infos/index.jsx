 import data from '../../Data/userdata.json';
 
 function Infos() {

  const userInfos = data.user.infos;

  return (
    <div className="bg-sosh-subtle px-5 py-3 h-100 d-flex flex-column justify-content-between">
      <h2 className='text-center'>Informations personnelles</h2>
      <div className='row'>
        <span><strong>Nom : </strong>{userInfos.nom} </span>
        <span><strong>Prénom : </strong>{userInfos.prenom}</span>

        <div className='row'>
          <div className='row'>
            <span className=''><strong>Adresse :</strong></span>
            <div className='row ms-2'>
              <span className=''>{userInfos.adresse.rue}</span>
              <span className=''>{userInfos.adresse.codePostale}</span>
              <span className=''>{userInfos.adresse.ville}</span>
              <span className=''>{userInfos.adresse.pays}</span>
            </div>
            
          </div>
        </div>

        <span><strong>Inscrit depuis le</strong> {userInfos.dateInscription} </span>
        <div className="pt-3 d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-dark">
            Gérer mon compte
          </button>
        </div>
      </div>
    </div>
  );
}

export default Infos;
