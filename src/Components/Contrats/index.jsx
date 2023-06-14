import dataJson from '../../Data/userdata.json';

function Contrats() {

    const dataMobiles = dataJson.user.mobiles[0];
    const dataInfoUser = dataJson.user.infos;
    const engagement = dataMobiles.engagement;

    return (
        <div className="bg-sosh-subtle px-5 py-3">
            <h2 className="text-center pb-3">Contrats</h2>
            <div className="row pb-2">
                <p className="h5 text-sosh">
                    {dataMobiles.nomForfait}<br/>
                    {dataMobiles.prixDeBase}€
                </p>

                <span className="text-secondary">
                    {engagement ? "Vous avez un engagement" : "Vous n’avez pas d’engagement"}
                    <br/>
                    Utilisateur : M. {dataInfoUser.prenom} {dataInfoUser.nom}
                </span>
            </div>

            <div className="row">
                <div className="row">
                    <a className="text-body h5" href="#">
                        Modifier l'offre
                    </a>
                </div>

            </div>
            <div className="row">
                <a className="text-body h5" href="#">
                    Suspendre la ligne
                </a>
            </div>
            <div className="pt-3 d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-dark">
                    Gérer mes Contrats
                </button>
            </div>
        </div>
    )
}

export default Contrats;
